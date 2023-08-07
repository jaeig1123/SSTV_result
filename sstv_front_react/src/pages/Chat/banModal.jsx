/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './style.css';

const banModal = ({onClose, setOnClose, data}) => {
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

    return (

        <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>

        <div id="layerBuyNoneSubscription" class="ui-pop layer-gudok">
        <p class="pop-title">스트리밍</p>
        <div class="pop-body"><div class="scroll_box">
            <div class="gudok_bj">
                <div class="gudok_bj">
                    <p>스트리밍이 관리자에 의해 정지되었습니다.</p>
                </div>
            </div>
            <div class="signature ">
                <h3>정지 유형</h3>
                <ul><li class="noList">{getReportType(data.banType)}</li></ul>
            </div>
            <div class="signature ">
                <h3>정지 내용</h3>
                <ul><li class="noList">{data.banContent}</li></ul>
            </div>

        </div>
        </div>
    </div>
        </Modal>
    </Outline_area_2> 
         
    // <Outline_area_2>
    //     <Modal id='modalArea' ref={modalRef}>
    //         <Layer_in>
    //             <Send_area>
    //                 <Gift_at>
    //                     <Gift_dt>
    //                         <h2>관리자에 의해 스트리밍이 종료되었습니다.</h2>
    //                         <h2>정지 유형</h2>{getReportType(data.banType)}
    //                         <h2>정지 내용</h2>{data.banContent}
                            
    //                     </Gift_dt>
    //                 </Gift_at>

    //                 <Button_area>
    //                     <Button_gift_button ><Link to ='/'>확인</Link></Button_gift_button>
    //                 </Button_area>
    //             </Send_area>
    //         </Layer_in>
    //     </Modal>
    // </Outline_area_2> 
        
    )
}

export default banModal;