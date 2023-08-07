/* eslint-disable react-hooks/rules-of-hooks */
import React,{useEffect, useState} from 'react';
import { Streamer_nickname_span, Streamer_list, Streamer_span, Streamer_a, Streamer_div, Writing_post_con, Writing_list, Writing_span, Writing_a, Writing_h4, Writing_main, Broad_ul, Broad_list, Live_img,Live_span, Live_a, List_list, Com_main_body_vod_1_titleU_em, Replay_info, Replay_img, Replay_list_li, Replay_h2, Notice_dd, Notice_dt, Intro_dd, Follow_dd, Nickname_info_a, Search_Streamer_profile, Search_Streamer_div2, Search_Streamer_div, Search_body, Search_body_ground, Search_main_div, Search_Streamer_img, Streamer_follow_button, Stream_main_div, Search_Streamer_info, Search_info_Nickname, Search_Nickname_a, Search_content, Search_relate, Search_main_con, Search_main_p, Search_profile, Profile_zone, Thumb_area, Nickname_info, Nickname_info2, UserId_div, Follow_dl, Follow_dt, Intro_dl, Intro_dt, Notice_dl, Profile_more, Profile_button, Replay_zone, Replay_nickname, Replay_nickname_a, Replay_list_body, Replay_list_body_2, Replay_list_ul, Replay_thumb_box, Replay_cBox, Replay_cBox_h3, Replay_cBox_a, Replay_comment_count, Replay_detail, Replay_Streamer_nic, Replay_Streamer_nickname, Replay_nickname_span, Replay_box_a, Replay_view_span, Replay_date_span, Live_list, Live_h4, Broad_title_li, Broad_title_a, Broad_title_span, Broad_streamer_li, Broad_streamer_em, Broad_streamer_a, Broad_bs_em, Broad_view_li, Broad_info_tit, Broad_num_span, Broad_num_em, Broad_line_span, Broad_img_a, Broad_title_img, Writing_post_list, Writing_tit, Writing_tit_a, Writing_comment_count, Writing_body, Writing_post_info, Writing_post_info_nic, Writing_post_streamer, Writing_post_date, Writing_view_count, Streamer_h4, Streamer_list_ul, Streamer_list_li, Streamer_thumb_a, Streamer_thumb_span, Streamer_nickname_a, Streamer_userid_em, Streamer_user_li, Streamer_info_em, Streamer_info_a, Streamer_view, Streamer_view_em, Streamer_stack_view, Streamer_stack_time, Streamer_follow_count, Search_keyword, Search_keyword_span, Replay_area_controls, Replay_prev_button } from './style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useLocation , useNavigate } from 'react-router-dom';
import axios from 'axios';
import replay from '../Community/replay';

