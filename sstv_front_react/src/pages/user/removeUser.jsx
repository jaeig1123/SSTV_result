/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';
import axios from 'axios';
import ReactDOM from 'react-dom';

const removeUser = ({onClose, setOnClose}) => {
    const [mouseOver, setMouseOver] = useState(false);
    const modalRef = useRef(null);
    const [code, setCode] = useState('');
    const [codeCheck, setCodeCheck] = useState('');
    const [codeButton, setCodeButton] = useState(false);
    const [agree, setAgree] = useState(false);
    const [rand, setRand] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handler = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOnClose(false); 
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [onClose]);

    useEffect(()=> {
        if(code !=='' && codeCheck ===true){
            setCodeButton(true);
        }
        if(code ==='' || codeCheck ===false){
            setCodeButton(false);
        }

    })

      const handelCodeCheck = (e) => {
        const inputCode = e.target.value;
        setCode(e.target.value);
        const codePattern = inputCode.replace(/\D/g, '');

        if(codePattern === inputCode) {
          //숫자만 입력 받은 경우
          setCodeCheck(true);
        }else{
          //유효하지 않은 입력
          setCodeCheck(false);
        }

      };
    //회원탈퇴 진행
    const next = () => {
        setAgree(true);
        createRand();
        };

    console.log('동의여부 확인 :: '+agree)
    
    //탈퇴를 위한 인증번호 생성
    const createRand = () => {
        const random = Math.floor(Math.random()*999999);
        setRand(random);
    }
    console.log('생성된 난수 :: '+rand);
    console.log('입력 받은 코드 :: '+code);

    //회원탈퇴절차 시작&로그아웃 처리 후 메인화면으로 이동
    const onSubmit = useCallback(() => {
        if (rand === code) {
        axios.get('/user/removeUserStart')
        .then((response)=> {
        })
        axios.get('/user/logout').then((response)=>{
        })}
        if(rand !== code){
            alert('인증번호 오류');
        }
        
        alert('회원탈퇴 신청이 완료 되었습니다.');
        navigate('/');

    },[])


    return(

        
        <Modal_main_div >
            <Modal_overlay_div >
                <Modal_Content_div >
                    <Modal_layout_div  >
                        <Modal_area_div id='modalArea' ref={modalRef} style={{ zIndex: 9999 }} >
                            <Modal_area_layout_div >
                                <Modal_area_layout_div_2 >
                                    <Modal_area_layout_div_3 >
                                        <Modal_area_1_div >
                                            <Modal_title_div>
                                                <Modal_title_div_2>
                                                    <Modal_title_div_3>
                                                        <Modal_title_figure><img src={ process.env.PUBLIC_URL+'/img/SSTV_mini.gif'}/></Modal_title_figure>
                                                        <Modal_title_write_div>
                                                            <Modal_title_h4>회원 탈퇴</Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form onSubmit={onSubmit}>
                                                    <Modal_body_lay_div >
                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                            {agree !== true ? (
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>
                                                                            (1) 회원 탈퇴시 보유중인 코인을 포함한 모든 정보가 삭제됩니다.<br/><br/>
                                                                            (2) 신청 완료시 로그아웃 처리되며 14일의 유예기간이 주어집니다.<br/><br/> 
                                                                            (3) 기간이 지나기전 로그인할 경우 회원 탈퇴가 취소 됩니다.<br/><br/>
                                                                            <div style={{ textAlign: 'center' }}>
                                                                            <p style={{ color: 'red' }}>탈퇴 진행을 원하시면 다음 버튼을 눌러주세요.</p>
                                                                            </div>
                                                                        </Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                             ) : (
                                                                <>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>회원 탈퇴를 진행하시려면 인증번호 [<span style={{ color: 'yellow' }}>{rand}</span>] 를 입력해주세요</Modal_body_id_lable>
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
                                                                        {codeCheck === true ? '':<p style={{ color: 'red' }}>숫자만 입력해주세요.</p>}
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
                                                                {agree !== true ? (
                                                                            <Modal_login_submit_input_button_div>
                                                                                 <Modal_login_submit_input_div onClick={next}>다음</Modal_login_submit_input_div>
                                                                            </Modal_login_submit_input_button_div>
                                                                ):(
                                                                <>
                                                                {codeButton ===false ? (
                                                                    
                                                                        <Modal_login_submit_button disabled>
                                                                            <Modal_login_submit_button_div >
                                                                                <Modal_login_submit_noinput_div>회원탈퇴</Modal_login_submit_noinput_div>
                                                                            </Modal_login_submit_button_div >
                                                                        </Modal_login_submit_button>
                                                                        
                                                                    
                                                                ) : (
                                                                     
                                                                            <Modal_login_submit_input_button>
                                                                                <Modal_login_submit_input_button_div >
                                                                                    <Modal_login_submit_input_div onClick={onSubmit}>회원탈퇴</Modal_login_submit_input_div>
                                                                                </Modal_login_submit_input_button_div >
                                                                            </Modal_login_submit_input_button>                                                                     
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

export default removeUser;