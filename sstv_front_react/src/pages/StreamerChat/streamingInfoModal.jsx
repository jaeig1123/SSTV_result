/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import './style.css';

const streamingInfoModal = ({onClose, setOnClose, data}) => {
    const streaming = data;
    const modalRef = useRef(null);
    const cancleRef = useRef(null);
    
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

    const handleCopyText = (flag) => {
        let textToCopy;

        switch(flag) {
            case 0 :
            textToCopy = streaming.publishUrlWithAd;
            break;

            case 1 :
            textToCopy = streaming.streamKeyWithAd;
            break;

            case 2 :
            textToCopy = streaming.publishUrlWithOutAd;
            break;

            case 3 :
            textToCopy = streaming.streamKeyWithOutAd;
            break;

            default :
            break;
        }

        const $textarea = document.createElement('textarea');
        document.body.appendChild($textarea);
        $textarea.value = textToCopy;
        
        alert('복사되었습니다.');
        
        $textarea.select();
        document.execCommand('copy');
        document.body.removeChild($textarea);
      };

    return (
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
            {/* <div class="benefits">
                <h3>광고 채널</h3>
                <div class="info_img">
                    <ul>
                        <li>구독료 후원</li>
                        <li>채팅 효과</li>
                        <li>구독팬 전용 닉네임</li>
                    </ul>
                </div>
            </div> */}
            <div class="signature ">
                <h3>광고 채널 Publish URL</h3>
                <button onClick={() => handleCopyText(0)}>
                    <ul><li class="noList">{streaming.publishUrlWithAd}</li></ul>
                </button>
            </div>
            <div class="signature ">
                <h3>광고 채널 StreamKey URL</h3>
                <button onClick={() => handleCopyText(1)}>
                <ul><li class="noList">{streaming.streamKeyWithAd}</li></ul>
                </button>
            </div>

            <div class="signature ">
                <h3>광고제거 채널 Publish URL</h3>
                <button onClick={() => handleCopyText(2)}>
                <ul><li class="noList">{streaming.publishUrlWithOutAd}</li></ul>
                </button>
            </div>
            <div class="signature ">
                <h3>광고제거 채널 StreamKey URL</h3>
                <button onClick={() => handleCopyText(3)}>
                <ul><li class="noList">{streaming.streamKeyWithOutAd}</li></ul>
                </button>
            </div>
        </div>
        </div>
    </div>
        </Modal>
    </Outline_area_2> 
    )
}

export default streamingInfoModal;