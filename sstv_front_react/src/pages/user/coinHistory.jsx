import { useNavigate } from 'react-router-dom/dist';
import {User_update_Main, User_update_title, Profile_box2, Profile_add_button_box , Profile_box4, Email_update_input2, PasswordCheck_line, Password_secret, User_update_body, User_update_body2, User_update_header, User_update_header_2, User_update_logo, User_update_subTitle,User_update_titleLine, User_update_titleLine_2, User_update_body3, UserinfoTitle, UserNickname_title, Nickname_update, Nickname_update_title, Nickname_update_update, Nickname_update_title2, Nickname_update_update2, Nickname_update_input, NicknameDuplicate_button, NicknameChange_button, Nickname_update_sub, Update_form, Password_title, Password_box, Update_user_title, Update_user_box, Update_submit_button, Password_box_title, Password_box_minibox, Password_box_title2, Password_input, PasswordCheck_input, Password_input2, Password_input_mini, Password_input_line, Userinfo_tab, Info_text, User_type, Password_space, Password_box_minibox2, PasswordCheck_input2, PasswordCheck_input_input, Phone_update, Phone_update2, Phone_update_input, Phone_update_input2, Phone_update_input_text, Email_update, Email_update2, Email_update_input, Email_update_inputText1, Email_golbang, Email_update_inputText2, Email_update_selectEmail, UpdateUser_submit_button, Profile_box, Profile_box3, Profile_photo, Profile_text, Profile_photo2, Profile_photo3, Profile_add_button, Profile_add_button1, Profile_add_button2, Profile_add_button3, Profile_photo_input_button, UserInfo_tab2, UserInfo_tab3, List_title, List_title_text, Blacklist_body, Blacklist_body2, Blacklist_box, Blacklist_box2, Blacklist_box_head, Blacklist_box_Main, Blacklist_box_body, Blacklist_box_Main1, Blacklist_box_Main2, Blacklist_box_Main3, Blacklist_box_head1, Blacklist_box_head2} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { List_Main, List_body1, List_body10_2, List_body11, List_body12, List_body12_main, List_body13, List_body13_3, List_body13_artivle, List_body14, List_body15, List_body2, List_body3, List_body4_1, List_body4_2, List_body5, List_body5_2, List_body6, List_body7, List_body8, List_body9, List_body_10, List_body_11, List_body_12, List_body_13, List_body_14, List_body_15, List_body_16, List_body_16_bottom, List_body_16_bottom_1, List_body_16_bottom_2, List_body_16_bottom_3, List_body_16_bottom_4, List_body_16_bottom_5, List_body_16_bottom_6, List_body_16_bottom_6_cancle, List_body_16_bottom_6_nickName, List_body_16_bottom_6_profile, List_body_16_bottom_6_profile1, List_body_16_bottom_6_profile2, List_body_16_bottom_6_profile3, List_body_16_bottom_6_profile4, List_body_16_bottom_6_profile4_1, List_body_16_bottom_6_profile4_2, List_body_16_bottom_6_profile_image, List_body_16_bottom_6_title, List_body_16_bottom_6_title1, List_body_16_bottom_6_title2, List_body_16_bottom_6_title2_1, List_body_16_bottom_6_title2_2, List_body_16_bottom_6_title3, List_body_16_bottom_6_title4, List_body_16_bottom_6_title4_1, List_body_16_bottom_6_title4_2, List_body_16_bottom_6_title4_3, List_body_16_bottom_6_title5, List_body_16_bottom_6_title6, List_body_16_bottom_6_title7, List_body_16_top, List_body_16_top_1, List_body_16_top_2, List_body_16_top_exit, List_body_16_top_exit2, List_body_16_top_exit_X, List_body_16_top_exit_X1, List_body_16_top_exit_X2, List_body_16_top_exit_X3, List_body_16_top_exit_button, List_body_16_top_title, List_body_16_top_title2, List_body_6, List_body_7, List_body_8, List_body_9, List_body_hidden2, List_follow_button, List_follow_button2, List_remove, List_remove2, List_userName } from "./listStyle";
import {History_title_H2,History_No_div,History_No_p,Modal,Add_at,Exchange_button,Btn_cancel,Table_title1,Tabke_span,Add_st_dd,Btn_gift,Add_btn_area,Add_st_span,Add_dt,Add_coin_input,Add_count,Add_st_dt,Add_st_dl,Add_strong,Add_txt_span,Add_dd,Add_Ticket,Add_txt_span_tkName,Pop_ticket_div,PurchaseList_div,Purchase_title,Purchase_notice_p,Button_div ,Table_td,Table_title,Purchase_table,Colgroup,Table_tr,Table_th,Purchase_button,Col,Table_thead,History_div,History_table,History_thead,History_tr,History_th,History_td,History_body} from "./coinstyle.jsx";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useCallback } from 'react';
import Header from './header';
import BlackList from './blackListView';
import RmUser from './removeUser';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';


