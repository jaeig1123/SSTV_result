/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Sidebar_Article_Class, Sidebar_Div, Sidebar_Div_in,  Sidebar_Section_Class, Sidebar_User_a, Sidebar_User_info, Sidebar_User_name_h2, Sidebar_User_name_idv, Sidebar_a_in_div, Sidebar_Writing_Button, Sidebar_Writing_Span, Sidebar_footer_article, Sidebar_footer_VOD_div, Sidebar_footer_VOD_h3, Sidebar_footer_VOD_button, Sidebar_footer_VOD_span, Sidebar_footer_VOD_li_ul, Sidebar_footer_VOD_li_1, Sidebar_footer_VOD_1_a, Sidebar_footer_Writing_div, Sidebar_footer_Writing_h3, Sidebar_footer_Writing_button, Sidebar_footer_Writing_span, Sidebar_footer_Writing_li_1, Sidebar_footer_Writing_1_a, Sidebar_footer_Writing_strong, Sidebar_footer_Writing_ul_a } from '../Community/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const sidebar = () => {
    const navigate = useNavigate();
    const [profilePhoto, setProfilePhoto] = useState('');
    
    const imageError = (event) => {
        event.target.src = process.env.PUBLIC_URL+'/img/base_profile.jpg';
    }
    
    useEffect(()=> {
        axios.get('/user/getUser/admin').then((response) => {
            setProfilePhoto(response.data.data?.profilePhoto);
        })
    })

    // const image = process.env.PUBLIC_URL+'/img/'+userImage;

    return(
        
        
    <Sidebar_Div>
        <Sidebar_Div_in>
            <Sidebar_Article_Class>
                <Sidebar_Section_Class>
                    <Sidebar_User_a>
                        {profilePhoto === "base_image" ? (
                            <img
                            src={process.env.PUBLIC_URL + '/img/base_profile.jpg'}
                            alt="Profile"
                            width={80}
                            height={80}
                            style={{ borderRadius: '50%', marginLeft:'60px' }}
                            />
                        ) : (
                            <img
                            src={'https://kr.object.ncloudstorage.com/sstv-image/' + profilePhoto}
                            alt="Profile"
                            width={80}
                            height={80}
                            style={{ borderRadius: '50%', border: '1px solid gray', marginLeft:'60px' }}
                            />
                        )}
                    </Sidebar_User_a>
                    <Sidebar_User_info>
                        <Sidebar_User_name_idv>
                            <Sidebar_User_name_h2>
                                관리자 페이지 
                            </Sidebar_User_name_h2>
                        </Sidebar_User_name_idv>
                    </Sidebar_User_info>

                </Sidebar_Section_Class>
            </Sidebar_Article_Class>            

            <Sidebar_footer_article>
                <Sidebar_footer_Writing_div>
                    <Sidebar_footer_Writing_h3>
                        <Sidebar_footer_Writing_button>
                            <Sidebar_footer_Writing_span>관리자 메뉴</Sidebar_footer_Writing_span>
                        </Sidebar_footer_Writing_button>
                    </Sidebar_footer_Writing_h3>

                    
                    
                    <Sidebar_footer_Writing_ul_a>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong ><Link to='/admin/adminUserList'>회원목록</Link></Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong ><Link to='/admin/adminStreamingList'>스트리밍목록</Link></Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong ><Link to='/admin/report'>신고목록</Link></Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong ><Link to='/admin/streamingBanList'>스트리밍 정지목록</Link></Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong ><Link to='/admin/streamingRollBanList'>회원 스트리밍권한 정지목록</Link></Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong ><Link to='/admin/adReq'>광고신청목록</Link></Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong ><Link to='/admin/ad'>광고목록</Link></Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                     </Sidebar_footer_Writing_ul_a>
                </Sidebar_footer_Writing_div>
            </Sidebar_footer_article>
        </Sidebar_Div_in>
    </Sidebar_Div>
    )
}

export default sidebar;