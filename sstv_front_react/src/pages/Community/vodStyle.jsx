import styled from "styled-components";

export const Container_div = styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
clear: both;
margin: 0 auto;
padding: 81px 0 0 0;
`;

export const VOD_upload_area = styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
margin: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
position: relative;
padding: 343px 0 0 0;
user-select: none;
font-family: "NG", verdana, applegothic, sans-serif;
`;

export const VOD_fileSelect_div = styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
`;

export const VOD_icon_span = styled.span`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
list-style: normal;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
outline: none;
padding: 0;
font-family: "NG", verdana, applegothic, sans-serif;
position: absolute;
top: 165px;
left: 50%;
overflow: hidden;
width: 147px;
height: 147px;
margin: 0 0 0 -73px;
cursor: pointer;
`;

export const VOD_icon_em = styled.em`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
cursor: pointer;
outline: none;
margin: 0;
padding: 0;
list-style: none;
font-style: normal;
font-family: "NG", verdana, applegothic, sans-serif;
position: absolute;
top: 0;
left: 0;
background: url(/img/upload.png) 0 0 no-repeat;
width: 147px;
height: 147px;
animation: circle 80s linear 0s infinite;
@keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const VOD_icon_i = styled.i`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
list-style: normal;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
cursor: pointer;
outline: none;
padding: 0;
font-style: normal;
font-family: "NG", verdana, applegothic, sans-serif;
position: absolute;
top: 50%;
left: 50%;
background: url(/img/upload.png) -157px 0 no-repeat;
width: 53px;
height: 63px;
margin: -31px 0 0 -26px;
animation: arrow 5s linear .5s forwards;

@keyframes arrow {
    0% {
        margin-top: -31px;
    }
    5%{
        opacity: 0;
    }
    10% {
        magin-top: -150px;
    }
    11% {
        margin-top: -31px;
    }
    19% {
        opacity: 0;
    }
    20% {
        transform: rotateY(180deg);
        opacity: 0;
    }
    30%, 100% {
        transform: rotateY(0deg);
        opacity: 1;
    }
  }

`;

export const VOD_button = styled.button`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
list-style: normal;
vertical-align: middle;
padding: 0;
border: none;
cursor: pointer;
outline: 0;
font-family: "NG", verdana, applegothic, sans-serif;
display: block;
background: #2e6afd;
width: 220px;
height: 46px;
margin: 0 auto;
border-radius: 30px;
color: #fff;
line-height: 46px;
text-align: center;
font-size: 18px;
`;

export const VOD_fileUpload_span = styled.span`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
list-style: normal;
cursor: pointer;
color: #fff;
line-height: 46px;
text-align: center;
font-size: 18px;
outline: none;
margin: 0;
padding: 0;
font-family: "NG", verdana, applegothic, sans-serif;
position: relative;
`;

export const VOD_info_h2 = styled.h2`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
height: 15px;
margin-bottom: 15px;
border-bottom: 1px solid #ccc;
`;

export const VOD_upload_info = styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
padding: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
width: 772px;
margin: 125px auto 0;
`;

export const VOD_upload_span = styled.span`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
list-style: normal;
outline: none;
padding: 0;
font-family: "NG", verdana, applegothic, sans-serif;
display: block;
background: #fff;
width: 204px;
height: 30px;
margin: 0 auto;
color: #222;
font-size: 18px;
line-height: 30px;
text-align: center;
font-weight: normal;
`;

export const VOD_upload_ul = styled.ul`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
color: #666666;
font-weight: normal;
line-height: 1em;
outline: none;
border: none;
font-size: 12px;
padding: 0;
margin: 0;
list-style: normal;
font-family: "NG", verdana, applegothic, sans-serif;
margin-top: 35px;
`;

export const VOD_upload_li_1 = styled.li`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
font-weight: normal;
outline: none;
margin: 0;
padding: 0;
font-style: normal;
list-style: none;
font-family: "NG", verdana, applegothic, sans-serif;
color: #666;
font-size: 14px;
line-height: 28px;
text-align: center;
`

export const VOD_li1_span = styled.span`
-webkit-text-size-adjust: none;
--text-default: 12px;
user-select: none;
font-weight: normal;
font-style: normal;
list-style: none;
color: #666;
font-size: 14px;
line-height: 28px;
text-align: center;
outline: none;
margin: 0;
padding: 0;
font-family: "NG", verdana, applegothic, sans-serif;
`;

export const Con_list = styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
padding: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
position: relative;
width: 1280px;
margin: 0 auto;
`;

