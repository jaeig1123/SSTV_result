/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from '../Chat/donationStyle'

const ReportModal = ({onClose, setOnClose, data, onClick}) => {
    const user = data;
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

    const handleOnClick = () => {
        onClick();
    }
    
    const getStRoll = (stRoll) => {
        if(stRoll == 0) {
            return '가능';
        }else {
            return '정지';
        }
    }
      
    return(
        <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>
            <div id="layerBuyNoneSubscription" class="ui-pop layer-gudok">
                <p class="pop-title">회원정보</p>
                <div class="pop-body"><div class="scroll_box">
                    <div class="gudok_bj">
                                <div class="gudok_bj">
                                    <p><em>{user.USER_ID}</em><i>({(user.USER_NAME)})</i>님의 회원정보입니다.</p>
                                </div>
                            </div>
                    <div class="signature ">
                        <h3>회원 아이디</h3>
                        <ul><li class="noList">{user.USER_ID}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>회원 닉네임</h3>
                        <ul><li class="noList">{user.USER_NICKNAME}</li></ul>
                    </div>

                    <div class="signature ">
                        <h3>회원 생년월일</h3>
                        <ul><li class="noList">{user.DATE_BIRTH}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>회원 이메일</h3>
                        <ul><li class="noList">{user.EMAIL}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>회원 휴대폰</h3>
                        <ul><li class="noList">{user.PHONE}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>회원 가입일자</h3>
                        <ul><li class="noList">{user.SIGN_DATE}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>회원 보유코인</h3>
                        <ul><li class="noList">{user.COIN}</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>회원 스트리밍 시간</h3>
                        <ul><li class="noList">{user.TOTAL_STREAMING_ACCUMULATED_TIME}분</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>회원 누적시청자수</h3>
                        <ul><li class="noList">{user.ACCUMULATED_VIEWERS}명</li></ul>
                    </div>
                    <div class="signature ">
                        <h3>회원 스트리밍 권한</h3>
                        
                        {user.ST_ROLL === 0 ? (
                            <>
                                <ul><li class="noList">{getStRoll(user.ST_ROLL)}</li></ul>
                                <pre>권한 정지하기 <FontAwesomeIcon icon={faUserXmark} className="fa-2x" onClick = {handleOnClick}/></pre>
                            </>
                            ) : (
                                <ul><li class="noList">{getStRoll(user.ST_ROLL)}</li></ul>
                        )}
                    </div>
                </div>
                </div>
            </div>
            </Modal>
    </Outline_area_2> 
    )

}

export default ReportModal;