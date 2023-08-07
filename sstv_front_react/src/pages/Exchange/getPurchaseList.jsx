import React, {useState, useEffect} from "react";
import {MyAmount_ul ,MyAmount_li ,MyAmount_p , MyAmount_strong,Modal,Add_at,Purchase_notice_H3,Table_title1,H2,Blue,Purchase_banner_div,Purchase_banner_p,Btn_cancel,Tabke_span,Add_st_dd,Btn_gift,Add_btn_area,Add_st_span,Add_dt,Add_coin_input,Add_count,Add_st_dt,Add_st_dl,Add_strong,Add_txt_span,Add_dd,Add_Ticket,Add_txt_span_tkName,Pop_ticket_div,PurchaseList_div,Purchase_title,Purchase_notice_p,Button_div ,Table_td,Table_title,Purchase_table,Colgroup,Table_tr,Table_th,Purchase_button,Col,Table_thead} from "./style";
import axios from 'axios';
import useSWR from 'swr'
import fetcher from "../utils/fetcher";
import { Center } from "../LoadingPage/components";


function Exchange() {

    //  로그인 세션 유지  재가용성 높이기 위해서   fetcher 사용
    const {data} = useSWR('/user/login', fetcher);

    //  gettPurchaseList에서 데이터 가져옴
    const [purchaseInfo, setPurchaseInfo] = useState([]);

    // Login  세션에서 유지  userId 가져옴
    const [userId, setUserId] = useState('');

    //모달에서  입력한 코인값
    const [coinAmount, setCoinAmount] = useState(); 

    // 모달 상태를 관리하는 상태 변수
    const [isModalOpen, setIsModalOpen] = useState(false); 

    // getUser 에서 데이터 가져옴 Coin 업데이트 용으로 사용
    const [dbCoin, setDBcoin] = useState(); 

     //  아임포트에서 가저오는 고유한 키값
     const [ imp, setImp] = useState('');
    
     const [totalPaymentAmount, setTotalPaymentAmount] = useState(0);
    


     // 모달 열기 함수
     const openModal = () => {
      setIsModalOpen(true);
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const NoLogin = () =>{
      alert("로그인하세요.");
    }
    const renderPurchaseInfo = () => {
      if(!data){
        return <tr><td colSpan="4" 
        style={{ textAlign: 'center', fontSize: '16px', fontWeight: '800' ,paddingBottom: '30px',paddingTop: '30px'}} >
          로그인하세요</td></tr>;
      }else if (purchaseInfo.length === 0) {
        return <tr><td colSpan="4" 
        style={{ textAlign: 'center', fontSize: '16px', fontWeight: '800' ,paddingBottom: '30px',paddingTop: '30px'}} >
          결제 내역이 없습니다.</td></tr>;
      } 
  
      return purchaseInfo.map((purchase) => (
        <Table_tr key={purchase.paymentNo}>
          {/* Render purchase info */}
        </Table_tr>
      ));
    };

    


    
    // 클릭시 아임포트 결제시스템 연결 
function onClickPayment() {

      const { IMP } = window;

      if (IMP) {

        // 입력한 코인값을 받아오는 훅
        const paymentAmount = parseInt(coinAmount);

        //아임포트로 데이터를 보냄
        IMP.request_pay({
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: `mid_${new Date().getTime()}`,
          name:"코인",
          amount: paymentAmount,
          buyer_name: userId,
          buyer_email:"youngsk0331@naver.com"
        }, callback);

        //아임포트로 데이터를 받음
        function callback(rsp) {

          if (rsp.success) {

            alert('결제 성공');
            // alert(rsp.pay_method);
            const purchase = {
              userId: userId,
              impUid: rsp.imp_uid,
              merchantUid: rsp.merchant_uid,
              paymentMethod: rsp.pay_method === 'point' ? 0 : 1,
              paymentAmount: paymentAmount
            };
            addPurchase(purchase);

            axios.post('/user/addCoinHistory', {userId, ticketProdNo:0, prodName:3, price:paymentAmount});
              
          } else {
            alert(`결제 실패: ${rsp.error_msg}`);
          }
        }
    }
  }
  
  




  function addPurchase(purchase) {

  // 결제 데이터를 화면에 등록하기 위한 용도
    axios.post(`/purchase/addPurchase`, purchase)
    .then((response) => {
          console.log(response.data);
          const updateCoin = dbCoin + purchase.paymentAmount;
          updateUserCoin(updateCoin);
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          // 등록 중에 발생한 오류 처리 코드
          // ...
        });

    // axios.post('/user/addCoinHistory', {userId, prodName:3, price: purchase.paymentAmount})
    // .then((response) => {
    //   console.log('구매내역 추가..');
    // });
    }
  
    function updateUserCoin(updateCoin){
      axios.post('/user/updateUser', {
        userId: userId,
        coin: updateCoin
      })
        .then((response) => {
          console.log("업데이트 성공:", response.data);
          // 이 부분에 원하는 로직을 추가할 수 있습니다.
        })
        .catch((error) => {
          console.log("Error 실패:", error);
        });
    }
   
     function NumberComma(number) {
      if (typeof number !== 'number' || isNaN(number)) {
        return number;
      }
      return number.toLocaleString();
     }     
          

     useEffect(() => {
     
      let totalAmount = 0;
      purchaseInfo.forEach((purchase) => {
        totalAmount += purchase.paymentAmount;
      });
      setTotalPaymentAmount(totalAmount);
    }, [purchaseInfo]);




  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.iamport.kr/v1/iamport.js';
    script.async = true;
    script.crossOrigin = 'anonymous'; // crossorigin 속성 추가
    document.head.appendChild(script);

    script.addEventListener('load', handleScriptLoad);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

 

  //가맹점식별하기
  function handleScriptLoad() {
    const { IMP } = window;
    if (IMP) {
      IMP.init('imp62218762');
    } else {
      console.log('아임포트 라이브러리가 로드되지 않았습니다.');
    }
  }

      
  useEffect(() => {
    axios.get('/user/login').then((response) => {
      if(response.data.data?.userId !== undefined){
      setUserId(response.data.data.userId);
      }
      if(response.data.data?.userId === undefined){
      setUserId(response.data.data);
      }
    });
  }, []);


  useEffect(() => {
    if (userId !== '') {
      axios.get('/user/getUser/' + userId).then((response) => {
        setDBcoin(response.data.data?.coin);
        console.log(response.data.data?.coin)
      });
      axios.get('/purchase/getPurchaseList/'+userId).then((response) => {
        const purchaseData = response.data['data'];
        setPurchaseInfo(purchaseData);
        // console.log("결제리스트 업데이트되나?"+purchaseInfo);
        // console.log("결제List 부분의 데이터" + JSON.stringify(response.data));
      });
    }
  }, [userId]);


              
         
        
    
  return (
      
      <PurchaseList_div >
        <Purchase_banner_div>
        <Purchase_notice_H3>결제내역이란?</Purchase_notice_H3>
        <Purchase_notice_p>
        &middot;  참여자가 스트리머를 응원하고 후원할 수 있는 유료 충전시스템입니다.<br/>
        &middot; 코인으로 이용권을 구매 및 , 후원 시스템을 사용할 수 있습니다.<br/>
        &middot;  결제는 100원부터 가능합니다. 한번 결제할떄 최대 100만원까지만 가능합니다.
          </Purchase_notice_p>
        </Purchase_banner_div>
           {data? <H2><Blue>{userId}</Blue> 님의 결제내역</H2> :<H2><Blue></Blue> </H2>  }
          <Purchase_title>결제내역</Purchase_title>
          {/* 결제 목록 */}
          
          {/* <Table_title1>
               보유 하고있는 코인 <Tabke_span> </Tabke_span><br/>
               현재까지 충전한 금액 <Tabke_span></Tabke_span>
          </Table_title1> */}
          <MyAmount_ul >
              <MyAmount_li>
                <MyAmount_p>보유코인</MyAmount_p>
                {data? 
                <MyAmount_strong>{NumberComma(dbCoin)}</MyAmount_strong>
                :
                <MyAmount_strong></MyAmount_strong>
                }
               
              </MyAmount_li>
              <MyAmount_li>
                <MyAmount_p>현재충전금액</MyAmount_p>
                {data? 
                <MyAmount_strong>{NumberComma(totalPaymentAmount)}</MyAmount_strong>
                :
                <MyAmount_strong></MyAmount_strong>
                }
                
              </MyAmount_li>
          </MyAmount_ul>
          
          <Purchase_table>
              <Colgroup>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
              </Colgroup>    
                  <Table_thead>
                      <Table_tr>
                          <Table_th>결제날짜</Table_th>
                          <Table_th>회원아이디</Table_th>
                          <Table_th>충전금액</Table_th>
                          <Table_th>결제수단</Table_th>
                      </Table_tr>
                      
                      {purchaseInfo.map((purchase) =>(       
                                        
                      <Table_tr key={purchase.paymentNo}>
                          <Table_td>{purchase.paymentDate.slice(0, 10)}</Table_td>
                          <Table_td>{userId}</Table_td>
                          <Table_td>{NumberComma(purchase.paymentAmount)}</Table_td>
                          <Table_td>{purchase.paymentMethod === 1 ? '카드결제' : purchase.paymentMethod === 0 ? '카카오페이' : ''}</Table_td>
                      </Table_tr>
                      ))}
                      {renderPurchaseInfo()}
                  </Table_thead>
          </Purchase_table>
          
          {!data?
          <Button_div>
              <Purchase_button onClick={NoLogin}>결제하기</Purchase_button>
              
          </Button_div>
          :
          <Button_div>          
              <Purchase_button onClick={openModal}>결제하기</Purchase_button>
          </Button_div>
          
          }
         
                        
          

          {/* 모달 */}
              {isModalOpen && (
                  <div>
                  {/* 모달 내용 */}
                  <Modal isOpen={isModalOpen} onRequestClose={closeModal} >
   
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
                                  <Add_txt_span>구매할 코인</Add_txt_span>
                                  <Add_txt_span_tkName>
                                  <input
                                    type="number"
                                    value={coinAmount}
                                    onChange={(e) => {
                                      let amount = parseInt(e.target.value);
                                      if(amount > 1000000){
                                        amount = 1000000;
                                      }
                                     
                                      setCoinAmount(amount); 
                                    }}
                                    max={1000000}
                                    style={{ textAlign: "right",border: "none" , fontSize:"16px"}}
                                  />
                                  코인
                                  </Add_txt_span_tkName>
                                  
                              </Add_dd>
                              <Add_st_dl>
                                  <Add_st_dt>보유 코인</Add_st_dt>
                                  <Add_st_dd>
                                      <Add_st_span>{NumberComma(dbCoin)}</Add_st_span>개
                                  </Add_st_dd>
                              </Add_st_dl>
                              <Add_dd>
                                  <Add_txt_span>충전 되는 코인</Add_txt_span>
                                      <Add_coin_input></Add_coin_input>
                                  <Add_count>{NumberComma(coinAmount)}코인</Add_count>
                              </Add_dd>
                              <Add_btn_area>
                                  <Btn_gift onClick={() => { onClickPayment(); closeModal(); }}>구매하기</Btn_gift>
                                  <Btn_cancel onClick={closeModal}>취소</Btn_cancel>
                              </Add_btn_area>
                          </Add_Ticket>
                  </Pop_ticket_div> 

                </Modal>
                  {/* 모달 배경 */}
                  <div onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 2 }} >
                  </div>
              </div>)}
             
          
      </PurchaseList_div>
  );
};


export default Exchange;
