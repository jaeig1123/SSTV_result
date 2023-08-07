/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from '../StreamerChat/donationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { subscribeCallback } from 'swr/_internal';

const updateAdCycle = ({onClose, setOnClose, onClick, onSubmit}) => {
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
    
    const onClickCancle = ()=> {
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
                            <Gift_strong>광고 주기를 입력해주세요(분)</Gift_strong>
                        </Gift_dt>
                        <Gift_dd>
                            <Gift_dd_input value={inputText} onChange={handleInputText} placeholder='분'></Gift_dd_input>
                        </Gift_dd>
                    </Gift_at>

                    <Gift_st>
                        {inputText.length <= 0? 
                        <ST_dd_error>
                            <ST_dd_em><FontAwesomeIcon icon={faCircleExclamation} style={{color: "#e21818",}} /></ST_dd_em>
                            <ST_dd_error_span>주기를 입력해주세요.</ST_dd_error_span>
                        </ST_dd_error>
                        :
                        <Button_area>
                            <Button_gift_button onClick={() => onSubmit({adCycle : inputText})}>확인</Button_gift_button>
                        </Button_area>
                        }
                    </Gift_st>

                    
                </Send_area>
            </Layer_in>
        </Modal>
    </Outline_area_2> 
        
    )
}

export default updateAdCycle;