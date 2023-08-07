/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { CHeader, CHeader_Dark, Com_h1, HeaderDiv, Header_Modal_Div, 
    Header_Modal_Div_Set, Header_Modal_Label, Header_Modal_Strong_mode, Header_Right_Icon_1_Button, 
    Header_Right_Icon_1_Div, Header_Right_Icon_1_a, Header_Right_Icon_2_Button, 
    Header_Right_Icon_2_Span, Header_Right_Login_Ui_Button, Header_Right_Login_Ui_Div, 
    Header_Right_Login_Ui_Span, Header_Right_Login_Ui_a, Header_Right_Side_Div, 
    Header_Search_Button, Header_Search_Div, Header_Search_Div_input, Header_Search_Div_input_in, 
    Header_Search_Input_in, Header_Search_Side_Button, Header_Search_Side_Span, Header_Search_Span, 
    Header_Search_fieldset, Header_Search_form, Header_a, Header_legend, Header_right_Icon_1_Span } from './style'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import axios from 'axios';
import LoginModal from '../Mainpage/loginModal';
import './style.css';

const header = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const {data} = useSWR('/user/login', fetcher);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const openModal = () => {
        setIsOpen(true);
    };
    const setDarkMode = ()=> {
        setIsDarkMode(true);
    }

    const setWhiteMode = () => {
        setIsDarkMode(false);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    const logout = useCallback(() => {
        axios.get('/user/logout')
        .then(()=>{
            window.location.reload();
        })
    });
      
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //   const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    //     return (
    //       <Modal isOpen={isOpen} onRequestClose={onClose}>
    //         {/* 모달 내용 */}
    //         <Header_Modal_Div>
    //             <Header_Modal_Div_Set>
    //                 <Header_Modal_Strong_mode>
    //                     다크모드
    //                 </Header_Modal_Strong_mode>
    //                 <Header_Modal_Label>

    //                 </Header_Modal_Label>
    //             </Header_Modal_Div_Set>
    //         </Header_Modal_Div>
    //       </Modal>
    //     );
    //   };


    const onSearch =(e) =>{
        setSearch(e.target.value);       
    }

    //검색 이벤트
    const searchSubmit = ()=>{
        navigate('/SearchKeyword/'+search);
    }
   

    return (
        <div>
        <CHeader>
            <HeaderDiv >
                <Com_h1 >
                    
                    <Header_a >
                    <Link to='/'><img src={process.env.PUBLIC_URL +'/img/SSTV.gif'} width={150} height={65} /></Link>
                    </Header_a>
                </Com_h1>

                <Header_Search_Div>
                    <Header_Search_form onSubmit={searchSubmit}>
                        <Header_Search_fieldset>
                            <Header_legend>검색</Header_legend>
                            <Header_Search_Div_input>
                                <Header_Search_Div_input_in>
                                    <Header_Search_Input_in value={search} onChange={onSearch} placeholder='방송국 검색'/>
                                    

                                    <Header_Search_Button>
                                        <Header_Search_Span>
                                        
                                        </Header_Search_Span>
                                    </Header_Search_Button>
                                    
                                </Header_Search_Div_input_in>

                                <Header_Search_Side_Button>
                                    <Header_Search_Side_Span>
                                        통합검색
                                    </Header_Search_Side_Span>
                                </Header_Search_Side_Button>

                                

                            </Header_Search_Div_input>
                        </Header_Search_fieldset>

                                
                    </Header_Search_form>
                </Header_Search_Div>
                    <Header_Right_Side_Div >

                            {data ? (
                                    data.roll === 'admin' ? (
                                        <Link to='/admin/adminUserList'>
                                        <Header_Right_Icon_1_Div>
                                            <Header_Right_Icon_1_a>
                                                
                                                <FontAwesomeIcon icon={faUserSecret} size="2x" style={{cursor:'pointer', marginTop:'6px'}} />
                                                
                                            </Header_Right_Icon_1_a>
                                        </Header_Right_Icon_1_Div>
                                        </Link>
                                    ) : null
                                    ) : null}

                                    <Header_Right_Icon_1_Div>
                                        <Header_Right_Icon_1_a>
                                            <Header_Right_Icon_1_Button>
                                                <Header_right_Icon_1_Span >
                                                    VOD 업로드
                                                </Header_right_Icon_1_Span>
                                            </Header_Right_Icon_1_Button>
                                        </Header_Right_Icon_1_a>
                                    </Header_Right_Icon_1_Div>

                                    <Header_Right_Icon_2_Button>
                                        <Header_Right_Icon_2_Span>

                                        </Header_Right_Icon_2_Span>
                                    </Header_Right_Icon_2_Button>

                                    <Header_Right_Login_Ui_Div>
                                        <Header_Right_Login_Ui_Span>
                                            
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                               <Header_Right_Login_Ui_Button />
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
                                            {/* 관리자만 접근 가능한 페이지이기에.. 하드 코딩.. */}
                                            <MenuItem onClick={()=> {
                                                navigate('/Home/admin');
                                            }}>내 방송국 가기</MenuItem>
                                            <MenuItem onClick={()=> {
                                                navigate('/userInfo/admin');
                                            }}>내 정보 관리</MenuItem>
                                            <MenuItem onClick={()=>{
                                                navigate('/Exchange');
                                            }}>결제 </MenuItem>
                                            <MenuItem onClick={()=>{
                                                navigate('/ticket1');
                                            }}>이용권</MenuItem>
                                        </Menu>
                                        

                                            {/* <Modal isOpen={isOpen} onRequestClose={closeModal} portalClassName='modal-portal'>
                                            <Header_Modal_Div>
                                                <Header_Modal_Div_Set>
                                                    <Header_Modal_Strong_mode>
                                                       다크모드
                                                 </Header_Modal_Strong_mode>
                                                  <Header_Modal_Label>

                                                    </Header_Modal_Label>
                                                </Header_Modal_Div_Set>
                                             </Header_Modal_Div> 


                                            </Modal> */}
                                            
                                            
                                            {!data ? 
                                            <Header_Right_Login_Ui_a onClick={openModal}>
                                                        로그인
                                            </Header_Right_Login_Ui_a>
                                            :
                                            <Header_Right_Login_Ui_a onClick={logout}>
                                                        로그아웃
                                            </Header_Right_Login_Ui_a>
                                            }
                                            {isOpen && <LoginModal onClose={isOpen} setOnClose={setIsOpen}/>}
                                            
                                        </Header_Right_Login_Ui_Span>
                                        
                                    </Header_Right_Login_Ui_Div>
                                
                                </Header_Right_Side_Div>

            </HeaderDiv>
        </CHeader>
    
        {/* <div id="menu">  
        <ul class="menu text">
            <li class=" "><a href="https://sotong.afreecatv.com" target="_top">소통센터 홈</a></li>
            <li class=" "><a href="https://sotong.afreecatv.com/?board_type=servicenotice&amp;work=list" target="_top">알려드립니다</a></li>
            <li class=" "><a href="https://sotong.afreecatv.com/?board_type=user&amp;work=list" target="_top">유저게시판</a></li>
            <li class=" "><a href="https://sotong.afreecatv.com/?board_type=bj&amp;work=list" target="_top">BJ 게시판</a></li>
            <li class="on "><a href="https://sotong.afreecatv.com/?board_type=report&amp;work=list" target="_top">버그리포트</a></li>
            <li class=" floatR"><a href="https://contentlab.afreecatv.com" target="_blank">콘텐츠 지원센터<i class="target_blank"></i></a></li>
            <li class=" floatR"><a href="https://bjguide.afreecatv.com" target="_blank">BJ 가이드<i class="target_blank"></i></a></li>
        </ul>
    </div> */}
</div>
    )
}

export default header;


  