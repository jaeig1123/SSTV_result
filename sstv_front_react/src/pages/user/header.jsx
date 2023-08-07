/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { CHeader, CHeader_Dark, Com_h1, HeaderDiv, Header_Modal_Div, 
    Header_Modal_Div_Set, Header_Modal_Label, Header_Modal_Strong_mode, Header_Right_Icon_1_Button, 
    Header_Right_Icon_1_Div, Header_Right_Icon_1_a, Header_Right_Icon_2_Button, 
    Header_Right_Icon_2_Span, Header_Right_Login_Ui_Button, Header_Right_Login_Ui_Div, 
    Header_Right_Login_Ui_Span, Header_Right_Login_Ui_a, Header_Right_Side_Div, 
    Header_Search_Button, Header_Search_Div, Header_Search_Div_input, Header_Search_Div_input_in, 
    Header_Search_Input_in, Header_Search_Side_Button, Header_Search_Side_Span, Header_Search_Span, 
    Header_Search_fieldset, Header_Search_form, Header_a, Header_legend, Header_right_Icon_1_Span } from './headerStyle'
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
import { Link, useNavigate } from 'react-router-dom';
import { User_update_subTitle, User_update_title } from './style';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import StartStreamingModal from '../Mainpage/startStreamingModal';

const header = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const {data} = useSWR('/user/login', fetcher);
    // const userId = data?.userId;
    const [userId, setUserId] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['NSESSIONID']);
    const [isMounted, setIsMounted] = useState(false);
    const [startStreamingIsOpen, setStartStreamingIsOpen] = useState(false);

    const onSearch =(e) =>{
        setSearch(e.target.value);       
    }

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    }
    
    //로그인 인터셉터
    useEffect(() => {
        setIsMounted(true);
      }, []); //useState훅을 사용하여, 의존성 배열에 추가, 인터셉터 훅이 두번 돌지 않게끔 처리.
    
    useEffect(()=> {
        axios.get('/user/login').then((response)=> {
            setUserId(response.data.data?.userId);
            setNodeCookie();
                if(isMounted && response.data.data?.userId === undefined){
                    alert('로그인이 필요합니다!');
                    navigate('/')
                }
        })       
    },[isMounted]);


    //로그아웃
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
        if(userId !== '') {
            try {
                const response = await axios.create({
                    // baseURL: `${process.env.REACT_APP_NODE_URL}`,
                    // baseURL: `http://localhost:3001`,
                    baseURL: `${process.env.REACT_APP_NODE_URL}`,
                    withCredentials : true
                  }).post('/testLogin', userId); 
              } catch (error) {
                // 에러 처리
              }
        }
       }

    
    const removeNodeCookie = useCallback(() => {
        removeCookie('NSESSIONID', { path: '/' });
    }, [removeCookie]);


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

    const validateStreamingRoll = async () => {
        const response = await axios.create({
            baseURL: `${process.env.REACT_APP_NODE_URL}`,
            withCredentials : true
        }).get('/streaming/addStreaming');

        const result = JSON.parse(response.data);
        return result;
   }

    const closeStartStreamingModal = () => {
        setStartStreamingIsOpen(false);
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

    //검색 이벤트
    const searchSubmit = ()=>{
        navigate('/SearchKeyword/'+search);
    }
    
      
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
                    
                    <Header_a href='/'>
                    <img src={process.env.PUBLIC_URL +'/img/SSTV.gif'} width={150} height={65} />
                    </Header_a>
                </Com_h1>

                <Header_Search_Div >
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
                                            style={{ zIndex: 9000 }}
                                        >
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
                                        
                                            
                                           {userId === '' ? 
                                            <Header_Right_Login_Ui_a onClick={openModal} style={{cursor:'pointer'}}>
                                                        로그인
                                            </Header_Right_Login_Ui_a>
                                            :
                                            <Header_Right_Login_Ui_a onClick={logout} style={{cursor:'pointer'}}>
                                                        로그아웃
                                            </Header_Right_Login_Ui_a>
                                            }
                                            {isOpen && <LoginModal onClose={isOpen} setOnClose={setIsOpen}/>}
                                        </Header_Right_Login_Ui_Span>
                                    </Header_Right_Login_Ui_Div>

                                </Header_Right_Side_Div>
                                </HeaderDiv>
                                <User_update_title style={{marginLeft:'480px'}}>
                                <User_update_subTitle >
                                            개인정보
                                </User_update_subTitle>
                                </User_update_title>
        </CHeader>
       
    )
}

export default header;


  