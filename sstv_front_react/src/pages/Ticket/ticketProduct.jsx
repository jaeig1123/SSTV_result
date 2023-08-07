/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from "react";
import {Ticket_wrap,Ticket_Area,MY_TK_a,MY_TK_P,My_item_TK_area_div,My_item_inner_div,My_Tk_div,MY_Tk_span,My_item_div,My_Tk_p,My_Tk_ul,My_Tk_li,My_Tk_strong,Ticket_list_mt_p,Logo,ToolbarWrapper, Ticket_desc_use, Ticket_list_mt_div, Ticket_list_date,Ticket_list_date_p,Ticket_list_date_ed,Ticket_list_end,Ticket_list_date_st,Ticket_list_start, Ticket_desc_use_btn, Ticket_icon1, Ticket_item_div1, Ticket_desc_strong,Ticket_icon, Ticket_desc_buy, Ticket_desc_buy_btn,Ticket_desc_price_p,Ticket_desc_price, Ticket_desc_li, Ticket_desc_mt_div, Desc_span, Ticket_desc_inner,Ticket_desc_inner1, Ticket_desc_div,Pop_ticket_div,Add_Ticket,Add_at,Add_btn_area,Btn_gift,Btn_cancel,Add_st_span,Add_st_dl,Add_st_dt,Add_st_dd,Add_dt,Add_strong,Add_dd,Add_txt_span,Add_coin_input,Add_count,Modal_div,Add_txt_span_tkName,Ticket_Li, Ticket_name,Ticket_date,Blue,Ticket_item_div,H2,H3,SPAN, TicketProduct_div,Title_storng,Ticket_list_noTicket,Toolbar_div,Toolbar_logo_div,Toolbar_nav,Toolbar_ul,Toolbar_li,Toolbar_a
} from "./style";
import Modal from "react-modal";
import axios from 'axios';
import useSWR from 'swr'
import fetcher from "../utils/fetcher";
import { key } from "fontawesome";

Modal.setAppElement('#root');

const TicketProduct = ({}) => {
   // -----------------------------------------------------------  유저 data
  const [userId, setUserId] = useState('');//유저아이디 가져오는 훅
  const {data} = useSWR('/user/login', fetcher);//로그인 세션 유지하는 훅
  const [dbCoin, setDBcoin]= useState();// 유저가 가지고 있는 코인 값 

  // ----------------------------------------------------------- 티켓
  const [isTicketUsed, setIsTicketUsed] = useState(false);// 티켓사용여부를 나타내는 변수
  const [ticketProductInfo, setTicketProductInfo] = useState([]);//티켓의 상품정보리스트를 가져오는 변수
  const [ticketInfo, setTicketInfo] = useState([]);//보유하고있는 티켓리스트을 나타내는 변수
  const [isOpen, setIsOpen] = useState(false);

  //모달 열림
  const [isModalOpen, setIsModalOpen] = useState(false); //모달 열림여부를 나타내는 변수
  const openModal = () => {
    // setIsOpen(true);
    alert("로그인하세요");
  };
  

  // 티켓사용 여부를 나타내는 버튼 이벤트
  function onClickTicketUse(ticketNo, ticketUse, ticketName,ticketEnd) {
    
    
    
    const hasActiveTicket = ticketInfo.some((ticket) => ticket.ticketUse === 1);

    if (!hasActiveTicket) {
      axios
        .post("/ticket/useTicket", {
          ticketNo: ticketNo,
          userId: userId,
          ticketName: ticketName
        })
        .then((response) => {
          const userId = data?.userId;
          setIsTicketUsed(true);
          alert("사용완료");
          window.location.reload();
          
          
        })
        .catch((error) => {
          console.log("Error 실패:", error);
        });
    } else {
      alert("이미 사용중인 티켓이 존재합니다.");
    }
  }

  

  //  구매할때  7,30,365일권 구별해서 구매하는 창으로 가는 페이지
  const buyButtonClick = (Product) => {
    setIsModalOpen(Product.ticketProdNo); // 모달을 열기 위해 상태를 true로 변경
  };



//  티켓 구매 PART
//  유저아이디() 티켓번호 티켓사용날짜 티켓만료날짜   티케사용여부 구매날짜 티켓상품번호 
  function addTicket (ticketProdNo, price){
    const ticketBuy  = {
       userId:userId      
      ,ticketProdNo:ticketProdNo
    }

  axios.post('/ticket/addTicket', ticketBuy )
  .then((response) =>{
    if(dbCoin >= price){
      const updateCoin =dbCoin - price; //코인 차감
      updateUserCoin(updateCoin);
      window.location.reload(); //  구매하는 순간 리로드 
      alert("이용권 구매완료");
      axios.post('/user/addCoinHistory',{userId, ticketProdNo, price});
    }else{

      alert("코인이 부족합니다 ");
    }
    
  })
  .catch((error)=> {
    console.error(error)
  });
}

//코인 업데이트 
function updateUserCoin(updateCoin){
  axios.post('/user/updateUser', {
    userId: userId,
    coin: updateCoin
  })
    .then((response) => {
      console.log("업데이트 성공:", response.data);
     
    })
    .catch((error) => {
      console.log("Error 실패:", error);
    });
}
// 10,000  세번째자리 콤마 기능
function NumberComma(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return number;
  }
  return number.toLocaleString();
 } 



  // 모달 닫기 
  const closeModal = () => {
    setIsModalOpen(null); // 모달을 닫기 위해 상태를 false로 변경   
    setIsOpen(false);
  };

  // 사용하기버튼
  const useButtonClick = (key) => {
     setIsTicketUsed(key.ticketNo, key.ticketUse);
  };    




  //user에 있는 데이터 가져오기
  useEffect(() => {
    if (userId !== '') {
      axios.get('/user/getUser/' + userId).then((response) => {
        setDBcoin(response.data.data?.coin);
        console.log("DB코인부분~!~!!!~~~~~" + dbCoin);
      });
    }
  }, [userId]);