const searchBody = ({select, setSelect})=>{
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/");
    const [community, setCommunity] = useState([]);
    const [userList, setUserList] = useState([]);
    const [streamingList ,setStreamingList] = useState([]);
    const [replayList, setReplayList] = useState([]);
    const mainUser = userList[0];
    const [notice, setNotice] = useState('');
    const decord = decodeURIComponent(path[2]);
    const imageError = (event) => {
        event.target.src = process.env.PUBLIC_URL+'/img/base_profile.jpg';
    }

    useEffect(()=> {
        axios.get('/community/searchWriting/'+path[2])
        .then((response)=>{
            setCommunity(response.data['data']);
        })
        axios.get('/user/searchUser/'+path[2])
        .then((response)=>{
            setUserList(response.data['data']);
            getNotice(response.data?.data[0]?.userId)
        })
        axios.get('/streaming/getStreamingByUserId', {
            params: {
                userId: path[2],
            }
        })
        .then((response)=>{
            console.log(response.data);
            setReplayList(response.data['firstData']);
        })
        axios.get(`${process.env.REACT_APP_NODE_URL}/streaming/getStreamingList`, {
            params : {
                searchKeyword : path[2],
                searchCondition : 0
            },
            withCredentials : true
        }).then((response) => {
            const data = response.data;

            // alert('data.firstData = ' + JSON.stringify(data.firstData));
            if(data.result == 'success') {
                setStreamingList(data.firstData);
            }
        });
        
    },[]);
    
    const getNotice = (userId)=>{
        axios.get('/community/getNotice/'+userId)
        .then((response)=>{
            console.log(response.data);
            setNotice(response.data);
        })
    }
    console.log(mainUser)

    const getStreamingViewPage = async (streamingUserId) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/streaming/getStreamingViewerPage`,
                {params : {
                    streamingUserId : streamingUserId
                },
                withCredentials : true
            });

            const firstData = response.data.result;
            if(firstData === 'success') {
                const streaming = response.data.firstData;
                const serviceUrl = response.data.secondData;
                
                navigate(`/chat`, {
                    state: {
                        streaming : streaming,
                        serviceUrl : serviceUrl,
                        streamingUserId : streamingUserId
                    }
                });
            }else {
                const firstData = response.data.firstData;
                if(firstData == '1') {
                    alert('로그인이 필요합니다.')
                }else if(firstData == '2') {
                    alert('해당 스트리머 회원의 블랙리스트에 등록되어있습니다.')
                }
            }
        } catch (error) {
            console.log(('[index.jsx getStreamingViewPage] error  = ' + error));
        }
      }  

    console.log(notice);
    return(
        <Search_body>
            <Search_body_ground>
            {/* <Stream_main_div>
                <Search_main_div>
                    
                    <Search_Streamer_div>
                        <Search_Streamer_div2>
                            <Search_Streamer_profile >
                                
                                <Search_Streamer_img src={process.env.PUBLIC_URL+'/img/base_profile.jpg'} />
                                
                            </Search_Streamer_profile>
                            
                            <Streamer_follow_button>
                            <FontAwesomeIcon icon={faThumbsUp} /> 팔로우
                            </Streamer_follow_button>
                            
                            

                        </Search_Streamer_div2>

                        
                        
                        
                    </Search_Streamer_div>
                    
                    
                </Search_main_div>
                </Stream_main_div> */}


                <Search_content id='width'> 
                    <Search_relate>

                    </Search_relate>
                    <Search_main_con>
                    
                        {select===0? 
                        <div>
                        <Search_main_p>
                            <Search_keyword>{decord}</Search_keyword>
                            에 대한 통합검색 결과 입니다. (
                            <Search_keyword_span>{userList.length + community.length}건</Search_keyword_span>
                            )
                        </Search_main_p>
                        {mainUser?
                        <Search_profile id='contetn'>
                            <Profile_zone>
                                <Thumb_area>
                                     <Search_Streamer_img src={process.env.REACT_APP_IMAGE_URL+mainUser?.profilePhoto} onError={imageError} />
                                </Thumb_area>
                                <Streamer_follow_button>
                            <FontAwesomeIcon icon={faThumbsUp} /> 팔로우
                            </Streamer_follow_button>
                            <Nickname_info>
                                <Nickname_info2>
                                    <Nickname_info_a target='_blank' href={'/home/'+mainUser?.userId}>{mainUser?.userNickname}</Nickname_info_a>
                                </Nickname_info2>
                                <UserId_div>{mainUser?.userId}</UserId_div>
                                <Follow_dl>
                                    <Follow_dt>팔로우</Follow_dt>
                                    <Follow_dd>{mainUser?.followCount}</Follow_dd>
                                </Follow_dl>
                                <Intro_dl>
                                    <Intro_dt>시청자수</Intro_dt>
                                    <Intro_dd>{mainUser?.accumulatedViewers}</Intro_dd>
                                </Intro_dl>
                                <Notice_dl>
                                    <Notice_dt>공지</Notice_dt>
                                    {notice?.data?.notice?
                                    <Notice_dd onClick={()=>{
                                        navigate('/'+notice?.data?.writingNo+'/'+notice?.data?.hostUserId)
                                    }}>{notice?.data?.title}</Notice_dd>
                                    :
                                    null}
                                </Notice_dl>
                            </Nickname_info>
                            <Profile_more>
                            
                            </Profile_more>

                            </Profile_zone>
                        </Search_profile>
                            :null}   
                        </div>
                        : null}
                    
                    {select===0?

                    
                        <Replay_zone>
                            <Replay_h2>
                            <Replay_nickname_a onClick={()=>setSelect(2)}>
                                
                                <Replay_nickname>{decord}</Replay_nickname>님의 다시보기
                                
                                </Replay_nickname_a>
                            </Replay_h2>
                            
                            {/* <Replay_area_controls>
                                 <Replay_prev_button>
                                            dfdfd
                                </Replay_prev_button>
                            </Replay_area_controls> */}


                            <Replay_list_body>
                                <Replay_list_body_2>
                                    <Replay_list_ul>
                                    

                                        {replayList.map((replay, i) =>{
                                            const fileName = replay.RECORD_URL;
                                    return(
                                        <Replay_list_li>
                                            <Replay_thumb_box>
                                                <Replay_box_a href={'/getReplay/'+replay.STREAMING_NO}>
                                                <Replay_img src={process.env.REACT_APP_REPLAY_IMAGE_URL+fileName?.replace(".mp4","")+".jpg"}/>
                                                </Replay_box_a>
                                            </Replay_thumb_box>
                                            <Replay_cBox>
                                                <Replay_cBox_h3>
                                                    <Replay_cBox_a>{replay.STREAMING_TITLE}</Replay_cBox_a>
                                                </Replay_cBox_h3>
                                                <Replay_comment_count>[6]</Replay_comment_count>
                                                <Replay_detail>
                                                    <Replay_Streamer_nic>
                                                        <Replay_Streamer_nickname>
                                                            <Replay_nickname_span>{replay.USER_ID}</Replay_nickname_span>
                                                        </Replay_Streamer_nickname>
                                                    </Replay_Streamer_nic>
                                                </Replay_detail>

                                                <Replay_info>
                                                    <Replay_view_span>
                                                       ▹ {replay.TOTAL_STREAMING_VIEWER}
                                                    </Replay_view_span>
                                                    <Replay_date_span>
                                                      ● 1일전
                                                    </Replay_date_span>
                                                </Replay_info>

                                            </Replay_cBox>

                                            

                                        </Replay_list_li>
                                    )
                                   })}
                                    </Replay_list_ul>
                                </Replay_list_body_2>
                            </Replay_list_body>
                        </Replay_zone>
                    
                       : select === 2? 
                       <Replay_zone>
                            <Replay_h2>
                            <Replay_nickname_a>
                                <Replay_nickname>테스터</Replay_nickname>님의 다시보기
                                </Replay_nickname_a>
                            </Replay_h2>
                            

                            <Replay_list_body>
                                <Replay_list_body_2>
                                    <Replay_list_ul>

                                        <Replay_list_li>
                                            <Replay_thumb_box>
                                                <Replay_box_a>
                                                <Replay_img src='https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20230606_0222743F_246753681_2_r' />
                                                </Replay_box_a>
                                            </Replay_thumb_box>
                                            <Replay_cBox>
                                                <Replay_cBox_h3>
                                                    <Replay_cBox_a>테스트 제목</Replay_cBox_a>
                                                </Replay_cBox_h3>
                                                <Replay_comment_count>[6]</Replay_comment_count>
                                                <Replay_detail>
                                                    <Replay_Streamer_nic>
                                                        <Replay_Streamer_nickname>
                                                            <Replay_nickname_span>테스트스트리머</Replay_nickname_span>
                                                        </Replay_Streamer_nickname>
                                                    </Replay_Streamer_nic>
                                                </Replay_detail>

                                                <Replay_info>
                                                    <Replay_view_span>
                                                       ▹ 100 
                                                    </Replay_view_span>
                                                    <Replay_date_span>
                                                      ● 1일전
                                                    </Replay_date_span>
                                                </Replay_info>

                                            </Replay_cBox>
                                        </Replay_list_li>

                                    </Replay_list_ul>
                                </Replay_list_body_2>
                            </Replay_list_body>
                        </Replay_zone>
                      : null }

                    {select===0? 
                    <div>
                        <Live_list>
                            <Live_h4>
                                <Live_a onClick={()=>setSelect(1)}>생방송</Live_a>
                                <Live_span>({streamingList.length}건)</Live_span>
                                <Live_img src='https://res.afreecatv.com/images/aftv_search/ico_live.gif'/>
                            </Live_h4>
                        </Live_list>

                        <Broad_list>
                        {streamingList.map((streaming, index) => {
                            return (
                                <Broad_ul key={index}>
                                <Broad_title_li>
                                    <Broad_img_a onClick={ () => getStreamingViewPage(streaming.userId)}>
                                    <Broad_title_img src={streaming.thumnailUrlWithOutAd}></Broad_title_img>
                                    </Broad_img_a>
                                    <Broad_title_a>
                                    <Broad_title_span>{streaming.streamingTitle}</Broad_title_span>
                                    </Broad_title_a>
                                </Broad_title_li>
                                <Broad_streamer_li>
                                    <Broad_streamer_em>정보</Broad_streamer_em>스트리머 명
                                    <Broad_streamer_a>{streaming.userNickname}</Broad_streamer_a>
                                </Broad_streamer_li>
                                <Broad_bs_em>
                                    <Broad_view_li>
                                    <Broad_info_tit>참여정보</Broad_info_tit>
                                    <Broad_num_span>
                                        <Broad_num_em>{streaming.userNickname}</Broad_num_em>
                                    </Broad_num_span>
                                    <Broad_line_span>
                                        방송시작 {streaming.streamingStartTime}
                                    </Broad_line_span>
                                    </Broad_view_li>
                                </Broad_bs_em>
                                </Broad_ul>
                            );
                        })}

                            
                            {/* 반복할 부분 */}
                            {/* <Broad_ul>
                                <Broad_title_li>
                                    <Broad_img_a>
                                        <Broad_title_img />
                                    </Broad_img_a>
                                    <Broad_title_a>
                                        <Broad_title_span>방송제목</Broad_title_span>
                                    </Broad_title_a>
                                </Broad_title_li>
                                <Broad_streamer_li>
                                    <Broad_streamer_em>정보</Broad_streamer_em>스트리머 명
                                    <Broad_streamer_a>testUser(testnickname)</Broad_streamer_a>
                                </Broad_streamer_li>
                                <Broad_bs_em>
                                    <Broad_view_li>
                                        <Broad_info_tit>참여정보</Broad_info_tit>
                                        <Broad_num_span>
                                            <Broad_num_em>0</Broad_num_em>
                                        </Broad_num_span>
                                        <Broad_line_span>
                                        방송시작 2023-06-07 17:11
                                        </Broad_line_span>
                                    </Broad_view_li>
                                </Broad_bs_em>
                            </Broad_ul> */}

                        </Broad_list>
                        </div>
                       : select===1? 
                       
                       <div>
                       <Live_list>
                           <Live_h4>
                               <Live_a>생방송</Live_a>
                               <Live_span>(0건)</Live_span>
                               <Live_img src='https://res.afreecatv.com/images/aftv_search/ico_live.gif'/>
                           </Live_h4>
                       </Live_list>
                       {/*  */}
                       <Broad_list>
                        {streamingList.map((streaming, index) => {
                            return (
                                <Broad_ul key={index}>
                                <Broad_title_li>
                                    <Broad_img_a onClick={ () => getStreamingViewPage(streaming.userId)}>
                                    <Broad_title_img src={streaming.thumnailUrlWithOutAd}></Broad_title_img>
                                    </Broad_img_a>
                                    <Broad_title_a>
                                    <Broad_title_span>{streaming.streamingTitle}</Broad_title_span>
                                    </Broad_title_a>
                                </Broad_title_li>
                                <Broad_streamer_li>
                                    <Broad_streamer_em>정보</Broad_streamer_em>스트리머 명
                                    <Broad_streamer_a>{streaming.userNickname}</Broad_streamer_a>
                                </Broad_streamer_li>
                                <Broad_bs_em>
                                    <Broad_view_li>
                                    <Broad_info_tit>참여정보</Broad_info_tit>
                                    <Broad_num_span>
                                        <Broad_num_em>{streaming.userNickname}</Broad_num_em>
                                    </Broad_num_span>
                                    <Broad_line_span>
                                        방송시작 {streaming.streamingStartTime}
                                    </Broad_line_span>
                                    </Broad_view_li>
                                </Broad_bs_em>
                                </Broad_ul>
                            );
                        })}
                       {/*  */}
                        </Broad_list>
                       </div>

                    :null}


                    {select===0? 
                    <div>
                        <Writing_main>
                            <Writing_h4>
                                <Writing_a onClick={()=>setSelect(3)}>커뮤니티 게시글</Writing_a>
                                <Writing_span>({community.length}건)</Writing_span>
                            </Writing_h4>
                        </Writing_main>
                        
                        {community.slice(0, 5).map((communityList, index)=> {
                            function padZero(number) {
                                return number < 10 ? '0' + number : number;
                              }
                              
                        console.log(communityList);
                        let date = new Date(communityList.regDate);
                        let formattedDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate() +' '+padZero(date.getHours()) + ":"+ padZero(date.getMinutes());
                        return(
                        <Writing_list>
                            {/* 반복될 부분 */}
                            <Writing_post_list>
                                <Writing_post_con>
                                    <Writing_tit>
                                        <Writing_tit_a key={index } target='_blank' href={`/`+communityList.writingNo+'/'+communityList.hostUserId} >{communityList.title}</Writing_tit_a>
                                        <Writing_comment_count>[{communityList.commentCount}]</Writing_comment_count>
                                    </Writing_tit>
                                    <Writing_body>
                                    <div dangerouslySetInnerHTML={{ __html: communityList.content }} />
                                        
                                    </Writing_body>
                                    <Writing_post_info>
                                        <Writing_post_info_nic target='_blank' href={'/home/'+communityList.guestUserId} >
                                            {communityList.guestUserId}
                                        </Writing_post_info_nic>
                                        <Writing_post_streamer target='_blank' href={'/home/'+communityList.hostUserId}>
                                            {communityList.hostUserId}
                                        </Writing_post_streamer>
                                        <Writing_post_date>{formattedDate}</Writing_post_date>
                                        <Writing_view_count>조회 100</Writing_view_count>
                                    </Writing_post_info>
                                </Writing_post_con>
                            </Writing_post_list>
                        </Writing_list>
                        )
                        })}
                        </div>
                       : select===3? 
                    
                       <div>
                        <Writing_main>
                            <Writing_h4>
                                <Writing_a>커뮤니티 게시글</Writing_a>
                                <Writing_span>({community.length}건)</Writing_span>
                            </Writing_h4>
                        </Writing_main>
                        
                        {community.map((communityList, index)=> {
                            function padZero(number) {
                                return number < 10 ? '0' + number : number;
                              }
                              
                        console.log(communityList);
                        let date = new Date(communityList.regDate);
                        let formattedDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate() +' '+padZero(date.getHours()) + ":"+ padZero(date.getMinutes());
                        return(
                        <Writing_list>
                            {/* 반복될 부분 */}
                            <Writing_post_list>
                                <Writing_post_con>
                                    <Writing_tit>
                                        <Writing_tit_a key={index} target='_blank' href={`/`+communityList.writingNo+'/'+communityList.hostUserId}>{communityList.title}</Writing_tit_a>
                                        <Writing_comment_count>[{communityList.commentCount}]</Writing_comment_count>
                                    </Writing_tit>
                                    <Writing_body>
                                    <div dangerouslySetInnerHTML={{ __html: communityList.content }} />
                                        
                                    </Writing_body>
                                    <Writing_post_info>
                                        <Writing_post_info_nic target='_blank' href={'/home/'+communityList.guestUserId}>
                                            {communityList.guestUserId}
                                        </Writing_post_info_nic>
                                        <Writing_post_streamer target='_blank' href={'/home/'+communityList.hostUserId}>
                                            {communityList.hostUserId}
                                        </Writing_post_streamer>
                                        <Writing_post_date>{formattedDate}</Writing_post_date>
                                        <Writing_view_count>조회 100</Writing_view_count>
                                    </Writing_post_info>
                                </Writing_post_con>
                            </Writing_post_list>
                        </Writing_list>
                        )
                        })}
                        </div>
                    
                    :null}
                        
                        {select===0? 

                        <div>
                        <Streamer_div>
                            <Streamer_h4>
                                <Streamer_a onClick={()=>setSelect(4)}>
                                    스트리머
                                </Streamer_a>
                                <Streamer_span>({userList.length}건)</Streamer_span>
                            </Streamer_h4>
                        </Streamer_div>

                    {userList.slice(0, 5).map((streamerList, index)=> {

                    return(
                        <Streamer_list>
                            {/* 반복할부분 */}
                            <Streamer_list_ul>
                                <Streamer_list_li>
                                    <Streamer_thumb_a>
                                        {/* 이미지임 */}
                                        <Streamer_thumb_span src={process.env.REACT_APP_IMAGE_URL+streamerList.profilePhoto} onError={imageError} />
                                    </Streamer_thumb_a>
                                    <Streamer_nickname_a target='_blank' href={'/home/'+streamerList.userId}>
                                        <Streamer_nickname_span>{streamerList.userNickname}
                                            <Streamer_userid_em>({streamerList.userId})</Streamer_userid_em>
                                        </Streamer_nickname_span>
                                    </Streamer_nickname_a>
                                </Streamer_list_li>
                                <Streamer_user_li>
                                    <Streamer_info_em>유저정보</Streamer_info_em>
                                    커뮤니티 명
                                    <Streamer_info_a target='_blank' href={'/home/'+streamerList.userId}>{streamerList.userId}</Streamer_info_a>
                                </Streamer_user_li>
                                <Streamer_view>
                                    <Streamer_view_em>활동내역</Streamer_view_em>
                                    <Streamer_stack_view>누적시청자 수 0명</Streamer_stack_view>
                                    <Streamer_stack_time>방송시간 {streamerList.totalStreamingAccumulatedTime}시간</Streamer_stack_time>
                                    <Streamer_follow_count>팔로우 {streamerList.followCount}명</Streamer_follow_count>
                                </Streamer_view>
                            </Streamer_list_ul>
                        </Streamer_list>
                    )
                        })}
                        </div>
                        
                       : select===4? 
                        <div>
                        <Streamer_div>
                            <Streamer_h4 >
                                <Streamer_a >
                                    스트리머
                                </Streamer_a>
                                <Streamer_span>({userList.length}건)</Streamer_span>
                            </Streamer_h4>
                        </Streamer_div>

                        {userList.map((streamerList, index)=> {

                        return(
                            <Streamer_list>
                                {/* 반복할부분 */}
                                <Streamer_list_ul>
                                    <Streamer_list_li>
                                        <Streamer_thumb_a>
                                            {/* 이미지임 */}
                                            <Streamer_thumb_span src={process.env.REACT_APP_IMAGE_URL+streamerList.profilePhoto} onError={imageError} />
                                        </Streamer_thumb_a>
                                        <Streamer_nickname_a target='_blank' href={'/home/'+streamerList.userId}>
                                            <Streamer_nickname_span>{streamerList.userNickname}
                                                <Streamer_userid_em>({streamerList.userId})</Streamer_userid_em>
                                            </Streamer_nickname_span>
                                        </Streamer_nickname_a>
                                    </Streamer_list_li>
                                    <Streamer_user_li>
                                        <Streamer_info_em>유저정보</Streamer_info_em>
                                        커뮤니티 명
                                        <Streamer_info_a target='_blank' href={'/home/'+streamerList.userId}>{streamerList.userId}</Streamer_info_a>
                                    </Streamer_user_li>
                                    <Streamer_view>
                                        <Streamer_view_em>활동내역</Streamer_view_em>
                                        <Streamer_stack_view>누적시청자 수 0명</Streamer_stack_view>
                                        <Streamer_stack_time>방송시간 {streamerList.totalStreamingAccumulatedTime}시간</Streamer_stack_time>
                                        <Streamer_follow_count>팔로우 {streamerList.followCount}명</Streamer_follow_count>
                                    </Streamer_view>
                                </Streamer_list_ul>
                            </Streamer_list>
                        )
                            })}
                   </div>
                    : null}

                    </Search_main_con>
                </Search_content>
                
            </Search_body_ground>
        </Search_body>
    )
}

export default searchBody;

