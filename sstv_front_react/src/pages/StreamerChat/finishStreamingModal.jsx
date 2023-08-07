/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import './style.css';


const finishStreamingModal = ({onClose, setOnClose, onClick}) => {
    const modalRef = useRef(null);
    const cancleRef = useRef(null);
    const [inputText, setInputText] = useState('');

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

    const handleInputText = (event) => {
        setInputText(event.target.value);
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
                <p class="pop-title">스트리밍 종료</p>
                <div class="pop-body">
                    <strong>스트리밍 종료를 원하시면 '스트리밍 종료'를 입력해주세요</strong>
                    <div>
                        <input id="report_reason" cols="30" rows="10" value={inputText} onChange={handleInputText}></input>    
                    </div>
                </div>

                {inputText != '스트리밍 종료'? 
                    <></>
                    :
                    <div class="pop-btn">
                        <a class="btn btn_blue" id="report_pop" onClick = {() => onClick()}>종료</a>
                    </div>        
                }
            </div>
        </Modal>
    </Outline_area_2> 
        
    )
}

export default finishStreamingModal;