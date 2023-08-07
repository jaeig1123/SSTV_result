/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {Footer_stream_item_star_li_t, Footer_stream_li2_span, Footer_main_div, Footer_steram_info_li_1, Footer_steram_li2_em, Footer_steram_li_2, Footer_steram_li_up_span, Footer_stream_info_div, Footer_stream_info_ul, Footer_stream_li_up_em, Footer_stream_title_div, Footer_stream_title_span, Footer_title_underline, Footer_user_count_div, Footer_user_count_em, Footer_user_count_span, Footer_user_image_a, Footer_user_image_div, Footer_user_img, Stream_info_div, Stream_user_name, Footer_stream_li_3, Footer_stream_time_ul, Footer_stream_time_li_1, Footer_stream_time_1_strong, Footer_stream_time_1_span, Footer_stream_time_2_li, Footer_stream_time_2_strong, Footer_stream_time_2_span, Footer_stream_item_div, Footer_stream_item_ul, Footer_stream_item_up_li, Footer_stream_item_up_button, Footer_stream_item_up_em, Footer_stream_item_star_button, Footer_stream_item_star_em, Footer_stream_item_shop_button,Footer_stream_item_shop_li,Footer_stream_item_shop_em } from './style';
import {Footer_stream_update_up_em, Footer_stream_info_up_em} from './icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faUserGroup} from '@fortawesome/free-solid-svg-icons';
import DonationModal from './donationModal';
import FinishStreamingModal from './finishStreamingModal';
import FinishStreamingInfoModal from './finishStreamingInfoModal';
import UpdateStreamingTitleAndCategoryModal from './updateStreamingTitleAndCategoryModal';
import StreamingInfoModal from './streamingInfoModal';
import axios from 'axios';
import { socks } from 'fontawesome';

