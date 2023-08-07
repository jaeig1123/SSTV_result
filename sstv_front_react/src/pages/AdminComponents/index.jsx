import React from "react";
import Report from './report';
import AdReq from './AdReq';
import Ad from './ad';
import AdminUserList from './adminUserList';
import AdminStreamingList from './adminStreamingList';
import StreamingBanList from './streamingBanList';
import StreamingRollBanList from './streamingRollBanList';
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';
import {Com_main_body_writing_list_li_em, Com_main_body_writing_list_a, Com_main_body_writing_list_li, Com_main_body_writing_image_img,Com_main_body_writing_image_div, Com_main_body_writing_title_p, Com_main_body_writing_div_3, Com_main_body_writing_a,Com_main_body_vod_3_a, Com_main_body_vod_2_title_em, Com_main_body_vod_2_div, Com_main_body_vod_2_img, Com_main_body_vod_1_img, Writing_form_Main_div, Sidebar_Main_div, Com_main_body_article, Com_maind_body_div, Com_main_body_div_2, Com_main_body_section, Com_main_body_vod_div, Com_main_body_vod_h3, Com_main_body_vod_a, Com_main_body_vod_section, Com_main_body_vod_1_div, Com_main_body_vod_1_a, Com_main_body_vod_1_span, Com_main_body_vod_1_time_span, Com_main_body_vod_1_title_div, Com_main_body_vod_1_title_p, Com_main_body_vod_1_titleU_div, Com_main_body_vod_1_titleU_span, Com_main_body_vod_1_titleU_em, Com_main_body_vod_1_titleU_2_span, Com_main_body_vod_2_a, Com_main_body_vod_2_span, Com_main_body_vod_2_time, Com_main_body_vod_2_title_div, Com_main_body_vod_2_title_p, Com_main_body_vod_2_title_div_2, Com_main_body_vod_2_title_span, Com_main_body_vod_2_title_2_span, Com_main_body_vod_3_div, Com_main_body_vod_3_span, Com_main_body_vod_3_img, Com_main_body_writing_div, Com_main_body_writing_h3, Com_main_body_writing_div_2, Com_main_body_writing_div_4, Com_main_body_writing_username_div, Com_main_body_writing_userimage_div, Com_main_body_writing_userimage_img, Com_main_body_writing_username_button, Com_main_body_writing_username_span, Com_main_body_writing_userdate_div, Com_main_body_writing_user_view_em, Com_main_body_writing_title_div, Com_main_body_writing_title_strong, Com_main_body_writing_image_a, Com_main_body_writing_image_button, Com_main_body_writing_image_span, Com_main_body_writing_list_div, Com_main_body_writing_list_ul, Com_main_body_writing_list_li_div, Com_main_body_writing_list_li_p, Com_main_body_writing_list_li_span, Com_main_body_writing_date_div, Com_main_body_writing_show_em } from './style';


const Admin = () => {

  return (
    <div>
      <div style={{ marginLeft: '200px' }}>        
      <SideBar/>
      </div>

      <div>
        <Header/>  
        <div style={{ margin: '65px' }}></div> {/* 간격을 주기 위한 div 요소 */}
        {/* <StreamingRollBanList/> */}
        {/* <StreamingBanList/> */}
        {/* <AdminUserList/> */}
        {/* <AdminStreamingList/> */}
        {/* <Report/> */}
        {/* <AdReq/> */}
        {/* <Ad/> */}
        <Footer/>
      </div>
      
    </div>
    
  )
}

export default Admin;
