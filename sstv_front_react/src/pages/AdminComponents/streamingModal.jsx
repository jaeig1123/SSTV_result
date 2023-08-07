/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from '../Chat/donationStyle';
import ReactPlayer from 'react-player';
import './style.css'

const AdModal = ({onClose, setOnClose, data, onClick}) => {
    const streaming = data;
    const [mouseOver, setMouseOver] = useState(false);
    const modalRef = useRef(null);
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

    const getCategory = (categoryId) => {
        let result;
        switch(categoryId) {
            case '1':
                result = '게임';
                break;
            case '2':
                result = '일상';
                break;
            case '3':
                result = '스포츠';
                break;
            case '4':
                result = '먹방';
                break;
            case '5':
                result = '요리';
                break;
            case '6':
                result = '교육';
                break;
            default:
                break;
        }
        return result;
      }
    
    return(
        <div>
        <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>
        <div id="layerBuyNoneSubscription" class="ui-pop layer-gudok">
        <p class="pop-title">스트리밍</p>
        <div class="pop-body"><div class="scroll_box">
            <div class="gudok_bj">
                        <div class="gudok_bj">
                            <p><em>{streaming.userId}</em><i>({streaming.userNickname})</i> 님의 스트리밍 정보입니다.</p>
                        </div>
                    </div>
            <div class="benefits">
                <div class="info_img">
                    <ReactPlayer
                        url={streaming.serviceUrlWithOutAd}
                        controls
                        width="200x"
                        height="200px"
                    />
                    {/* <ul>
                        <li>구독료 후원</li>
                        <li>채팅 효과</li>
                        <li>구독팬 전용 닉네임</li>
                    </ul> */}
                </div>
            </div>
            <div class="signature ">
                <h3>스트리밍 제목</h3>
                <button >
                    <ul><li class="noList">{streaming.streamingStartTime}</li></ul>
                </button>
            </div>
            <div class="signature ">
                <h3>스트리밍 카테고리</h3>
                <button >
                <ul><li class="noList">{getCategory(streaming.streamingCategory)}</li></ul>
                </button>
            </div>

            <div class="signature ">
                <h3>스트리밍 시작시간</h3>
                <button >
                <ul><li class="noList">{streaming.streamingStartTime}</li></ul>
                </button>
            </div>
            <div class="signature ">
                <h3>스트리밍 실시간 시청자수</h3>
                <button >
                <ul><li class="noList">{streaming.streamingViewer}명</li></ul>
                </button>
            </div>
            <div class="signature ">
                <h3>후원 받은 금액</h3>
                <button >
                <ul><li class="noList">{streaming.totalDonationAmount}원</li></ul>
                </button>
            </div>

            <div class="signature ">
                <h3>스트리밍 정지</h3>
                <button >
                    <div class="pop-btn">
                        <a class="btn btn_blue" id="report_pop" onClick = {onClick}>정지</a>
                    </div>
                </button>
            </div>
        </div>
        </div>
    </div>
        </Modal>
    </Outline_area_2> 
    </div>
    )

}

export default AdModal;