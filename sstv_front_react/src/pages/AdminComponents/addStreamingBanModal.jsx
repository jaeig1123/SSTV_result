/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect} from 'react';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from '../Chat/donationStyle'
import './style.css'

const addStreamingBanModal = ({onClose, setOnClose, data, onSubmit}) => {
    const streaming = data;
    const [banType, setBanType] = useState(1);
    const [banContent, setBanContent] = useState('');

    const modalRef = useRef(null);
    const [mouseOver, setMouseOver] = useState(false);
    const [buttonChange, setButtonChange] = useState(false);

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
        
    const handleMouseOver = () => {
        setMouseOver(true);
    }

    const handleMouseLeave = () => {
        setMouseOver(false);
    }    

    const handleBanTypeChange = (event) => {
        setBanType(event.target.value)
    }

    const handleBanContentChange = (event) => {
        setBanContent(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(banContent.length > 0) {
            onSubmit({
                banContent : banContent, 
                banType : banType, 
                streamingUserId : streaming.userId
            });    
        }else {
            alert('정지 내용을 입력해주세요');
        }
    }
    
    return(
        <div>
        <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>
        <title>스트리밍 권한정지 | 아프리카TV</title>
        <div class="ui-pop improve report_layer win">
            <p class="pop-title">스트리밍 정지</p>
            <div class="pop-body">
                    <strong>회원(STREAMER ID : <span class="color_bl">{streaming.userId}</span>)<br/>스트리밍 정지</strong>
                <div>
                    <select name="report_type" id="report_type" onChange={handleBanTypeChange} >
                        <option value='1'>불법/음란</option>
                        <option value='2'>저작권 침해</option>
                        <option value='3'>명예훼손</option>
                        <option value='4'>청소년 유해</option>
                        <option value='5'>기타</option>
                    </select>

                    <span class="select-gap"></span>

                    <select >
                        <option value="7">7일</option>
                        <option value="30">30일</option>
                    </select>
                    <textarea onChange={handleBanContentChange} id="report_reason"  cols="30" rows="10" placeholder="권한정지 사유를 작성해주세요. ">

                    </textarea>
                </div>
            </div>
            <div class="pop-btn">
                <div onClick={handleOnSubmit}><a class="btn btn_blue" id="report_pop" >정지</a></div>
            </div>
        </div>
        </Modal>
    </Outline_area_2> 
    </div>
    )

}

export default addStreamingBanModal;