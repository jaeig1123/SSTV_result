/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
const donationModal = ({onClose, setOnClose}) => {
    const modalRef = useRef(null);
    const cancleRef = useRef(null);
    const [coin, setCoin] = useState('');
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

    const resetCoin = () => {
        setCoin('');
    }
    const inputCoin = () => {
        setCoin(event.target.value);
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
            <Layer_in>
                <Send_area>
                    <Gift_at>
                        <Gift_dt>
                            <Gift_strong>admin(admin)</Gift_strong>님께 선물
                        </Gift_dt>
                        <Gift_dd>
                            <Gift_dd_span>선물할 코인</Gift_dd_span>
                            <Gift_dd_input value={coin} onChange={inputCoin} placeholder='0'></Gift_dd_input>
                            <Gift_dd_count_span>개</Gift_dd_count_span>
                            <Gift_dd_button onClick={resetCoin}><FontAwesomeIcon icon={faCircleXmark} style={{color: "#8f9299",}} /></Gift_dd_button>
                            
                        </Gift_dd>
                    </Gift_at>

                    <Gift_st>
                        <ST_dt>보유 코인</ST_dt>
                        <ST_dd>
                            
                            <ST_dd_span>0</ST_dd_span>
                    
                            개
                        </ST_dd>
                        {coin >= 1? 
                        <ST_dd_error>
                            <ST_dd_em><FontAwesomeIcon icon={faCircleExclamation} style={{color: "#e21818",}} /></ST_dd_em>
                            <ST_dd_error_span>보유 코인 부족</ST_dd_error_span>
                        </ST_dd_error>
                        :null}
                        <Btn_buy>구매</Btn_buy>
                    </Gift_st>

                    <Gift_input>
                        <Gift_input_h3>선물 메시지</Gift_input_h3>
                        <Gift_input_span >
                            <Gift_void_text placeholder='스트리머에게 보낼 후원 메세지를 입력하세요.'></Gift_void_text>
                        </Gift_input_span>
                    </Gift_input>

                    <Button_area>
                        <Button_gift_button >선물하기</Button_gift_button>
                        <Button_cancle_button ref={cancleRef} onClick={onClickCancle}>취소</Button_cancle_button>
                    </Button_area>
                </Send_area>
            </Layer_in>
        </Modal>
    </Outline_area_2> 
        
    )
}

export default donationModal;