import React, { useEffect, useState } from 'react';
import Header from './header';
import {Com_main_body_writing_list_li_em, Com_main_body_writing_list_a, Com_main_body_writing_list_li, Com_main_body_writing_image_img,Com_main_body_writing_image_div, Com_main_body_writing_title_p, Com_main_body_writing_div_3, Com_main_body_writing_a,Com_main_body_vod_3_a, Com_main_body_vod_2_title_em, Com_main_body_vod_2_div, Com_main_body_vod_2_img, Com_main_body_vod_1_img, Writing_form_Main_div, Sidebar_Main_div, Com_main_body_article, Com_maind_body_div, Com_main_body_div_2, Com_main_body_section, Com_main_body_vod_div, Com_main_body_vod_h3, Com_main_body_vod_a, Com_main_body_vod_section, Com_main_body_vod_1_div, Com_main_body_vod_1_a, Com_main_body_vod_1_span, Com_main_body_vod_1_time_span, Com_main_body_vod_1_title_div, Com_main_body_vod_1_title_p, Com_main_body_vod_1_titleU_div, Com_main_body_vod_1_titleU_span, Com_main_body_vod_1_titleU_em, Com_main_body_vod_1_titleU_2_span, Com_main_body_vod_2_a, Com_main_body_vod_2_span, Com_main_body_vod_2_time, Com_main_body_vod_2_title_div, Com_main_body_vod_2_title_p, Com_main_body_vod_2_title_div_2, Com_main_body_vod_2_title_span, Com_main_body_vod_2_title_2_span, Com_main_body_vod_3_div, Com_main_body_vod_3_span, Com_main_body_vod_3_img, Com_main_body_writing_div, Com_main_body_writing_h3, Com_main_body_writing_div_2, Com_main_body_writing_div_4, Com_main_body_writing_username_div, Com_main_body_writing_userimage_div, Com_main_body_writing_userimage_img, Com_main_body_writing_username_button, Com_main_body_writing_username_span, Com_main_body_writing_userdate_div, Com_main_body_writing_user_view_em, Com_main_body_writing_title_div, Com_main_body_writing_title_strong, Com_main_body_writing_image_a, Com_main_body_writing_image_button, Com_main_body_writing_image_span, Com_main_body_writing_list_div, Com_main_body_writing_list_ul, Com_main_body_writing_list_li_div, Com_main_body_writing_list_li_p, Com_main_body_writing_list_li_span, Com_main_body_writing_date_div, Com_main_body_writing_show_em } from './style';
import Sidebar from './sidebar';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { useParams, useNavigate } from 'react-router-dom';
import CoMain from './coMain';
import UserInfo from './userInfo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight, faVideo, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import useUserStore from '../utils/useUserStore';
const Community = () => {
    const navigate = useNavigate();
    const {data} = useSWR('/user/login', fetcher);
    const {userId} = useParams();
    const [notice, setNotice] = useState('');
    const [blackList, setBlackList] = useState([]);
    const [blackUser, setBlackUser] = useState(false);
    const [writingList, setWritingList] = useState([]);
    const sessionUser = data?.userId;
    const [replayList, setReplayList] = useState([]);
    const [nickNameList, setNickNameList] = useState([]);
    

    

    useEffect(()=> {
        axios.get('/community/writingList/'+userId) //userId = hostUserId
        .then((response)=> {
            const jsonData = response.data;
            setWritingList(jsonData['data']);
        })
        axios.get('/community/getNotice/'+userId)
        .then((response)=>{
            const jsonData = response.data;
            setNotice(jsonData['data']);
            
        })
        axios.get('/streaming/getStreamingByUserId', {
            params: {
                userId: userId,
            }
        })
        .then((response)=>{
            setReplayList(response.data['firstData']);
        })
    },[])
    console.log(notice);
    console.log(replayList);


    const onClickWriting = () => {
        navigate(`/Writing/${userId}`);
    }
    // useEffect(()=> {
    //     axios.get('/fan/getBlackList/'+userId)
    //     .then((response)=> {
    //         const black = response.data;
    //         setBlackList(black['data']);
    //     })
    // },[userId])
    // console.log(blackList);
    // for(let i =0; i<blackList.length; i++){
    //     if(blackList[i]===sessionUser) {
    //         navigate('/');
    //     }
    // }
    const ImageError=(event)=>{
        event.target.src = process.env.PUBLIC_URL+'/img/base_profile.jpg';
    }
      let date = new Date(notice?.regDate);
      let formattedDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
      const fileName = replayList.RECORD_URL;

      const date2 = new Date(replayList?.STREAMING_START_TIME);
      const formattedDate2 = date2.getFullYear()+'-' + (date2.getMonth()+1) + '-'+date2.getDate();
    return(
        <body style={{ overflowY: "auto", maxHeight: "90vh" }}>
       <Header/>
       <Sidebar_Main_div >
            <Sidebar/>
       
       <Writing_form_Main_div>
       
        <Com_main_body_article>

            <Com_maind_body_div>
                <Com_main_body_div_2>
                    <Com_main_body_section>
                        <Com_main_body_vod_div>
                            <Com_main_body_vod_h3>
                                <Com_main_body_vod_a href={'/getReplay/'+replayList[0]?.STREAMING_NO} >
                                <FontAwesomeIcon icon={faVideo} style={{color: "#2e7bff",}} /> 다시보기 <FontAwesomeIcon icon={faChevronRight} style={{color: "#3881ff",}} />
                                </Com_main_body_vod_a>
                            </Com_main_body_vod_h3>
                            <Com_main_body_vod_section>
                                <Com_main_body_vod_1_div>
                                    <Com_main_body_vod_1_a href={'/getReplay/'+replayList[0]?.STREAMING_NO}>
                                        <Com_main_body_vod_1_span>
                                            <Com_main_body_vod_1_img src={process.env.REACT_APP_REPLAY_IMAGE_URL+replayList[0]?.RECORD_URL?.replace('.mp4','')+'.jpg'}></Com_main_body_vod_1_img>
                                            {/* <Com_main_body_vod_1_time_span>10:00:00</Com_main_body_vod_1_time_span> */}
                                        </Com_main_body_vod_1_span>
                                        <Com_main_body_vod_1_title_div>
                                            <Com_main_body_vod_1_title_p>{replayList[0]?.STREAMING_TITLE}</Com_main_body_vod_1_title_p>
                                            <Com_main_body_vod_1_titleU_div>
                                                <Com_main_body_vod_1_titleU_span>
                                                    <Com_main_body_vod_1_titleU_em></Com_main_body_vod_1_titleU_em>
                                                    {replayList[0]?.TOTAL_STREAMING_VIEWER}
                                                </Com_main_body_vod_1_titleU_span>
                                                <Com_main_body_vod_1_titleU_2_span>
                                                   ● {replayList[0]?.STREAMING_START_TIME}
                                                </Com_main_body_vod_1_titleU_2_span>
                                            </Com_main_body_vod_1_titleU_div>
                                        </Com_main_body_vod_1_title_div>
                                    </Com_main_body_vod_1_a>
                                </Com_main_body_vod_1_div>

                            <Com_main_body_vod_2_div>
                                <Com_main_body_vod_2_a href={'/getReplay/'+replayList[1]?.STREAMING_NO}>
                                    <Com_main_body_vod_2_span>
                                        <Com_main_body_vod_2_img src={process.env.REACT_APP_REPLAY_IMAGE_URL+replayList[1]?.RECORD_URL?.replace('.mp4','')+'.jpg'}/>
                                        {/* <Com_main_body_vod_2_time>08:00:00</Com_main_body_vod_2_time> */}
                                    </Com_main_body_vod_2_span>
                                    <Com_main_body_vod_2_title_div>
                                        <Com_main_body_vod_2_title_p>
                                            {replayList[1]?.STREAMING_TITLE}
                                        </Com_main_body_vod_2_title_p>
                                        <Com_main_body_vod_2_title_div_2>
                                            <Com_main_body_vod_2_title_span>
                                                <Com_main_body_vod_2_title_em></Com_main_body_vod_2_title_em>
                                                {replayList[1]?.TOTAL_STREAMING_VIEWER}
                                            </Com_main_body_vod_2_title_span>
                                            <Com_main_body_vod_2_title_2_span>
                                            ● {replayList[1]?.STREAMING_START_TIME}
                                            </Com_main_body_vod_2_title_2_span>
                                        </Com_main_body_vod_2_title_div_2>
                                    </Com_main_body_vod_2_title_div>
                                </Com_main_body_vod_2_a>
                            </Com_main_body_vod_2_div>

                            <Com_main_body_vod_3_div>
                                <Com_main_body_vod_3_a href={'/getReplay/'+replayList[2]?.STREAMING_NO}>
                                    <Com_main_body_vod_3_span>
                                        <Com_main_body_vod_3_img  src={process.env.REACT_APP_REPLAY_IMAGE_URL+replayList[2]?.RECORD_URL?.replace('.mp4','')+'.jpg'}/>
                                        {/* <Com_main_body_vod_2_time>08:00:00</Com_main_body_vod_2_time> */}
                                    </Com_main_body_vod_3_span>
                                    <Com_main_body_vod_2_title_div>
                                        <Com_main_body_vod_2_title_p>
                                        {replayList[2]?.STREAMING_TITLE}
                                        </Com_main_body_vod_2_title_p>
                                        <Com_main_body_vod_2_title_div_2>
                                            <Com_main_body_vod_2_title_span>
                                                <Com_main_body_vod_2_title_em></Com_main_body_vod_2_title_em>
                                                {replayList[2]?.TOTAL_STREAMING_VIEWER}
                                            </Com_main_body_vod_2_title_span>
                                            <Com_main_body_vod_2_title_2_span>
                                            ● {replayList[2]?.STREAMING_START_TIME}
                                            </Com_main_body_vod_2_title_2_span>
                                        </Com_main_body_vod_2_title_div_2>
                                    </Com_main_body_vod_2_title_div>
                                </Com_main_body_vod_3_a>
                            </Com_main_body_vod_3_div>

                            

                            </Com_main_body_vod_section>
                            
                        </Com_main_body_vod_div>
                        
                        <Com_main_body_writing_div>
                                
                        </Com_main_body_writing_div>
                        <Com_main_body_writing_h3>
                                    <Com_main_body_writing_a>
                                        
                                    </Com_main_body_writing_a>
                                </Com_main_body_writing_h3>
                        <Com_main_body_writing_div>

                        <Com_main_body_writing_h3>
                                    <Com_main_body_writing_a onClick={()=>{
                                        navigate('/writingList/'+userId)
                                    }}>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{color: "#337eff",}} /> 게시글 <FontAwesomeIcon icon={faChevronRight} style={{color: "#3881ff",}} />
                                    </Com_main_body_writing_a>
                                </Com_main_body_writing_h3>
                                <Com_main_body_writing_div_2>
                                {notice?.notice?
                                    <Com_main_body_writing_div_3>
                                        <Com_main_body_writing_div_4>
                                            <Com_main_body_writing_username_div>
                                                <Com_main_body_writing_userimage_div>
                                                    <Com_main_body_writing_userimage_img src={process.env.REACT_APP_IMAGE_URL+notice?.guestUserId+'.jpg'} onError={ImageError}/>
                                                </Com_main_body_writing_userimage_div>
                                                <Com_main_body_writing_username_button >
                                                    <Com_main_body_writing_username_span>{notice?.guestNickName}</Com_main_body_writing_username_span>
                                                </Com_main_body_writing_username_button>
                                                <Com_main_body_writing_userdate_div>
                                                    {formattedDate} <Com_main_body_writing_user_view_em>∙ 조회 {notice?.view}</Com_main_body_writing_user_view_em>
                                                </Com_main_body_writing_userdate_div>
                                            </Com_main_body_writing_username_div>

                                            <Com_main_body_writing_title_div>
                                                <Com_main_body_writing_a onClick={()=>{
                                                    axios('/community/addView/'+notice?.writingNo)
                                                }} href={'/'+notice?.writingNo+'/'+notice?.hostUserId}>
                                                    <Com_main_body_writing_title_strong>{notice?.title}</Com_main_body_writing_title_strong>
                                                    <Com_main_body_writing_title_p>  </Com_main_body_writing_title_p>
                                                </Com_main_body_writing_a>
                                            </Com_main_body_writing_title_div>

                                        </Com_main_body_writing_div_4>

                                        <Com_main_body_writing_image_div>
                                        <Com_main_body_writing_image_a >
                                            <Com_main_body_writing_image_img src={process.env.PUBLIC_URL+'/img/notice.png'}/>
                                        </Com_main_body_writing_image_a>
                                    </Com_main_body_writing_image_div>

                                    <Com_main_body_writing_image_button > 
                                        <Com_main_body_writing_image_span ></Com_main_body_writing_image_span>
                                        {/* <img src={process.env.PUBLIC_URL+'/img/notice.png'} /> */}
                                    </Com_main_body_writing_image_button>

                                 </Com_main_body_writing_div_3>
                                : 
                                
                                <Com_main_body_writing_div_3>
                                        <Com_main_body_writing_div_4>
                                            <Com_main_body_writing_username_div>
                                               
                                                
                                                
                                            </Com_main_body_writing_username_div>

                                            <Com_main_body_writing_title_div>
                                                <Com_main_body_writing_a >
                                                    <Com_main_body_writing_title_strong>등록된 공지사항이 없습니다.</Com_main_body_writing_title_strong>
                                                    <Com_main_body_writing_title_p></Com_main_body_writing_title_p>
                                                </Com_main_body_writing_a>
                                            </Com_main_body_writing_title_div>

                                        </Com_main_body_writing_div_4>

                                       

                                    

                                 </Com_main_body_writing_div_3>
                                
                                }
                                {writingList.slice(0,4).map((list, index)=> {

                                return(
                                    <Com_main_body_writing_list_div>
                                        <Com_main_body_writing_list_ul>
                                            <Com_main_body_writing_list_li>
                                                <Com_main_body_writing_list_a onClick={()=>{
                                                    axios.get('/community/addView/'+list.writingNo)
                                                }} href={'/'+list.writingNo+'/'+userId}>
                                                    <Com_main_body_writing_list_li_div>
                                                        <Com_main_body_writing_list_li_p>
                                                            <Com_main_body_writing_list_li_span >{list.title}</Com_main_body_writing_list_li_span>
                                                        </Com_main_body_writing_list_li_p>
                                                        <Com_main_body_writing_list_li_em>[{list.commentCount}]</Com_main_body_writing_list_li_em>
                                                    </Com_main_body_writing_list_li_div>
                                                </Com_main_body_writing_list_a>
                                                <Com_main_body_writing_date_div>
                                                   <Com_main_body_writing_show_em>조회 {list.view}</Com_main_body_writing_show_em>
                                                </Com_main_body_writing_date_div>
                                            </Com_main_body_writing_list_li>
                                        </Com_main_body_writing_list_ul>
                                    </Com_main_body_writing_list_div>
                                )
                                })}

                                    

                                </Com_main_body_writing_div_2>
                        </Com_main_body_writing_div>
                        

                    </Com_main_body_section>

                    
                </Com_main_body_div_2>
                
            </Com_maind_body_div>

            
        
        </Com_main_body_article>
        <UserInfo/>
       </Writing_form_Main_div>

       </Sidebar_Main_div>
       </body>
    )
}

export default Community;