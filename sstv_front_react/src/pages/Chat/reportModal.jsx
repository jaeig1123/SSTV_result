/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Report_select, Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import './reportModal.css'

const reportModal = ({onClose, setOnClose, data, onSubmit}) => {
    const streaming = data;
    const [reportType, setReportType] = useState(1);
    const [reportContent, setReportContent] = useState('');
    const modalRef = useRef(null);
    const cancleRef = useRef(null);

    const handleReportTypeOnChange = (event) => {
        setReportType(event.target.value);
    }

    const handleReportContentOnChange = (event) => {
        setReportContent(event.target.value);
    }

    const handleOnSubmit = () => {
        if(reportContent.length < 5) {
            alert('신고사유는 최소 5글자 이상 최대 100글자 이내로 작성해주세요.');
        }else {
            const data = {
                reportType : reportType,
                reportContent : reportContent
            };
            onSubmit(data);
        }
    }

    useEffect(()=> {
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
    
    const onClickCancle = ()=>{
        const handler = () => {
        if(cancleRef.current){
            setOnClose(false);
        }
    };
    document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
        
    }
    return (
        <div>         
    <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>
            <title>방송 신고 접수 | 아프리카TV</title>

            <div class="ui-pop improve report_layer win">
                <p class="pop-title">방송 신고 접수</p>
                <div class="pop-body">
                    <strong>본 방송(STREAMER ID : <span class="color_bl">{streaming.userId}</span>)을<br/>신고하겠습니까?</strong>
                    <div>
                        <select name="report_type" id="report_type" value={reportType} onChange={handleReportTypeOnChange}>
                            <option value='1'>불법/음란</option>
                            <option value='2'>저작권 침해</option>
                            <option value='3'>명예훼손</option>
                            <option value='4'>청소년 유해</option>
                            <option value='5'>기타</option>
                        </select>
                        <textarea id="report_reason" cols="30" rows="10" placeholder="신고사유를 작성해주세요. 
                                    (최소 5글자 이상 최대 100글자 이내로 작성해주세요.)"
                                    value={reportContent} onChange={handleReportContentOnChange}>

                        </textarea>
                        <p>신고하기 및 운영정책에 궁금하신 내용이 있으세요?<br/>꾹 참으세요.</p>
                    </div>
                </div>
                <div class="pop-btn">
                    <a class="btn btn_blue" id="report_pop" onClick={handleOnSubmit}>신고</a>
                    <a class="btn btn_white" id="page_close" ref={cancleRef} onClick={onClickCancle}>취소</a>
                </div>
            </div>
        </Modal>
    </Outline_area_2> 
    </div>
    )
}

export default reportModal;