const CoinHistory = () => {
  const [selectedTab, setSelectedTab] = useState('coinHistory'); 
  const navigate = useNavigate();
  // const [userId, setUserId] = useState('');
  const [CHlist, setCHlist] = useState([]);
  const [dbCoin, setDbCoin] = useState('');
  const [pageState, setPageState] = useState('');
  const [isOpenBlackModal, setIsOpenBlackModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {data} = useSWR('/user/login', fetcher);
  const userId = data?.userId;

  //로그인 세션의 아이디 가져오기
  // useEffect(() => {
  //   axios.get('/user/login').then((response) => {
  //     if(response.data.data?.userId !== userId){
  //     setUserId(response.data.data?.userId);
  //     }
  //     if(response.data.data?.userId === userId){
  //     setUserId(response.data?.data);
  //     }
  //     setPageState('');
  //   });
  // }, []);

  useEffect(() => {
    axios.get('/user/getCoinHistory/'+userId).then((response) => {
      setCHlist(response.data?.data);
    })
    axios.get('/user/getUser/'+userId).then((response)=> {
      setDbCoin(response.data.data?.coin)
    })
  }, [userId]);

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  const openBlackModal = () => {
    setIsOpenBlackModal(true);
  }

  const closeBlackModal = () => {
    setIsOpenBlackModal(false);
  }


  //내 정보 관리 탭
  const onUserInfo = () => {
    setSelectedTab('userInfo');
    navigate('/userInfo/'+userId);
  }

  //블랙리스트 관리 탭
  const onBlacklist = () => {
    setSelectedTab('blackList');
    navigate('/blacklist/'+userId);
  }

  //팔로우 관리 탭
  const onFollowlist = () => {
    setSelectedTab('followList');
    navigate('/followlist/'+userId);
  }

  //회원탈퇴 탭
  const onRmUser = () => {
    setSelectedTab('removeUser');
    navigate('/remove/'+userId);
  }

  //회원탈퇴 탭
  const onCHtab = () => {
    setSelectedTab('coinHistory');
    navigate('/coinHistory/'+userId);
  }

  //광고목록 탭
  // 추가
  const onAdInfo = () => {
    setSelectedTab('adInfo');
    navigate('/adInfo/'+userId);
  }
  // 추가
  

  return(
    <div>
    <User_update_Main>
    {/* header */}
    <User_update_header>
        <User_update_header_2>
          <div>
        <Header/>
        </div>
          <User_update_title>
      <User_update_subTitle>
          개인정보
      </User_update_subTitle>
      </User_update_title>
      <User_update_titleLine>
        <User_update_titleLine_2/>
        </User_update_titleLine>
        </User_update_header_2>
        </User_update_header>
        {/* body */}
      
        <User_update_body>
          <User_update_body2>
            <User_update_body3>
            <List_title style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faSackDollar} size="2xl" style={{ marginRight: '8px' }}/><p style={{ fontSize: '18px', color:'blue'}}>코인 사용내역 </p>
            </List_title>
            <Userinfo_tab>
            <UserInfo_tab2 onClick={onUserInfo} style={{ backgroundColor: selectedTab === 'userInfo' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>내 정보 관리</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 onClick={onFollowlist} style={{ backgroundColor: selectedTab === 'followList' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>팔로우 관리</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 onClick={onBlacklist} style={{ backgroundColor: selectedTab === 'blackList' ? '#fff' : '#ccc', cursor: 'pointer' }}>
            {/* {isOpenBlackModal && <BlackList onClose={isOpenBlackModal} setOnClose={setIsOpenBlackModal}/> } */}
              <UserInfo_tab3>블랙리스트 관리</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 onClick={onCHtab} style={{ backgroundColor: selectedTab === 'coinHistory' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>코인 사용내역</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 onClick={openModal} style={{ backgroundColor: selectedTab === 'removeUser' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              {isModalOpen && <RmUser onClose={isModalOpen} setOnClose={setIsModalOpen}/> }
              <UserInfo_tab3>회원 탈퇴</UserInfo_tab3>
            </UserInfo_tab2>

            {/* 추가 */}
            <UserInfo_tab2 onClick={onAdInfo} style={{ backgroundColor: selectedTab === 'adInfo' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>내 광고관리</UserInfo_tab3>
            </UserInfo_tab2>
            {/* 추가 */}
            
            </Userinfo_tab>
            <Info_text>회원의 사용 및 구매등으로 코인의 변동 내역을 조회 할 수 있습니다.</Info_text>
            <History_title_H2>CoinHistory</History_title_H2>
            <History_div>
              
            <div
                style={{
                  maxHeight: "400px",
                  overflowY: "auto",
                }}
              >
                <History_table style={{ minWidth: "100%" }}>
                  <History_thead>
                  <History_tr>
                    <History_th style={{ width: "10%" }}>No</History_th>
                    <History_th style={{ width: "20%" }}>지출내용</History_th>
                    <History_th style={{ width: "30%" }}>금액</History_th>
                    <History_th style={{ width: "40%" }}>변동날짜</History_th>
                  </History_tr>
                  </History_thead>
                  <History_body>
                    {CHlist.map((coinHistory, index) => (
                      <History_tr key={index}>
                        <History_td>{index + 1}</History_td>
                        <History_td>
                          {coinHistory.ticketProdNo === 0
                            ? coinHistory.prodName === 0
                              ? "후원"
                              : coinHistory.prodName === 1
                              ? "광고 신청"
                              : coinHistory.prodName === 2
                              ? "광고 신청 거절"
                              : "코인 충전"
                            : coinHistory.ticketProdNo === 1
                            ? "7일권"
                            : coinHistory.ticketProdNo === 2
                            ? "30일권"
                            : "365일권"}
                        </History_td>
                        <History_td>{coinHistory.price}</History_td>
                        <History_td>
                          {coinHistory.payDate !== null ? new Date(coinHistory.payDate).toLocaleString() : ""}
                        </History_td>
                      </History_tr>
                    ))}
                  </History_body>
                </History_table>
              </div>


            </History_div>
           
            </User_update_body3>
          </User_update_body2>
        </User_update_body>
        </User_update_Main>
       
        {/* <PurchaseList_div>
          <Purchase_title>코인사용내역</Purchase_title>
            <Table_title1 >
                보유중인 코인 : <Tabke_span>{dbCoin}</Tabke_span>
            </Table_title1>
            <Purchase_table>

                <Colgroup >
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Colgroup >    
                    <Table_thead>
                        <Table_tr>
                            <Table_th>No</Table_th>
                            <Table_th>지출 내용</Table_th>
                            <Table_th>금액</Table_th>
                            <Table_th>변동 날짜</Table_th>
                        </Table_tr>
                         {CHlist.map((coinHistory, index) =>(                       
                            <Table_tr key={index}>
                            <Table_td>{index+1}</Table_td>
                            <Table_td>{coinHistory.ticketProdNo === 0 ? (
                             coinHistory.prodName === 0 ? '후원' :
                             coinHistory.prodName === 1 ? '광고 신청' :
                             coinHistory.prodName === 2 ? '광고 신청 거절' :
                            '코인 충전'
                             ) : (
                             coinHistory.ticketProdNo === 1 ? '7일권' :
                             coinHistory.ticketProdNo === 2 ? '30일권' :
                             '365일권'
                             )}</Table_td>
                            <Table_td>{coinHistory.price}</Table_td>
                            <Table_td>{coinHistory.payDate !== null ?
                            new Date(coinHistory.payDate).toLocaleString() : ''}</Table_td>
                         </Table_tr>
                         ))}
                    </Table_thead>

            </Purchase_table>

        </PurchaseList_div> */}
        
   
      </div>
  )
} 
export default CoinHistory;