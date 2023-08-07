/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from '../Chat/donationStyle'
import './style.css';

const StreamingBanModal = ({onClose, setOnClose, data}) => {
    const streamingRollBan = data;
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

    const getReportType = (reportCode) => {
        let reportType;
    
        switch (reportCode) {
          case 1:
            reportType = '불법/음란';
            break;
          case 2:
            reportType = '저작권 침해';
            break;
          case 3:
            reportType = '명예훼손';
            break;
          case 4:
            reportType = '청소년 유해';
            break;
          case 5:
            reportType = '기타';
            break;
          default:
            break;
        }
        return reportType;
      }

      const getCategory = (categoryId) => {
        let result;
        switch(categoryId) {
            case 1:
                result = '게임';
                break;
            case 2:
                result = '일상';
                break;
            case 3:
                result = '스포츠';
                break;
            case 4:
                result = '먹방';
                break;
            case 5:
                result = '요리';
                break;
            case 6:
                result = '교육';
                break;
            default:
                break;
        }
        return result;
      }
    return(

        <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>
            <div id="layerBuyNoneSubscription" class="ui-pop layer-gudok">
                <p class="pop-title">회원정보</p>
                <div class="pop-body"><div class="scroll_box">
                    <div class="gudok_bj">
                                <div class="gudok_bj">
                                    <p><em>{streamingRollBan.USER_ID}</em><i></i>님의 스트리밍권한정지 정보입니다.</p>
                                </div>
                            </div>
                    <div class="signature ">
                        <h3>회원 아이디</h3>
                        <ul><li class="noList">{streamingRollBan.USER_ID}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>회원 닉네임</h3>
                        <ul><li class="noList">{streamingRollBan.USER_NICKNAME}</li></ul>
                    </div>

                    <div class="signature ">
                        <h3>누적 시청자수</h3>
                        <ul><li class="noList">{streamingRollBan.ACCUMULATED_VIEWERS}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>누적 스트리밍시간</h3>
                        <ul><li class="noList">{streamingRollBan.TOTAL_STREAMING_ACCUMULATED_TIME}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>보유 코인</h3>
                        <ul><li class="noList">{streamingRollBan.COIN}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>정지 유형</h3>
                        <ul><li class="noList">{getReportType(streamingRollBan.BAN_TYPE)}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>정지 내역</h3>
                        <ul><li class="noList">{streamingRollBan.BAN_CONTENT}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>정지 시작일</h3>
                        <ul><li class="noList">{streamingRollBan.BAN_START_DATE}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>정지 만료일</h3>
                        <ul><li class="noList">{streamingRollBan.BAN_END_DATE}</li></ul>
                    </div>
                    
                </div>
                </div>
            </div>
            </Modal>
    </Outline_area_2> 
        // <Modal_main_div >
        //     <Modal_overlay_div >
        //         <Modal_Content_div >
        //             <Modal_layout_div  >
        //                 <Modal_area_div id='modalArea' ref={modalRef} >
        //                     <Modal_area_layout_div >
        //                         <Modal_area_layout_div_2 >
        //                             <Modal_area_layout_div_3 >
        //                                 <Modal_area_1_div >
        //                                     <Modal_title_div>
        //                                         <Modal_title_div_2>
        //                                             <Modal_title_div_3>
        //                                                 <Modal_title_write_div>
        //                                                     <Modal_title_h4>스트리밍정지 상세정보</Modal_title_h4>
        //                                                 </Modal_title_write_div>
        //                                             </Modal_title_div_3>
        //                                         </Modal_title_div_2>
        //                                     </Modal_title_div>


        //                                     <Modal_body_div>
        //                                         <Modal_body_form>
        //                                             <Modal_body_lay_div >
        //                                                 <Modal_body_id_div>
        //                                                     <Modal_body_id_div_1>
        //                                                         <Modal_body_id_div_2>
        //                                                             <Modal_body_id_div_3>
        //                                                                 <Modal_body_id_lable>회원 ID</Modal_body_id_lable>
        //                                                             </Modal_body_id_div_3>
        //                                                         </Modal_body_id_div_2>
        //                                                         <Modal_body_id_lable>{streamingRollBan.USER_ID}</Modal_body_id_lable>
        //                                                     </Modal_body_id_div_1>
        //                                                 </Modal_body_id_div>

        //                                                 <Modal_body_id_div>
        //                                                     <Modal_body_id_div_1>
        //                                                         <Modal_body_id_div_2>
        //                                                             <Modal_body_id_div_3>
        //                                                                 <Modal_body_id_lable>회원 닉네임</Modal_body_id_lable>
        //                                                             </Modal_body_id_div_3>
        //                                                         </Modal_body_id_div_2>
        //                                                         <Modal_body_id_lable>{streamingRollBan.USER_NICKNAME}</Modal_body_id_lable>
        //                                                     </Modal_body_id_div_1>
        //                                                 </Modal_body_id_div>

        //                                                 <Modal_body_id_div>
        //                                                     <Modal_body_id_div_1>
        //                                                         <Modal_body_id_div_2>
        //                                                             <Modal_body_id_div_3>
        //                                                                 <Modal_body_id_lable>누적 시청자수</Modal_body_id_lable>
        //                                                             </Modal_body_id_div_3>
        //                                                         </Modal_body_id_div_2>
        //                                                         <Modal_body_id_lable>{streamingRollBan.ACCUMULATED_VIEWERS}</Modal_body_id_lable>
        //                                                     </Modal_body_id_div_1>
        //                                                 </Modal_body_id_div>

        //                                                 <Modal_body_id_div>
        //                                                     <Modal_body_id_div_1>
        //                                                         <Modal_body_id_div_2>
        //                                                             <Modal_body_id_div_3>
        //                                                                 <Modal_body_id_lable>누적 스트리밍시간</Modal_body_id_lable>
        //                                                             </Modal_body_id_div_3>
        //                                                         </Modal_body_id_div_2>
        //                                                         <Modal_body_id_lable>{streamingRollBan.TOTAL_STREAMING_ACCUMULATED_TIME}</Modal_body_id_lable>
        //                                                     </Modal_body_id_div_1>
        //                                                 </Modal_body_id_div>

        //                                                 <Modal_body_id_div>
        //                                                     <Modal_body_id_div_1>
        //                                                         <Modal_body_id_div_2>
        //                                                             <Modal_body_id_div_3>
        //                                                                 <Modal_body_id_lable>보유 코인</Modal_body_id_lable>
        //                                                             </Modal_body_id_div_3>
        //                                                         </Modal_body_id_div_2>
        //                                                         <Modal_body_id_lable>{streamingRollBan.COIN}</Modal_body_id_lable>
        //                                                     </Modal_body_id_div_1>
        //                                                 </Modal_body_id_div>

        //                                                 <Modal_body_id_div>
        //                                                     <Modal_body_id_div_1>
        //                                                         <Modal_body_id_div_2>
        //                                                             <Modal_body_id_div_3>
        //                                                                 <Modal_body_id_lable>정지 유형</Modal_body_id_lable>
        //                                                             </Modal_body_id_div_3>
        //                                                         </Modal_body_id_div_2>
        //                                                         <Modal_body_id_lable>{getReportType(streamingRollBan.BAN_TYPE)}</Modal_body_id_lable>
        //                                                     </Modal_body_id_div_1>
        //                                                 </Modal_body_id_div>

        //                                                 <Modal_body_id_div>
        //                                                     <Modal_body_id_div_1>
        //                                                         <Modal_body_id_div_2>
        //                                                             <Modal_body_id_div_3>
        //                                                                 <Modal_body_id_lable>정지 내역</Modal_body_id_lable>
        //                                                             </Modal_body_id_div_3>
        //                                                         </Modal_body_id_div_2>
        //                                                         <Modal_body_id_lable>{streamingRollBan.BAN_CONTENT}</Modal_body_id_lable>
        //                                                     </Modal_body_id_div_1>
        //                                                 </Modal_body_id_div>


        //                                                 <Modal_body_id_div>
        //                                                     <Modal_body_id_div_1>
        //                                                         <Modal_body_id_div_2>
        //                                                             <Modal_body_id_div_3>
        //                                                                 <Modal_body_id_lable>정지 시작일</Modal_body_id_lable>
        //                                                             </Modal_body_id_div_3>
        //                                                         </Modal_body_id_div_2>
        //                                                         <Modal_body_id_lable>{streamingRollBan.BAN_START_DATE}</Modal_body_id_lable>
        //                                                     </Modal_body_id_div_1>
        //                                                 </Modal_body_id_div>

        //                                                 <Modal_body_id_div>
        //                                                     <Modal_body_id_div_1>
        //                                                         <Modal_body_id_div_2>
        //                                                             <Modal_body_id_div_3>
        //                                                                 <Modal_body_id_lable>정지 만료일</Modal_body_id_lable>
        //                                                             </Modal_body_id_div_3>
        //                                                         </Modal_body_id_div_2>
        //                                                         <Modal_body_id_lable>{streamingRollBan.BAN_END_DATE}</Modal_body_id_lable>
        //                                                     </Modal_body_id_div_1>
        //                                                 </Modal_body_id_div>

        //                                             </Modal_body_lay_div>
        //                                         </Modal_body_form>
        //                                     </Modal_body_div>


        //                                 </Modal_area_1_div>
        //                             </Modal_area_layout_div_3>
        //                         </Modal_area_layout_div_2>
        //                     </Modal_area_layout_div>
        //                 </Modal_area_div>
        //             </Modal_layout_div>
        //         </Modal_Content_div>
        //     </Modal_overlay_div>
        // </Modal_main_div>
    )

}

export default StreamingBanModal;