export const VOD_Info = styled.ul`
-webkit-text-size-adjust: none;
--text-default: 12px;
color: #666666;
font-weight: normal;
line-height: 1em;
outline: none;
border: none;
font-size: 12px;
padding: 0;
margin: 0;
list-style: normal;
font-family: "NG", verdana, applegothic, sans-serif;
padding-top: 20px;
`;

export const VOD_Info_li = styled.li`
-webkit-text-size-adjust: none;
--text-default: 12px;
color: #666666;
font-weight: normal;
line-height: 1em;
font-size: 12px;
outline: none;
margin: 0;
font-style: normal;
list-style: none;
font-family: "NG", verdana, applegothic, sans-serif;
position: relative;
background: #fff;
margin-bottom: 20px;
padding: 40px 0 100px;
border-radius: 10px;
transition: all 0.1s ease;
padding-bottom: 70px;
`;

export const VOD_Input_area = styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
`;

export const VOD_input_form = styled.form`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
list-style: normal;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
outline: none;
margin: 0;
padding: 0;
font-family: "NG", verdana, applegothic, sans-serif;
display: flex-direction;
`;


export const VOD_Image_div =styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
position: absolute;
top: 60px;
left: 90px;
`;

export const VOD_Image_span = styled.span`
-webkit-text-size-adjust: none;
--text-default: 12px;
list-style: normal;
color: #666666;
outline: none;
margin: 0;
padding: 0;
display: block;
position: relative;
background: #000;
width: 300px;
height: 169px;
text-align: center;
font: 0/0 a;
`;

export const VOD_Image_img = styled.video`
-webkit-text-size-adjust: none;
--text-default: 12px;
color: #666666;
text-align: center;
font: 0/0 a;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: 0;
font-family: "NG", verdana, applegothic, sans-serif;
display: inline-block;
max-width: 300px;
max-height: 169px;
margin: 0 auto;
vertical-align: middle;
`

export const Middle_area = styled.div`
display: auto;
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
padding: 0;

outline: none;
list-style: normal;
border: none;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
margin: 0 235px 0 425px;
color: #666;

`;

export const Middle_title_p = styled.p`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
font-weight: normal;
line-height: 1em;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
font-size: 12px;
color: #666666;
font-family: "NG", verdana, applegothic, sans-serif;
`;

export const Middle_title_input = styled.input`
-webkit-text-size-adjust: none;
--text-default: 12px;
list-style: normal;
margin: 0;
outline: none;
font-family: "NG", verdana, applegothic, sans-serif;
width: 100%;
height: 52px;
padding: 0 15px;
border: 1px solid #e6e6e6;
box-sizing: border-box;
border-radius: 3px;
color: #222;
font-size: 24px;
line-height: 52px;
`;

export const VOD_Title_dl = styled.dl`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
font-weight: normal;
line-height: 1em;
outline: none;
border: none;
color: #666666;
font-size: 12px;
margin-bottom: 1000px;
margin: 0;
list-style: normal;
font-family: "NG", verdana, applegothic, sans-serif;
display: block;

`;

export const VOD_title_dt = styled.dt`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
line-height: 1em;
list-style: normal;
outline: none;
padding: 0;
color: #666666;
position: relative;
font-family: "NG", verdana, applegothic, sans-serif;
margin: 22px 0 16px;
font-size: 14px;
font-weight: bold;
`;

export const VOD_Catagory_div =styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
`;

export const VOD_Catagory_strong = styled.strong`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
list-style: normal;
color: #666666;
line-height: 1em;
outline: none;
padding: 0;
font-family: "NG", verdana, applegothic, sans-serif;
display: block;
margin: 22px 0 16px;
font-size: 14px;
font-weight: bold;
`;

export const VOD_Catagory_select = styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
zoom: 1;
position: relative;
display: flex;
margin-top: 0;
`;

export const VOD_Catagory_box = styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
float: left;
position: relative;
background: #fff;
margin-left: 0;
-webkit-box-flex: 0;
flex: 0 0 auto;
width: 300px !important;
margin-right: 0;
`;

export  const VOD_Catagory_a = styled.a`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
list-style: normal;
font-weight: normal;
outline: none;
margin: 0;
padding: 0;
cursor: pointer;
font-family: "NG", verdana, applegothic, sans-serif;
display: block;
position: relative;
height: 42px;
border: 1px solid #e6e6e6;
border-radius: 3px;
color: inherit;
line-height: 42px;
font-size: 15px;
text-decoration: none;
z-index: 1;
 &:hover {
    border: 1px solid #8facff;
 }
