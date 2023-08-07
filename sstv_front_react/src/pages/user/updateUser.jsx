import { useState } from 'react';
import {User_update_Main, User_update_title, Profile_box2, Profile_add_button_box , Profile_box4, Email_update_input2, PasswordCheck_line, Password_secret, User_update_body, User_update_body2, User_update_header, User_update_header_2, User_update_logo, User_update_subTitle,User_update_titleLine, User_update_titleLine_2, User_update_body3, UserinfoTitle, UserNickname_title, Nickname_update, Nickname_update_title, Nickname_update_update, Nickname_update_title2, Nickname_update_update2, Nickname_update_input, NicknameDuplicate_button, NicknameChange_button, Nickname_update_sub, Update_form, Password_title, Password_box, Update_user_title, Update_user_box, Update_submit_button, Password_box_title, Password_box_minibox, Password_box_title2, Password_input, PasswordCheck_input, Password_input2, Password_input_mini, Password_input_line, Userinfo_tab, Info_text, User_type, Password_space, Password_box_minibox2, PasswordCheck_input2, PasswordCheck_input_input, Phone_update, Phone_update2, Phone_update_input, Phone_update_input2, Phone_update_input_text, Email_update, Email_update2, Email_update_input, Email_update_inputText1, Email_golbang, Email_update_inputText2, Email_update_selectEmail, UpdateUser_submit_button, Profile_box, Profile_box3, Profile_photo, Profile_text, Profile_photo2, Profile_photo3, Profile_add_button, Profile_add_button1, Profile_add_button2, Profile_add_button3, Profile_photo_input_button, UserInfo_tab2, UserInfo_tab3} from './style';
import { useCallback } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import RmUser from './removeUser';
import BlackList from './blackListView';

const UpdateUser = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [dbUserNickname, setDbUserNickname] =useState('');
  const [userNickname, setUserNickname] = useState('');
  const [nickEnabled, setNickEnabled] = useState('');
  const [nickUpdate, setNickUpdate] = useState(false);
  const [phone, setPhone] = useState('');
  const [dbEmail, setDbEmail] = useState('');
  const [eMail, setEMail] = useState('');
  const [userType, setUserType] = useState('');
  const [eMailCheck, setEMailCheck] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState('');
  const inputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [dbProfilePhoto, setDbProfilePhoto] = useState('');
  const [selectedTab, setSelectedTab] = useState('userInfo'); 
  const navigate = useNavigate();
  const coin =0;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenBlackModal, setIsOpenBlackModal] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  });

  const onChangePasswordCheck = useCallback((e)=> { 
    setPasswordCheck(e.target.value);
  });

  const onChangeNickname = useCallback((e)=>{
    setUserNickname(e.target.value);
  });

  // DB에 저장된 정보 가져오기
  useEffect(() => {
    axios.get('/user/login').then((response) => {
      if(response.data.data?.userId !== userId){
      setUserId(response.data.data?.userId);
      }
      if(response.data.data?.userId === userId){
      setUserId(response.data?.data);
      }
    });
  }, []);
  
  console.log('회원 아이디 :: '+userId);

  useEffect(() => {
    if (userId !== '') {
      axios.get('/user/getUser/' +userId).then((response) => {
        setDbUserNickname(response.data.data?.userNickname);
        setPhone(response.data.data?.phone);
        setUserType(response.data.data?.userType);  
        setDbEmail(response.data.data?.eMail);
        setDbProfilePhoto(response.data.data?.profilePhoto);    
      });
    }
  }, [userId]);

  //파일 업로드
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  
    // 파일을 읽어서 이미지를 표시
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
    //파일 선택값 초기화
    // e.target.value = null;
  };

  //파일 재 업로드 시도할 경우 null check
  const handleClick = () => {
    if(inputRef.current !== null) {
      //파일 선택값 초기화 후 가져옮
      // inputRef.current.value = null;
      inputRef.current.click();
    }
  };

  //기본 이미지 사용
  const use_baseImage = (e) => {
    setProfilePhoto("base_image");
  }

  console.log('현재 지정된 프로필 사진은 :: '+profilePhoto);

  //닉네임 중복체크
  const checkNickDuplicate = useCallback(()=> {
    axios.get('/user/checkUserNickname/'+userNickname).then((response) => {
      if(response.data?.data === 'useOk'){
        setNickEnabled(response.data?.data);
        alert('사용 가능한 닉네임 입니다!');
        setNickUpdate(false);
      }
      if(response.data?.data === 'useNo'){
        setNickEnabled(response.data?.data);
        alert('사용중인 닉네임 입니다!');
      }
    })

  });

  //닉네임 변경 버튼
  const updateNickname = useCallback(()=> {
    axios.post('/user/updateUser',{userId, userNickname}).then((response)=> {
      setNickUpdate(true);
    })

  });

 // 프로필 사진 적용 버튼
