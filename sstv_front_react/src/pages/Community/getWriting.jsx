/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from './header';
import Side from './sidebar';
import axios from 'axios';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import parse from 'html-react-parser';
import {Comments_up_em, Comments_up_span, Comments_up_button, Comments_content_div, Comments_profile_user_id_p, Writing_footer_comments_li, Writing_get_footer_comments_list_ul_2,Writing_get_footer_comments_list_li_1,Writing_get_footer_comments_list_section, Writing_get_footer_comments_text_span, Writing_get_footer_comments_text_button, Writing_get_footer_comments_area_div,Writing_get_footer_comments_img, Writing_get_footer_comments_form, Writing_get_footer_comments_div,Writing_get_footer_section, Writing_get_body_list2_span, Writing_get_body_listbutton_div, Writing_get_body_main_div, Writing_get_bs_header_user_em, Writing_get_bs_header_user_p, Sidebar_Main_div, Writing_get_bs_contents_article, Writing_get_bs_contents_div, Writing_get_bs_div, Writing_get_bs_div_2, Writing_get_bs_div_3, Writing_get_bs_div_4, Writing_get_bs_header_a, Writing_get_bs_header_div, Writing_get_bs_header_h2, Writing_get_bs_header_section, Writing_get_bs_header_user_box_div, Writing_get_bs_header_user_button, Writing_get_bs_header_user_div, Writing_get_bs_header_user_img, Writing_get_bs_header_user_img_div, Writing_get_bs_section, Writing_get_bs_header_user_date_span, Writing_get_bs_header_user_query_span, Writing_get_bs_header_user_query_em, Writing_get_bs_header_user_right_button, Writing_get_header_right_button_span, Writing_get_body_main_section, Writing_get_body_main_p, Writing_get_body_listbutton_div_2, Writing_get_body_listbutton_button, Writing_get_body_listbutton_span, Writing_get_body_listbutton_em, Writing_get_body_listbutton_2, Writing_get_footer_comments_button, Writing_get_footer_comments_span, Writing_get_footer_comment_count_em, Writing_get_footer_comments_input_div, Writing_get_footer_comments_img_div, Writing_get_footer_comments_area_section, Writing_get_footer_comments_textarea, Writing_get_footer_comments_text_div, Writing_get_footer_comments_text_button_div, Writing_get_footer_right_div, Writing_get_body_right_button_div, Writing_get_footer_comments_list_ul, Writing_get_footer_comments_list_button_1, Writing_get_footer_comments_list_span_1, Comments_profile_img_div, Comments_profile_img, Comments_profile_user_id_div, Comments_profile_user_id_div_2, Commetns_profile_user_id_div_3, Comments_profile_user_id_button, Comments_profile_user_id_em, Comments_profile_date_span, Comments_content_p } from './style';
import { faCheck ,faPencil , faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
const getWriting = () => {
  const [userData, setUserData]= useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [agreeOpen, setAgreeOpen] = useState(false);
  const open = Boolean(anchorEl);
  const [commentContent, setCommentContent ] = useState('');
  const location = useLocation();
  const path = location.pathname.split("/");
  const userId = path[2];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    const [data, setData ] = useState('');
    const [comment, setComment ] = useState([]);
    const [nocomment, setNocomment] = useState('');
    const { writingNo } = useParams();
    const navigate = useNavigate();
    const replayNo = 1;
    const commentsUserId = "user1";
    useEffect(()=>{
        axios.get('/community/getWriting/'+writingNo)
        .then((response)=> {
            const datalist = response.data;
            
            setData(datalist['data'])
            setComment(datalist['data'].comments)
            setNocomment(datalist['data'].comments[0].commentsUserId);
            
        })
        
    },[])
   useEffect(()=>{
     axios.get('/user/login')
     .then((response)=> {
        const jsonData = response.data;
        setUserData(jsonData['data']);        
     })
   },[])
   console.log(userData);
    const deleteWriting = ()=> {
        axios.get(`/community/deleteWriting/`+writingNo);
        navigate(`/writingList/${userId}`);
    }

    const addNotice =()=>{
        axios.get('/community/addNotice/'+writingNo);
        navigate(`/home/`+userId);
    }
    //const parse = json.parse()
    const listOnClick = () => {
       navigate(`/writingList/${userId}`);
    }
    
    const handleClickOpen = () => {
        setAgreeOpen(true);
      };
    
    const close = () => {
        setAgreeOpen(false);
      };

      const deleteOpen = () =>{
        
      }
    const handleChange = (event) => {
        setCommentContent(event.target.value);
        
    }

    const ImageError = (event)=> {
        event.target.src = process.env.PUBLIC_URL+'/img/base_profile.jpg';
    }
    
    const handleSubmit = (event) => {
        
        
        console.log('content : ')
        axios.post('/community/addComments',
         {writingNo,replayNo,commentsUserId, commentContent },
         )
         .then(navigate(`/${writingNo}/${userId}`));
    }
    function padZero(number) {
        return number < 10 ? '0' + number : number;
      }
      let date = new Date(data.regDate);
      let formattedDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate() +' '+padZero(date.getHours()) + ":"+ padZero(date.getMinutes());
    return(
        <body>
            <Header/>
            <Sidebar_Main_div>
                <Side/>
                <Writing_get_bs_contents_div>
                    <Writing_get_bs_contents_article>
                        <Writing_get_bs_div>
                            <Writing_get_bs_div_2>
                                <Writing_get_bs_div_3>
                                    <Writing_get_bs_div_4>
                                        {/* main section */}
                                        <Writing_get_bs_section>
                                            <Writing_get_bs_header_section>
                                                <Writing_get_bs_header_div>
                                                    <Writing_get_bs_header_a>
                                                        자유게시판
                                                    </Writing_get_bs_header_a>
                                                    <Writing_get_bs_header_h2>
                                                        {data.title }
                                                    </Writing_get_bs_header_h2>
                                                    <Writing_get_bs_header_user_div>
                                                        <Writing_get_bs_header_user_img_div>
                                                            <Writing_get_bs_header_user_img src={process.env.REACT_APP_IMAGE_URL+data.guestUserId+'.jpg' } onError={ImageError}/>
                                                        </Writing_get_bs_header_user_img_div>
                                                        <Writing_get_bs_header_user_box_div>
                                                            <Writing_get_bs_header_user_button>
                                                                <Writing_get_bs_header_user_p>
                                                                    {data.guestNickName} <Writing_get_bs_header_user_em></Writing_get_bs_header_user_em>
                                                                </Writing_get_bs_header_user_p>
                                                            </Writing_get_bs_header_user_button>
                                                            <Writing_get_bs_header_user_date_span>● {formattedDate}</Writing_get_bs_header_user_date_span>
                                                            <Writing_get_bs_header_user_query_span>
                                                                <Writing_get_bs_header_user_query_em>● 조회</Writing_get_bs_header_user_query_em>
                                                                {data.view}
                                                            </Writing_get_bs_header_user_query_span>
                                                        </Writing_get_bs_header_user_box_div>
                                                    </Writing_get_bs_header_user_div>
                                                   
                                                    <Writing_get_bs_header_user_right_button>

                                                    <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                                <Writing_get_header_right_button_span/>
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                {userData?.userId===data?.hostUserId? 
                                                <MenuItem onClick={addNotice}>&nbsp;공지등록</MenuItem>
                                                :null}
                                                {userData?.userId===data?.guestUserId? 
                                                <MenuItem onClick={()=>{
                                                    navigate('/')
                                                }}>&nbsp;&nbsp;글 수정</MenuItem>
                                                :null}
                                                <Button variant="text" onClick={handleClickOpen} >
                                                <MenuItem onClick={deleteOpen}>글 삭제</MenuItem>
                                                </Button>
                                                <Dialog
                                                    open={agreeOpen}
                                                    onClose={close}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                    >
                                                    <DialogTitle id="alert-dialog-title">
                                                        {"게시글을 삭제하시겠습니까?"}
                                                    </DialogTitle>
                                                    <DialogContent>
                                                        <DialogContentText id="alert-dialog-description">
                                                        삭제한 글은 다시 되돌릴 수 없습니다.
                                                        완전히 삭제하시려면 삭제 버턴을 눌러주세요.
                                                        </DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={handleClose}>취소</Button>
                                                        <Button onClick={deleteWriting} autoFocus>
                                                        삭제
                                                        </Button>
                                                    </DialogActions>
                                                    </Dialog>
                                                
                                                
                                            </Menu>

                                                        
                                                    </Writing_get_bs_header_user_right_button>
                                                </Writing_get_bs_header_div>
                                            </Writing_get_bs_header_section>
                                            {/* 글내용 부분 */}
                                            <Writing_get_body_main_section>
                                                <Writing_get_body_main_div>
                                                    <Writing_get_body_main_p >
                                                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                                                       
                                                       
                                                    </Writing_get_body_main_p>
                                                </Writing_get_body_main_div>
                                                {/* main section */}
                                            </Writing_get_body_main_section>
                                            {/* 글내용 부분 */}
                                        
                                        {/* 내용 밑 버튼 부분 */}
                                        <Writing_get_body_listbutton_div>
                                            {/* <Writing_get_body_listbutton_div_2> */}
                                                <Writing_get_body_listbutton_button>
                                                    <Writing_get_body_listbutton_span>{data.up}</Writing_get_body_listbutton_span>
                                                    <Writing_get_body_listbutton_em>{data.view}</Writing_get_body_listbutton_em>
                                                </Writing_get_body_listbutton_button>
                                                <Writing_get_body_right_button_div>
                                                <Writing_get_body_listbutton_2 className='float-right'>
                                                    <Writing_get_body_list2_span onClick={listOnClick}>목록</Writing_get_body_list2_span>
                                                </Writing_get_body_listbutton_2>
                                                </Writing_get_body_right_button_div>
                                            {/* </Writing_get_body_listbutton_div_2> */}
                                        </Writing_get_body_listbutton_div>
                                        {/* 내용 밑 버튼 부분 */}
                                            <Writing_get_footer_section id="section">
                                                <Writing_get_footer_comments_button>
                                                    <Writing_get_footer_comments_span>
                                                    댓글 <Writing_get_footer_comment_count_em>{nocomment === null? 0:comment.length}</Writing_get_footer_comment_count_em>
                                                    </Writing_get_footer_comments_span>
                                                </Writing_get_footer_comments_button>
                                                
                                                <Writing_get_footer_comments_div>
                                                    {/* 댓글 등록*/}
                                                    <Writing_get_footer_comments_form onSubmit={handleSubmit}>
                                                        <Writing_get_footer_comments_input_div>
                                                            <Writing_get_footer_comments_img_div>
                                                                <Writing_get_footer_comments_img src={process.env.REACT_APP_IMAGE_URL +userData?.userId+'.jpg'} onError={ImageError}/>
                                                            </Writing_get_footer_comments_img_div>
                                                            <Writing_get_footer_comments_area_section >
                                                                <Writing_get_footer_comments_area_div >
                                                                    
                                                                    <Writing_get_footer_comments_text_div  onChange={handleChange} placeholder='내용을 입력해주세요.' ></Writing_get_footer_comments_text_div>
                                                                </Writing_get_footer_comments_area_div>
                                                                <Writing_get_footer_comments_text_button_div>
                                                                    
                                                                    <Writing_get_footer_comments_text_button >
                                                                        <Writing_get_footer_comments_text_span>등록</Writing_get_footer_comments_text_span>
                                                                    </Writing_get_footer_comments_text_button>
                                                                    
                                                                </Writing_get_footer_comments_text_button_div>
                                                            </Writing_get_footer_comments_area_section>
                                                        </Writing_get_footer_comments_input_div>
                                                    </Writing_get_footer_comments_form>
                                                     {/* 댓글 등록*/}
                                                     {/* 댓글 목록 */}
                                                     <Writing_get_footer_comments_list_section>
                                                        <Writing_get_footer_comments_list_ul>
                                                            {/* <Writing_get_footer_comments_list_li_1> */}
                                                                <Writing_get_footer_comments_list_button_1>
                                                                    <FontAwesomeIcon icon={faCheck} />
                                                                    <Writing_get_footer_comments_list_span_1>최신순</Writing_get_footer_comments_list_span_1>
                                                                </Writing_get_footer_comments_list_button_1>
                                                            {/* </Writing_get_footer_comments_list_li_1> */}
                                                        </Writing_get_footer_comments_list_ul>
                                                        <Writing_get_footer_comments_list_ul_2>
                                                            {/* 반복할 부분  */}
                                                        
                                                           {/* {comment.commentsNo === 0 ? null :  */}
                                                          { 
                                                            nocomment === null ? null :
                                                          comment.map((item, i)=> {

                                                           return(
                                                            <Writing_footer_comments_li>
                                                                <Comments_profile_img_div>
                                                                    <Comments_profile_img src={process.env.PUBLIC_URL +'/img/base_profile.jpg'} /> 
                                                                    {/* <Comments_profile_img src={process.env.PUBLIC_URL +userData.userId+'.jpg'} />  */}
                                                                </Comments_profile_img_div>
                                                                <Comments_profile_user_id_div>
                                                                    <Comments_profile_user_id_div_2>
                                                                        <Commetns_profile_user_id_div_3>
                                                                            <Comments_profile_user_id_button>
                                                                                <Comments_profile_user_id_p >nickname
                                                                                    <Comments_profile_user_id_em key={i}>({item.commentsUserId})</Comments_profile_user_id_em>
                                                                                </Comments_profile_user_id_p>
                                                                            </Comments_profile_user_id_button>
                                                                            <Comments_profile_date_span key={i}>
                                                                            ● {item.regDate}
                                                                            </Comments_profile_date_span>
                                                                        </Commetns_profile_user_id_div_3>
                                                                    </Comments_profile_user_id_div_2>
                                                                </Comments_profile_user_id_div>
                                                                <Comments_content_div>
                                                                    <Comments_content_p key={i}>{item.commentContent}</Comments_content_p>
                                                                </Comments_content_div>
                                                                <Comments_up_button>
                                                                    <Comments_up_span>up</Comments_up_span>
                                                                    <Comments_up_em>0</Comments_up_em>
                                                                </Comments_up_button>
                                                            </Writing_footer_comments_li>
                                                           )
                                                            })}
                                                            
                                                            {/* 반복  */}

                                                            {/* {comment.map((item, i)=> {
                                                                return(
                                                                <div key={i}>{item.commentsNo}</div>
                                                                )
                                                                console.log(item.commentsNo)
                                                            })} */}

                                                        </Writing_get_footer_comments_list_ul_2>
                                                     </Writing_get_footer_comments_list_section>
                                                     {/* 댓글 목록 */}
                                                </Writing_get_footer_comments_div>
                                               
                                            </Writing_get_footer_section>
                                        </Writing_get_bs_section>
                                    </Writing_get_bs_div_4>
                                </Writing_get_bs_div_3>
                            </Writing_get_bs_div_2>
                        </Writing_get_bs_div>
                    </Writing_get_bs_contents_article>
                </Writing_get_bs_contents_div>
            </Sidebar_Main_div>
        </body>
    )
}
export default getWriting;