/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const finishStreamingInfoModal = ({onClose, setOnClose, data}) => {
    const streaming = data;
    const modalRef = useRef(null);
    const cancleRef = useRef(null);
    const [recordUrl, setRecordUrl] = useState('');
    console.log(streaming);
    // useEffect(()=>{
    //     axios.get(`${process.env.REACT_APP_NODE_URL}/streaming/finishRecord`, {
    //         params: {
    //             userId: streaming.userId,
    //         }
    //     })
    //     .then((response)=>{
    //         console.log(response.data);
    //     })
    // })

    useEffect(()=>{
            axios.post('/community/finishStreaming',
                {
                    userId: streaming.userId,
                    streamingNo: streaming.streamingPk,
                }
            );
    },[])
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
            <div class="signature ">
                <h3>스트리밍 제목</h3>
                <ul><li class="noList">{streaming.streamingTitle}</li></ul>
            </div>
            <div class="signature ">
                <h3>스트리밍 카테고리</h3>
                <ul><li class="noList">{getCategory(streaming.streamingCategory)}</li></ul>
            </div>

            <div class="signature ">
                <h3>스트리밍 시작시간</h3>
                <ul><li class="noList">{streaming.streamingStartTime}</li></ul>
            </div>
            <div class="signature ">
                <h3>스트리밍 종료시간</h3>
                <ul><li class="noList">{moment().format('YYYY-MM-DD/HH:mm')}</li></ul>
            </div>

            <div class="signature ">
                <h3>총 시청자수</h3>
                <ul><li class="noList">{streaming.totalStreamingViewer}</li></ul>
            </div>

            <div class="signature ">
                <h3>누적 후원금액</h3>
                <ul><li class="noList">{streaming.totalDonationAmount}</li></ul>
            </div>

            <div class="pop-btn">
                <Link to='/'><a class="btn btn_blue" id="report_pop">확인</a></Link>
            </div>

        </div>
        </div>
    </div>
        </Modal>
    </Outline_area_2> 
    )
}

export default finishStreamingInfoModal;