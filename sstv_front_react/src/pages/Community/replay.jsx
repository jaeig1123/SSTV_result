/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Header from './header';
import Side from './sidebar';
import {Reaply_main_article, Reaply_title_wrap, Replay_body_a, Replay_body_info, Replay_body_li, Replay_body_line, Replay_body_p, Replay_body_section, Replay_body_ul, Replay_bs_content, Replay_comment_em, Replay_comment_span, Replay_date_span, Replay_hegiht, Replay_line_span, Replay_thum_a, Replay_thum_div, Replay_thum_em, Replay_thum_img, Replay_thum_span, Replay_title_h2, Replay_title_section, Replay_title_span, Replay_title_vod, Replay_view_em, Replay_vod_section, Sidebar_Main_div} from './style';
import { useParams } from 'react-router-dom';
import UserInfo from './userInfo';
import axios from 'axios';
import { home } from 'fontawesome';
const replay = ()=> {
    const [streamingList, setStreamingList ] = useState([]);
    const {userId} = useParams();
    console.log("home?"+userId)
    useEffect(()=> {
        axios.get('/streaming/getStreamingByUserId', {
            params: {
                userId: userId,
            }
        })
        .then((response)=>{
            setStreamingList(response.data['firstData']);
            console.log(response.data);
        })
        
    },[])
    const replayImage = process.env.REACT_REPLAY_IMAGE;

    
    
    
    return(
        <body>
            <Header/>
            <Sidebar_Main_div>
                <Side/>
                {/* <Replay_bs_content> */}
                    <Replay_bs_content>
                        <Reaply_main_article>
                        <Replay_hegiht>
                            <Replay_vod_section>
                                <Replay_title_vod>
                                    <Reaply_title_wrap>
                                        <Replay_title_h2>다시보기</Replay_title_h2>
                                    </Reaply_title_wrap>
                                    <Replay_title_span> {streamingList.length}개의 VOD</Replay_title_span>

                                    <Replay_title_section id="bodysection">
                                        
                                    </Replay_title_section>
                                    
                                </Replay_title_vod>
                                {streamingList.map((replayList, index)=> {
                                    // let formattedDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate() +' '+padZero(date.getHours()) + ":"+ padZero(date.getMinutes());
                                    const startTime = new Date(replayList.STREAMING_START_TIME);
                                    const formatDate = startTime.getFullYear()+'-'+(startTime.getMonth()+1) + '-'+startTime.getDate();
                                    const formattedStartTime = startTime.getHours() + ":" + startTime.getMinutes()+ ":" + startTime.getMilliseconds();
                                    const endTitme = new Date(replayList.STREAMING_END_TIME)
                                    const formattedEndTime = endTitme.getHours() + ":" + endTitme.getMinutes()+ ":" + endTitme.getMilliseconds();
                                    const testTime = startTime.getTime() - endTitme.getTime()
                                    const replayTime = endTitme.getHours() - startTime.getHours();
                                    const replayMinute = endTitme.getMinutes() - startTime.getMinutes();
                                    const fileName = replayList.RECORD_URL;
                                    startTime.setHours(replayList.STREAMING_START_TIME);
                                    console.log()
                                    // const replayURL = fileName.replace('.mp4','');
                                    
                                    
                                    
                                    
                                return(
                                <Replay_body_section>
                                    <Replay_body_ul>
                                            <Replay_body_li>
                                                <Replay_thum_div>
                                                    <Replay_thum_a href={'/getReplay/'+replayList.STREAMING_NO}>
                                                        <Replay_thum_img src={fileName?process.env.REACT_APP_REPLAY_IMAGE_URL+fileName.replace('.mp4','')+'.jpg':null}/>
                                                        {/* <Replay_thum_span>{startTime}</Replay_thum_span> */}
                                                        <Replay_thum_em>다시보기</Replay_thum_em>
                                                    </Replay_thum_a>
                                                </Replay_thum_div>

                                                <Replay_body_info>
                                                    <Replay_body_p>
                                                        <Replay_body_a href={'/getReplay/'+replayList.STREAMING_NO}>{replayList.STREAMING_TITLE}</Replay_body_a>
                                                    </Replay_body_p>
                                                    <Replay_body_line>
                                                        <Replay_line_span>
                                                            <Replay_view_em></Replay_view_em>
                                                            {replayList.TOTAL_STREAMING_VIEWER}
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

export default replay;