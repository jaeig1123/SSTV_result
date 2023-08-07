/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const finishStreamingModal = ({onClose, setOnClose, onClick, onSubmit}) => {
    const modalRef = useRef(null);
    const cancleRef = useRef(null);
    const [streamingTitle, setStreamingTitle] = useState('');
    const [streamingCategory, setStreamingCategory] = useState('1');
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

    const handleStreaming = (event) => {
        setStreamingTitle(event.target.value);
    }

    const handleCategory = (event) => {
        setStreamingCategory(event.target.value);
    }

    const handleOnSubmit = () => {
        const data = {
            streamingTitle : streamingTitle,
            streamingCategory : streamingCategory
        }

        onSubmit(data);
    }
    
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
    <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>
            <div class="ui-pop improve report_layer win">
                <p class="pop-title">스트리밍 정보 변경</p>
                <div class="pop-body">
                    <strong>변경하실 스트리밍 정보를 입력해주세요</strong>
                    <div>
                        <select 
                        name="report_type" 
                        id="report_type"
                        value={streamingCategory}
                        onChange={handleCategory}
                        >
                            <option value='1'>게임</option>
                            <option value='2'>일상</option>
                            <option value='3'>스포츠</option>
                            <option value='4'>먹방</option>
                            <option value='5'>요리</option>
                            <option value='6'>교육</option>
                        </select>
                    </div>
                    <input id="report_reason" cols="30" rows="10" value={streamingTitle} onChange={handleStreaming} placeholder="스트리밍 제목을 입력해주세요(20자 미만)"></input>    
                </div>
                <div class="pop-btn">
                    <a class="btn btn_blue" id="report_pop" onClick={handleOnSubmit}>변경하기</a>
                    {/* <a class="btn btn_white" id="page_close" ref={cancleRef} onClick={onClickCancle}>취소</a> */}
                </div>
            </div>
        </Modal>
    </Outline_area_2> 
        
    )
}

export default finishStreamingModal;