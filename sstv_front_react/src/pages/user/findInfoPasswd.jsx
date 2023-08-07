/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';
import axios from 'axios';

const findPasswd = ({onClose, setOnClose}) => {
    const [mouseOver, setMouseOver] = useState(false);
    const modalRef = useRef(null);
    const [codeCheck, setCodeCheck] = useState('');
    const [codeButton, setCodeButton] = useState(false);
    const {userId} = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [buttonChange, setButtonChange] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
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

    useEffect(()=> {
        if(password !=='' && passwordCheck !==''&& password === passwordCheck){
            setButtonChange(true);
        }
        if(password ==='' || passwordCheck ===''|| password !== passwordCheck){
            setButtonChange(false);
        }
    })

    const onChangePassword = useCallback((event) => {
        setPassword(event.target.value);
    },[password])
    const onChangePasswordCheck = useCallback((event) => {
      setPasswordCheck(event.target.value);
    },[passwordCheck])

    const onSubmit = useCallback(() => {
        axios.post('/user/findPasswd',
            {userId, password}
        )
        .then((response)=> {
            console.log(response.data.data);
        })
        // alert('비밀번호가 변경 되었습니다.');
        navigate('/');
      
    },[password])

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
                                                        <Modal_title_h4>비밀번호 변경</Modal_title_h4>
                                                    </Modal_title_write_div>
                                                </Modal_title_div_3>
                                            </Modal_title_div_2>
                                        </Modal_title_div>


                                        <Modal_body_div>
                                            <Modal_body_form onSubmit={onSubmit}>
                                                <Modal_body_lay_div >

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

                                                    <Modal_login_submit_div>
                                                        <Modal_login_submit_div_2>
                                                            <Modal_login_submit_div_3></Modal_login_submit_div_3>
                                                            
                                                            {buttonChange ===false ? 
                                                                <Modal_login_submit_button disabled>
                                                                    <Modal_login_submit_button_div >
                                                                        <Modal_login_submit_noinput_div>비밀번호 변경</Modal_login_submit_noinput_div>
                                                                    </Modal_login_submit_button_div>
                                                                </Modal_login_submit_button> 
                                                            :
                                                                 <Modal_login_submit_input_button>
                                                                        <Modal_login_submit_input_button_div>
                                                                             <Modal_login_submit_input_div>비밀번호 변경</Modal_login_submit_input_div>
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

export default findPasswd;