const chatfooter = (props) => {
    const {streaming} = props.data;
    const {socket} = props.data;
    const [onClose, setOnClose] = useState(false);
    const [onCloseFinishStreamingModal, setOnCloseFinishStreamingModal] = useState(false);
    const [onCloseFinishStreamingInfoModal, setOnCloseFinishStreamingInfoModal] = useState(false);
    const [onCloseUpdateStreamingTitleAndCategoryModal, setUpdateStreamingTitleAndCategoryModal] = useState(false);
    const [onCloseStreamingInfoModal, setStreamingInfoModal] = useState(false);

    const openDonation = () => {
        setOnClose(true);
    }

    const openFinishStreaming = () => {
        setOnCloseFinishStreamingModal(true);
    }

    const openFinishStreamingInfo = () => {
        setOnCloseFinishStreamingInfoModal(true);
    }

    const openUpdateStreamingTitleAndCategoryModal = () => {
        setUpdateStreamingTitleAndCategoryModal(true);
    }

    const openStreamingInfoModal = () => {
        setStreamingInfoModal(true);
    }

    const handleFinishStreamingOnClick = async () => {
        const url = `${process.env.REACT_APP_NODE_URL}/streaming/finishStreaming`;
        const data = {
            streamingUserId : streaming.userId
        }

        setOnCloseFinishStreamingModal(false);

        await fetchData(url, data);
        openFinishStreamingInfo();
    }

    const handleUpdateStreamingTitleAndCategoryModalSubmit = async (data) => {
        const url = `${process.env.REACT_APP_NODE_URL}/streaming/updateStreamingTitleAndCategory`;
        const param = {
            streamingTitle : data.streamingTitle,
            streamingCategory : data.streamingCategory,
            streamingUserId : streaming.userId
        }

        const response = await fetchData(url, param);
        const result = response.data.result;
        
        console.log(result);
        if(result === 'success') {
            socket.emit('updateStreamingTitleAndCategory', {
                roomName : streaming.userId,
                streamingTitle : data.streamingTitle,
                streamingCategory : data.streamingCategory
            });
        }

        setUpdateStreamingTitleAndCategoryModal(false);
    }

    const fetchData = async (url, data) => {
        const response = await axios.get(url, {
            params : data,
            withCredentials : true
        })
        

        return response;
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
        <Footer_main_div>
            <Footer_stream_item_div>
                    <Footer_stream_item_ul>

                        <Footer_stream_item_up_li>
                            <Footer_stream_item_up_button onClick={openUpdateStreamingTitleAndCategoryModal}>
                            {onCloseUpdateStreamingTitleAndCategoryModal && <UpdateStreamingTitleAndCategoryModal 
                            onClose={onCloseUpdateStreamingTitleAndCategoryModal} 
                            setOnClose={setUpdateStreamingTitleAndCategoryModal}
                            onSubmit={handleUpdateStreamingTitleAndCategoryModalSubmit}
                            />}
                                <Footer_stream_update_up_em>실시간 제목, 카테고리 변경</Footer_stream_update_up_em>
                            </Footer_stream_item_up_button>
                        </Footer_stream_item_up_li>

                        <Footer_stream_item_up_li>
                            <Footer_stream_item_up_button onClick={openStreamingInfoModal}>
                            {onCloseStreamingInfoModal && <StreamingInfoModal
                            onClose={onCloseStreamingInfoModal} 
                            setOnClose={setStreamingInfoModal}
                            data = {streaming}
                            />}
                            <Footer_stream_info_up_em>스트리밍 정보확인</Footer_stream_info_up_em>
                            </Footer_stream_item_up_button>
                        </Footer_stream_item_up_li>

                        {/* <Footer_stream_item_star_li_t>
                            <Footer_stream_item_star_button onClick={openDonation}>
                            {onClose && <DonationModal onClose={onClose} setOnClose={setOnClose}/>}
                                <Footer_stream_item_star_em>후원</Footer_stream_item_star_em>
                            </Footer_stream_item_star_button>
                        </Footer_stream_item_star_li_t> */}
                        
                        스트리밍 종료
                        <Footer_stream_item_shop_li>
                            <Footer_stream_item_shop_button onClick={openFinishStreaming}>
                            {onCloseFinishStreamingModal && <FinishStreamingModal 
                            onClose={onCloseFinishStreamingModal}
                            setOnClose={setOnCloseFinishStreamingModal}
                            onClick={handleFinishStreamingOnClick}
                            />}
                                <Footer_stream_item_shop_em>스트리밍 종료</Footer_stream_item_shop_em>
                            </Footer_stream_item_shop_button>
                        </Footer_stream_item_shop_li>

                    </Footer_stream_item_ul>
                </Footer_stream_item_div>
                {onCloseFinishStreamingInfoModal && <FinishStreamingInfoModal 
                onClose={onCloseFinishStreamingInfoModal}
                setOnClose={setOnCloseFinishStreamingInfoModal}
                data = {streaming}
                />}



            <Footer_user_image_div>
                <Footer_user_image_a>
                    <Footer_user_img src='https://res.afreecatv.com/images/afmain/img_thumb_profile.gif'/>
                </Footer_user_image_a>
            </Footer_user_image_div>
            {/* <Stream_info_div> */}
                <Stream_user_name>{streaming.userNickname}</Stream_user_name>
                <Footer_user_count_div>
                    <Footer_user_count_span>
                        <Footer_user_count_em><FontAwesomeIcon icon={faUserGroup} style={{color: "#757d8a",}} />{streaming.streamingViewer}</Footer_user_count_em>
                    </Footer_user_count_span>
                </Footer_user_count_div>
                <Footer_stream_title_div>
                    <Footer_stream_title_span>{streaming.streamingTitle}</Footer_stream_title_span>
                </Footer_stream_title_div>
                <Footer_title_underline/>

                <Footer_stream_info_div>
                    <Footer_stream_info_ul>
                        {/* <Footer_steram_info_li_1>
                            <Footer_stream_li_up_em></Footer_stream_li_up_em>
                            <Footer_steram_li_up_span>100</Footer_steram_li_up_span>
                        </Footer_steram_info_li_1>
                        <Footer_steram_li_2>
                            <Footer_steram_li2_em></Footer_steram_li2_em>
                            <Footer_stream_li2_span>200</Footer_stream_li2_span>
                        </Footer_steram_li_2> */}

                        <Footer_stream_li_3>
                            <Footer_stream_li2_span>방송정보</Footer_stream_li2_span>
                        </Footer_stream_li_3>
                    </Footer_stream_info_ul>
                </Footer_stream_info_div>
                    
                <Footer_stream_time_ul>
                    <Footer_stream_time_li_1>
                        <Footer_stream_time_1_strong>· 방송시작시간</Footer_stream_time_1_strong>
                        <Footer_stream_time_1_span>{streaming.streamingStartTime}</Footer_stream_time_1_span>
                    </Footer_stream_time_li_1>

                    {/* <Footer_stream_time_2_li>
                    <Footer_stream_time_2_strong>· 해상도</Footer_stream_time_2_strong>
                    <Footer_stream_time_2_span>1920x1080</Footer_stream_time_2_span>
                    </Footer_stream_time_2_li> */}

                {/* <Footer_stream_time_2_li>
                    <Footer_stream_time_2_strong>· 화질</Footer_stream_time_2_strong>
                    <Footer_stream_time_2_span>8000K</Footer_stream_time_2_span>
                </Footer_stream_time_2_li> */}
                <Footer_stream_time_2_li>
                    <Footer_stream_time_2_strong>· 카테고리</Footer_stream_time_2_strong>
                    <Footer_stream_time_2_span>{getCategory(streaming.streamingCategory)}</Footer_stream_time_2_span>
                </Footer_stream_time_2_li>

                {/* <Footer_stream_time_2_li>
                    <Footer_stream_time_2_strong>· 방송국</Footer_stream_time_2_strong>
                    <Footer_stream_time_2_span>localhost</Footer_stream_time_2_span>
                </Footer_stream_time_2_li> */}

                </Footer_stream_time_ul>

                
                
            {/* </Stream_info_div> */}
        </Footer_main_div>
    )
}

export default chatfooter