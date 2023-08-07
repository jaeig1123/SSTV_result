import React, {useState, useRef, useEffect, useCallback } from "react";
import {Modal,Add_at,Exchange_button,Btn_cancel,Table_title1,Tabke_span,Add_st_dd,Btn_gift,Add_btn_area,Add_st_span,Add_dt,Add_coin_input,Add_count,Add_st_dt,Add_st_dl,Add_strong,Add_txt_span,Add_dd,Add_Ticket,Add_txt_span_tkName,Pop_ticket_div,PurchaseList_div,Purchase_title,Purchase_notice_p,Button_div ,Table_td,Table_title,Purchase_table,Colgroup,Table_tr,Table_th,Purchase_button,Col,Table_thead} from "./style";
import axios from 'axios';
//import { exchange } from "fontawesome";
import useSWR from 'swr'
import fetcher from "../utils/fetcher";            


const GetExchangeList = () =>{
    const {data} = useSWR('/user/login', fetcher);
    const [ExchangeInfo, setExchangeInfo] = useState([]);
    const [userId, setUserId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태를 관리하는 상태 변수
    const [coinAmount, setCoinAmount] = useState();
    const [DBCoin, setDBcoin] = useState(); 

    useEffect(() => {
        if (userId !== '') {
          axios.get('/user/getUser/' + userId).then((response) => {
            setDBcoin(response.data.data.coin);
            console.log("DB코인부분~!~!!!" + DBCoin);
          });
        }
      }, [userId]);
      
      useEffect(() => {
        axios.get('/user/login').then((response) => {
          const userId = response.data?.data.userId;
          setUserId(userId);
          console.log("나나나" + userId);
      
          axios.get(`/exchange/getExchangeList/${userId}`)
          .then((response) => {
            setExchangeInfo(response.data['data']);
            console.log(ExchangeInfo);
            console.log("환전List 부분의 데이터"+JSON.stringify(response.data));
          });
        }); 
      }, []);
      
     // 모달 열기 함수
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const exchangeAmount =ExchangeInfo[ExchangeInfo.le]
    const  requestData = {
      exchange_bank:"",
      exchange_account:"",
      amount:exchangeAmount,
      buyer_name: data?.userId
    };
  
    function onClickExchange() {
        // 환전하기 이벤트
        axios.post(`/exchange/addExchange/${userId}`,requestData)
          .then((response) => {
            //const responseData = JSON.parse(response.config.data);
            const exchangeAmount = ExchangeInfo[ExchangeInfo.length - 1].exchangeAmount;
            const updateCoin= DBCoin - exchangeAmount;
            // const f = responseData.exchangeAmount;
            // console.log("addExchange 데이터부분"+JSON.stringify(f));
            console.log("addExchange 나와라" + userId);
            console.log("updateCoin 나와라" + updateCoin);
            
            const password = data?.passwd === 0 && data?.passwd !== '' ? data?.passwd : null;
            const profilePhoto = data?.profilePhoto !== '' ? data?.profilePhoto : null;
            const userNickname = data?.userNickname !== '' ? data?.userNickname : null;
            const email = data?.email !== '' ? data.email : null;
            
            axios.post('/user/updateUser',{ 
              userId: userId,
              Coin: updateCoin,
              password: password,
              profilePhoto: profilePhoto,
              userNickname: userNickname,
              eMail: email
            })
            .then((response) => {
              console.log("업데이트 성공:", response.data);
              
            })
            .catch((error) => {
              console.log("Error 실패:", error);
            }); 
            // Call Iamport's payment request method with the returned data
            axios.post('/exchange/saveExchangeHistory', {
              ExchangeAmount: DBCoin,
    
              userId: userId
            })
            .then((response) => {
              console.log("환전 내역 저장되어 있는:", response.data);
              // 이 부분에 원하는 로직을 추가할 수 있습니다.
            })
            .catch((error) => {
              console.log("Error saving 환전 history:", error);
            });
           
           
          })
          
      
    }
    
    
    return(
        <PurchaseList_div>
            <Purchase_title>환전신청내역</Purchase_title>
            <Table_title1>
                보유 하고있는 코인 <Tabke_span>{DBCoin}</Tabke_span>
            </Table_title1>
            <Purchase_table>

                <Colgroup>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Colgroup>    
                    <Table_thead>
                        <Table_tr>
                            <Table_th>환전신청날짜</Table_th>
                            <Table_th>회원아이디</Table_th>
                            <Table_th>환전금액</Table_th>
                            <Table_th>환전계좌</Table_th>
                            <Table_th>승인여부</Table_th>
                        </Table_tr>
                        {ExchangeInfo.map((exchange) =>(                       
                        <Table_tr key={exchange.userId}>
                            <Table_td>{exchange.exchangeDate}</Table_td>{/*환전신청날짜 */}
                            <Table_td>{data?.userId}</Table_td>{/* 환전할 아이디 */}
                            <Table_td>{exchange.exchangeAmount}</Table_td>{/*환전금액  */}
                            <Table_td>{exchange.exchangeAccount}</Table_td>{/* 환전계좌 */}
                            <Table_td>
                                <Exchange_button>{exchange.exchangeAcc === 0 ? '심사중' : exchange.exchangeAcc === 1 ? '승인' : exchange.exchangeAcc === 2 ? '거절' : ''}</Exchange_button>
                            </Table_td>{/* 환전승인여부 */}
                        </Table_tr>
                        ))}
                    </Table_thead>

            </Purchase_table>
            
            <Button_div>
                <Purchase_button onClick={openModal}>환전신청</Purchase_button>
            </Button_div>
            {/* 모달 */}
                {isModalOpen && (
                    <div>
                    {/* 모달 내용 */}
                    <Modal isOpen={isModalOpen} onRequestClose={closeModal} >
            {ExchangeInfo.map((exchange, index) =>( 
                    <Pop_ticket_div key={index}>
                            <Add_Ticket>
                                <Add_at>
                                    <Add_dt>
                                        <Add_strong>
                                            {data?.userId}
                                        </Add_strong>
                                        님이 환전
                                    </Add_dt>
                                </Add_at>
                                <Add_dd>
                                    <Add_txt_span>환전할 계좌</Add_txt_span>
                                    <Add_txt_span_tkName>
                                    <input
                                      type="text"
                                      value={exchange.exchangeAccount}
                                      onChange={(e) => {         
                                        const amount = parseInt(e.target.value);
                                        const updatedExchangeInfo = [...ExchangeInfo];
                                        updatedExchangeInfo[index].exchangeAccout = amount;
                                        setExchangeInfo(updatedExchangeInfo);
                                        setCoinAmount(amount);
                                      }}
                                    />
                                    </Add_txt_span_tkName>
                                    
                                </Add_dd>
                                <Add_dd>
                                    <Add_txt_span>환전할 코인</Add_txt_span>
                                    <Add_txt_span_tkName>
                                    <input
                                      type="number"
                                      value={exchange.exchangeAmount}
                                      onChange={(e) => {
                                        const amount = parseInt(e.target.value);
                                        const updatedExchangeInfo = [...ExchangeInfo];
                                        updatedExchangeInfo[index].exchangeAmount = amount;
                                        setExchangeInfo(updatedExchangeInfo);
                                        setCoinAmount(amount); 
                                      }}
                                    />
                                    
                                    </Add_txt_span_tkName>
                                    
                                </Add_dd>
                                <Add_st_dl>
                                    <Add_st_dt>보유 코인</Add_st_dt>
                                    <Add_st_dd>
                                        <Add_st_span>{DBCoin}</Add_st_span>개
                                    </Add_st_dd>
                                </Add_st_dl>
                                <Add_dd>
                                    <Add_txt_span>환전할 코인</Add_txt_span>
                                        <Add_coin_input></Add_coin_input>
                                    <Add_count>{exchange.exchangeAmount}코인</Add_count>
                                </Add_dd>
                                <Add_btn_area>
                                    <Btn_gift onClick={() => { onClickExchange(); closeModal(); }}>환전신청(찐)</Btn_gift>
                                    <Btn_cancel onClick={closeModal}>취소</Btn_cancel>
                                </Add_btn_area>
                            </Add_Ticket>
                    </Pop_ticket_div> 
                    ))}
                  </Modal>
                    {/* 모달 배경 */}
                    <div onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 2 }} >
                    </div>
                </div>)}
            <br/><br/>
            <Purchase_notice_p>
                참여자가 스트리머를 응원하고 후원할 수 있는 <br/>
                유료 충전시스템입니다.<br/>
                코인으로 이용권을 구매 및 , 후원 시스템을 사용할 수 있습니다.<br/>
                후원받은 스트리머는 코인을 환전하여 실제<br/>
                수익으로 돌려 받게 됩니다.
            </Purchase_notice_p>
        </PurchaseList_div>
    );
};


export default GetExchangeList;