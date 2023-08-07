import React from 'react';
import {User_info_body_5_em,User_info_body_5_button,User_info_body_4_em,User_info_body_4_button,User_info_body_3_span,User_info_body_3_em,User_info_body_3_button,User_info_body_2_span,User_info_body_2_em, User_info_body_2_button, Div,Com_div, Com_main_div, Com_main_in_div, Com_main_section, Com_main_username_a, Com_main_username_div, Com_main_username_h2, Com_main_usericon_div, Com_main_usericon_button, Com_main_usericon_span, Com_main_usermail_div, Com_main_usermail_p, Com_main_usermail_span, Com_main_in_2_div, Com_main_in_2_div_2, Com_main_one_article, Com_main_one_section } from './style';

const coMain = () => {

    return(
        <Div>
        <Com_div id="main_div">
        <Com_main_one_article>
        
        

        <Com_main_section>
            <Com_main_div>
                <Com_main_in_div>
                    <Com_main_username_div>
                        <Com_main_username_h2>
                            <Com_main_username_a>Test</Com_main_username_a>
                            <Com_main_usericon_div>
                                <Com_main_usericon_button>
                                    <Com_main_usericon_span></Com_main_usericon_span>
                                </Com_main_usericon_button>
                            </Com_main_usericon_div>
                        </Com_main_username_h2>
                    </Com_main_username_div>

                    <Com_main_usermail_div>
                        <Com_main_usermail_p>
                            <Com_main_usermail_span>test@email.com</Com_main_usermail_span>
                        </Com_main_usermail_p>
                    </Com_main_usermail_div>

                </Com_main_in_div>

                <Com_main_in_2_div>
                    <Com_main_in_2_div_2>
                    <User_info_body_2_button>
                            <User_info_body_2_em></User_info_body_2_em>
                            <User_info_body_2_span>30만</User_info_body_2_span>
                        </User_info_body_2_button>
                        <User_info_body_3_button>
                            <User_info_body_3_em></User_info_body_3_em>
                            <User_info_body_3_span>400</User_info_body_3_span>
                        </User_info_body_3_button>
                        <User_info_body_4_button>
                            <User_info_body_4_em></User_info_body_4_em>
                        </User_info_body_4_button>
                        <User_info_body_5_button>
                            <User_info_body_5_em></User_info_body_5_em>
                        </User_info_body_5_button>
                    </Com_main_in_2_div_2>
                </Com_main_in_2_div>
            </Com_main_div>
        </Com_main_section>
        </Com_main_one_article>
        </Com_div>
        </Div>
    )

}

export default coMain;