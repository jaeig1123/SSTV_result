import { useNavigate } from 'react-router-dom/dist';
import {User_update_Main, User_update_title, Profile_box2, Profile_add_button_box , Profile_box4, Email_update_input2, PasswordCheck_line, Password_secret, User_update_body, User_update_body2, User_update_header, User_update_header_2, User_update_logo, User_update_subTitle,User_update_titleLine, User_update_titleLine_2, User_update_body3, UserinfoTitle, UserNickname_title, Nickname_update, Nickname_update_title, Nickname_update_update, Nickname_update_title2, Nickname_update_update2, Nickname_update_input, NicknameDuplicate_button, NicknameChange_button, Nickname_update_sub, Update_form, Password_title, Password_box, Update_user_title, Update_user_box, Update_submit_button, Password_box_title, Password_box_minibox, Password_box_title2, Password_input, PasswordCheck_input, Password_input2, Password_input_mini, Password_input_line, Userinfo_tab, Info_text, User_type, Password_space, Password_box_minibox2, PasswordCheck_input2, PasswordCheck_input_input, Phone_update, Phone_update2, Phone_update_input, Phone_update_input2, Phone_update_input_text, Email_update, Email_update2, Email_update_input, Email_update_inputText1, Email_golbang, Email_update_inputText2, Email_update_selectEmail, UpdateUser_submit_button, Profile_box, Profile_box3, Profile_photo, Profile_text, Profile_photo2, Profile_photo3, Profile_add_button, Profile_add_button1, Profile_add_button2, Profile_add_button3, Profile_photo_input_button, UserInfo_tab2, UserInfo_tab3, List_title, List_title_text, Blacklist_body, Blacklist_body2, Blacklist_box, Blacklist_box2, Blacklist_box_head, Blacklist_box_Main, Blacklist_box_body, Blacklist_box_Main1, Blacklist_box_Main2, Blacklist_box_Main3, Blacklist_box_head1, Blacklist_box_head2} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { List_Main, List_body1, List_body10_2, List_body11, List_body12, List_body12_main, List_body13, List_body13_3, List_body13_artivle, List_body14, List_body15, List_body2, List_body3, List_body4_1, List_body4_2, List_body5, List_body5_2, List_body6, List_body7, List_body8, List_body9, List_body_10, List_body_11, List_body_12, List_body_13, List_body_14, List_body_15, List_body_16, List_body_16_bottom, List_body_16_bottom_1, List_body_16_bottom_2, List_body_16_bottom_3, List_body_16_bottom_4, List_body_16_bottom_5, List_body_16_bottom_6, List_body_16_bottom_6_cancle, List_body_16_bottom_6_nickName, List_body_16_bottom_6_profile, List_body_16_bottom_6_profile1, List_body_16_bottom_6_profile2, List_body_16_bottom_6_profile3, List_body_16_bottom_6_profile4, List_body_16_bottom_6_profile4_1, List_body_16_bottom_6_profile4_2, List_body_16_bottom_6_profile_image, List_body_16_bottom_6_title, List_body_16_bottom_6_title1, List_body_16_bottom_6_title2, List_body_16_bottom_6_title2_1, List_body_16_bottom_6_title2_2, List_body_16_bottom_6_title3, List_body_16_bottom_6_title4, List_body_16_bottom_6_title4_1, List_body_16_bottom_6_title4_2, List_body_16_bottom_6_title4_3, List_body_16_bottom_6_title5, List_body_16_bottom_6_title6, List_body_16_bottom_6_title7, List_body_16_top, List_body_16_top_1, List_body_16_top_2, List_body_16_top_exit, List_body_16_top_exit2, List_body_16_top_exit_X, List_body_16_top_exit_X1, List_body_16_top_exit_X2, List_body_16_top_exit_X3, List_body_16_top_exit_button, List_body_16_top_title, List_body_16_top_title2, List_body_6, List_body_7, List_body_8, List_body_9, List_body_hidden2, List_follow_button, List_follow_button2, List_remove, List_remove2, List_userName } from "./listStyle";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useCallback } from 'react';
import Header from './header';
import BlackList from './blackListView';
import RmUser from './removeUser';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';


