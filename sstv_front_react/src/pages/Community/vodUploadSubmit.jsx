/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Header from '../Mainpage/header';
import AWS from 'aws-sdk'
import axios from 'axios';
import { Con_list, Middle_area, Middle_title_input, Middle_title_p, VOD_Button_Cancle_button, VOD_Button_Cancle_span, VOD_Button_Submit, VOD_Button_Submit_span, VOD_Button_arera, VOD_Catagory_a, VOD_Catagory_box, VOD_Catagory_box_Strong, VOD_Catagory_content_dd, VOD_Catagory_div, VOD_Catagory_select, VOD_Catagory_strong, VOD_Catagory_textarea, VOD_Category_Wrap, VOD_Category_list_a, VOD_Category_list_li, VOD_Category_list_ul, VOD_Category_span, VOD_Category_strong, VOD_Image_div, VOD_Image_img, VOD_Image_span, VOD_Info, VOD_Info_li, VOD_Input_area, VOD_Title_dl, VOD_info_h2, VOD_input_form, VOD_li1_span, VOD_title_dt, VOD_upload_info, VOD_upload_li_1, VOD_upload_span, VOD_upload_ul } from './vodStyle';
import { useLocation, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
const vodUploadSubmit = ({file})=>{
    const navigate = useNavigate();
    const {data} = useSWR('/user/login', fetcher);
    const loaction = useLocation();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState(1);
    const [onMouse, setOnMouse] = useState(false);
    const [uploadImage, setUploadImage] = useState(null);
    const [categoryName, setCategoryName] = useState('기타');
    const guestUserId = data?.userId;
    const path = location.pathname.split("/");
    const hostUserId = path[2];
    
    const categorySet = (code) => {
        setCategory(code);
        getCategory(code);
    }

    const onHoverMouse =() =>{
        setOnMouse(true);
    }
    const onLeaveMouse =() =>{
        setOnMouse(false);
    }

    const getCategory = (category) => {
        let reportType;
    
        switch (category) {
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
            break;
        }
        return setCategoryName(reportType);
      }

    
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }
    
    const onChangeContent = (e) => {
        setContent(e.target.value);
        console.log(content);
    }

    const jsonData = {
        'title': title,
        'content': content,
        'category': category,
        'guestUserId': guestUserId,
        'hostUserId': hostUserId
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('jsonData', JSON.stringify(jsonData));

    


    const handleSubmit =()=>{
        axios.post('/community/addVod', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        })
        .then(
            navigate('/vodList/'+hostUserId)
        )
    }

    useEffect(()=>{
        const reader = new FileReader();
        reader.onload = () => {
            setUploadImage(reader.result);
        };
        reader.readAsDataURL(file);
        console.log(reader);
    },[])

    console.log(file);
    
 
    return(
        <div>
            <Header/>
            <Con_list>
                <VOD_Info>
                    <VOD_Info_li>
                        <VOD_Input_area>
                            <VOD_input_form onSubmit={handleSubmit}>
                                <VOD_Image_div>
                                    <VOD_Image_span>
                                        <VOD_Image_img src={uploadImage}/>
                                    </VOD_Image_span>
                                </VOD_Image_div>

                                <VOD_Title_dl>
                                    
                                <Middle_area>
                                <VOD_title_dt>제목</VOD_title_dt>
                                    <Middle_title_p>
                                        <Middle_title_input onChange={onChangeTitle} type='text' />
                                    </Middle_title_p>



                                <VOD_Catagory_div>
                                    <VOD_Catagory_strong>카테고리 선택</VOD_Catagory_strong>
                                    <VOD_Catagory_select>
                                        <VOD_Catagory_box onMouseOver={onHoverMouse} onMouseLeave={onLeaveMouse}>

                                            

                                            <VOD_Catagory_a>
                                                <VOD_Catagory_box_Strong>{categoryName}</VOD_Catagory_box_Strong>
                                            </VOD_Catagory_a>

                                        {onMouse && (
                                            <VOD_Category_Wrap>
                                                <VOD_Category_strong>
                                                    전체 카테고리
                                                </VOD_Category_strong>
                                                <VOD_Category_list_ul>
                                                    <VOD_Category_list_li>
                                                        <VOD_Category_list_a>
                                                            <VOD_Category_span onClick={()=>categorySet(2)}>게임</VOD_Category_span>
                                                        </VOD_Category_list_a>
                                                    </VOD_Category_list_li>

                                                    <VOD_Category_list_li>
                                                        <VOD_Category_list_a>
                                                            <VOD_Category_span onClick={()=>categorySet(3)}>일상</VOD_Category_span>
                                                        </VOD_Category_list_a>
                                                    </VOD_Category_list_li>

                                                    <VOD_Category_list_li>
                                                        <VOD_Category_list_a>
                                                            <VOD_Category_span onClick={()=>categorySet(4)}>스포츠</VOD_Category_span>
                                                        </VOD_Category_list_a>
                                                    </VOD_Category_list_li>

                                                    <VOD_Category_list_li>
                                                        <VOD_Category_list_a>
                                                            <VOD_Category_span onClick={()=>categorySet(5)}>운동</VOD_Category_span>
                                                        </VOD_Category_list_a>
                                                    </VOD_Category_list_li>

                                                </VOD_Category_list_ul>
                                            </VOD_Category_Wrap>
                                            )}
                                        </VOD_Catagory_box>
                                        
                                    </VOD_Catagory_select>
                                </VOD_Catagory_div>



                                    <VOD_title_dt>내용</VOD_title_dt>
                                    <VOD_Catagory_content_dd>
                                        <VOD_Catagory_textarea onChange={onChangeContent}></VOD_Catagory_textarea>
                                    </VOD_Catagory_content_dd>
                                </Middle_area>
                                </VOD_Title_dl>

                                <VOD_upload_info>
                    <VOD_info_h2>
                        <VOD_upload_span>VOD 업로드 안내</VOD_upload_span>
                        </VOD_info_h2>
                        <VOD_upload_ul>
                            <VOD_upload_li_1>
                            ㆍ지원되는 VOD: 
                                <VOD_li1_span>
                                <span id="textAcceptFileType">WMV, AVI, ASF, MPEG, MOV, MP4, MKV, 3GP (MP4 권장)</span>
                                </VOD_li1_span>
                            </VOD_upload_li_1>
                            <VOD_upload_li_1>
                            ㆍ누구든지 정보통신망을 통하여 음란, 저작권(영상, 음원, 이미지, 글꼴 등) 침해, 명예훼손, 청소년 유해물, 불법 촬영물 등 <br/>
                            기타 위법 자료를 게시 또는 배포하면 해당 게시물은 경고 없이 삭제되며, <br/>
                            게시자는 법률에 따라 징역형 또는 벌금형에 처해질 수 있습니다.
                            </VOD_upload_li_1>
                        </VOD_upload_ul>
                </VOD_upload_info>
                            </VOD_input_form>

                                <VOD_Button_arera>
                                    <VOD_Button_Submit onClick={handleSubmit}>
                                        <VOD_Button_Submit_span>게시</VOD_Button_Submit_span>
                                    </VOD_Button_Submit>
                                    <VOD_Button_Cancle_button>
                                        <VOD_Button_Cancle_span>취소</VOD_Button_Cancle_span>
                                    </VOD_Button_Cancle_button>
                                </VOD_Button_arera>

                        </VOD_Input_area>
                    </VOD_Info_li>
                </VOD_Info>
            </Con_list>
            </div>
    )
}

export default vodUploadSubmit;