// 이용권 상품리스트
useEffect(() => {
  axios.get('/product/getTicketProductAdminList')
    .then((response) => {
      console.log(response.data['data']);
      const ticketProductData = response.data['data'];
      setTicketProductInfo(ticketProductData);
    });
}, []);




// 로그인  + 이용권리스트 
useEffect(() => {
  axios.get('/user/login').then((response) => {
    
    const userId = response.data.data?.userId;
    setUserId(userId);
  
    if(userId !== undefined ){
      setUserId(response.data.data.userId);
      }
      if(userId === undefined){
      setUserId(response.data.data);
      }
    axios.get(`/ticket/getTicketList/${userId}`)
      .then((response) => {
        setTicketInfo(response.data['data']);

      });
      
  });
}, []);


  return (

    // 이용권 상품 -----------------------------------------------------------------------
    <TicketProduct_div>
      
      <My_item_TK_area_div>
        <My_item_inner_div>
          <My_Tk_div>
                <MY_Tk_span>img</MY_Tk_span>
                <My_item_div>
                {data ? (
                  ticketInfo.map((ticket) => {
                    if (ticket.ticketUse === 1) {
                      return (
                        <My_Tk_p key={ticket.ticketNo}>
                          이용권사용중   {ticket.ticketEnd.slice(0, 10)}까지입니다.
                        </My_Tk_p>
                      );
                    }
                    return null;
                  })
                ) : (
                  <My_Tk_p>로그인하세요.</My_Tk_p>
                )}

                {data && !ticketInfo.some((ticket) => ticket.ticketUse === 1) && (
                  <My_Tk_p>사용 중인 이용권이 없습니다.</My_Tk_p>
                )}
                </My_item_div>
          </My_Tk_div>
          <My_Tk_ul>
            <My_Tk_li>
              <MY_TK_P>
                <MY_TK_a>내 이용권</MY_TK_a>
              </MY_TK_P>
            </My_Tk_li>
            {data?
              <My_Tk_strong>{ticketInfo.length} 개</My_Tk_strong>
              :
              <My_Tk_strong></My_Tk_strong>
            }
            {/* <My_Tk_strong>{ticketInfo.length} 개</My_Tk_strong> */}
          </My_Tk_ul>
        </My_item_inner_div>
      </My_item_TK_area_div>
<Ticket_wrap>
     <Ticket_Area>

    
      {data?
        <H2><Blue>{userId}</Blue> 님의 이용권</H2> : <H2><Blue></Blue> 이용권</H2>
       }
  
      <H3>이용권 PLUS</H3>
      <SPAN>광고없이 즐기세요</SPAN>
      {ticketProductInfo.map((product, key) => (
        <Ticket_Li key={product.ticketProdNo}>
          <Ticket_item_div>
            <Ticket_name>
              {product.ticketProdNo === 1
                ? "7일 이용권"
                : product.ticketProdNo === 2
                ? "30일 이용권"
                : "할인 이용권"}
            </Ticket_name>
            <Ticket_date>NO 광고</Ticket_date>
            <Ticket_icon></Ticket_icon>
          </Ticket_item_div>
          <Ticket_desc_div>
            <Ticket_desc_inner>
              <Ticket_desc_li>
                <Desc_span></Desc_span>
                <Ticket_desc_mt_div>
                  <Ticket_desc_strong>
                    {product.ticketProdNo === 1
                      ? "7"
                      : product.ticketProdNo === 2
                      ? "30"
                      : "365"}
                  </Ticket_desc_strong>
                      일권
                </Ticket_desc_mt_div>

                {/* 이용권 가격 */}
                <Ticket_desc_price>
                  <Ticket_desc_price_p>{NumberComma(product.price)} 개</Ticket_desc_price_p>
                </Ticket_desc_price>

                {/* 이용권 구매하기 Button */}
                <Modal_div>
               
                  {!data?   
                    //회원로그인 
                    <Ticket_desc_buy>
                          <Ticket_desc_buy_btn
                              onClick={openModal}>
                              구매하기
                          </Ticket_desc_buy_btn>
                      </Ticket_desc_buy>
                    : 
                    //구현하는창 
                    <Ticket_desc_buy>
                          <Ticket_desc_buy_btn
                              key={key}
                              onClick={() => buyButtonClick(product)}>
                              구매하기
                          </Ticket_desc_buy_btn>
                      </Ticket_desc_buy>
                    }
                  
                   
                  
                
                 {/* 이용권 구매하기 MODAL */}

                {isModalOpen-1===key&& (
                  <div>
                    <Modal 
                        isOpen={isModalOpen === product.ticketProdNo} 
                        onRequestClose={closeModal} 
                        overlayClassName="Overlay"
                          className="modal"
                        key={key} 
                    >
                    <Pop_ticket_div>
                            <Add_Ticket>
                                <Add_at>
                                    <Add_dt>
                                        <Add_strong>
                                            {data?.userId}
                                        </Add_strong>
                                        님이 구매 
                                    </Add_dt>
                                </Add_at>
                                <Add_dd>
                                    <Add_txt_span ></Add_txt_span>
                                    <Add_txt_span_tkName>
                                    {key === 0
                                        ? "7일 이용권"
                                        : key === 1
                                        ? "30일 이용권"
                                        : "이용권"}
                                    </Add_txt_span_tkName>
                                </Add_dd>
                                <Add_st_dl>
                                    <Add_st_dt>보유 코인</Add_st_dt>
                                    <Add_st_dd>
                                        <Add_st_span>{NumberComma(dbCoin)}</Add_st_span>개
                                    </Add_st_dd>
                                </Add_st_dl>
                                
                                <Add_dd>
                                    <Add_txt_span>필요한 코인</Add_txt_span>
                                        <Add_coin_input  value={NumberComma(product.price)} readOnly></Add_coin_input>
                                    <Add_count>개</Add_count>
                                </Add_dd>
                               
                                <Add_btn_area>

                                    <Btn_gift onClick={() => {addTicket(product.ticketProdNo,product.price); closeModal(); }}>
                                      구매하기
                                    </Btn_gift>
                                    <Btn_cancel onClick={closeModal}>취소</Btn_cancel>
                                </Add_btn_area>
                            </Add_Ticket>
                    </Pop_ticket_div> 
                  </Modal>
                    <div onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 2 }} >
                    </div>
                  </div> )}
                  
                </Modal_div>
               
              </Ticket_desc_li>
            </Ticket_desc_inner>
          </Ticket_desc_div>
        </Ticket_Li>
      ))}

         <H3>이용권 보유목록</H3>
        <SPAN>이용권은 1개만 사용이 가능하고 <Title_storng>중복 사용</Title_storng>이 불가능합니다.<br/> 만료시 보유목록에서 사라집니다.</SPAN> 
       
        <Ticket_Li>
          <Ticket_item_div1>
            <Ticket_name>보유목록</Ticket_name>
            <Ticket_date>
            </Ticket_date>  
          </Ticket_item_div1>
          <Ticket_desc_div>
            <Ticket_desc_inner1>
              <Ticket_desc_li>
                <Ticket_list_date>
                  <Ticket_list_date_p>구매날짜</Ticket_list_date_p>
                </Ticket_list_date>
                <Ticket_list_mt_div>
                  <Ticket_list_mt_p> 상품명</Ticket_list_mt_p>
                </Ticket_list_mt_div>
                <Ticket_list_start>
                  <Ticket_list_date_st>시작일</Ticket_list_date_st>
                </Ticket_list_start>
                <Ticket_list_end>
                  <Ticket_list_date_ed>만료일</Ticket_list_date_ed>
                </Ticket_list_end>
                <Ticket_list_end>
                  <Ticket_list_date_ed>사용여부</Ticket_list_date_ed>
                </Ticket_list_end>
              </Ticket_desc_li>
            </Ticket_desc_inner1>
          </Ticket_desc_div>
        </Ticket_Li>

