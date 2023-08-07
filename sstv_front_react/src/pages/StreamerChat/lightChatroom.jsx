/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {User_list_stream_span, Header_Right_Login_Ui_Button, Stream_div, Chat_text_div, Chat_body_container_div, Chat_body_div, Chat_body_line_2_div, Chat_body_line_div, Chat_body_user_div, Chat_frame_div, Chat_Header_button, Chat_Header_button_a, Chat_header_button_button, Chat_Header_button_div, Chat_Header_button_g, Chat_header_button_icon, Chat_header_button_svg, Chat_Header_div, Chat_Header_font_div, Chat_Header_font_span, Chat_Header_font_view_div, Chat_header_trigger_div, Chat_Header_view_div, Chat_main_div, Chat_main_div_2, Chat_main_div_3, Chat_main_frame, Chat_main_iframe, Chat_mouseover_icon, Chat_mouseover_menu_button, Chat_mouseover_menu_div, Chat_mouseover_menu_div_2, Chat_scroll_div, Chat_stream_main_div, Chat_text_area_div, Chat_text_label, Chat_user_chatbox_div, Chat_user_container, Chat_user_content_div, Chat_user_date_div, Chat_user_date_span, Chat_user_img, Chat_user_info_div, Chat_user_info_div2, Chat_user_info_img, Chat_user_info_img_div, Chat_user_info_span, Chat_user_info_top, Chat_user_input_div, Chat_user_input_div_2, Chat_user_nickname_span, Chat_user_output_div, Chat_user_output_div_2, Chat_user_output_div_3, Chat_user_profile_div, Chat_user_text_div, Chat_user_text_span, Chat_user_tipe_div, Chat_user_tipe_div_2, Chat_user_tipe_div_cus, Chat_box_underline_div, Chat_underline_unfocus, Chat_underline_focus, Chat_buttons_div, Chat_manager_div, Chat_manager_div_cus, Chat_manager_div_cus2, Chat_manager_button, Chat_manager_icon, Chat_manager_svg, Chat_submit_div, Chat_submit_text_div, Chat_submit_button_div, Chat_submit_button_div_cus, Chat_submit_icon_a, Chat_submit_icon_cus, Chat_submit_icon_button, Stream_main_div, Stream_second_div, Stream_third_div, Chat_re_body_main, Chat_re_body_mainlist, Chat_re_body_overlay, Chat_re_body_cus, Chat_re_body_scope, Chat_re_body_item_offset, Chat_re_body_items } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFilm, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import Chatfooter from './chatfooter'
import ReactPlayer from 'react-player';
import io from 'socket.io-client'
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import BanModal from './banModal'