`;

export const VOD_Catagory_box_Strong = styled.strong`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
list-style: normal;
cursor: pointer;
color: inherit;
line-height: 42px;
font-size: 15px;
outline: none;
margin: 0;
padding: 0;
font-family: "NG", verdana, applegothic, sans-serif;
display: block;
overflow: hidden;
width: 85%;
padding-left: 14px;
text-overflow: ellipsis;
font-weight: normal;
white-space: nowrap;
`;

export const VOD_Catagory_content_dd = styled.dd`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
font-weight: normal;
line-height: 1em;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
font-size: 12px;
color: #666666;
font-family: "NG", verdana, applegothic, sans-serif;
`;

export const VOD_Catagory_textarea = styled.textarea`
-webkit-text-size-adjust: none;
--text-default: 12px;
list-style: normal;
margin: 0;
outline: none;
font-family: "NG", verdana, applegothic, sans-serif;
width: 100%;
height: 132px;
padding: 10px;
border: 1px solid #e6e6e6;
border-radius: 3px;
box-sizing: border-box;
resize: none;
color: inherit;
font-size: 14px;
line-height: 1.5;
`;

export const VOD_Button_arera = styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
position: absolute;
top: 80px;
right: 40px;
text-align: right;
`;

export const VOD_Button_Submit = styled.button`
-webkit-text-size-adjust: none;
--text-default: 12px;
list-style: normal;
vertical-align: middle;
margin: 0;
padding: 0;
cursor: pointer;
outline: 0;
font-family: "NG", verdana, applegothic, sans-serif;
display: block;
background: #fff;
height: 32px;
border-radius: 3px;
font-size: 14px;
line-height: 32px;
text-align: center;
min-width: 78px;
border: 1px solid #386cff;
color: #386cff;
margin-top: 0;
`;

export const VOD_Button_Submit_span =styled.span`
-webkit-text-size-adjust: none;
--text-default: 12px;
list-style: normal;
cursor: pointer;
font-size: 14px;
line-height: 32px;
text-align: center;
color: #386cff;
outline: none;
margin: 0;
padding: 0;
position: relative;
font-family: "NG", verdana, applegothic, sans-serif;
`;

export const VOD_Button_Cancle_button = styled.button`
-webkit-text-size-adjust: none;
--text-default: 12px;
list-style: normal;
vertical-align: middle;
margin: 0;
padding: 0;
cursor: pointer;
outline: 0;
right: 0;
top: 2px;
width: 11px;
font-family: "NG", verdana, applegothic, sans-serif;
display: block;
background: #fff;
height: 32px;
margin-top: 6px;
border: 1px solid #e6e6e6;
border-radius: 3px;
color: #666;
font-size: 14px;
line-height: 32px;
text-align: center;
position: static;
min-width: 78px;
`;

export const VOD_Button_Cancle_span = styled.span`
-webkit-text-size-adjust: none;
--text-default: 12px;
list-style: normal;
cursor: pointer;
color: #666;
font-size: 14px;
line-height: 32px;
text-align: center;
outline: none;
margin: 0;
padding: 0;
position: relative;
font-family: "NG", verdana, applegothic, sans-serif;
`;

export const VOD_Category_Wrap = styled.div`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
margin: 0;
outline: none;
list-style: normal;
color: #666666;
font-size: 12px;
font-weight: normal;
line-height: 1em;
font-family: "NG", verdana, applegothic, sans-serif;
position: absolute;
top: 42px;
left: 0;
overflow: auto;
background: #fff;
width: 100%;
max-height: 400px;
padding: 12px;
border: 1px solid #8facff;
border-top: 1px solid #e6e6e6;
border-radius: 0 0 3px 3px;
box-sizing: border-box;
z-index: 20;
display: block;
  
`;

export const VOD_Category_strong = styled.strong`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
display: block;
margin-bottom: 12px;
color: #222;
font-size: 15px;
font-weight: normal;
font-family: "NGB";
line-height: 1.2;
`

export const VOD_Category_list_ul = styled.ul`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-style: normal;
color: #666666;
font-weight: normal;
line-height: 1em;
outline: none;
border: none;
font-size: 12px;
margin: 0;
list-style: normal;
font-family: "NG", verdana, applegothic, sans-serif;
padding: 0;
margin-bottom: 0;
`;

