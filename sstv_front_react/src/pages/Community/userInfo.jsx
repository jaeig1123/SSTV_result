/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import { User_info_second_div, User_info_full_div, User_info_section, User_info_title_area_div, User_info_title_h4, User_info_title_a, User_info_div_2, User_info_div_button, User_info_div_span, User_info_body_div, User_info_body_div_2, User_info_body_2_button, User_info_body_2_em, User_info_body_2_span, User_info_body_3_button, User_info_body_3_em, User_info_body_3_span, User_info_body_4_button, User_info_body_4_em, User_info_body_5_button, User_info_body_5_em } from './style';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
const userInfo = () => {
    const location = useLocation();
    const path = location.pathname.split("/");
    const [userInfo, setUserInfo] = useState('');
    useEffect(()=> {
        axios.get('/user/getUser/'+path[2])
        .then((reponse)=>{
            setUserInfo(reponse.data.data)
            console.log(userInfo);
        })
    },[])
    return(
        <User_info_section>
            <User_info_full_div>
                <User_info_second_div>
                    <User_info_title_area_div>
                        <User_info_title_h4>
                            <User_info_title_a>{userInfo.userNickname}</User_info_title_a>
                        </User_info_title_h4>
                        <User_info_div_2>
                            <User_info_div_button>
                                <User_info_div_span></User_info_div_span>
                            </User_info_div_button>
                        </User_info_div_2>
                    </User_info_title_area_div>
                </User_info_second_div>
                <User_info_body_div>
                    <User_info_body_div_2>
                        <User_info_body_2_button>
                            <User_info_body_2_em></User_info_body_2_em>
                            <User_info_body_2_span>{userInfo.followCount}</User_info_body_2_span>
                        </User_info_body_2_button>
                        
                        <User_info_body_4_button>
                            <User_info_body_4_em></User_info_body_4_em>
                        </User_info_body_4_button>
                        <User_info_body_5_button>
                            <User_info_body_5_em></User_info_body_5_em>
                        </User_info_body_5_button>
                    </User_info_body_div_2>
                </User_info_body_div>
            </User_info_full_div>
        </User_info_section>
        )

}

export default userInfo;