const lightChatroom = (props) => {
    const {data} = useSWR('/user/login', fetcher);
    // const {streaming, serviceUrl} = props.data;
    const [streaming, setStreaming] = useState(props.data.streaming);
    const [serviceUrl, setServiceurl] = useState(props.data.serviceUrl);
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const isCanSubmit = !!currentMessage.replace(/ |\n/g, '');
    const chatboxRef = useRef(null);
    const [scrUpdate, setScrUpdate] = useState(false);
    const [onCloseBanModal, setOnCloseBanModal] = useState(false);
    const [donationData, setDonationData] = useState(false);
    const socket = io(`${process.env.REACT_APP_NODE_SOCKET_URL}`);
    const [banType, setBanType] = useState('');
    const [banContent, setBanContent] = useState('');
    const [receivedMessage, setReceiveMessage] = useState(null);
    // const roomName= {'roomName': 'admin'};
    // socket.emit('join_room', roomName);
    const nodeUrl = process.env.REACT_APP_NODE_URL;
    console.log("node env?"+nodeUrl)


    let roomName;
    if(data) {
        roomName= {'roomName': streaming.userId, 'userId' : data.userId};
    }else {
        roomName= {'roomName': streaming.userId, 'userId' : 'nonLogin'};
    }

    useEffect(() => {
        let flag = false;
        socket.emit('join_room', roomName);

        return () => {
            let param;
            if(data) {
                param = {
                    roomName : streaming.userId,
                    userId : data.userId
                }
            }else {
                param = {
                    roomName : streaming.userId,
                    userId : 'nonLogin'
                }
            }
            socket.emit('leave_room', param);
        }
    }, []);
    
    const sendMessage= async () => {
        if(isCanSubmit) {
            const messageData = {
                username: data?.userId,
                room: streaming.userId,

                message: currentMessage,
                time: 
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
            };
            await socket.emit('send_message', messageData);
            console.log(messageData);
            setCurrentMessage('');
        }
    }

    socket.on('receive_message', (data)=>{
        setReceiveMessage(data);
    })

    useEffect(()=>{
            scrollToBottom();
    },[messageList]);

    
    useEffect(()=> {
        if ( receivedMessage){
            setMessageList((emessageList)=>[...emessageList, receivedMessage]);
            setReceiveMessage(null);
            
            console.log('dd');
        }
        
    }, [receivedMessage])
    
    const scrollToBottom = () => {
        
        if(chatboxRef.current){
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
            console.log("ff:"+chatboxRef.current.scrollHeight);
            
        }
    }

    const handleKeyPress = (event) => {
            if( !event.shiftKey && event.key ==="Enter"){
                event.preventDefault();
                sendMessage();
                setScrUpdate(false);
                scrollToBottom();
            }
    }
    const imageError = (event) => {
        event.target.src = process.env.PUBLIC_URL+'/img/base_profile.jpg';
    }

    const image = process.env.PUBLIC_URL+`/img`+data?.profilePhoto;

    // socket.on('receive_donation', ({data,fileUrl, donationMent})=>{
    //     setSocketDonation(data);
    //     setDonationData(false); // Rnqns
    //     console.log(data, fileUrl, donationMent);
    //     return() => socket.off('receive_donation');
    // })

    socket.on('updateStreamingTitleAndCategory', (data) => {
        setStreaming(prevStreaming => ({
            ...prevStreaming,
            streamingTitle : data.streamingTitle,
            streamingCategory : data.streamingCategory
          }));
    });

    socket.on('join_room', ({ streamingViewer, totalStreamingViewer }) => {
        setStreaming(prevStreaming => ({
          ...prevStreaming,
          streamingViewer: streamingViewer,
          totalStreamingViewer: totalStreamingViewer
        }));
    });

    socket.on('leave_room', ({streamingViewer}) => {
        setStreaming(prevStreaming => ({
            ...prevStreaming,
            streamingViewer: streamingViewer,
          }));
    });

    socket.on('ban_streaming', ({banType, banContent}) => {
            setBanType(banType);
            setBanContent(banContent);

            setOnCloseBanModal(true);
        });

        return(
            <body>
                {onCloseBanModal && <BanModal
                    onClose={onCloseBanModal} 
                    setOnClose={setOnCloseBanModal}
                    data = {{
                        banContent : banContent, 
                        banType : banType
                    }}
                />}
            <Chat_stream_main_div id="main">
                <Stream_main_div>
                    <Stream_second_div>
                        <Stream_third_div>
                            <Stream_div>
                                <ReactPlayer
                                    className='react-player'
                                    url={serviceUrl}    // 플레이어 url
                                    width='1300px'         // 플레이어 크기 (가로)
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
                        <Chatfooter data ={{streaming, socket}}/>
                    </Stream_second_div>
                </Stream_main_div>
    
    
    
    
                <Chat_main_div>
                    <Chat_main_div_2 id="no">
                        <Chat_main_div_3>
                            <Chat_main_frame>
                                {/* <Chat_main_iframe> */}
                                    <Chat_frame_div>
                                        <Chat_Header_div id='header'>
                                            <Chat_Header_font_div>
                                                <Chat_Header_font_span>
                                                    <Chat_header_trigger_div>
                                                        <Chat_Header_view_div>
                                                            <Chat_Header_font_view_div>실시간 채팅</Chat_Header_font_view_div>
                                                        </Chat_Header_view_div>
                                                    </Chat_header_trigger_div>
                                                </Chat_Header_font_span>
                                            </Chat_Header_font_div>
    
    
                                            <Chat_Header_button_div>
                                                <Chat_Header_button_a>
                                                    <Chat_Header_button>
                                                        <Chat_header_button_button>
                                                            <Chat_header_button_icon>
                                                                <Header_Right_Login_Ui_Button/>
                                                                {/* <Chat_header_button_svg> */}
                                                                    {/* <Chat_Header_button_g></Chat_Header_button_g> */}
                                                                {/* </Chat_header_button_svg> */}
                                                            </Chat_header_button_icon>
                                                        </Chat_header_button_button>
                                                    </Chat_Header_button>
                                                </Chat_Header_button_a>
                                            </Chat_Header_button_div>
    
    
                                        </Chat_Header_div>
    
                                        {/* <Chat_body_div>
                                            <Chat_body_container_div>
                                                <Chat_body_line_div>
    
                                                </Chat_body_line_div>
                                                <Chat_body_line_2_div>
                                                    
                                                </Chat_body_line_2_div>
                                            </Chat_body_container_div>
                                        </Chat_body_div> */}
    
                                        <Chat_body_user_div>
                                            <Chat_user_tipe_div>
                                                <Chat_user_tipe_div_2>
                                                    <Chat_user_tipe_div_cus>
                                                        <Chat_user_content_div id='content'>
                                                            
    
                                                            {/* <Chat_user_input_div >
                                                                <Chat_user_input_div_2>
                                                                    <Chat_user_chatbox_div id='chatbox'>
                                                                        <Chat_user_profile_div>
                                                                            <Chat_user_img src=''/>
                                                                        </Chat_user_profile_div>
                                                                        <Chat_user_date_div>
                                                                            <Chat_user_date_span>2:40PM</Chat_user_date_span>
                                                                            <Chat_user_text_div>
                                                                                <Chat_user_nickname_span>testname</Chat_user_nickname_span>
                                                                            </Chat_user_text_div>
                                                                            <Chat_user_text_span>말해보자</Chat_user_text_span>
                                                                        </Chat_user_date_div>
    
    
                                                                        <Chat_mouseover_menu_div>
                                                                            <Chat_mouseover_menu_div_2>
                                                                                <Chat_mouseover_menu_button>
                                                                                    <Chat_mouseover_icon>
                                                                                        
                                                                                    </Chat_mouseover_icon>
                                                                                </Chat_mouseover_menu_button>
                                                                            </Chat_mouseover_menu_div_2>
                                                                        </Chat_mouseover_menu_div>
    
                                                                    </Chat_user_chatbox_div>
                                                                </Chat_user_input_div_2>
                                                            </Chat_user_input_div> */}
    
                                                            <Chat_re_body_main id="chat">
                                                                <Chat_re_body_mainlist>
                                                                    
                                                                    <Chat_re_body_cus>
                                                                        <Chat_re_body_scope>
                                                                           <Chat_scroll_div id='chatbox' ref={chatboxRef}>
                                                                            {/* <Chat_re_body_item_offset>
                                                                                <Chat_re_body_items>
                                                                                    
                                                                                </Chat_re_body_items>
                                                                            </Chat_re_body_item_offset> */}
                                                                            
    
                                                                {messageList.map((messageContent, key)=> {
                                                                    
                                                                    return(
                                                                        <Chat_user_chatbox_div >
                                                                        <Chat_user_profile_div>
                                                                        <Chat_user_img src={process.env.PUBLIC_URL+'/img/'+messageContent.image} onError={imageError}/>
                                                                        </Chat_user_profile_div>
                                                                        <Chat_user_date_div>
                                                                            <Chat_user_date_span>{messageContent.time}</Chat_user_date_span>
                                                                            <Chat_user_text_div>
                                                                                {streaming.userId==messageContent.username? 
                                                                                <User_list_stream_span>{messageContent.username}</User_list_stream_span>
                                                                                :
                                                                                <Chat_user_nickname_span>{messageContent.username}</Chat_user_nickname_span>
                                                                                 }
                                                                            </Chat_user_text_div>
                                                                             <Chat_user_text_span>{messageContent.message}</Chat_user_text_span> 
                                                                        </Chat_user_date_div>
                                                                        
                                                                                        
                                                                        <Chat_mouseover_menu_div>
                                                                            <Chat_mouseover_menu_div_2>
                                                                                <Chat_mouseover_menu_button>
                                                                                    <Chat_mouseover_icon>
                                                                                    <Header_Right_Login_Ui_Button/>
                                                                                    </Chat_mouseover_icon>
                                                                                </Chat_mouseover_menu_button>
                                                                            </Chat_mouseover_menu_div_2>
                                                                        </Chat_mouseover_menu_div>
    
                                                                        </Chat_user_chatbox_div>
                                                                        
                                                                    )
                                                                })
                                                                
                                                                }
                                                                            
    
    
    
                                                                    </Chat_scroll_div>
    
                                                                        </Chat_re_body_scope>
                                                                    </Chat_re_body_cus>
    
                                                                    <Chat_re_body_overlay/>
                                                                </Chat_re_body_mainlist>
                                                            </Chat_re_body_main>
    
                                                            
                                                            <Chat_user_output_div>
                                                                <Chat_user_output_div_2>
                                                                    <Chat_user_output_div_3>
                                                                        <Chat_user_container>
                                                                            <Chat_user_info_top id='top'>
                                                                                <Chat_user_info_img_div>
                                                                                <Chat_user_info_img src={image} onError={imageError}/>
                                                                                </Chat_user_info_img_div>
                                                                                <Chat_user_info_div>
                                                                                    <Chat_user_info_div2>
                                                                                    <Chat_user_info_span>{data?.userId}</Chat_user_info_span>
                                                                                    </Chat_user_info_div2>
                                                                                    <Chat_text_area_div>
                                                                                        <Chat_text_label htmlfor="message">
                                                                                           
                                                                                        </Chat_text_label>
                                                                                        <Chat_text_div value={currentMessage} id='message' placeholder='메세지를 입력하세요...' onKeyDown={(event)=> {
                                                                                            if(event.key === 'Enter'){
                                                                                                return false;
                                                                                            }
                                                                                        }}
                                                                                        onChange={(event)=> {
                                                                                            setCurrentMessage(event.target.value);
                                                                                        }}
    
                                                                                        onKeyPress={handleKeyPress}
                                                                                        >
                                                                                        </Chat_text_div>
    
                                                                                        <Chat_box_underline_div>
                                                                                            <Chat_underline_unfocus/>
                                                                                            {/* <Chat_underline_focus/> */}
                                                                                        </Chat_box_underline_div>
    
                                                                                    </Chat_text_area_div>
                                                                                </Chat_user_info_div>
                                                                            </Chat_user_info_top>
    
                                                                            <Chat_buttons_div>
                                                                                <Chat_manager_div>
                                                                                    <Chat_manager_div_cus>
                                                                                        <Chat_manager_div_cus2>
                                                                                            <Chat_manager_button>
                                                                                                <Chat_manager_icon>
                                                                                                    <Chat_manager_svg>
                                                                                                    <FontAwesomeIcon icon={faUserSecret} />
                                                                                                    </Chat_manager_svg>
                                                                                                </Chat_manager_icon>
                                                                                            </Chat_manager_button>
                                                                                        </Chat_manager_div_cus2>
                                                                                    </Chat_manager_div_cus>
                                                                                </Chat_manager_div>
    
                                                                                <Chat_submit_div>
                                                                                    <Chat_submit_text_div>보내기</Chat_submit_text_div>
                                                                                    <Chat_submit_button_div>
                                                                                        <Chat_submit_button_div_cus>
                                                                                            <Chat_submit_icon_a>
                                                                                                <Chat_submit_icon_cus>
                                                                                                    <Chat_submit_icon_button>
                                                                                                        <FontAwesomeIcon icon={faPaperPlane} />
                                                                                                    </Chat_submit_icon_button>
                                                                                                </Chat_submit_icon_cus>
                                                                                            </Chat_submit_icon_a>
                                                                                        </Chat_submit_button_div_cus>
                                                                                    </Chat_submit_button_div>
                                                                                </Chat_submit_div>
    
                                                                            </Chat_buttons_div>
    
                                                                        </Chat_user_container>
                                                                    </Chat_user_output_div_3>
                                                                </Chat_user_output_div_2>
                                                            </Chat_user_output_div>
    
                                                        </Chat_user_content_div>
                                                    </Chat_user_tipe_div_cus>
                                                </Chat_user_tipe_div_2>
                                            </Chat_user_tipe_div>
                                        </Chat_body_user_div>
                                        
                                    </Chat_frame_div>
                                {/* </Chat_main_iframe> */}
                            </Chat_main_frame>
                            
                        </Chat_main_div_3>
                    </Chat_main_div_2>
                </Chat_main_div>
             </Chat_stream_main_div>
             
             </body>
        )
}

export default lightChatroom;