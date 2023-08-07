import React, {useState, useRef, useEffect, useCallback } from "react";
import {Modal,Add_at,Footer,F_List_ul,F_List_a,F_List_li,Footer_inner_div,Exchange_button1,Exchange_button2,Btn_cancel,Tabke_span,Add_st_dd,Btn_gift,Add_btn_area,Add_st_span,Add_dt,Add_coin_input,Add_count,Add_st_dt,Add_st_dl,Add_strong,Add_txt_span,Add_dd,Add_Ticket,Add_txt_span_tkName,Pop_ticket_div,PurchaseList_div,Purchase_title,Purchase_notice_p,Button_div ,Table_td,Table_title,Purchase_table,Colgroup,Table_tr,Table_th,Purchase_button,Col,Table_thead} from "./style";
import axios from 'axios';
import { exchange } from "fontawesome";
import Exchange from ".";
import useSWR from 'swr'
import fetcher from "../utils/fetcher";


const GetExchangeRequestList = () =>{
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
          const userId = response.data.data.userId;
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

    
    const handleExchangeAccept = () => {
      axios.post(`/exchange/exchangeAcc`)
        .then((response) => {
          console.log("환전을 승인했습니다:", response.data);
          // 환전 리스트를 새로고침합니다.
          axios.get(`/exchange/getExchangeRequestList/${userId}`)
            .then((response) => {
              setExchangeInfo(response.data.data);
              console.log("업데이트된 환전 리스트:", response.data);
            })
            .catch((error) => {
              console.log("업데이트된 환전 리스트를 가져오는 중 오류 발생:", error);
            });
        })
        .catch((error) => {
          console.log("환전을 승인하는 중 오류 발생:", error);
        });
    };
    
    const handleExchangeReject = () => {
      axios.post(`/exchange/exchangeAcc`, { exchangeAcc: 2 })
        .then((response) => {
          console.log("환전을 거절했습니다:", response.data);
          // 환전 리스트를 새로고침합니다.
          axios.get(`/exchange/getExchangeRequestList/${userId}`)
            .then((response) => {
              setExchangeInfo(response.data.data);
              console.log("업데이트된 환전 리스트:", response.data);
            })
            .catch((error) => {
              console.log("업데이트된 환전 리스트를 가져오는 중 오류 발생:", error);
            });
        })
        .catch((error) => {
          console.log("환전을 거절하는 중 오류 발생:", error);
        });
    };
    
    return(
        <PurchaseList_div>
            <Purchase_title>환전신청내역(관리자)</Purchase_title>
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
                            {exchange.exchangeAcc === 0 ? (
                            <>
                             <Exchange_button1 onClick={handleExchangeAccept}>
                                {exchange.exchangeAcc === 0 ? '수락하기' : exchange.exchangeAcc === 1 ? '승인' :  ''}
                              </Exchange_button1>
                             <Exchange_button2 onClick={handleExchangeReject}>
                                {exchange.exchangeAcc === 0 ? '거절하기' : exchange.exchangeAcc === 2 ? '거절완료' :  ''}
                              </Exchange_button2>
                              </>
                            ) : exchange.exchangeAcc === 1 ? (
                              <span>승인</span>
                            ) : exchange.exchangeAcc === 2 ? (
                              <span>거절완료</span>
                            ) : null}
                            </Table_td>{/*  */}
                        </Table_tr>
                        ))}
                    </Table_thead>

            </Purchase_table>
            
            
            <Purchase_notice_p>
                관리자 페이지 입니다. 환전신청을 수락 및 거절을 할수있는 페이지입니다.
            </Purchase_notice_p>
            <Footer>
                    <Footer_inner_div>
                          <F_List_ul>
                            <F_List_li>
                              <F_List_a>회사소개</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>서비스 소개</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>광고안내</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>인재채용</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>이용약관</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>개인정보처리방침</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>청소년보호정책</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>운영정책</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>권리침해신고센터</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>오픈스튜디오</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>Developers</F_List_a>
                            </F_List_li>
                            <F_List_li>
                              <F_List_a>주요서비스</F_List_a>
                            </F_List_li>
                          </F_List_ul>
                    </Footer_inner_div>      
            </Footer>
        </PurchaseList_div>
    );
};


export default GetExchangeRequestList;