{/* 이용권 보유 목록 ------------------------------------------*/}

{!data?   
//로그인이 필요합니다. 
<Ticket_Li>
<Ticket_item_div1>
  <Ticket_name>이용권 보유목록</Ticket_name>
  <Ticket_date></Ticket_date>
  <Ticket_icon1></Ticket_icon1>
</Ticket_item_div1>
<Ticket_desc_div>
  <Ticket_desc_inner1>
    <Ticket_desc_li>
      <Ticket_list_noTicket>
         로그인이 필요합니다.
      </Ticket_list_noTicket>
    </Ticket_desc_li>
  </Ticket_desc_inner1>
</Ticket_desc_div>
</Ticket_Li>
: 
//구현하는창 
ticketInfo.length === 0 ? (
  <Ticket_Li>
    <Ticket_item_div1>
      <Ticket_name>이용권 보유목록</Ticket_name>
      <Ticket_date></Ticket_date>
      <Ticket_icon1></Ticket_icon1>
    </Ticket_item_div1>
    <Ticket_desc_div>
      <Ticket_desc_inner1>
        <Ticket_desc_li>
          <Ticket_list_noTicket>
            보유한 이용권이 없습니다.
          </Ticket_list_noTicket>
        </Ticket_desc_li>
      </Ticket_desc_inner1>
    </Ticket_desc_div>
  </Ticket_Li>
) : (            
      ticketInfo.map((ticket) => (
        <Ticket_Li key={ticket.ticketNo}>
            <Ticket_item_div1>
              <Ticket_name>이용권 보유목록</Ticket_name>
              <Ticket_date>
              </Ticket_date>
              <Ticket_icon1></Ticket_icon1>
            </Ticket_item_div1>
          <Ticket_desc_div>
              <Ticket_desc_inner1>
                    <Ticket_desc_li>
                        <Ticket_list_date>
                          <Ticket_list_date_p>{ticket.ticketDate.slice(0, 10)}</Ticket_list_date_p>
                        </Ticket_list_date>
                        <Ticket_list_mt_div>
                          <Ticket_list_mt_p>            
                            {ticket.ticketName === '1' ? "7일이용권" : ticket.ticketName === '2' ? "30일이용권" : ""}
                          </Ticket_list_mt_p>
                        </Ticket_list_mt_div>
                        
                        <Ticket_list_start>
                          <Ticket_list_date_st>{ticket.ticketStart ? ticket.ticketStart.slice(0, 10) : ''}</Ticket_list_date_st>
                        </Ticket_list_start>
                        <Ticket_list_end>
                          <Ticket_list_date_ed>{ticket.ticketEnd ? ticket.ticketEnd.slice(0, 10) : ''}</Ticket_list_date_ed>
                        </Ticket_list_end>
                        <Ticket_desc_use>
                            <Ticket_desc_use_btn
                                key={ticket.ticketNo}
                                style={{
                                  backgroundColor: ticket.ticketUse === 1 ? "rgb(56, 203, 21)" : "inherit",
                                  color: ticket.ticketUse === 0 ? "rgb(56, 203, 21)" : "#fff",
                                  border: ticket.ticketUse === 0 ? "1px solid rgb(56, 203, 21)" : "none",
                                  cursor: ticket.ticketUse === 1 ? "default" : "pointer"
                                }}
                                onClick={() => {
                                  if (ticket.ticketUse !== 1) {
                                    onClickTicketUse(ticket.ticketNo, ticket.ticketUse, ticket.ticketName, ticket.ticketEnd);
                                  }}} >
                              {ticket.ticketUse === 1 ? "사용중" : "사용하기"}
                              </Ticket_desc_use_btn>
                        </Ticket_desc_use>
                    </Ticket_desc_li>
              </Ticket_desc_inner1>
          </Ticket_desc_div>
        </Ticket_Li>
      ))
)}
 </Ticket_Area>
    </Ticket_wrap>  
  
  
    </TicketProduct_div>
    
  );
};

export default TicketProduct;