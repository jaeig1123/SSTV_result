/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Modal_login_submit_div, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, } from '../Mainpage/style';
import axios from 'axios';
import { unstable_HistoryRouter } from 'react-router-dom/dist';

const sendSMS = () => {
    const [mouseOver, setMouseOver] = useState(false);
    const modalRef = useRef(null);
    // const [buttonChange, setButtonChange] = useState(false);
    const [buttonChange, setButtonChange] = useState(true);
    const [phone, setPhone] = useState('');
    const [phoneCheck, setPhoneCheck] = useState(false);
    const [code, setCode] = useState('');
    const [codeCheck, setCodeCheck] = useState('');
    const [sendSMS, setSendSMS] = useState('');
    const [success, setSuccess] = useState('');
    const [codeButton, setCodeButton] = useState(false);
    const [findId, setFindId] = useState('');
    const [findPasswd, setFindPasswd] = useState('');
    const [userId, setUserId] = useState('');
    const [dbUserId, setDbUserId] = useState('');
    const [userType, setUserType] = useState('');
    const {path} = useParams();
    const navigate = useNavigate();
    const [timer, setTimer] = useState(false);
    const [codeTime, setCodeTime] = useState(0);

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
    }, []);

    useEffect(()=> {
        if(phone !=='' && phoneCheck === true){
            setButtonChange(true);
        }
        if(phone ==='' || phoneCheck === false){
            setButtonChange(false);
        }
        if(code !=='' && codeCheck ===true){
            setCodeButton(true);
        }
        if(code ==='' || codeCheck ===false){
            setCodeButton(false);
        }

    })

    //존재하는 아이디인지 체크
    const idCheck = async (e) => {
        const value = e.target.value;
        setUserId(value);
        try {
          const response = await axios.get('/user/checkUserId/'+value);
          setFindPasswd(response.data.data);
          console.log('id 잘 받아오나 ?'+value);
        }catch(error){
          console.error('Error.. :: ', error);
        }
        //중복체크가 아니기에 useNo여야함(존재하는 아이디)
        return findPasswd;
      };

    //   console.log("존재하는 아이디 인가? "+findPasswd)
      
    //휴대폰 유효성 체크
    const handelPhoneCheck = (e) => {
        // axios.post('/user/findId', e.tartget.value).then((response)=> {
        //     if(response.data.data !==''){
        //         setDbUserId('user');
        //     }
        // })
        const inputPhone = e.target.value;
        setPhone(e.target.value);
        const phonePattern = inputPhone.replace(/\D/g, '');

        // console.log('입력 받은 값 :: '+inputPhone);
        // console.log('유효한 패턴 :: '+phonePattern);

        if(phonePattern === inputPhone) {
          //숫자만 입력 받은 경우
          setPhoneCheck(true);
          //아이디 찾기일 경우 존재하는 아이디인지 체크
          if(path === 'findId' && inputPhone !== ''){
          axios.get('/user/checkId/'+inputPhone).then((response)=> {
            if(response.data.data !==''){
                setDbUserId('user');
            }
        })}
        }else{
          //유효하지 않은 입력
          setPhoneCheck(false);
        }

      };
      //인증번호 유효성 체크
      const handelCodeCheck = (e) => {
        const inputCode = e.target.value;
        setCode(e.target.value);
        const codePattern = inputCode.replace(/\D/g, '');

        // console.log('입력 받은 값 :: '+inputCode);
        // console.log('유효한 패턴 :: '+codePattern);

        if(codePattern === inputCode) {
          //숫자만 입력 받은 경우
          setCodeCheck(true);
        }else{
          //유효하지 않은 입력
          setCodeCheck(false);
        }

      };

    //문자 전송
    const sendMessage = useCallback(() => {
        axios.post('/user/sendSMS',{phone}).then((response)=>{
            setSendSMS(response.data.result);
            setTimer(true);
            // setCodeTime(3*60);
            //테스트용 타이머
            setCodeTime(30);
        })
    });

    //문자 발송 후, 타이머 작동
    useEffect(()=> {
        let countdown;
        if(timer && codeTime > 0){
            countdown = setTimeout(()=>{
                setCodeTime(codeTime - 1);
            }, 1000);
        }
        if(codeTime === 1){
            alert('인증시간이 만료 되었습니다!');
                setSendSMS('');
                setTimer(false);
        }
    },[timer, codeTime]);

    // 타이머 시간 변환 (분:초)
    const formatTime = (second) => {
        const minutes = Math.floor(second/60);
        const seconds = second%60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    //인증번호 일치여부 확인
    const checkCode = useCallback(()=>{
        axios.post('/user/phoneCheck',{code}).then((response)=>{
            setSuccess(response.data.data);
            if(response.data.data==='success'){
                console.log('userId2 :: '+userId);
                console.log('phone 2:: '+phone)
            //회원 가입
            if(path === 'addUser'){
                navigate('/addUser', {state:{phone}});
            }
            
            //아이디 찾기
            if(path === 'findId'){
                axios.post('/user/findId',{phone}).then((response)=> {
                    if(response.data.data !== ''){
                        console.log('test.. phone 값은? '+phone);
                        console.log('response ID :: '+response.data.data);
                        navigate('/findInfoId/'+response.data.data);
                    }
                    if(response.data.data === 'snsUser'){
                        alert('회원님은 sns 유저입니다! sns로그인을 해주세요!');
                        navigate('/');
                    }
                    
                })            
            }
            //비밀번호 찾기
            if(path === 'findPasswd'){
                    axios.get('/user/getUser/'+userId).then((response)=> {
                        console.log('입력받은 id :: '+userId);
                        console.log('입력받은 id에 해당하는 휴대폰 번호 :: '+response.data.data.phone);
                        if(phone === response.data.data.phone){
                            // alert('비밀번호 변경창으로 이동..');
                            navigate('/findInfoPasswd/'+userId);
                        }
                        if(phone !== response.data.data.phone){
                            alert('등록된 휴대폰 번호가 아닙니다.');
                        }
                    })
            }
        }
        if(response.data.data==='fail'){
            alert('인증번호 오류!');
        }
        })
    }, [code, path, navigate, phone, userId]);
                // 아이디 찾기 & 비밀번호 찾기 테스트
                // const findIdTest = () => {
                //     axios.post('/user/findId',{phone}).then((response)=> {
                //         console.log('test.. phone 값은? '+phone);
                //         console.log('response ID :: '+response.data.data);
                //         navigate('/findInfoId/'+response.data.data);
                //     });
                // }
                

                // const findPasswdTest = () => {
                //     axios.get('/user/getUser'+userId).then((response)=> {
                //         console.log('입력받은 phone :: '+phone);
                //         console.log('입력받은 id에 해당하는 휴대폰 번호 :: '+response.data.data.phone);
                //         if(phone === response.data.data.phone){
                //             alert('비밀번호 변경창으로 이동..');
                //             navigate('/findInfoPasswd'+userId);
                //         }
                //         if(phone !== response.data.data.phone){
                //             alert('등록된 휴대폰 번호가 아닙니다.');
                //         }
                //     })
                // };


    console.log('요청 path :: '+path)
    // console.log('문자 발송 여부 :: '+sendSMS);
    // console.log('인증 완료 여부 :: '+success);

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
                                                        <Modal_title_h4>
                                                        {path === 'addUser' ? '휴대폰 인증' : path === 'findId' ? '아이디 찾기' : '비밀번호 찾기'}
                                                        </Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form>
                                                    <Modal_body_lay_div >
                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                            {sendSMS === 'success' ?
                                                                        ''
                                                                        :
                                                                        <>
                                                                            {path === 'findPasswd' ? (
                                                                                <>
                                                                                    <Modal_body_id_div_2>
                                                                                        <Modal_body_id_div_3>
                                                                                            <Modal_body_id_lable>아이디</Modal_body_id_lable>
                                                                                        </Modal_body_id_div_3>
                                                                                    </Modal_body_id_div_2>
                                                                                    <Modal_body_id_input_div>
                                                                                        <Modal_body_id_input_div_2>
                                                                                            <Modal_body_id_input placeholder="회원님의 아이디를 입력해주세요" value={userId} onChange={idCheck} style={{ marginBottom: '20px' }}/>
                                                                                            {userId === null || userId === '' ? '' : findPasswd === 'useNo' ? '' : <p style={{ color: 'red', marginTop:'10px' }}>존재하지 않는 회원입니다.</p>}
                                                                                        </Modal_body_id_input_div_2>
                                                                                    </Modal_body_id_input_div>
                                                                                </>
                                                                            ) : (
                                                                                ''
                                                                            )}
                                                                        </>
                                                                    }
                                                            {sendSMS !== 'success' ? (
                                                                <>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>휴대폰 번호</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                {phone ==='' ? (
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input placeholder="'-'를 제외한 숫자만 입력해주세요." value={phone} onChange={handelPhoneCheck}></Modal_body_id_input>
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                                ) : (
                                                                path === 'findId' ? (
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input placeholder="'-'를 제외한 숫자만 입력해주세요." value={phone} onChange={handelPhoneCheck}></Modal_body_id_input>
                                                                        {phoneCheck === true ? '':<p style={{ color: 'red' , marginTop:'10px'}}>숫자만 입력해주세요.</p>}
                                                                        {dbUserId === 'user' ? '':<p style={{ color: 'red' , marginTop:'10px'}}>입력받은 번호에 해당하는 회원이 없습니다.</p>}
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                                 ) : (
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input placeholder="'-'를 제외한 숫자만 입력해주세요." value={phone} onChange={handelPhoneCheck}></Modal_body_id_input>
                                                                        {phoneCheck === true ? '':<p style={{ color: 'red' , marginTop:'10px' }}>숫자만 입력해주세요.</p>}
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                                 )
                                                                )}
                                                                </>
                                                             ) : (
                                                                <>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>
                                                                            인증 번호 <span style={{color:'red'}}> ({formatTime(codeTime-1)})</span>
                                                                            <div style={{ clear: 'both' }}></div>
                                                                        </Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>

                                                                {code ==='' ? (
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input placeholder="인증번호를 입력해주세요." value={code} onChange={handelCodeCheck}></Modal_body_id_input>
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                                ) : (
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input placeholder="인증번호를 입력해주세요." value={code} onChange={handelCodeCheck}></Modal_body_id_input>
                                                                        {codeCheck === true ? '':<p style={{ color: 'red', marginTop:'10px' }}>숫자만 입력해주세요.</p>}
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                                )}
                                                                </>
                                                            )}
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_login_submit_div>
                                                            <Modal_login_submit_div_2>
                                                                <Modal_login_submit_div_3></Modal_login_submit_div_3>
                                                                
                                                                {!sendSMS ? (
                                                                <>
                                                                {buttonChange ===false ? (
                                                                    
                                                                        <Modal_login_submit_button_div disabled>
                                                                            <Modal_login_submit_noinput_div>문자 발송</Modal_login_submit_noinput_div>
                                                                        </Modal_login_submit_button_div>
                                                                    
                                                                ) : (
                                                                     <>
                                                                    {
                                                                        path === 'findId' ? (
                                                                          dbUserId !== 'user' ? (
                                                                            <Modal_login_submit_button_div disabled>
                                                                              <Modal_login_submit_noinput_div>문자 발송</Modal_login_submit_noinput_div>
                                                                            </Modal_login_submit_button_div>
                                                                          ) : (
                                                                            <Modal_login_submit_input_button_div>
                                                                              <Modal_login_submit_input_div onClick={sendMessage}>문자 발송</Modal_login_submit_input_div>
                                                                            </Modal_login_submit_input_button_div>
                                                                          )
                                                                        ) : (
                                                                          <Modal_login_submit_input_button_div>
                                                                            <Modal_login_submit_input_div onClick={sendMessage}>문자 발송</Modal_login_submit_input_div>
                                                                          </Modal_login_submit_input_button_div>
                                                                        )
                                                                      }
                                                                    </> 
                                                                      
                                                                )}
                                                                </>
                                                                ):(
                                                                <>
                                                                {codeButton ===false ? (
                                                                    
                                                                        <Modal_login_submit_button_div disabled>
                                                                            <Modal_login_submit_noinput_div>인증하기</Modal_login_submit_noinput_div>
                                                                        </Modal_login_submit_button_div>
                                                                    
                                                                ) : (
                                                                     
                                                                            <Modal_login_submit_input_button_div>
                                                                                 <Modal_login_submit_input_div onClick={checkCode}>인증하기</Modal_login_submit_input_div>
                                                                            </Modal_login_submit_input_button_div>
                                                                      
                                                                )}
                                                                </>
                                                                )}
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

export default sendSMS;