/* eslint-disable react-hooks/rules-of-hooks */
import React,{useEffect, useState} from 'react';
import { Comments_up_em, Comments_up_span, Comments_up_button, Comments_content_p, Comments_content_div, Comments_profile_date_span, Comments_profile_user_id_em, Comments_profile_user_id_p, Comments_profile_user_id_button, Commetns_profile_user_id_div_3, Comments_profile_user_id_div_2, Comments_profile_user_id_div, Comments_profile_img, Comments_profile_img_div, Writing_footer_comments_li, Writing_get_footer_comments_list_ul_2, Writing_get_footer_comments_list_span_1, Writing_get_footer_comments_list_button_1, Writing_get_footer_comments_list_ul, Writing_get_footer_comments_list_section, Writing_get_footer_comments_text_span, Writing_get_footer_comments_text_button, Writing_get_footer_comments_text_button_div, Writing_get_footer_comments_text_div, Writing_get_footer_comments_area_div, Writing_get_footer_comments_area_section, Writing_get_footer_comments_img, Writing_get_footer_comments_img_div, Writing_get_footer_comments_input_div, Writing_get_footer_comments_form, Writing_get_footer_comments_div, Writing_get_footer_comment_count_em, Writing_get_footer_comments_span, Writing_get_footer_comments_button, Writing_get_footer_section, CS_Main, Chat_stream_main_div, Stream_main_div, Stream_second_div, Stream_third_div, Stream_div, Footer_main_div, Footer_stream_item_div, Footer_stream_item_ul, Footer_user_image_div, Footer_user_image_a, Footer_user_img, Stream_user_name, Footer_user_count_div, Footer_user_count_span, Footer_user_count_em, Footer_stream_title_span, Footer_stream_title_div, Footer_title_underline } from './replayStyle';
import ReactPlayer from 'react-player';
import Header from '../Mainpage/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlay, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import fetcher from '../utils/fetcher';
const getReplay = () =>{
    const navigate = useNavigate();
    const { data } = useSWR('/user/login', fetcher);
    
    const location = useLocation();
    const path = location.pathname.split("/");
    const [streamInfo, setStreamInfo] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [commentInfo, setCommentInfo] = useState([]);
    const replayNo = path[2];
    const writingNo = 300001+replayNo;
    const [commentContent, setCommentContent] = useState('');

    const commentsUserId = data?.userId;
    const serviceUrl = 'https://kr.object.ncloudstorage.com/hls/livestation/'+streamInfo?.recordUrl;
    const ImageError =(event)=>{
        event.target.src = process.env.PUBLIC_URL+'/img/base_profile.jpg';
    }
    
    const handleChange = (event) => {
        setCommentContent(event.target.value);
        
    }

    const handleSubmit=()=>{
        axios.post('/community/addComments', 
            {writingNo, replayNo, commentsUserId, commentContent},
        )
        .then(navigate(`/getReplay/${replayNo}`))
    }
    
    useEffect(()=> {
        axios.get('/streaming/getStreamingByStreamingNo', {
            params: {
                streamingNo: path[2],
            }
        })
        .then((response)=>{
            setStreamInfo(response.data['firstData']);
            const log = response.data['firstData'];
            
            axios.get('/user/getUser/'+log.USER_ID).then((response) =>{
                setUserInfo(response.data['data'])
                // console.log(response.data);
            })
        axios.get('/community/getWriting/'+replayNo)
        .then((reponse)=>{
            const data = reponse.data['data'];
            
            // console.log(data?.comments);
            setCommentInfo(data?.comments);
        })
        },[])

        // console.log(streamInfo);
       
        
        // axios.get('/user/getUser/'+streamInfo)
        // .then((response)=> {
        //     console.log(response.data);
        // })

        
    },[])

    return(
        <body>
        <Header/>
        <CS_Main>       
        <Chat_stream_main_div id="main">
        
            <Stream_main_div>
                <Stream_second_div>
                    <Stream_third_div>
                        <Stream_div>
                        <ReactPlayer
                                className='react-player'
                                url={'https://kr.object.ncloudstorage.com/hls/livestation/'+streamInfo.RECORD_URL}    // 플레이어 url
                                width='1600px'         // 플레이어 크기 (가로)
                                height='722px'        // 플레이어 크기 (세로)
                                playing={true}        // 자동 재생 on
                                muted={true}          // 자동 재생 on
                                controls={true}       // 플레이어 컨트롤 노출 여부
                                light={false}         // 플레이어 모드
                                pip={true}            // pip 모드 설정 여부
                                poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
                            />
                        </Stream_div>
                    </Stream_third_div>
                    <Footer_main_div>
       <Footer_user_image_div>
        <Footer_user_image_a>
            <Footer_user_img src={process.env.REACT_APP_IMAGE_URL+userInfo.profilePhoto} onError={ImageError} />
        </Footer_user_image_a>
       </Footer_user_image_div>

        <Stream_user_name> {userInfo.userId}</Stream_user_name>
            <Footer_user_count_div>
                <Footer_user_count_span>
                    <Footer_user_count_em><FontAwesomeIcon icon={faPlay} style={{color: "#757d8a",}}/> {streamInfo.TOTAL_STREAMING_VIEWER}</Footer_user_count_em>
                </Footer_user_count_span>
            </Footer_user_count_div>

        <Footer_stream_title_div>
            <Footer_stream_title_span>{streamInfo.STREAMING_TITLE}</Footer_stream_title_span>
        </Footer_stream_title_div>
        <Footer_title_underline/>

        

        <Writing_get_footer_section id="section">
                                                <Writing_get_footer_comments_button>
                                                    {/* <Writing_get_footer_comments_span>
                                                    댓글 <Writing_get_footer_comment_count_em></Writing_get_footer_comment_count_em>
                                                    </Writing_get_footer_comments_span> */}
                                                </Writing_get_footer_comments_button>
                                                
                                                <Writing_get_footer_comments_div>
                                                    {/* 댓글 등록*/}
                                                    {/* <Writing_get_footer_comments_form onSubmit={handleSubmit} >
                                                        <Writing_get_footer_comments_input_div > 
                                                            <Writing_get_footer_comments_img_div >
                                                                <Writing_get_footer_comments_img src={process.env.REACT_APP_IMAGE_URL + data?.profilePhoto}/>
                                                            </Writing_get_footer_comments_img_div>
                                                            <Writing_get_footer_comments_area_section >
                                                                <Writing_get_footer_comments_area_div >
                                                                    
                                                                    <Writing_get_footer_comments_text_div type='text' placeholder='내용을 입력해주세요.' onChange={handleChange}  />
                                                                </Writing_get_footer_comments_area_div>
                                                                <Writing_get_footer_comments_text_button_div>
                                                                    
                                                                    <Writing_get_footer_comments_text_button >
                                                                        <Writing_get_footer_comments_text_span>등록</Writing_get_footer_comments_text_span>
                                                                    </Writing_get_footer_comments_text_button>
                                                                    
                                                                </Writing_get_footer_comments_text_button_div>
                                                            </Writing_get_footer_comments_area_section>
                                                        </Writing_get_footer_comments_input_div>
                                                    </Writing_get_footer_comments_form> */}
                                                     {/* 댓글 등록*/}
                                                     {/* 댓글 목록 */}
                                                     <Writing_get_footer_comments_list_section>
                                                        <Writing_get_footer_comments_list_ul>
                                                            
                                                                {/* <Writing_get_footer_comments_list_button_1>
                                                                    <FontAwesomeIcon icon={faCheck} />
                                                                    <Writing_get_footer_comments_list_span_1>최신순</Writing_get_footer_comments_list_span_1>
                                                                </Writing_get_footer_comments_list_button_1> */}
                                                            
                                                        </Writing_get_footer_comments_list_ul>
                                                        <Writing_get_footer_comments_list_ul_2>
                                                            {/* 반복할 부분  */}
                                                        
                                                           {/* {comment.commentsNo === 0 ? null :  */}
                                                           
                                                        
                                                        {/* {commentInfo?.map((comment, index)=> {

                                                            return(
                                                           
                                                            <Writing_footer_comments_li>
                                                                <Comments_profile_img_div>
                                                                    <Comments_profile_img src={process.env.REACT_APP_IMAGE_URL +comment?.commentsUserId } onError={ImageError} /> 
                                                                </Comments_profile_img_div>
                                                                <Comments_profile_user_id_div>
                                                                    <Comments_profile_user_id_div_2>
                                                                        <Commetns_profile_user_id_div_3>
                                                                            <Comments_profile_user_id_button>
                                                                                <Comments_profile_user_id_p >{comment?.commentsUserId}
                                                                                    <Comments_profile_user_id_em ></Comments_profile_user_id_em>
                                                                                </Comments_profile_user_id_p>
                                                                            </Comments_profile_user_id_button>
                                                                            <Comments_profile_date_span >
                                                                            ● {comment?.regDate}
                                                                            </Comments_profile_date_span>
                                                                        </Commetns_profile_user_id_div_3>
                                                                    </Comments_profile_user_id_div_2>
                                                                </Comments_profile_user_id_div>
                                                                <Comments_content_div>
                                                                    <Comments_content_p >{comment?.commentContent}</Comments_content_p>
                                                                </Comments_content_div>
                                                                <Comments_up_button>
                                                                    <Comments_up_span>up</Comments_up_span>
                                                                    <Comments_up_em>0</Comments_up_em>
                                                                </Comments_up_button>
                                                            </Writing_footer_comments_li>

                                                            )
                                                           
                                                        })} */}
                                                            
                                                            {/* 반복  */}

                                                           

                                                        </Writing_get_footer_comments_list_ul_2>
                                                     </Writing_get_footer_comments_list_section>
                                                     {/* 댓글 목록 */}
                                                </Writing_get_footer_comments_div>
                                               
                                            </Writing_get_footer_section>



    </Footer_main_div>
                    
                </Stream_second_div>
            </Stream_main_div>

            
        </Chat_stream_main_div>

        
    </CS_Main>

    
    


    
    </body>
    )
}

export default getReplay;