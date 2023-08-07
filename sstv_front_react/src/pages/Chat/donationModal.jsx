/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import useSWR from 'swr'
import fetcher from '../utils/fetcher';
const donationModal = ({onClose, setOnClose, donationData, setDonationData, streamingData}) => {
    
    const modalRef = useRef(null);
    const cancleRef = useRef(null);
    const [donationAmount, setDonationAmount] = useState('');
    const [donationContent, setDonationContent] = useState('');
    const streamingUserId = streamingData.userId;
    const {data} = useSWR('/user/login', fetcher)
    const userId = data?.userId;
    console.log("model"+donationData);
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

    const onChangeContent =(event)=>{
        setDonationContent(event.target.value);
    }

    const resetCoin = () => {
        setDonationAmount('');
    }
    const inputCoin = (event) => {
        setDonationAmount(event.target.value);
    }
    
    const onClickCancle = ()=>{
        const handler = () => {
        if(cancleRef.current){
            setOnClose(false);
        }
    };
    document.addEventListener('click', handler);
        return () => {
            document.removeEventListener('click', handler);
        };
        
    }
    const onSubmit =()=> {
        console.log("console"+donationAmount, donationContent, userId, streamingUserId);
        axios.post('/donation/addDonation', 
        {donationAmount, donationContent, userId, streamingUserId, streamingNo : streamingData.streamingPk, voiceType : 'nara'})
        .then((response)=> {
            console.log(response.data);
            const jsonData =response.data;
            setDonationData(jsonData['firstData']);
            console.log(donationData);
        })
        axios.post('/user/addCoinHistory',{userId, ticketProdNo:0, prodName:0, price:donationAmount});
        
        const handler = () => {
            if(cancleRef.current){
                setOnClose(false);
            }
        };
        document.addEventListener('click', handler);
            return () => {
                document.removeEventListener('click', handler);
            };
    }

    return (
         
    <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>
            <Layer_in>
                <Send_area>
                    <Gift_at>
                        <Gift_dt>
                            <Gift_strong>{data.userNickname}({data.userId})</Gift_strong>님께 선물
                        </Gift_dt>
                        <Gift_dd>
                            <Gift_dd_span>선물할 코인</Gift_dd_span>
                            <Gift_dd_input value={donationAmount} onChange={inputCoin} placeholder='0'></Gift_dd_input>
                            <Gift_dd_count_span>개</Gift_dd_count_span>
                            <Gift_dd_button onClick={resetCoin}><FontAwesomeIcon icon={faCircleXmark} style={{color: "#8f9299",}} /></Gift_dd_button>
                            
                        </Gift_dd>
                    </Gift_at>

                    <Gift_st>
                        <ST_dt>보유 코인</ST_dt>
                        <ST_dd>
                            
                            <ST_dd_span>{data.coin}</ST_dd_span>
                    
                            개
                        </ST_dd>
                        {donationAmount >= data.coin? 
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
                            <Gift_void_text onChange={onChangeContent} placeholder='스트리머에게 보낼 후원 메세지를 입력하세요.'></Gift_void_text>
                        </Gift_input_span>
                    </Gift_input>

                    <Button_area>
                        <Button_gift_button onClick={onSubmit}>선물하기</Button_gift_button>
                        <Button_cancle_button ref={cancleRef} onClick={onClickCancle}>취소</Button_cancle_button>
                    </Button_area>
                </Send_area>
            </Layer_in>
        </Modal>
    </Outline_area_2> 
        
    )
}

export default donationModal;