const saveFile = useCallback(() => {
  const file = inputRef.current.files[0];

  if (profilePhoto === '' || profilePhoto === null || profilePhoto === "base_image") {
    const profilePhoto = "base_image";

    axios.post('/user/updateUser', {userId, profilePhoto})
      .then((response) => {
        alert('프로필 사진이 변경되었습니다.');
      })
      .catch((error) => {
        alert('프로필 사진 업로드 실패');
      });
  } else {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userId);

    axios.post('/user/uploadFile', formData)
      .then((response) => {
        alert('프로필 사진이 변경되었습니다.');
      })
      .catch((error) => {
        alert('프로필 사진 업로드 실패');
      });
  }
}, [inputRef, profilePhoto, userId]);

console.log('선택된 파일 :: '+'file')

  //이메일 유효성 체크
  const handelInputEmailCheck = (e) => {
    setEMail(e.target.value);
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com)$/i;

    if(emailPattern.test(e.target.value)) {
      //유효한 이메일 형식
      setEMailCheck(true);
    }else{
      //유효하지 않은 이메일 형식
      setEMailCheck(false);
    }

  };

  console.log('dbPhoto :: '+dbProfilePhoto);
  console.log('profilePhoto :: '+profilePhoto);
  
  const onSubmit = useCallback(() => {
    const coin = 0;
    axios
      .post("/user/updateUser", {userId, password, eMail, coin})
      .then((response) => {
        alert("회원정보가 변경 되었습니다!");
      });
  }, [eMail,  userId, password, coin]);

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

  // //회원탈퇴 탭
  // const onRmUser = () => {
  //   setSelectedTab('removeUser');
  //   navigate('/remove/'+userId);
  // }

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

  console.log('현재 선택된 탭은 :: '+selectedTab)

  return(

    <User_update_Main style={{ overflowY: "auto", maxHeight: "90vh" }}>
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
            <UserinfoTitle>내 정보 관리</UserinfoTitle>
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
            <Info_text>회원가입 시 입력한 정보를 조회&수정할 수 있습니다.</Info_text>
            <User_type></User_type>
            <UserNickname_title>프로필 사진</UserNickname_title>
            <Profile_box style={{ height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Profile_box2>
                <Profile_box3>
                  <Profile_box4>
                    <Profile_photo>
                      <Profile_photo2>
                        <Profile_photo3 onClick={handleClick} style={{ cursor: 'pointer' }}>
                        {
                          uploadedImage === null && dbProfilePhoto === "base_image" ? (
                            <img
                              src={process.env.PUBLIC_URL + '/img/base_profile.jpg'}
                              alt="Profile"
                              // width={150}
                              // height={150}
                              width={125}
                              height={125}
                              style={{ borderRadius: '50%' }}
                            />
                          ) : (
                            profilePhoto === "base_image" ? (
                              <img
                                src={process.env.PUBLIC_URL + '/img/base_profile.jpg'}
                                alt="Profile"
                                // width={150}
                                // height={150}
                                width={125}
                                height={125}
                                style={{ borderRadius: '50%' }}
                              />
                            ) : (
                              dbProfilePhoto !== "base_image" && uploadedImage === null ? (
                                <img
                                  src={'https://kr.object.ncloudstorage.com/sstv-image/' + dbProfilePhoto}
                                  alt="Profile"
                                  // width={150}
                                  // height={150}
                                  width={125}
                                  height={125}
                                  style={{ borderRadius: '50%' }}
                                />
                              ) : (
                                <img
                                  src={uploadedImage}
                                  alt="Uploaded Profile"
                                  // width={150}
                                  // height={150}
                                  width={125}
                                  height={125}
                                  style={{ borderRadius: '50%' }}
                                />
                              )
                            )
                          )
                        }
                        <input ref={inputRef}
                              type="file"
                              onChange={handleFileInputChange}
                              style={{ display: 'none' }}
                            />

                        </Profile_photo3>
                      </Profile_photo2>
                    </Profile_photo>
                    <Profile_text>
                    {profilePhoto === 'base_image' && dbProfilePhoto === "base_image" ? '' :
                      <Profile_add_button_box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'  }}>
                        <Profile_add_button style={{ width: '100px', height: '30px' }}>
                        <Profile_add_button1>
                          <Profile_add_button2>
                          {/* {profilePhoto === '' && dbProfilePhoto === "base_image" ? (
                              <Profile_add_button3 onClick={handleClick} style={{ cursor: 'pointer' }}>
                                <p style={{ fontSize: '12px' }}>프로필 변경</p>
                              </Profile_add_button3>
                            ) : ( */}
                              {/* <> */}
                                  
                                  <Profile_add_button3 onClick={use_baseImage} style={{ cursor: 'pointer' }}>
                                    <p style={{ fontSize: '11px' }}>기본 이미지 사용</p>
                                  </Profile_add_button3>
                                  
                                {/* // ) : (
                                //   <Profile_add_button3 onClick={handleClick} style={{ cursor: 'pointer' }}>
                                //     <p style={{ fontSize: '12px' }}>프로필 변경</p>
                                //   </Profile_add_button3>
                                // ) */}
                                
                              {/* </>
                            )} */}
                          </Profile_add_button2>
                        </Profile_add_button1>
                        </Profile_add_button>
                      </Profile_add_button_box>
                      }
                      <Nickname_update_update2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                      <NicknameDuplicate_button onClick={saveFile} style={{ padding: '3px 5px', fontSize: '13px', marginTop:'10px' }}>적용하기</NicknameDuplicate_button>
                      </Nickname_update_update2>
                      <Nickname_update_sub >
                        <p style={{color:'blue'}}>- 스트리밍이나 채팅 및 본인의 커뮤니티 메인화면 등 서비스 이용시 보이는 사진입니다.</p>
                        <p style={{color:'blue'}}>- 프로필 사진과 버튼을 클릭하여 사진을 변경할 수 있습니다.</p>
                      </Nickname_update_sub>
                    </Profile_text>
                  </Profile_box4>
                </Profile_box3>
              </Profile_box2>
            </Profile_box>
            <UserNickname_title>닉네임 설정</UserNickname_title>
            <Nickname_update>
              <Nickname_update_title>
                <Nickname_update_title2>닉네임 설정</Nickname_update_title2>
              </Nickname_update_title>
              <Nickname_update_update>
                <Nickname_update_update2>
                  <Nickname_update_input placeholder={dbUserNickname} value={userNickname} onChange={onChangeNickname} id={userNickname}></Nickname_update_input>
                  <NicknameDuplicate_button onClick={checkNickDuplicate}>중복확인</NicknameDuplicate_button>
                  {nickEnabled ==='' || nickEnabled !== 'useOk' || nickUpdate === true ?
                  ''
                  :
                  <NicknameChange_button onClick={updateNickname}>닉네임 변경</NicknameChange_button>
                  }
                  <Nickname_update_sub><p style={{color:'skyblue', marginTop:'22px'}}>- 스트리밍이나 채팅 및 게시글 작성 등 서비스 이용시 보이는 닉네임입니다.</p></Nickname_update_sub>
                  <Nickname_update_sub><p style={{color:'skyblue'}}>- 중복 되지 않는 닉네임만 사용할 수 있습니다.</p></Nickname_update_sub>
                  <Nickname_update_sub><p style={{color:'skyblue'}}>- 닉네임을 입력하고 중복체크를 진행해주세요.</p></Nickname_update_sub>
                </Nickname_update_update2>
              </Nickname_update_update>
            </Nickname_update>
            <Update_form onSubmit={onSubmit}>
              {userType ===1 ?
              ''
              :
              <>
              <Password_title>비밀번호 설정</Password_title>
              <Password_space></Password_space>
              <Password_space></Password_space>
              <Password_box>
                <Password_box_title>
                  <Password_box_title2>비밀번호 설정</Password_box_title2>
                </Password_box_title>
                <Password_box_minibox>
                  <Password_box_minibox2/>
                  <Password_input>
                    <Password_input2 placeholder='새 비밀번호' onChange={onChangePassword} id='password' type='password'></Password_input2>
                    <Password_input_mini>영문/숫자/특수문자 조합으로 15자 미만</Password_input_mini>
                    <Password_input_line/>
                  </Password_input>
                  <PasswordCheck_input>
                    <PasswordCheck_input_input placeholder='새 비밀번호 확인' onChange={onChangePasswordCheck} id='passwordCheck' type='password'></PasswordCheck_input_input>
                    {password === passwordCheck ? '':<p style={{ color: 'red' }}>비밀번호가 일치 하지 않습니다.</p>}
                    <PasswordCheck_line/>
                  </PasswordCheck_input>
                  <Password_secret/>
                </Password_box_minibox>
              </Password_box>
              </>
              }
              <Update_user_title>개인정보 수정</Update_user_title>
              <Update_user_box>
                <Phone_update>
                  <Phone_update2>휴대폰 번호</Phone_update2>
                </Phone_update>
                <Phone_update_input>
                  <Phone_update_input2>
                    <Phone_update_input_text placeholder={userType === 1 ? 'SNS 회원' : ''}  value={phone} readOnly></Phone_update_input_text>
                    <Nickname_update_sub><p style={{color:'blue', marginTop:'5px'}}>- 휴대폰 정보는 수정하실 수 없습니다.</p></Nickname_update_sub>
                  </Phone_update_input2>
                </Phone_update_input>
                <Email_update>
                  <Email_update2>이메일</Email_update2>
                </Email_update>
                {eMail === '' ?
                <Email_update_input>
                  <Email_update_input2>
                    <Email_update_inputText1 placeholder={dbEmail} onChange={handelInputEmailCheck} value={eMail}/>
                  </Email_update_input2>
                </Email_update_input>
                :
                <Email_update_input>
                  <Email_update_input2>
                    <Email_update_inputText1 placeholder={dbEmail} onChange={handelInputEmailCheck} value={eMail}/>
                    {eMailCheck === true ? '':<p style={{ color: 'red' }}>올바르지 않은 이메일 형식입니다.</p>}
                  </Email_update_input2>
                </Email_update_input>
                }
              </Update_user_box>
              <Update_submit_button>
                <UpdateUser_submit_button>확인</UpdateUser_submit_button>
              </Update_submit_button>
            </Update_form>
            </User_update_body3>
          </User_update_body2>

        </User_update_body>
        </User_update_Main>
  )
} 
export default UpdateUser;