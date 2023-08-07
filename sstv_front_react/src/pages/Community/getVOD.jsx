/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Header from '../Mainpage/header';
import { VOD_Body_article, VOD_Body_section, VOD_Header_div, VOD_Header_user_div, VOD_body_div, VOD_body_inner, VOD_cate_dd, VOD_cate_dt, VOD_comment_button_div, VOD_comment_content, VOD_comment_count, VOD_comment_date_div, VOD_comment_date_span, VOD_comment_div, VOD_comment_info_box, VOD_comment_inner, VOD_comment_input_div, VOD_comment_input_inner, VOD_comment_p, VOD_comment_span, VOD_comment_span2, VOD_comment_submit_button, VOD_comment_ul, VOD_comment_user, VOD_comment_userId_button, VOD_comment_user_img, VOD_comment_writie_area, VOD_commnet_li, VOD_commnet_userId_div, VOD_commnet_userId_p, VOD_commnet_userId_wrap, VOD_content_div, VOD_content_span, VOD_date_dd, VOD_date_dt, VOD_detail_div, VOD_div, VOD_guest_button, VOD_guest_img, VOD_guest_info, VOD_guest_nickname, VOD_host_button, VOD_info_div, VOD_info_dl, VOD_info_inner, VOD_player_div, VOD_section, VOD_title_h3, VOD_user_image_div, VOD_video, VOD_view_div, VOD_view_span, VOD_wrap, Vod_htumb_blur, Vod_list_item } from './vodStyle';
import { Com_main_body_vod_2_title_em, Replay_view_em } from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import LoginModal from '../Mainpage/loginModal';
const getVOD =()=>{
    const navigate = useNavigate();
    const [onClose, setOnClose] = useState(false);
    const {data}=useSWR('/user/login', fetcher);
    const location= useLocation();
    const path = location.pathname.split("/");
    const [vodInfo, setVodInfo] = useState('');
    const [commentContent, setCommentContent] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const commentsUserId = data?.userId;
    const vodNo = path[2];
    const onChangeComment =(e)=>{
        e.preventDefault();
        setCommentContent(e.target.value);
    }

    const onSubmitCommnet =() =>{
        axios.post('/community/addVodComments', {commentContent,commentsUserId,vodNo})
        window.location.reload();
    }

    useEffect(()=>{
        axios.get('/community/getVod/'+path[2])
        .then((response)=>{
            setVodInfo(response.data['data']);
        })
    },[])

    useEffect(()=>{


        axios.get('/community/getVodCommentsList/'+path[2])
        .then((response)=>{
            setCommentsList(response.data['data']);
            setCommentCount(response.data['data2'])
        })
        
    },[])
    console.log(commentsList);

    // category = {
        
    let reportType;

switch (vodInfo.category) {
  case 1:
    reportType = '기타';
    break;
  case 2:
    reportType = '게임';
    break;
  case 3:
    reportType = '일상';
    break;
  case 4:
    reportType = '스포츠';
    break;
  case 5:
    reportType = '운동';
    break;
  default:
    reportType = '';
    break;
}

    const date = new Date(vodInfo.regDate)
    function padZero(number) {
        return number < 10 ? '0' + number : number;
      }
    let formattedDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate() +' '+padZero(date.getHours()) + ":"+ padZero(date.getMinutes());
    
      

    return(
        
    <VOD_div>
        {onClose && <LoginModal onClose={onClose} setOnClose={setOnClose} />}
        <VOD_wrap>
        <Header/>
        <VOD_Body_article>
            <VOD_Body_section>
                <Vod_list_item>
                    {/* <Vod_htumb_blur>

                    </Vod_htumb_blur> */}
                    <VOD_player_div>
                        <VOD_video autoPlay controls src={process.env.REACT_APP_VOD_URL+vodInfo.fileName+'.mp4'}/>
                    </VOD_player_div>
                </Vod_list_item>
            </VOD_Body_section>

            <VOD_section>
                <VOD_Header_div>
                    <VOD_Header_user_div>
                        <VOD_user_image_div>
                            <VOD_guest_img src={process.env.REACT_APP_IMAGE_URL+vodInfo.guestUserId+'.jpg'} />
                        </VOD_user_image_div>

                        <VOD_guest_info>
                            <VOD_guest_nickname>
                                <VOD_guest_button onClick={()=>{navigate("/home/"+vodInfo.guestUserId)}}>{vodInfo.guestUserId}</VOD_guest_button>
                                <VOD_host_button onClick={()=>{navigate("/home/"+vodInfo.hostUserId)}}>{vodInfo.hostUserId}</VOD_host_button>
                            </VOD_guest_nickname>

                            <VOD_view_div>
                            <VOD_view_span>
                            <Replay_view_em></Replay_view_em>{vodInfo.view}</VOD_view_span>
                        </VOD_view_div>
                        </VOD_guest_info>

                        

                    </VOD_Header_user_div>
                </VOD_Header_div>


                <VOD_body_div>
                    <VOD_body_inner>
                        <VOD_detail_div>
                            <VOD_title_h3>{vodInfo.title}</VOD_title_h3>

                            <VOD_content_div>
                                <VOD_content_span>{vodInfo.content}</VOD_content_span>
                            </VOD_content_div>

                            <VOD_info_div>
                                <VOD_info_inner id='inner'>
                                    <VOD_info_dl>
                                        <VOD_date_dt>등록일</VOD_date_dt>
                                        <VOD_date_dd>{formattedDate}</VOD_date_dd>
                                        <VOD_cate_dt>카테고리</VOD_cate_dt>
                                        <VOD_cate_dd>{reportType}</VOD_cate_dd>
                                    </VOD_info_dl>
                                </VOD_info_inner>
                            </VOD_info_div>

                        </VOD_detail_div>

                        <VOD_comment_div>
                            <VOD_comment_inner>
                                <VOD_comment_span>
                                    댓글 <VOD_comment_count>{commentCount}</VOD_comment_count>
                                </VOD_comment_span>
                            </VOD_comment_inner>

                        {commentsList.map((comment, index)=>{

                            const commmentDate = new Date(comment.regDate)
                            let commentFormattedDate = commmentDate.getFullYear()+'-' + (commmentDate.getMonth()+1) + '-'+commmentDate.getDate() +' '+padZero(commmentDate.getHours()) + ":"+ padZero(commmentDate.getMinutes());
                            return(
                            <VOD_comment_user>
                                <VOD_comment_ul>
                                    <VOD_commnet_li>
                                        <VOD_comment_span2 onClick={()=>{navigate("/home/"+comment.commentsUserId)}}>
                                            <VOD_comment_user_img src={process.env.REACT_APP_IMAGE_URL+comment.commentsUserId+".jpg"}/>
                                        </VOD_comment_span2>

                                        <VOD_commnet_userId_div>
                                            <VOD_commnet_userId_wrap>
                                                <VOD_comment_info_box>
                                                    <VOD_comment_userId_button onClick={()=>{navigate("/home/"+comment.commentsUserId)}} >
                                                        <VOD_commnet_userId_p >{comment.commentsUserId}</VOD_commnet_userId_p>
                                                    </VOD_comment_userId_button>

                                                    <VOD_comment_date_div>
                                                        <VOD_comment_date_span>
                                                            {commentFormattedDate}
                                                        </VOD_comment_date_span>
                                                    </VOD_comment_date_div>

                                                </VOD_comment_info_box>
                                            </VOD_commnet_userId_wrap>
                                        </VOD_commnet_userId_div>

                                        <VOD_comment_content>
                                            <VOD_comment_p>{comment.commentContent}</VOD_comment_p>
                                        </VOD_comment_content>

                                    </VOD_commnet_li>
                                </VOD_comment_ul>
                            </VOD_comment_user>
                            )
                            })}

                        </VOD_comment_div>

                    </VOD_body_inner>
                </VOD_body_div>

                <VOD_comment_input_div>
                    <VOD_comment_input_inner>
                        <VOD_comment_input_div>
                        <VOD_comment_button_div>
                            <VOD_comment_writie_area onKeyPress={(e)=>{
                                if(e.key === 'Enter'){
                                    onSubmitCommnet();
                                }
                            }} onFocus={()=>{
                                if(data===null || data===undefined){
                                    setOnClose(true);
                                }
                            }} onChange={onChangeComment} placeholder='내용을 입력해주세요.' />
                            
                                <VOD_comment_submit_button onClick={onSubmitCommnet}>등록</VOD_comment_submit_button>
                            </VOD_comment_button_div>
                        </VOD_comment_input_div>
                    </VOD_comment_input_inner>
                </VOD_comment_input_div>

            </VOD_section>

        </VOD_Body_article>
        </VOD_wrap>
    </VOD_div>
    )
}
export default getVOD;