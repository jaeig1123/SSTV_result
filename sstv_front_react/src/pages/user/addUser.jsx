/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';
import axios from 'axios';
import { useLocation } from 'react-router-dom/dist';

const addUserModal = ({onClose, setOnClose}) => {
    const [userId, setUserId]= useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [userNickname, setUserNickname] = useState('');
    const [userName, setUserName] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [eMail, setEmail] = useState('');
    const [mouseOver, setMouseOver] = useState(false);
    const modalRef = useRef(null);
    const [buttonChange, setButtonChange] = useState(false);
    const [idEnabled, setIdEnabled] = useState('');
    const [nickEnabled, setNickEnabled] = useState('');
    const [eMailCheck, setEMailCheck] = useState(false);
    const navigate = useNavigate();
    const profilePhoto = 'base_image';
    const location = useLocation();
    const state = location.state;
    const phone = state?.phone || '';   
    
    useEffect(() => {
        const handler = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                navigate('/'); 
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [onClose]);
    const onChangePassword = useCallback((event) => {
        setPassword(event.target.value);
    },[password])
    const onChangePasswordCheck = useCallback((event) => {
      setPasswordCheck(event.target.value);
    },[passwordCheck])
    const onChangeUserName = useCallback((event) => {
      setUserName(event.target.value);
    },[userName])
    const onChangeDateBirth = useCallback((event) => {
      setDateBirth(event.target.value);
    },[dateBirth])
    const onChangeEmail = useCallback((event) =>{
      setEmail(event.target.value);
    },[eMail])

    useEffect(()=> {
        if(userId!=='' && password !=='' && passwordCheck !=='' && userNickname !=='' && userName !=='' && dateBirth !=='' && eMail !=='' && password === passwordCheck){
            setButtonChange(true);
        }
        if(userId ==='' || password ==='' || passwordCheck ==='' || userNickname ==='' || userName ==='' || dateBirth ==='' || eMail ==='' || password !== passwordCheck || idEnabled ==='useNo' || nickEnabled ==='useNo' || eMailCheck === false){
            setButtonChange(false);
        }
    })
    

      //아이디 중복체크 controller
      const checkIdDuplicate = async (value) => {
        try {
          const response = await axios.get('/user/checkUserId/'+value);
          console.log('사용 가능 여부 ? '+response.data.data);
          setIdEnabled(response.data.data);
          console.log('value 잘 받아오나 ?'+value); // 잘 받아옴.. GOOD
        }catch(error){
          console.error('Error.. :: ', error);
        }
        return idEnabled;
      };

      // console.log('아이디 중복체크 결과 값은 ..? '+idEnabled);

      const handleInputIdChange = (e) => {
        const value = e.target.value;
        // console.log('value..? '+value);
        setUserId(value);
        //아이디 중복체크 controller 호출
        checkIdDuplicate(value);
      };

      //닉네임 중복체크 controller
      const checkNickDuplicate = async (value) => {
        try {
          const response = await axios.get('/user/checkUserNickname/'+value);
          // console.log('사용 가능 여부 ? '+response.data.data);
          setNickEnabled(response.data.data);
          // console.log('value 잘 받아오나 ?'+value); // 잘 받아옴.. GOOD
        }catch(error){
          console.error('Error.. :: ', error);
        }
        return nickEnabled;
      };

      // console.log('닉네임 중복체크 결과 값은 ..? '+nickEnabled);

      const handleInputNickChange = (e) => {
        const value = e.target.value;
        // console.log('value..? '+value);
        setUserNickname(value);
        //닉네임 중복체크 controller 호출
        checkNickDuplicate(value);
      };

      //이메일 유효성 체크

      const handelInputEmailCheck = (e) => {
        setEmail(e.target.value);
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com)$/i;

        if(emailPattern.test(e.target.value)) {
          //유효한 이메일 형식
          setEMailCheck(true);
        }else{
          //유효하지 않은 이메일 형식
          setEMailCheck(false);
        }

      };
      console.log('이메일 ' +eMail);
      console.log('이메일 유효성 체크.'+eMailCheck);
      console.log('phone값 :: '+phone);

      let message = '';
        if (userId.length === 10) {
            message = '아이디는 10글자까지만 가능합니다..';
    }

    const onSubmit = useCallback(() => {
        axios.post('/user/addUser',
            {userId, password, profilePhoto, userNickname, userName, dateBirth, eMail, phone}
        )
        .then((response)=> {
            console.log(response.data);
        })

        navigate('/');
      
    },[userId, password, profilePhoto, userNickname, userName, dateBirth, eMail, phone])

    return(

        
        <Modal_main_div >
            <Modal_overlay_div >
                <Modal_Content_div >
                    <Modal_layout_div  >
                        <Modal_area_div id='modalArea' ref={modalRef} >
                            <Modal_area_layout_div >
                                <Modal_area_layout_div_2 >
                                    <Modal_area_layout_div_3 >
                                        <Modal_area_1_div >
                                            <Modal_title_div>
                                                <Modal_title_div_2>
                                                    <Modal_title_div_3>
                                                        <Modal_title_figure><img src={ process.env.PUBLIC_URL+'/img/SSTV_mini.gif'}/></Modal_title_figure>
                                                        <Modal_title_write_div>
                                                            <Modal_title_h4>회원가입</Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form onSubmit={onSubmit}>
                                                    <Modal_body_lay_div >
                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>아이디</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                              {userId !== ''?
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input maxLength="10" value={userId} onChange={handleInputIdChange}></Modal_body_id_input>
                                                                        {idEnabled === 'useOk' ? '':<p style={{ color: 'red' }}>이미 사용 중인 아이디입니다.</p>}
                                                                        {!message ? '':<p style={{ color: 'red' }}>{message}</p>}
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                                :
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input value={userId} onChange={handleInputIdChange}></Modal_body_id_input>
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                              }
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                                <Modal_body_pw_div_3>
                                                                    <Modal_body_pw_div_4>
                                                                        <Modal_body_pw_title_div>
                                                                            <Modal_body_pw_title_lable>비밀번호</Modal_body_pw_title_lable>
                                                                        </Modal_body_pw_title_div>
                                                                    </Modal_body_pw_div_4>

                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                                <Modal_body_pw_input onChange={onChangePassword} id='password' type='password' ></Modal_body_pw_input>
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>

                                                                </Modal_body_pw_div_3>

                                                                <Modal_body_pw_div_3>
                                                                    <Modal_body_pw_div_4>
                                                                        <Modal_body_pw_title_div>
                                                                            <Modal_body_pw_title_lable>비밀번호 재확인</Modal_body_pw_title_lable>
                                                                        </Modal_body_pw_title_div>
                                                                    </Modal_body_pw_div_4>

                                                                    {password !== '' && passwordCheck !== '' ?
                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                                <Modal_body_pw_input onChange={onChangePasswordCheck} id='passwordCheck' type='password' ></Modal_body_pw_input>
                                                                                {password === passwordCheck ? '':<p style={{ color: 'red' }}>비밀번호가 일치 하지 않습니다.</p>}
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>
                                                                    :
                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                                <Modal_body_pw_input onChange={onChangePasswordCheck} id='passwordCheck' type='password' ></Modal_body_pw_input>
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>
                                                                    }
                                                                </Modal_body_pw_div_3>

                                                                <Modal_body_pw_div_3>
                                                                    <Modal_body_pw_div_4>
                                                                        <Modal_body_pw_title_div>
                                                                            <Modal_body_pw_title_lable>닉네임</Modal_body_pw_title_lable>
                                                                        </Modal_body_pw_title_div>
                                                                    </Modal_body_pw_div_4>

                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                                <Modal_body_pw_input value={userNickname} onChange={handleInputNickChange} ></Modal_body_pw_input>
                                                                                {userNickname === '' || nickEnabled === 'useOk' ? '':<p style={{ color: 'red' }}>이미 사용 중인 닉네임입니다.</p>}
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>
                                                                </Modal_body_pw_div_3>

                                                                <Modal_body_pw_div_3>
                                                                    <Modal_body_pw_div_4>
                                                                        <Modal_body_pw_title_div>
                                                                            <Modal_body_pw_title_lable>이름</Modal_body_pw_title_lable>
                                                                        </Modal_body_pw_title_div>
                                                                    </Modal_body_pw_div_4>

                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                                <Modal_body_pw_input value={userName} onChange={onChangeUserName} ></Modal_body_pw_input>
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>
                                                                </Modal_body_pw_div_3>

                                                                <Modal_body_pw_div_3>
                                                                    <Modal_body_pw_div_4>
                                                                        <Modal_body_pw_title_div>
                                                                            <Modal_body_pw_title_lable>생년월일</Modal_body_pw_title_lable>
                                                                        </Modal_body_pw_title_div>
                                                                    </Modal_body_pw_div_4>

                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                                <Modal_body_pw_input  placeholder="'-'이나 '/'을 제외한(8자)" value={dateBirth} onChange={onChangeDateBirth} />
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>
                                                                </Modal_body_pw_div_3>

                                                        {/* <Modal_body_id_input_div>
                                                          <Modal_body_id_input_div_2>
                                                            <select value={month} onChange={onChangeMonth}>
                                                              <option value="">월</option>
                                                              <option value="01">1월</option>
                                                              <option value="02">2월</option>
                                                              <option value="03">3월</option>
                                                              <option value="04">4월</option>
                                                              <option value="05">5월</option>
                                                              <option value="06">6월</option>
                                                              <option value="07">7월</option>
                                                              <option value="08">8월</option>
                                                              <option value="09">9월</option>
                                                              <option value="10">10월</option>
                                                              <option value="11">11월</option>
                                                              <option value="12">12월</option>
                                                            </select>
                                                          </Modal_body_id_input_div_2>
                                                        </Modal_body_id_input_div>

                                                        <Modal_body_id_input_div>
                                                          <Modal_body_id_input_div_2>
                                                            <Modal_body_id_input placeholder="일" value={day} onChange={onChangeDay} />
                                                          </Modal_body_id_input_div_2>
                                                        </Modal_body_id_input_div> */}

                                                                <Modal_body_pw_div_3>
                                                                    <Modal_body_pw_div_4>
                                                                        <Modal_body_pw_title_div>
                                                                            <Modal_body_pw_title_lable>이메일</Modal_body_pw_title_lable>
                                                                        </Modal_body_pw_title_div>
                                                                    </Modal_body_pw_div_4>
                                                                    {eMail === '' ?
                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                                <Modal_body_pw_input value={eMail} onChange={handelInputEmailCheck} />
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>
                                                                    :
                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                                <Modal_body_pw_input value={eMail} onChange={handelInputEmailCheck} />
                                                                                {eMailCheck === true ? '':<p style={{ color: 'red' }}>올바르지 않은 이메일 형식입니다.</p>}
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>
                                                                    }
                                                                </Modal_body_pw_div_3>

                                                        <Modal_login_submit_div>
                                                            <Modal_login_submit_div_2>
                                                                <Modal_login_submit_div_3></Modal_login_submit_div_3>
                                                                
                                                                {buttonChange ===false ? 
                                                                    <Modal_login_submit_button disabled>
                                                                        <Modal_login_submit_button_div >
                                                                            <Modal_login_submit_noinput_div>회원가입</Modal_login_submit_noinput_div>
                                                                        </Modal_login_submit_button_div>
                                                                    </Modal_login_submit_button> 
                                                                :
                                                                     <Modal_login_submit_input_button>
                                                                            <Modal_login_submit_input_button_div>
                                                                                 <Modal_login_submit_input_div>회원가입</Modal_login_submit_input_div>
                                                                            </Modal_login_submit_input_button_div>
                                                                     </Modal_login_submit_input_button>  
                                                                        } 
                                                            </Modal_login_submit_div_2>
                                                        </Modal_login_submit_div>
                                                    </Modal_body_lay_div>
                                                </Modal_body_form>
                                            </Modal_body_div>


                                        </Modal_area_1_div>
                                    </Modal_area_layout_div_3>
                                </Modal_area_layout_div_2>
                            </Modal_area_layout_div>
                        </Modal_area_div>
                    </Modal_layout_div>
                </Modal_Content_div>
            </Modal_overlay_div>
        </Modal_main_div>
    )

  }

export default addUserModal;