export const VOD_Category_list_li = styled.li`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-weight: normal;
line-height: 1em;
outline: none;
margin: 0;
font-style: normal;
list-style: none;
font-family: "NG", verdana, applegothic, sans-serif;
position: relative;
color: #7e7e7e;
font-size: 11px;
background: none;
padding: 0;
letter-spacing: 0;
`;

export const VOD_Category_list_a = styled.a`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-weight: normal;
font-style: normal;
list-style: none;
letter-spacing: 0;
outline: none;
margin: 0;
padding: 0;
cursor: pointer;
font-family: "NG", verdana, applegothic, sans-serif;
text-decoration: none;
display: block;
overflow: hidden;
box-sizing: border-box;
color: inherit;
line-height: 24px;
text-overflow: ellipsis;
font-size: 14px;
white-space: nowrap;
`;

export const VOD_Category_span =styled.span`
-webkit-text-size-adjust: none;
--text-default: 12px;
font-weight: normal;
font-style: normal;
list-style: none;
letter-spacing: 0;
cursor: pointer;
color: inherit;
line-height: 24px;
font-size: 14px;
white-space: nowrap;
outline: none;
margin: 0;
padding: 0;
font-family: "NG", verdana, applegothic, sans-serif;
`;

export const VOD_Body_article = styled.article`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;

line-height: 1.2;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
font-size: 12px;
list-style: normal;
outline: none;
padding: 0;
border: 0;
display: flex;
height: calc(100vh - 58px);
margin: 0 auto;
margin-top: 60px;
`;

export  const VOD_Body_section = styled.section`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
line-height: 1.2;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
font-size: 12px;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
display: block;
box-sizing: border-box;
flex: 0 1 auto;
width: 100%;
height: 100%;
position: relative;
background: #000;
`;

export const Vod_list_item = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
line-height: 1.2;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
width: 100%;
height: 100%;
`;

export const Vod_htumb_blur = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
line-height: 1.2;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
position: absolute;
top: 0;
left: 0;
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
width: 100%;
height: 100%;
z-index: 5;
background-image: url("https://iflv14.afreecatv.com/save/afreeca/station/2023/0520/01/thumb/1684513707170185_S_7.jpg");
`;

export const VOD_player_div =styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
line-height: 1.2;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: 80px;
right: 80px;
width: max-content;
max-width: calc(100% - 160px);
min-width: min-content;
height: 100%;
margin: auto;
z-index: 9;
`;

export const VOD_video = styled.video`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
line-height: 1.2;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
font-size: 12px;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
background: transparent;
width: 100%;
height: 100%;
opacity: 1;
`;

export const VOD_section = styled.section`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
font-size: 12px;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
height: 100%;
position: relative;
line-height: 1.5;
flex-direction: column;
flex: 0 0 auto;
width: 480px;
display: flex;
`

export  const VOD_Header_div =styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
flex: 0 0 auto;
height: auto;
`;

export const VOD_Header_user_div = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: flex;
align-items: center;
position: relative;
padding: 24px 32px 20px;
`;

export const VOD_user_image_div = styled.a`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
font-size: 12px;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
text-decoration: none;
box-sizing: border-box;
overflow: visible;
color: transparent;
flex: 0 0 auto;
position: relative;
width: 48px;
height: 48px;
margin-right: 16px;
`;

export const VOD_guest_img = styled.img`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
color: transparent;
margin: 0;
padding: 0;
max-width: 100%;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
position: absolute;

left: 0;
width: 100%;
height: 100%;
border-radius: 50%;
object-fit: cover;
`;

export const VOD_div = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
line-height: 1.2;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
width: 100%;
height: 100%;
`;

export const VOD_wrap = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
line-height: 1.2;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
min-width: 560px;
`;

export const VOD_guest_info = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
flex: 0 1 auto;
width: 100%;
`;

export const VOD_guest_nickname = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: flex;
align-items: center;
`;

export const VOD_guest_button =styled.button`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
list-style: normal;
font-family: "NG",-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","맑은 고딕",helvetica,sans-serif;
overflow: visible;
margin: 0;
padding: 0;
-webkit-appearance: button;
outline: none;
cursor: pointer;
background: transparent;
border: none;
box-sizing: border-box;
color: #333;
font-size: 14px;
font-weight: bold;
`;

export const VOD_host_button = styled.button`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
list-style: normal;
font-family: "NG",-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","맑은 고딕",helvetica,sans-serif;
overflow: visible;
margin: 0;
-webkit-appearance: button;
outline: none;
cursor: pointer;
border: none;
box-sizing: border-box;
display: flex;
align-items: center;
background: #f5f6f7;
height: 21px;
margin-left: 5px;
padding: 0 7px;
border-radius: 21px;
color: #999;
font-size: 13px;
transition: background-color .2s;
`;

export const VOD_view_div = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: flex;
align-items: center;
margin-top: 9px;
`;

