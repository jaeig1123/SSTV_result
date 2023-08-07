/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Header from './header';
import Side from './sidebar';
import {Reaply_main_article, Reaply_title_wrap, Replay_body_a, Replay_body_info, Replay_body_li, Replay_body_line, Replay_body_p, Replay_body_section, Replay_body_ul, Replay_bs_content, Replay_comment_em, Replay_comment_span, Replay_date_span, Replay_hegiht, Replay_line_span, Replay_thum_a, Replay_thum_div, Replay_thum_em, Replay_thum_img, Replay_thum_span, Replay_title_h2, Replay_title_section, Replay_title_span, Replay_title_vod, Replay_view_em, Replay_vod_section, Sidebar_Main_div, Writing_List_bs_button_a, Writing_List_bs_button_div, Writing_List_bs_button_span} from './style';
import { Link, useNavigate, useParams } from 'react-router-dom';
import UserInfo from './userInfo';
import axios from 'axios';
import { home } from 'fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginModal from '../Mainpage/loginModal';
import { faClapperboard, faClipboard, faPencil } from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import addVodView from './addVodView';
const vodList = ()=> {
    const navigate = useNavigate();
    const [streamingList, setStreamingList ] = useState([]);
    const {userId} = useParams();
    const {data} = useSWR('/user/login', fetcher);
    const [onClose, setOnClose] = useState(false);
    
    const handleClick = async(replayList)=>{
        try {
            await axios.get('/community/addVodView/' + replayList.vodNo);
            // axios.get() 함수가 완료된 후에 수행해야 할 동작을 여기에 추가
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(()=> {
        axios.get('/community/getVodList/'+userId)
        .then((response)=>{
            setStreamingList(response.data['data']);
            console.log(response.data);
        })
        
    },[])
    const replayImage = process.env.REACT_REPLAY_IMAGE;

    const onClickUpload = ()=>{
        if(data===undefined || data===null){
            setOnClose(true);
        } else 
        navigate('/UploadVOD/'+userId);
        
        
    }
    
    
    
    return(
        <body>
            <Header/>
            {onClose && (
                                                            <LoginModal onClose={onClose} setOnClose={setOnClose} />
                                                        )}
            <Sidebar_Main_div>
                <Side/>
                {/* <Replay_bs_content> */}
                    <Replay_bs_content>
                        <Reaply_main_article>
                        <Replay_hegiht>
                            <Replay_vod_section>
                                <Replay_title_vod>
                                    <Reaply_title_wrap>
                                        <Replay_title_h2>VOD 목록</Replay_title_h2>
                                    </Reaply_title_wrap>
                                    <Replay_title_span> {streamingList.length}개의 VOD</Replay_title_span>


                                    <Writing_List_bs_button_div>
                                                        <Writing_List_bs_button_a onClick={onClickUpload}>
                                                        
                                                        <FontAwesomeIcon icon={faClapperboard} style={{color: "#4279ff",}} />
                                                            <Writing_List_bs_button_span>
                                                                        업로드
                                                            </Writing_List_bs_button_span>
                                                        </Writing_List_bs_button_a>
                                                    </Writing_List_bs_button_div>

                                    <Replay_title_section id="bodysection">
                                        
                                    </Replay_title_section>
                                    
                                </Replay_title_vod>
                                {streamingList.map((replayList, index)=> {
                                    // let formattedDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate() +' '+padZero(date.getHours()) + ":"+ padZero(date.getMinutes());
                                    const startTime = new Date(replayList.regDate);
                                    const formatDate = startTime.getFullYear()+'-'+(startTime.getMonth()+1) + '-'+startTime.getDate();
                                    const formattedStartTime = startTime.getHours() + ":" + startTime.getMinutes()+ ":" + startTime.getMilliseconds();
                                    const endTitme = new Date(replayList.STREAMING_END_TIME)
                                    const formattedEndTime = endTitme.getHours() + ":" + endTitme.getMinutes()+ ":" + endTitme.getMilliseconds();
                                    const testTime = startTime.getTime() - endTitme.getTime()
                                    const replayTime = endTitme.getHours() - startTime.getHours();
                                    const replayMinute = endTitme.getMinutes() - startTime.getMinutes();
                                    
                                    startTime.setHours(replayList.STREAMING_START_TIME);
                                    console.log(replayList)
                                    // const replayURL = fileName.replace('.mp4','');
                                    
                                    
                                    
                                    
                                return(
                                <Replay_body_section>
                                    <Replay_body_ul>
                                            <Replay_body_li>
                                            <Link to={'/getVod/'+replayList.vodNo}>
                                                <Replay_thum_div onClick={()=>{axios.get('/community/addVodView/'+replayList.vodNo)}}>
                                                    <Replay_thum_a   >
                                                        <Replay_thum_img src={process.env.REACT_APP_VOD_IMAGE_URL+replayList.fileName+'.jpg'}/>
                                                        {/* <Replay_thum_span>{startTime}</Replay_thum_span> */}
                                                        <Replay_thum_em>VOD</Replay_thum_em>
                                                    </Replay_thum_a>
                                                </Replay_thum_div>
                                                </Link>

                                                <Replay_body_info>
                                                    <Link to={'/getVod/'+replayList.vodNo}>
                                                    <Replay_body_p onClick={()=>{axios.get('/community/addVodView/'+replayList.vodNo)}}>
                                                        <Replay_body_a >{replayList.title}</Replay_body_a>
                                                    </Replay_body_p>
                                                    </Link>
                                                    <Replay_body_line>
                                                        <Replay_line_span>
                                                            <Replay_view_em></Replay_view_em>
                                                           {replayList.view}
                                                        </Replay_line_span>
                                                        {/* <Replay_comment_span>
                                                            <Replay_comment_em></Replay_comment_em>
                                                            0
                                                        </Replay_comment_span> */}
                                                        <Replay_date_span>
                                                            {formatDate}
                                                        </Replay_date_span>
                                                    </Replay_body_line>
                                                </Replay_body_info>

                                            </Replay_body_li>
                                        </Replay_body_ul>
                                </Replay_body_section>
                                )
                                })}
                            </Replay_vod_section>
                            
                        </Replay_hegiht>
                        </Reaply_main_article>
                    </Replay_bs_content>
                {/* </Replay_bs_content> */}
            </Sidebar_Main_div>
        </body>
    )
}

export default vodList;