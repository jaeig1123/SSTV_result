/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';
import axios from 'axios';

const findId = ({onClose, setOnClose}) => {
    const [mouseOver, setMouseOver] = useState(false);
    const modalRef = useRef(null);
    const [codeCheck, setCodeCheck] = useState('');
    const [codeButton, setCodeButton] = useState(false);
    const {userId} = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

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

    //비밀번호 찾기를 위한 휴대폰 인증 화면으로
    const findPasswdView =()=> {
        navigate('/sendSMS/findPasswd');
    }

    const login = () => {
        navigate('/');
    };

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
                                                            <Modal_title_h4>아이디 찾기</Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form>
                                                    <Modal_body_lay_div >
                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>회원님의 아이디는 [<span style={{ color: 'yellow' }}>{userId}</span>] 입니다.</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_help_div>
                                                            <Modal_body_help_a>
                                                                <Modal_body_help_p onClick={findPasswdView} style={{ float: 'left', cursor:'pointer' }}>비밀번호 찾기</Modal_body_help_p>
                                                            </Modal_body_help_a>
                                                        </Modal_body_help_div>

                                                        <Modal_login_submit_div>
                                                            <Modal_login_submit_div_2>
                                                                <Modal_login_submit_div_3></Modal_login_submit_div_3>                                                                     
                                                                            <Modal_login_submit_input_button>
                                                                                <Modal_login_submit_input_button_div >
                                                                                    <Modal_login_submit_input_div onClick={login} >로그인</Modal_login_submit_input_div>
                                                                                </Modal_login_submit_input_button_div >
                                                                            </Modal_login_submit_input_button>                                                                     
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

export default findId;