export const VOD_view_span =styled.span`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
display: flex;
align-items: center;
color: #888;
font-size: 13px;
`;

export const VOD_title = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
height: 100%;
position: relative;
overflow: auto;
`;

export const VOD_body_div = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
height: 100%;
position: relative;
overflow: auto;
`;

export const VOD_body_inner = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: flex;
flex-direction: column;
position: relative;
overflow: auto;
height: 100%;
`;

export const VOD_detail_div = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
flex: 0 0 auto;
padding: 0 32px;
`;

export const VOD_title_h3 = styled.h3`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
white-space: normal;
-webkit-line-clamp: 2;
color: #222;
font-size: 18px;
letter-spacing: -.5px;
word-break: break-all;
`;

export const VOD_content_div = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
white-space: normal;
-webkit-line-clamp: 2;
`;

export const VOD_content_span = styled.span`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
list-style: normal;
white-space: normal;
outline: none;
padding: 0;
border: 0;
text-decoration: none;
box-sizing: border-box;
display: inline-block;
margin: 0 12px 0 0;
color: #888;
font-size: 13px;
margin-top: 11px;
`;

export const VOD_info_div = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
color: #444;
font-size: 14px;
letter-spacing: -.5px;
`;

export const VOD_info_inner = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
white-space: normal;
color: #444;
font-size: 14px;
letter-spacing: -.5px;
line-height: 1.5;
word-break: break-all;
-webkit-line-clamp: unset;
`;

export const VOD_info_dl = styled.dl`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
white-space: normal;
color: #444;
letter-spacing: -.5px;
line-height: 1.5;
word-break: break-all;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
align-items: center;
flex-wrap: wrap;
margin-top: 18px;
display: flex;
`;

export const VOD_date_dt = styled.dt`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
white-space: normal;
letter-spacing: -.5px;
line-height: 1.5;
word-break: break-all;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
margin-top: 5px;
display: flex;
align-items: center;
flex: 0 0 auto;
width: 92px;
color: #888;
font-size: 14px;
`;

export const VOD_date_dd =styled.dd`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
white-space: normal;
letter-spacing: -.5px;
line-height: 1.5;
word-break: break-all;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
margin-top: 5px;
flex: 0 1 auto;
width: calc(100% - 92px);
color: #444;
font-size: 14px;
`;

export const VOD_cate_dt = styled.dt`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
white-space: normal;
letter-spacing: -.5px;
line-height: 1.5;
word-break: break-all;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
margin-top: 5px;
display: flex;
align-items: center;
flex: 0 0 auto;
width: 92px;
color: #888;
font-size: 14px;
`;


export const VOD_cate_dd = styled.dd`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
white-space: normal;
letter-spacing: -.5px;
line-height: 1.5;
word-break: break-all;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
margin-top: 5px;
flex: 0 1 auto;
width: calc(100% - 92px);
color: #444;
font-size: 14px;
`;

export const VOD_comment_div = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
all: unset;
background: #f8fafc;
height: 100%;
`;

export const VOD_comment_inner = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: flex;
align-items: center;
padding: 22px 27px 13px 32px;
border-bottom: 1px solid #eee;
`;

export const VOD_comment_span = styled.span`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
list-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
display: flex;
align-items: center;
color: #555;
font-size: 16px;
`;

export const VOD_comment_count = styled.b`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
line-height: 1.5;
list-style: normal;
font-size: 16px;
outline: none;
margin: 0;
padding: 0;
border: 0;
font-style: normal;
font-weight: normal;
text-decoration: none;
box-sizing: border-box;
margin-left: 6px;
color: #4279ff;
font-family: "NGB";
`;

export const VOD_comment_user = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
`

export const VOD_comment_ul = styled.ul`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
background: #f8fafc;
margin-top: 7px;
`;

export const VOD_commnet_li = styled.li`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
font-size: 12px;
outline: none;
margin: 0;
border: 0;
list-style: none;
font-style: normal;
box-sizing: border-box;
position: relative;
padding: 23px 28px 28px 96px;
border-bottom: 1px solid #eee;
`;