const FollowListView = () => {
  const [selectedTab, setSelectedTab] = useState('followList'); 
  const navigate = useNavigate();
  // const [userId, setUserId] = useState('');
  const [followList, setFollowList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [pageState, setPageState] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {data} = useSWR('/user/login', fetcher);
  const userId = data?.userId;

  const onChangeKeyword = useCallback((e) => {
    setKeyword(e.target.value);
  });

  //로그인 세션의 아이디 가져오기
  // useEffect(() => {
  //   axios.get('/user/login').then((response) => {
  //     if(response.data?.data?.userId !== userId){
  //     setUserId(response.data.data?.userId);
  //     }
  //     if(response.data?.data.userId === userId){
  //     setUserId(response.data?.data);
  //     }
  //     setPageState('');
  //   });
  // }, []);

  //세션에 저장된 아이디에 해당하는 팔로우 목록
  useEffect(() => {
    axios.get('/fan/getFollow/'+userId).then((response) => {
      setFollowList(response.data?.data);
    })
  }, [userId, searchList]);

  //나를 팔로우하는 회원목록(팔로워)
  useEffect(() => {
    const followUser = userId;
    axios.get('/fan/getFollowing/'+followUser).then((response) => {
      setFollowerList(response.data?.data);
    })
  }, [userId]);

  //팔로우 삭제
  const handleDelete = (event, followUser) => {
    console.log('FollowUser:', followUser);
    axios.post('/fan/removeFollow', { userId, followUser }).then((response) => {
      window.location.reload();
    });
  };

  //팔로워 삭제
  const handleDelete2 = (event, followUser) => {
    console.log('FollowUser:', followUser);
    axios.post('/fan/removeFollower', { userId, followUser }).then((response) => {
      window.location.reload();
    });
  };

  //팔로우 등록
  const handleAdd = (event, followUser) => {
    console.log('userID :: '+userId);
    console.log('FollowUser:', followUser);
    axios.post('/fan/addFollow', { userId, followUser }).then((response) => {
      if(response.data?.result === 'success'){
      navigate('/followlist/'+userId);
      window.location.reload();
      }
      if(response.data?.result === 'fail'){
        alert('이미 등록된 회원입니다!');
      }
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  
  //검색(버튼클릭)
  const search = () => {
    axios.get('/fan/searchUser/'+keyword).then((response) => {
      setSearchList(response.data?.data);
      setPageState('search');
    })
  }

  //검색(enter)
  const searchKeyPress = (e) => {
    if(e.key === 'Enter'){
      axios.get('/fan/searchUser/'+keyword).then((response) => {
        setSearchList(response.data?.data);
        setPageState('search');
    })
  }
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

  //코인사용 내역 탭
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
            <FontAwesomeIcon icon={faFaceGrinHearts} size="2xl" style={{ marginRight: '8px' }}/><p style={{ fontSize: '18px', color:'blue'}}>팔로우 관리</p>
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
            <Info_text>회원이 지정한 블랙리스트 회원을 관리할 수 있습니다.</Info_text>
            
            </User_update_body3>
            <Nickname_update_input placeholder={'검색 조건'} style={{ marginRight: '8px', borderRadius: '8px'  }} onChange={onChangeKeyword} onKeyPress={searchKeyPress}></Nickname_update_input>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" onClick={search} style={{cursor: 'pointer'}}/>
          </User_update_body2>
        </User_update_body>
        </User_update_Main>


                      {isModalOpen === true ? '' : (
                        <>
                              <List_body_12 style={{
                                      position: 'fixed',
                                      top: '60%',
                                      left: '30%',
                                      transform: 'translate(-50%, -50%)',
                                      zIndex: 9000,
                                      backgroundColor:'gray',
                                      marginRight: '10px'
                                        }}>
                                <List_body_13 >
                      <List_body_hidden2></List_body_hidden2>
                                  <List_body_14>
                                    <List_body_15 >
                                      <List_body_16>
                                        <List_body_16_top>
                                          <List_body_16_top_1>
                                            <List_body_16_top_2>
                                              <List_body_16_top_title>
                                                <List_body_16_top_title2>{pageState === 'search' ? '검색 결과' : '팔로우'}</List_body_16_top_title2>
                                              </List_body_16_top_title>
                                            </List_body_16_top_2>
                                            <List_body_16_top_exit>
                                              <List_body_16_top_exit2>
                                                <List_body_16_top_exit_button>
                                                  <List_body_16_top_exit_X>
                                                    <List_body_16_top_exit_X1 >
                                                      <List_body_16_top_exit_X2></List_body_16_top_exit_X2>
                                                      <List_body_16_top_exit_X3></List_body_16_top_exit_X3>
                                                    </List_body_16_top_exit_X1>
                                                  </List_body_16_top_exit_X>
                                                </List_body_16_top_exit_button>
                                              </List_body_16_top_exit2>
                                            </List_body_16_top_exit>
                                          </List_body_16_top_1>
                                        </List_body_16_top>
                                        <List_body_16_bottom>
                                          {pageState === 'search' ? (
                                            searchList.map((search, index) => (
                                              <List_body_16_bottom_1 key={index} >
                                                <List_body_16_bottom_2>
                                                  <List_body_16_bottom_3>
                                                    <List_body_16_bottom_4>
                                                      <List_body_16_bottom_5>
                                                        <List_body_16_bottom_6>
                                                          <List_body_16_bottom_6_profile>
                                                            <List_body_16_bottom_6_profile1>
                                                              <List_body_16_bottom_6_profile2>
                                                                <List_body_16_bottom_6_profile3>
                                                                  <List_body_16_bottom_6_profile4>
                                                                    <List_body_16_bottom_6_profile4_1></List_body_16_bottom_6_profile4_1>
                                                                    <List_body_16_bottom_6_profile4_2>
                                                                    <List_body_16_bottom_6_profile_image 
                                                                    src={search.profilePhoto === 'base_image' ?
                                                                    process.env.PUBLIC_URL + '/img/base_profile.jpg'
                                                                     :
                                                                    'https://kr.object.ncloudstorage.com/sstv-image/' + search.profilePhoto}/>
                                                                    </List_body_16_bottom_6_profile4_2>
                                                                  </List_body_16_bottom_6_profile4>
                                                                </List_body_16_bottom_6_profile3>
                                                              </List_body_16_bottom_6_profile2>
                                                            </List_body_16_bottom_6_profile1>
                                                          </List_body_16_bottom_6_profile>
                                                          <List_body_16_bottom_6_title>
                                                            <List_body_16_bottom_6_title1>
                                                              <List_body_16_bottom_6_title2>
                                                                <List_body_16_bottom_6_title2_1>
                                                                  <List_body_16_bottom_6_title3>
                                                                    <List_body_16_bottom_6_title4>
                                                                      <List_body_16_bottom_6_title4_1>
                                                                        <List_body_16_bottom_6_title5>
                                                                          <List_body_16_bottom_6_title6>
                                                                            <List_body_16_bottom_6_title7>
                                                                              <List_body_16_bottom_6_nickName >{search.userNickname}</List_body_16_bottom_6_nickName>
                                                                            </List_body_16_bottom_6_title7>
                                                                          </List_body_16_bottom_6_title6>
                                                                        </List_body_16_bottom_6_title5>
                                                                      </List_body_16_bottom_6_title4_1>
                                                                      <List_body_16_bottom_6_title4_2>{pageState === 'search' ? '' : '.'}</List_body_16_bottom_6_title4_2>
                                                                      <List_body_16_bottom_6_title4_3>
                                                                        <List_follow_button>
                                                                          <List_follow_button2>{pageState === 'search' ? '' : '팔로우'}</List_follow_button2>
                                                                        </List_follow_button>
                                                                      </List_body_16_bottom_6_title4_3>
                                                                    </List_body_16_bottom_6_title4>
                                                                  </List_body_16_bottom_6_title3>
                                                                </List_body_16_bottom_6_title2_1>
                                                                <List_body_16_bottom_6_title2_2>
                                                                  <List_userName>{search.userName}</List_userName>
                                                                </List_body_16_bottom_6_title2_2>
                                                              </List_body_16_bottom_6_title2>
                                                            </List_body_16_bottom_6_title1>
                                                          </List_body_16_bottom_6_title>
                                                          <List_body_16_bottom_6_cancle>
                                                            <List_remove>
                                                              <div onClick={(event) => handleAdd(event, search.userId)}>
                                                                <List_remove2>등록</List_remove2>
                                                              </div>
                                                            </List_remove>
                                                          </List_body_16_bottom_6_cancle>
                                                        </List_body_16_bottom_6>
                                                      </List_body_16_bottom_5>
                                                    </List_body_16_bottom_4>
                                                  </List_body_16_bottom_3>
                                                </List_body_16_bottom_2>
                                              </List_body_16_bottom_1>
                                              ))
                                          ) : (
                                        followList.map((user, index) => (
                                          <List_body_16_bottom_1 key={index} >
                                            <List_body_16_bottom_2>
                                              <List_body_16_bottom_3>
                                                <List_body_16_bottom_4>
                                                  <List_body_16_bottom_5>
                                                    <List_body_16_bottom_6>
                                                      <List_body_16_bottom_6_profile>
                                                        <List_body_16_bottom_6_profile1>
                                                          <List_body_16_bottom_6_profile2>
                                                            <List_body_16_bottom_6_profile3>
                                                              <List_body_16_bottom_6_profile4>
                                                                <List_body_16_bottom_6_profile4_1></List_body_16_bottom_6_profile4_1>
                                                                <List_body_16_bottom_6_profile4_2>
                                                                <List_body_16_bottom_6_profile_image 
                                                                src={user.profilePhoto === 'base_image' ?
                                                                process.env.PUBLIC_URL + '/img/base_profile.jpg'
                                                                 :
                                                                'https://kr.object.ncloudstorage.com/sstv-image/' + user.profilePhoto}/>
                                                                </List_body_16_bottom_6_profile4_2>
                                                              </List_body_16_bottom_6_profile4>
                                                            </List_body_16_bottom_6_profile3>
                                                          </List_body_16_bottom_6_profile2>
                                                        </List_body_16_bottom_6_profile1>
                                                      </List_body_16_bottom_6_profile>
                                                      <List_body_16_bottom_6_title>
                                                        <List_body_16_bottom_6_title1>
                                                          <List_body_16_bottom_6_title2>
                                                            <List_body_16_bottom_6_title2_1>
                                                              <List_body_16_bottom_6_title3>
                                                                <List_body_16_bottom_6_title4>
                                                                  <List_body_16_bottom_6_title4_1>
                                                                    <List_body_16_bottom_6_title5>
                                                                      <List_body_16_bottom_6_title6>
                                                                        <List_body_16_bottom_6_title7>
                                                                          <List_body_16_bottom_6_nickName >{user.userNickname}</List_body_16_bottom_6_nickName>
                                                                        </List_body_16_bottom_6_title7>
                                                                      </List_body_16_bottom_6_title6>
                                                                    </List_body_16_bottom_6_title5>
                                                                  </List_body_16_bottom_6_title4_1>
                                                                  <List_body_16_bottom_6_title4_2></List_body_16_bottom_6_title4_2>
                                                                  <List_body_16_bottom_6_title4_3>
                                                                    <List_follow_button>
                                                                      <List_follow_button2></List_follow_button2>
                                                                    </List_follow_button>
                                                                  </List_body_16_bottom_6_title4_3>
                                                                </List_body_16_bottom_6_title4>
                                                              </List_body_16_bottom_6_title3>
                                                            </List_body_16_bottom_6_title2_1>
                                                            <List_body_16_bottom_6_title2_2>
                                                              <List_userName>{user.userName}</List_userName>
                                                            </List_body_16_bottom_6_title2_2>
                                                          </List_body_16_bottom_6_title2>
                                                        </List_body_16_bottom_6_title1>
                                                      </List_body_16_bottom_6_title>
                                                      <List_body_16_bottom_6_cancle>
                                                        <List_remove>
                                                          <div onClick={(event) => handleDelete(event, user.userId)}>
                                                            <List_remove2>삭제</List_remove2>
                                                          </div>
                                                        </List_remove>
                                                      </List_body_16_bottom_6_cancle>
                                                    </List_body_16_bottom_6>
                                                  </List_body_16_bottom_5>
                                                </List_body_16_bottom_4>
                                              </List_body_16_bottom_3>
                                            </List_body_16_bottom_2>
                                          </List_body_16_bottom_1>
                                          ))
                                        )}                                        
                                        </List_body_16_bottom>
                                      </List_body_16>
                                    </List_body_15>
                                  </List_body_14>
                               </List_body_13>
                              </List_body_12>


                              <List_body_12 style={{
                                      position: 'fixed',
                                      top: '60%',
                                      right: '20%',
                                      transform: 'translate(-50%, -50%)',
                                      zIndex: 9999,
                                      backgroundColor:'gray',
                                      marginLeft: '10px'
                                        }}>
                                <List_body_13 >
                      <List_body_hidden2></List_body_hidden2>
                                  <List_body_14>
                                    <List_body_15 >
                                      <List_body_16>
                                      <List_body_16_top>
                                          <List_body_16_top_1>
                                            <List_body_16_top_2>
                                              <List_body_16_top_title>
                                                <List_body_16_top_title2>팔로워</List_body_16_top_title2>
                                              </List_body_16_top_title>
                                            </List_body_16_top_2>
                                            <List_body_16_top_exit>
                                              <List_body_16_top_exit2>
                                                <List_body_16_top_exit_button>
                                                  <List_body_16_top_exit_X>
                                                    <List_body_16_top_exit_X1 >
                                                      <List_body_16_top_exit_X2></List_body_16_top_exit_X2>
                                                      <List_body_16_top_exit_X3></List_body_16_top_exit_X3>
                                                    </List_body_16_top_exit_X1>
                                                  </List_body_16_top_exit_X>
                                                </List_body_16_top_exit_button>
                                              </List_body_16_top_exit2>
                                            </List_body_16_top_exit>
                                          </List_body_16_top_1>
                                        </List_body_16_top>
                                            <List_body_16_bottom>
                                        {followerList.map((follower, index) => (
                                          <List_body_16_bottom_1 key={index} >
                                            <List_body_16_bottom_2>
                                              <List_body_16_bottom_3>
                                                <List_body_16_bottom_4>
                                                  <List_body_16_bottom_5>
                                                    <List_body_16_bottom_6>
                                                      <List_body_16_bottom_6_profile>
                                                        <List_body_16_bottom_6_profile1>
                                                          <List_body_16_bottom_6_profile2>
                                                            <List_body_16_bottom_6_profile3>
                                                              <List_body_16_bottom_6_profile4>
                                                                <List_body_16_bottom_6_profile4_1></List_body_16_bottom_6_profile4_1>
                                                                <List_body_16_bottom_6_profile4_2>
                                                                <List_body_16_bottom_6_profile_image 
                                                                src={follower.profilePhoto === 'base_image' ?
                                                                process.env.PUBLIC_URL + '/img/base_profile.jpg'
                                                                 :
                                                                'https://kr.object.ncloudstorage.com/sstv-image/' + follower.profilePhoto}/>
                                                                </List_body_16_bottom_6_profile4_2>
                                                              </List_body_16_bottom_6_profile4>
                                                            </List_body_16_bottom_6_profile3>
                                                          </List_body_16_bottom_6_profile2>
                                                        </List_body_16_bottom_6_profile1>
                                                      </List_body_16_bottom_6_profile>
                                                      <List_body_16_bottom_6_title>
                                                        <List_body_16_bottom_6_title1>
                                                          <List_body_16_bottom_6_title2>
                                                            <List_body_16_bottom_6_title2_1>
                                                              <List_body_16_bottom_6_title3>
                                                                <List_body_16_bottom_6_title4>
                                                                  <List_body_16_bottom_6_title4_1>
                                                                    <List_body_16_bottom_6_title5>
                                                                      <List_body_16_bottom_6_title6>
                                                                        <List_body_16_bottom_6_title7>
                                                                          <List_body_16_bottom_6_nickName >{follower.userNickname}</List_body_16_bottom_6_nickName>
                                                                        </List_body_16_bottom_6_title7>
                                                                      </List_body_16_bottom_6_title6>
                                                                    </List_body_16_bottom_6_title5>
                                                                  </List_body_16_bottom_6_title4_1>
                                                                  <List_body_16_bottom_6_title4_2>.</List_body_16_bottom_6_title4_2>
                                                                  <List_body_16_bottom_6_title4_3>
                                                                    <List_follow_button>
                                                                      <List_follow_button2 onClick={(event) => handleAdd(event, follower.userId)}>팔로우</List_follow_button2>
                                                                    </List_follow_button>
                                                                  </List_body_16_bottom_6_title4_3>
                                                                </List_body_16_bottom_6_title4>
                                                              </List_body_16_bottom_6_title3>
                                                            </List_body_16_bottom_6_title2_1>
                                                            <List_body_16_bottom_6_title2_2>
                                                              <List_userName>{follower.userName}</List_userName>
                                                            </List_body_16_bottom_6_title2_2>
                                                          </List_body_16_bottom_6_title2>
                                                        </List_body_16_bottom_6_title1>
                                                      </List_body_16_bottom_6_title>
                                                      <List_body_16_bottom_6_cancle>
                                                        <List_remove>
                                                            <List_remove2 onClick={(event) => handleDelete2(event, follower.userId)}>삭제</List_remove2>
                                                        </List_remove>
                                                      </List_body_16_bottom_6_cancle>
                                                    </List_body_16_bottom_6>
                                                  </List_body_16_bottom_5>
                                                </List_body_16_bottom_4>
                                              </List_body_16_bottom_3>
                                            </List_body_16_bottom_2>
                                          </List_body_16_bottom_1>
                                        ))}
                                          </List_body_16_bottom>
                                      </List_body_16>
                                    </List_body_15>
                                  </List_body_14>
                               </List_body_13>
                              </List_body_12>
                              </>
                              )}


              </div>
  )
} 
export default FollowListView;