import React from 'react';
import {Gift_dt,Gift_at, Layer_in, Modal_event, Modal_event_h3, Modal_main_div, Send_area, Gift_strong2, Gift_message_strong } from './donationStyle';
import { motion } from "framer-motion";
import Animate from './aniamate'


const donationEvent =({donationData})=>{
    const path = `https://donation.kr.object.ncloudstorage.com/${donationData.USER_ID}_${donationData.STREAMING_USER_ID}.mp3`;
    return(
            <Modal_event>
            <Animate/>
                <Send_area>
            <Layer_in>
                <Gift_at>
                    <Gift_dt>
                        <Gift_message_strong>{donationData.USER_ID} </Gift_message_strong>
                        <Gift_strong2>님이 </Gift_strong2>
                        <Gift_message_strong>{donationData.DONATION_AMOUNT} </Gift_message_strong>
                        
                        <Gift_strong2>코인 후원하셨습니다.</Gift_strong2>
                        <audio autoPlay>
                            <source src={path} type="audio/mpeg"/>
                        </audio>
                        
                        <br/><br/>
                        <Gift_strong2>{donationData.DONATION_CONTENT}</Gift_strong2>
                        {/* <Modal_event_h3>{donationData.DONATION_CONTENT}</Modal_event_h3> */}
                    </Gift_dt>
                </Gift_at>
                
                </Layer_in>
                </Send_area>
                
            </Modal_event>
            
    
        
    )
}

export default donationEvent;