export const VOD_comment_span2 =styled.span`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
font-size: 12px;
list-style: none;
font-style: normal;
outline: none;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
position: absolute;
top: 21px;
left: 32px;
cursor: pointer;
`;

export const VOD_comment_user_img = styled.img`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
font-style: normal;
cursor: pointer;
margin: 0;
padding: 0;
max-width: 100%;
font-size: 12px;
outline: none;
list-style: normal;
box-sizing: border-box;
width: 48px;
height: 48px;
border: 1px solid #e2e2e2;
border-radius: 50%;
`

export const VOD_commnet_userId_div =styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
font-style: normal;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
position: relative;
z-index: 10;
`;

export const VOD_commnet_userId_wrap = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
font-style: normal;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
margin-right: 21px;
`;

export const VOD_comment_info_box = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
font-style: normal;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
position: relative;
vertical-align: middle;
`;

export const VOD_comment_userId_button = styled.button`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
list-style: normal;
overflow: visible;
margin: 0;
padding: 0;
-webkit-appearance: button;
outline: none;
cursor: pointer;
background: transparent;
border: none;
box-sizing: border-box;
line-height: 1.2;
display: block;
margin-bottom: 5px;
color: #333;
font-family: "NGB", verdana, applegothic, sans-serif;
font-size: 13px;
`;

export const VOD_commnet_userId_p = styled.p`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
cursor: pointer;
line-height: 1.2;
color: #333;
font-family: "NGB", verdana, applegothic, sans-serif;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: flex;
align-items: center;
position: relative;
font-size: 14px;
`;

export const VOD_comment_date_div = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
font-style: normal;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
line-height: 1.2;
display: inline-block;
`;

export const VOD_comment_date_span =styled.span`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
font-style: normal;
list-style: normal;
line-height: 1.2;
outline: none;
margin: 0;
padding: 0;
border: 0;
box-sizing: border-box;
display: inline-block;
position: relative;
color: #666;
font-size: 13px;
`;

export const VOD_comment_content = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
font-style: normal;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
margin-top: 6px;
`;

export const VOD_comment_p =styled.p`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
font-style: normal;
margin: 0;
padding: 0;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
overflow: hidden;
color: #888;
line-height: 21px;
font-size: 14px;
word-break: break-word;
word-wrap: break-word;
`;

export const VOD_comment_input_div = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
flex: 0 0 auto;
position: relative;
width: 100%;
height: 52px;
z-index: 10;
`;

export const VOD_comment_input_inner = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: flex;
align-items: center;
position: absolute;
bottom: 0;
left: 0;
right: 0;
background: #fff;
width: 100%;
padding: 14px 32px;
`;

export const VOD_commnet_input_box = styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
font-size: 12px;
outline: none;
list-style: normal;
box-sizing: border-box;
display: flex;
background: #f5f6f9;
width: 100%;
padding: 10px 16px 9px;
border: 1px solid #ebeef9;
border-radius: 8px;
`;

export const VOD_comment_writie_area = styled.input`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
font-family: 'NG','AppleGothic',sans-serif;
-webkit-user-modify: read-write;
-webkit-line-break: after-white-space;
margin: 0;
padding: 0;
list-style: normal;
border: none;
border-radius: 8px;
box-sizing: border-box;
position: relative;
background: #f5f6f9;
width: 100%;
margin-right: 12px;
color: #333;
font-size: 14px;
outline: none;
line-height: 21px;
cursor: text;
word-break: break-word;
word-wrap: break-word;
overflow: hidden;
`;

export const VOD_comment_button_div =styled.div`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
color: #333;
font-family: 'NG','AppleGothic',sans-serif;
line-height: 1.5;
margin: 0;
padding: 0;
font-size: 12px;
outline: none;
list-style: normal;
border: none;
box-sizing: border-box;
display: flex;
align-items: center;
flex: 0 0 auto;
position: relative;
margin-left: auto;
`;

export const VOD_comment_submit_button = styled.button`
-webkit-text-size-adjust: none;
--swiper-theme-color: #007aff;
--swiper-navigation-size: 44px;
list-style: normal;
font-family: "NG",-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","맑은 고딕",helvetica,sans-serif;
overflow: visible;
margin: 0;
padding: 0;
-webkit-appearance: button;
outline: none;
cursor: pointer;
background: transparent;
border: none;
box-sizing: border-box;
display: flex;
align-items: center;
margin-left: 16px;
color: #4279ff;
font-size: 13px;
font-weight: bold;
`;