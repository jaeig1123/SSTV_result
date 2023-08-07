/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { redirect, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faFolderTree} from '@fortawesome/free-solid-svg-icons';
import { CHeader, CHeader_Dark, Com_h1, HeaderDiv, Header_Modal_Div, 
    Header_Modal_Div_Set, Header_Modal_Label, Header_Modal_Strong_mode, Header_Right_Icon_1_Button, 
    Header_Right_Icon_1_Div, Header_Right_Icon_1_a, Header_Right_Icon_2_Button, 
    Header_Right_Icon_2_Span, Header_Right_Login_Ui_Button, Header_Right_Login_Ui_Div, 
    Header_Right_Login_Ui_Span, Header_Right_Login_Ui_a, Header_Right_Side_Div, 
    Header_Search_Button, Header_Search_Div, Header_Search_Div_input, Header_Search_Div_input_in, 
    Header_Search_Input_in, Header_Search_Side_Button, Header_Search_Side_Span, Header_Search_Span, 
    Header_Search_fieldset, Header_Search_form, Header_a, Header_legend, Header_right_Icon_1_Span } from './style'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import LoginModal from './loginModal';
import StartStreamingModal from './startStreamingModal';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import axios from 'axios';
import Mainpage from '.';
import { useCookies } from 'react-cookie';

const header = ({isDarkMode, setIsDarkMode}) => {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [startStreamingIsOpen, setStartStreamingIsOpen] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['NSESSIONID']);
    const {data} = useSWR('/user/login', fetcher);
    const navigate = useNavigate();
    // const [userId, setUserId] = useState('');
    const userId = data?.userId;
    
    // // userId 값 세팅
    // useEffect(() => {
    //     axios.get('/user/login').then((response) => {
    //       if(response.data?.data?.userId !== userId){
    //       setUserId(response.data?.data?.userId);
    //       }
    //       if(response.data?.data !== userId){
    //       setUserId(response.data?.data);
    //       }
    //     });
    //   }, [userId]);

    const onSearch =(e) =>{
        setSearch(e.target.value);
        
    }
    
    const searchSubmit = ()=>{
        navigate('/SearchKeyword/'+search);
    }

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    }
    const openStartStreamingModal = async () => {
        const response = await validateStreamingRoll();
        const result = response.firstData;

        if(result == '0') {
            setStartStreamingIsOpen(true);
        } else if(result == '1') {
            openModal();
        } else if(result == '2')  {
            alert('회원님은 이미 스트리밍이 진행중입니다 해당 스트리밍 페이지로 이동합니다.');
            navigate('/streamerChat');
        } else if(result == '3') {
            alert('회원님은 현재 스트리밍 권한이 정지되었습니다.');
        }
    }
    const closeStartStreamingModal = () => {
        setStartStreamingIsOpen(false);
    }

    const setDarkMode = ()=> {
        setIsDarkMode(false);
    }

    const setWhiteMode = () => {
        setIsDarkMode(true);
        
    }

    const removeNodeCookie = () => {
        removeCookie('NSESSIONID', { path: '/' });
    };

    const logout = useCallback(() => {
        axios.create({
            baseURL: `${process.env.REACT_APP_NODE_URL}`,
            withCredentials : true
          }).get('/testLogout');

        axios.get('/user/logout')
        .then(()=>{
            window.location.reload();
        });

        removeNodeCookie();
    });
    
    const setNodeCookie = async () => {
    if(data) {
        try {
            const response = await axios.create({
                baseURL: `${process.env.REACT_APP_NODE_URL}`,
                withCredentials : true
              }).post('/testLogin', data); 
          } catch (error) {
            // 에러 처리
          }
    }
   }

   useEffect(() => {
        if (data) {
        setNodeCookie();
        }
    }, [data]);

   const validateStreamingRoll = async () => {
        const response = await axios.create({
            baseURL: `${process.env.REACT_APP_NODE_URL}`,
            withCredentials : true
        }).get('/streaming/addStreaming');

        const result = JSON.parse(response.data);
        return result;
   }

   const handleSubmit = async (data) => {
        closeStartStreamingModal();
        const streamingTitle = data.streamingTitle;
        const streamingCategory = data.streamingCategory;

        const response = await axios.create({
            baseURL: `${process.env.REACT_APP_NODE_URL}`,
            withCredentials : true
        }).post('/streaming/addStreaming', {streamingTitle : streamingTitle, streamingCategory : streamingCategory});
        
        const result = (JSON.parse(response.data)).result;
        console.log('result = ' +  result);
        if(result == 'success') {
            navigate('/LoadingPage');
        }else {
            alert('스트리밍 시작에 실패했습니다.');
        }
        navigate('/LoadingPage');
    };
      
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        
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

                                <Header_Search_Side_Button >
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
                                                <Header_Right_Icon_1_Button>
                                                    <Header_right_Icon_1_Span>
                                                        관리자페이지 이동 
                                                    </Header_right_Icon_1_Span>
                                                </Header_Right_Icon_1_Button>
                                            </Header_Right_Icon_1_a>
                                        </Header_Right_Icon_1_Div>
                                        </Link>
                                    ) : null
                                    ) : null}

                                    {/* <Header_Right_Icon_1_Div>
                                        <Header_Right_Icon_1_a>
                                            <Header_Right_Icon_1_Button>
                                                <Header_right_Icon_1_Span >
                                                    VOD 업로드
                                                </Header_right_Icon_1_Span>
                                            </Header_Right_Icon_1_Button>
                                        </Header_Right_Icon_1_a>
                                    </Header_Right_Icon_1_Div> */}

                                    <Header_Right_Icon_2_Button onClick={openStartStreamingModal}>
                                        <Header_Right_Icon_2_Span>
                                            
                                        </Header_Right_Icon_2_Span>
                                        </Header_Right_Icon_2_Button>
                                            {startStreamingIsOpen && <StartStreamingModal onClose={startStreamingIsOpen} setOnClose={setStartStreamingIsOpen} handleSubmit={handleSubmit} />}
                                        <Header_Right_Login_Ui_Div>

                                        <Header_Right_Login_Ui_Span>
                                        {!data ? null :
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                               <Header_Right_Login_Ui_Button />
                                            </Button>
                                            }
                                            <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={setWhiteMode}>화이트 모드</MenuItem> */}
                                            <MenuItem onClick={()=> {
                                                navigate('/Home/'+userId);
                                            }}>내 방송국 가기</MenuItem>
                                            <MenuItem onClick={()=> {
                                                navigate('/userInfo/'+userId);
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
                                            
                                            
                                            {!data? 
                                            <Header_Right_Login_Ui_a onClick={openModal}>
                                                        로그인
                                            </Header_Right_Login_Ui_a>
                                            
                                            :
                                            <Header_Right_Login_Ui_a onClick={logout} >
                                                        로그아웃
                                            </Header_Right_Login_Ui_a>
                                            }
                                            {isOpen && <LoginModal onClose={isOpen} setOnClose={setIsOpen}/>}
                                        </Header_Right_Login_Ui_Span>
                                    </Header_Right_Login_Ui_Div>
                                </Header_Right_Side_Div>
            </HeaderDiv>
        </CHeader>
       
    )
}

export default header;


  