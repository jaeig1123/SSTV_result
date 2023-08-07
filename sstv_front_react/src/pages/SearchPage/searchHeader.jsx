/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback, useEffect } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { CHeader, CHeader_Dark, Com_h1, HeaderDiv, Header_Modal_Div, Search_window_div,
    Header_Modal_Div_Set, Header_Modal_Label, Header_Modal_Strong_mode, Header_Right_Icon_1_Button, 
    Header_Right_Icon_1_Div, Header_Right_Icon_1_a, Header_Right_Icon_2_Button, 
    Header_Right_Icon_2_Span, Header_Right_Login_Ui_Button, Header_Right_Login_Ui_Div, 
    Header_Right_Login_Ui_Span, Header_Right_Login_Ui_a, Header_Right_Side_Div, Search_on_b,
    Header_Search_Button, Header_Search_Div, Header_Search_Div_input, Header_Search_Div_input_in, 
    Header_Search_Input_in, Header_Search_Side_Button, Header_Search_Side_Span, Header_Search_Span, 
    Header_Search_fieldset, Header_Search_form, Header_a, Header_legend, Search_ul,
    Header_right_Icon_1_Span, Seacrh_h3, Search_a, Search_inner_div, Search_input_div, Search_input_form, Search_Input_Wrap, Search_input_keyword, Search_keyword_refresh, Search_button, Search_menu, Search_li_on, Search_on_a, Search_li_board, Search_li_video, Search_li_posts, Search_li_streamer } from './style'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import axios from 'axios';
import LoginModal from '../Mainpage/loginModal';
import { useLocation, useNavigate } from 'react-router-dom';




const searchHeader = ({select, setSelect}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const {data} = useSWR('/user/login', fetcher);
    const path = location.pathname.split("/");
    const [searchKeyword, setSearchKeyword] = useState('');
    const decord = decodeURIComponent(path[2])
    const onKeyword =(e)=>{
        // const encordText = encodeURIComponent(e.target.value);
        setSearchKeyword(e.target.value);
    }
    const onSubmit =()=>{
        navigate('/SearchKeyword/'+searchKeyword);
    }
    const openModal = () => {
        setIsOpen(true);
    };

    useEffect(()=> {
        
        setSearchKeyword(decord);
    },[])
    

    const refresh = ()=> {
        setSearchKeyword('');
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

    const onSelect = (value) =>{
        setSelect(value);
        
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
            <meta charset="UTF-8" />
            <Search_inner_div>
            <HeaderDiv data={select}>
                <Com_h1 >
                    
                    <Header_a >
                    <img src={process.env.PUBLIC_URL +'/img/SSTV.gif'} width={150} height={65} />
                    </Header_a>
                </Com_h1>
                

                {/* <Header_Search_Div>
                    <Header_Search_form>
                        <Header_Search_fieldset>
                            <Header_legend>검색</Header_legend>
                            <Header_Search_Div_input>
                                <Header_Search_Div_input_in>
                                    <Header_Search_Input_in placeholder='방송국 검색'/>
                                    

                                    <Header_Search_Button>
                                        <Header_Search_Span>
                                        
                                        </Header_Search_Span>
                                    </Header_Search_Button>
                                    
                                </Header_Search_Div_input_in> */}

                                {/* <Header_Search_Side_Button>
                                    <Header_Search_Side_Span>
                                        통합검색
                                    </Header_Search_Side_Span>
                                </Header_Search_Side_Button> */}

                                

                            {/* </Header_Search_Div_input>
                        </Header_Search_fieldset>

                                
                    </Header_Search_form>
                </Header_Search_Div> */}

                                 <Header_Right_Side_Div >
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
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
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

                  <Seacrh_h3>
                    <Search_a>검색</Search_a>
                 </Seacrh_h3>

                 <Search_input_div>
                    <Search_input_form onSubmit={onSubmit}>
                        <Search_window_div>
                            <Search_Input_Wrap>
                                <Search_input_keyword value={searchKeyword} onChange={onKeyword} type='text'/>
                                <Search_keyword_refresh onClick={refresh}/>
                                {/* <Header_Search_Button>
                                        <Header_Search_Span>
                                        
                                        </Header_Search_Span>
                                    </Header_Search_Button> */}
                                    <Search_button onClick={onSubmit}/>
                            </Search_Input_Wrap>
                        </Search_window_div>

                        
                    </Search_input_form>
                 </Search_input_div>

                 <Search_menu>
                    <Search_ul>
                        <Search_li_on onClick={()=>onSelect(0)}>
                            {select === 0? 
                            <Search_on_a>통합검색</Search_on_a>
                            : 
                            <Search_on_b>통합검색</Search_on_b>
                            }
                        </Search_li_on>
                        <Search_li_board onClick={()=>onSelect(1)}>
                             {select === 1? 
                            <Search_on_a>생방송</Search_on_a>
                            : 
                            <Search_on_b>생방송</Search_on_b>
                            }
                        </Search_li_board>
                        <Search_li_video onClick={()=>onSelect(2)}>
                            {select === 2? 
                            <Search_on_a>VOD</Search_on_a>
                            : 
                            <Search_on_b>VOD</Search_on_b>
                            }
                        </Search_li_video>
                        <Search_li_posts onClick={()=>onSelect(3)}>
                            {select === 3? 
                            <Search_on_a>게시글</Search_on_a>
                            : 
                            <Search_on_b>게시글</Search_on_b>
                            }
                        </Search_li_posts>
                        <Search_li_streamer onClick={()=>onSelect(4)}>
                            {select === 4? 
                            <Search_on_a>BJ</Search_on_a>
                            : 
                            <Search_on_b>BJ</Search_on_b>
                            }
                        </Search_li_streamer>
                    </Search_ul>
                 </Search_menu>

         </Search_inner_div>
        </CHeader>
       
    )
}

export default searchHeader;


  