/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import {Start_Streaming_SelectBox, Start_Streaming_SelectBox_Option,Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from './style';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Header from './header';

const startStreamingModal = ({onClose, setOnClose, handleSubmit}) => {
    const navigate = useNavigate();
    const [streamingTitle, setStreamingTitle]= useState('');
    const [streamingCategory, setStreamingCategory] = useState('1');
    const [mouseOver, setMouseOver] = useState(false);
    const [buttonChange, setButtonChange] = useState(false);
    const modalRef = useRef(null);
    
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

    const onChangestreamingTitle = useCallback((event) =>{
        setStreamingTitle(event.target.value);
        
    },[streamingTitle])

    const onChangestreamingCategory = useCallback((event) => {
        const value = event.target.value;
        setStreamingCategory(value);
    },[streamingCategory])

    useEffect(()=> {
        if(streamingTitle!=='' && streamingCategory !=='' ) {
            setButtonChange(true);
        }
        if(streamingTitle==='' || streamingCategory==='' ){
            setButtonChange(false);
        }
    })
    
    const handleMouseOver = () => {
        setMouseOver(true);
    }

    const handleMouseLeave = () => {
        setMouseOver(false);
    }

    const handleModalSubmit = () => {
        const data = {
            streamingTitle : streamingTitle,
            streamingCategory : streamingCategory
        }
        handleSubmit(data);
    }    

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
                                                        {/* <Modal_title_figure><img src={ process.env.PUBLIC_URL+'/img/SSTV_mini.gif'}/></Modal_title_figure> */}
                                                        <Modal_title_write_div>
                                                            <Modal_title_h4>SSTV에서 스트리밍 시작해보세요!</Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form onSubmit={handleModalSubmit}>
                                                    <Modal_body_lay_div >

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 제목</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>

                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input value={streamingTitle} onChange={onChangestreamingTitle}></Modal_body_id_input>
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        

                                                                        

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 카테고리</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Start_Streaming_SelectBox value={streamingCategory} onChange={onChangestreamingCategory}>
                                                                    <option value='1'>게임</option>
                                                                    <option value='2'>일상</option>
                                                                    <option value='3'>스포츠</option>
                                                                    <option value='4'>먹방</option>
                                                                    <option value='5'>요리</option>
                                                                    <option value='6'>교육</option>
                                                                </Start_Streaming_SelectBox>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        

                                                        <Modal_login_submit_div>
                                                            <Modal_login_submit_div_2>
                                                                <Modal_login_submit_div_3></Modal_login_submit_div_3>
                                                                
                                                                {buttonChange ===false ? 
                                                                    <Modal_login_submit_button disabled>
                                                                        <Modal_login_submit_button_div >
                                                                            <Modal_login_submit_noinput_div>스트리밍 시작</Modal_login_submit_noinput_div>
                                                                        </Modal_login_submit_button_div>
                                                                    </Modal_login_submit_button> 
                                                                :
                                                                     <Modal_login_submit_input_button>
                                                                            <Modal_login_submit_input_button_div>
                                                                                 <Modal_login_submit_input_div>스트리밍 시작</Modal_login_submit_input_div>
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

export default startStreamingModal;