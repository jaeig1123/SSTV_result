/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../Mainpage/header';
import { Container_div, VOD_button, VOD_fileSelect_div, VOD_fileUpload_span, VOD_icon_em, VOD_icon_i, VOD_icon_span, VOD_info_h2, VOD_li1_span, VOD_upload_area, VOD_upload_info, VOD_upload_li_1, VOD_upload_span, VOD_upload_ul } from './vodStyle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import VodUploadSubmit from './vodUploadSubmit';
const vodUpload =()=>{
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [file, setFile]=useState(null);
    const handleClick = () => {
        if(inputRef.current !== null) {
          //파일 선택값 초기화 후 가져옮
          // inputRef.current.value = null;
          inputRef.current.click();
        }
      };
    
    useEffect(()=>{
        
            if(inputRef.current !== null){
                const video = inputRef.current.files[0];
                setFile(video);
                console.log(file);
            }
        
    },[inputRef.current]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        console.log('Selected file:', selectedFile.name);
        console.log('File size:', selectedFile.size);
        console.log(selectedFile)
        
      };
    
    return(
        <body>
            {file && <VodUploadSubmit file={file} />}
        <Header/>
        
        {!file?
        <Container_div>
            <VOD_upload_area>
                <VOD_fileSelect_div>
                    <VOD_icon_span onClick={handleClick} onChange={handleFileChange} style={{ padding: '3px 5px', fontSize: '13px', marginTop:'10px' }}>
                    <input ref={inputRef} type='file' style={{ display: 'none' }}/>
                        <VOD_icon_em></VOD_icon_em>
                        <VOD_icon_i></VOD_icon_i>
                        
                    </VOD_icon_span>
                    <VOD_button onClick={handleClick} onChange={handleFileChange} style={{ padding: '3px 5px', fontSize: '13px', marginTop:'10px' }}>
                        <VOD_fileUpload_span>업로드 파일 선택</VOD_fileUpload_span>
                        <input ref={inputRef} type='file' style={{ display: 'none' }}/>
                    </VOD_button>
                </VOD_fileSelect_div>
                
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
            </VOD_upload_area>
        </Container_div>
        : null}
        </body>
    )
}
export default vodUpload;