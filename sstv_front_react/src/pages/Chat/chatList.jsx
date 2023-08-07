import React from 'react';
import { List_frame, List_iframe, List_main, List_main_inner } from './chatListStyle';
import { Stream_main_div, Chat_main, User_list_img, Chat_Header_div, Chat_body_user_div, Chat_frame_div, Chat_left_a, Chat_left_div_2, Chat_left_htn, Chat_left_icon, Chat_main_div, Chat_main_div_2, Chat_main_div_3, Chat_main_frame, Chat_re_body_cus, Chat_re_body_main, Chat_re_body_mainlist, Chat_re_body_scope, Chat_user_content_div, Chat_user_tipe_div, Chat_user_tipe_div_2, Left_button, User_list_container, User_list_image, User_list_stream_id, User_list_stream_span, User_list_Streamer_span, User_list_badge, User_list_badge_div, User_list_svg } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
const chatList = ({openList, setOpenList}) => {
    console.log(openList);
    const closeOpenList = ()=>{
        setOpenList(false);
    }

    return (

    
        <Chat_main>
            <Chat_main_div_2 id="no">
                <Chat_main_div_3>
                    <Chat_main_frame>
                        <Chat_frame_div>
                            <Chat_Header_div id='header'>
                                <Chat_left_htn>
                                    <Chat_left_div_2> 
                                        <Chat_left_a> 
                                            <Chat_left_icon>
                                                <Left_button onClick={closeOpenList}>
                                                <FontAwesomeIcon icon={faArrowLeftLong} />
                                                </Left_button>
                                            </Chat_left_icon>
                                        </Chat_left_a>
                                    </Chat_left_div_2>
                                </Chat_left_htn>시청자 목록
                            </Chat_Header_div>

                            <Chat_body_user_div>
                                <Chat_user_tipe_div>
                                    <Chat_user_tipe_div_2>
                                        <Chat_user_content_div id='content'>
                                            <Chat_re_body_main>
                                                <Chat_re_body_mainlist>
                                                    <Chat_re_body_cus>
                                                        <Chat_re_body_scope>
                                                            

                                                            <User_list_container>
                                                                <User_list_image>
                                                                    <User_list_img src={process.env.PUBLIC_URL+`/img/base_profile.jpg`}>
                                                                        
                                                                    </User_list_img>
                                                                </User_list_image>

                                                                <User_list_stream_id>
                                                                     <User_list_stream_span>
                                                                                testUser 
                                                                                {/* <User_list_Streamer_span>
                                                                                    <User_list_badge id='image'> 
                                                                                    <User_list_badge_div>
                                                                                    <User_list_svg>
                                                                                    <FontAwesomeIcon icon="fa-solid fa-check" style={{color: "#000000",}} />
                                                                                    </User_list_svg>
                                                                                      </User_list_badge_div>
                                                                                    </User_list_badge>
                                                                                </User_list_Streamer_span> */}
                                                                    </User_list_stream_span>
                                                                    
                                                                </User_list_stream_id>
                                                                                            
                                                            </User_list_container>

                                                        </Chat_re_body_scope>
                                                    </Chat_re_body_cus>
                                                </Chat_re_body_mainlist>
                                            </Chat_re_body_main>
                                        </Chat_user_content_div>
                                    </Chat_user_tipe_div_2>
                                </Chat_user_tipe_div>
                            </Chat_body_user_div>


                        </Chat_frame_div>
                    </Chat_main_frame>
                </Chat_main_div_3>
            </Chat_main_div_2>
        </Chat_main>
    )

}

export default chatList;