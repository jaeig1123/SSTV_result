/* eslint-disable no-undef */
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import { Sidebar_Main_div, Writing_form_Body_form_1, Writing_footer_submit_span,
    Writing_form_Body_article, Writing_form_Body_div1, Writing_form_Body_div2, Writing_form_Body_section, Writing_form_Main_div, Writing_form_Body_form_div2, Writing_form_Body_title_div, Writing_form_Body_title_span, Writing_form_Body_title_Button, Writing_form_Body_title_text_div, Writing_form_Body_title_div_2, Writing_form_Body_title_textarea, Writing_form_Body_edit_div, Writing_footer_alarm_ul, Writing_footer_alarm_li_1, Writing_footer_alarm_li_2, Writing_footer_submit_div, Writing_footer_submit_sdiv, Writing_footer_cancle_button, Writing_footer_submnit_button, Writing_footer_cancle_span } from './style';
import Sidebar from './sidebar';
import Quill from './writingList';
import { faPencil  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
const Writing = () => {
    const quillRef = useRef(null);
    const {data} = useSWR('/user/login', fetcher);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState([]);
    const navigate = useNavigate();
    const {userId} = useParams();
    const hostUserId = userId;
    const guestUserId = data?.userId;
    const [imageContent, setImageContent] = useState('');


    const quillStyles = {
        height: '400px',
    };
    const modules = {
        toolbar: {
            container: [
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'align': [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
              [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
              ['image'],
              ['clean']
             
            ],
        }

        
    }
    useEffect(()=> {
        if(data===undefined){
            alert("로그인이 필요합니다.")
            navigate(`/writingList/${userId}`);
            
         }
    })
    
    
    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Submitted value:', title);
        // console.log('content : '+content)
        // const formData = new FormData();
        // formData.append('title', title);
        // formData.append('content', content);
        // formData.append('hostUserId', hostUserId);
        // formData.append('guestUserId', guestUserId);
        axios.post(
            '/community/addWriting',
                {title, content, guestUserId, hostUserId},
        )
        .then(
            navigate(`/writingList/${userId}`)
        )
        
    };

    const contentChange = (contents) => {
        setContent(contents);
        
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return(
        <body>
        <Header/>
        <Sidebar_Main_div>
            <Sidebar/>
            <Writing_form_Main_div>
                <Writing_form_Body_article>
                    <Writing_form_Body_div1>
                        <Writing_form_Body_div2>
                            <Writing_form_Body_section>
                                <Writing_form_Body_form_1 onSubmit={handleSubmit}>
                                    <Writing_form_Body_form_div2>
                                        <Writing_form_Body_title_div>
                                            <Writing_form_Body_title_Button>
                                            <Writing_form_Body_title_span>게시판 글 작성하기</Writing_form_Body_title_span>
                                            </Writing_form_Body_title_Button>
                                        </Writing_form_Body_title_div>
                                    </Writing_form_Body_form_div2>
                                

                                            <Writing_form_Body_title_text_div>
                                                <Writing_form_Body_title_div_2>
                                                    <Writing_form_Body_title_textarea placeholder='제목을 입력해 주세요' id='title' onChange={handleChange} value={title}/>
                                                </Writing_form_Body_title_div_2>

                                                <Writing_form_Body_edit_div>
                                                <ReactQuill ref={quillRef} modules={modules} style={quillStyles} onChange={contentChange} id='content' value={content} />
                                                </Writing_form_Body_edit_div>
                                            </Writing_form_Body_title_text_div>

                                            <Writing_footer_alarm_ul>
                                                <Writing_footer_alarm_li_1>
                                                    저작권 등 다른사람의 권리를 침해하거나 명예를 훼손하는 게시글은 이용 약관 및 법률에 의해 제재를 받을 수 있습니다.
                                                </Writing_footer_alarm_li_1>
                                                <Writing_footer_alarm_li_2>
                                                    욕석을 포함한 게시글은 삭제 조치 될 수 있습니다.
                                                </Writing_footer_alarm_li_2>
                                            </Writing_footer_alarm_ul>

                                            <Writing_footer_submit_div>
                                                <Writing_footer_submit_sdiv>
                                                    <Writing_footer_cancle_button>
                                                        <Writing_footer_cancle_span>취소</Writing_footer_cancle_span>
                                                    </Writing_footer_cancle_button>

                                                    <Writing_footer_submnit_button >
                                                    <FontAwesomeIcon icon={faPencil} style={{color: "#4279ff",}} />
                                                        <Writing_footer_submit_span >확인</Writing_footer_submit_span>
                                                    </Writing_footer_submnit_button>
                                                </Writing_footer_submit_sdiv>
                                            </Writing_footer_submit_div>
                                </Writing_form_Body_form_1>
                            </Writing_form_Body_section>
                        </Writing_form_Body_div2>
                    </Writing_form_Body_div1>
                </Writing_form_Body_article>
            </Writing_form_Main_div>
        </Sidebar_Main_div>
        </body>
    )
}
export default Writing;