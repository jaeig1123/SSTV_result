/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {Footer_stream_item_star_li_t, Footer_stream_item_report_em,Footer_stream_li2_span, Footer_main_div, Footer_steram_info_li_1, Footer_steram_li2_em, Footer_steram_li_2, Footer_steram_li_up_span, Footer_stream_info_div, Footer_stream_info_ul, Footer_stream_li_up_em, Footer_stream_title_div, Footer_stream_title_span, Footer_title_underline, Footer_user_count_div, Footer_user_count_em, Footer_user_count_span, Footer_user_image_a, Footer_user_image_div, Footer_user_img, Stream_info_div, Stream_user_name, Footer_stream_li_3, Footer_stream_time_ul, Footer_stream_time_li_1, Footer_stream_time_1_strong, Footer_stream_time_1_span, Footer_stream_time_2_li, Footer_stream_time_2_strong, Footer_stream_time_2_span, Footer_stream_item_div, Footer_stream_item_ul, Footer_stream_item_up_li, Footer_stream_item_up_button, Footer_stream_item_up_em, Footer_stream_item_star_button, Footer_stream_item_star_em, Footer_stream_item_shop_button,Footer_stream_item_shop_li,Footer_stream_item_shop_em } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import DonationModal from './donationModal';
import ReportModal from './reportModal';
import DonationEvent from './donationEvent'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './reportModal.css';

const chatfooter = (props ) => {
    
    //data
    const {setDonationData} = props.data;
    const {donationData} = props.data;
    const {streaming} = props.data;
    console.log(props.data)
    //modal
    const [onClose, setOnClose] = useState(false);
    const [openDo, SetOpenDo] = useState(false);
    const [onCloseReportModal, setOnCloseReportModal] = useState(false);

    const navigate = useNavigate();

    const fetchData = async (method, url, data) => {
        let response;
        
        if(method == 'GET') {
            response = await axios.get(url, {
                params : data,
                withCredentials : true
            })
        }

        if(method == 'POST') {
            response = await axios.post(url, data, {
                withCredentials : true
            })
        }

        return response;
    }

    const openDonation = () => {
        setOnClose(true);
    }
    console.log("foot"+donationData);

    const Donation = () => {
        SetOpenDo(true);
    }

    const openReport = () => {
        setOnCloseReportModal(true);
    }

    const handleReportModalSubmit = async (data) => {
        const method = 'POST';
        const url = `${process.env.REACT_APP_NODE_URL}/report/addReport`;
        const param = {
            streamingUserId : streaming.userId, 
            streamingNo : streaming.streamingPk,
            reportType : data.reportType,
            reportContent : data.reportContent
        }

        const response = await fetchData(method, url, param);
        setOnCloseReportModal(false);
        alert('신고가 접수되었습니다.');
    }

    const onClickCommunity =()=>{ // 스트리머 아이디로
        navigate('/Home/'+streaming.userId);
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
                            <Footer_stream_item_up_button onClick={Donation}>
                                {openDo && <Donation/>}
                                <Footer_stream_item_report_em onClick={openReport}></Footer_stream_item_report_em>
                                {onCloseReportModal && <ReportModal 
                                onClose={onCloseReportModal} 
                                setOnClose={setOnCloseReportModal}
                                onSubmit={handleReportModalSubmit}
                                data = {streaming}
                                />}
                            </Footer_stream_item_up_button>
                        </Footer_stream_item_up_li>

                        <Footer_stream_item_star_li_t>
                            <Footer_stream_item_star_button onClick={openDonation}>
                            {onClose && <DonationModal 
                                onClose={onClose} 
                                setOnClose={setOnClose} 
                                donationData={donationData} 
                                setDonationData={setDonationData}
                                streamingData={streaming}
                            />}
                                <Footer_stream_item_star_em></Footer_stream_item_star_em>
                            </Footer_stream_item_star_button>
                        </Footer_stream_item_star_li_t>
                        
                        {/* <Footer_stream_item_shop_li>
                            <Footer_stream_item_shop_button>
                            </Footer_stream_item_shop_button>
                        </Footer_stream_item_shop_li> */}

                    </Footer_stream_item_ul>
                </Footer_stream_item_div>


            <Footer_user_image_div onClick={onClickCommunity}>
                <Footer_user_image_a>
                    {/* <Footer_user_img src='https://res.afreecatv.com/images/afmain/img_thumb_profile.gif'/> */}
                    <Footer_user_img src={process.env.PUBLIC_URL +`/img/SSTV_mini.gif`} />
                </Footer_user_image_a>
            </Footer_user_image_div>
            {/* <Stream_info_div> */}
                <Stream_user_name>{streaming.userNickname}</Stream_user_name>
                <Footer_user_count_div>
                    <Footer_user_count_span>
                        <Footer_user_count_em><FontAwesomeIcon icon={faUserGroup} style={{color: "#757d8a",}} /> {streaming.streamingViewer}</Footer_user_count_em>
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