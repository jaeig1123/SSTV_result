import styled from "styled-components";

export const CBody = styled.body`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
background-color: #fff;
color: #555;
font-size: 12px;
line-height: 1.2;
`;

export const MainDiv = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const CHeader = styled.header`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
left: 0;
right: 0;
background: #fff;
width: 100%;
min-width: 1184px;
border-bottom: 1px solid #f0f0f0;
z-index: 999;
position: fixed;
top: 0px;
`;

export const CHeader_Dark = styled.header`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
left: 0;
right: 0;
background: #fff;
width: 100%;
min-width: 1184px;
border-bottom: 1px solid #f0f0f0;
z-index: 999;
position: fixed;
top: 0px;
backgroundcolor: black;
`;

export const HeaderDiv = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 1184px;
height: 92px;
margin: 0 auto;
`;

export const Com_h1 = styled.h1`
color: #555;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 0;
left: 0;
z-index: 2000;
`;

export const Header_a = styled.a`
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
text-decoration: none;
display: block;
background-size: 136px 23px;
width: 136px;
height: 65px;
font: 0/0 a;
`;

export const Header_Search_Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 12px;
left: 156px;
`;


export const Header_Search_form = styled.form`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Header_Search_fieldset = styled.fieldset`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Header_Search_Div_input = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Header_Search_Div_input_in = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
position: relative;
`;

export const Header_Search_Input_in = styled.input`
margin: 0;
font-family: inherit;
outline: none;
-webkit-appearance: none;
width: 280px;
height: 40px;
padding: 0 42px 0 12px;
border: 1px solid #ddd;
border-radius: 3px;
box-sizing: border-box;
color: #000;
line-height: 40px;
font-size: 14px;
transition: all .2s ease;
`;

export const Header_Search_Button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
overflow: visible;
color: transparent;
position: absolute;
top: 1px;
right: 1px;
width: 42px;
height: 38px;
`;

export const Header_Search_Span = styled.span`
cursor: pointer;
color: transparent;
margin: 0;
padding: 0;
border: 0;
position: relative;
display: inline-block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255,255,255,0.999)' stroke='%23666' viewBox='0 0 21 21'%3e%3cpath stroke-width='2' fill='none' d='M8.297 1c4.03 0 7.297 3.267 7.297 7.297 0 4.03-3.267 7.297-7.297 7.297C4.267 15.594 1 12.327 1 8.297 1 4.267 4.267 1 8.297 1z'/%3e%3cpath stroke-width='2' d='M13.865 13.864l6.34 6.341'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 18px;
height: 18px;
font: 0/0 a;
vertical-align: middle;
`;

export const Header_Search_Side_Button = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
float: left;
height: 40px;
margin-left: 8px;
padding: 0 12px;
border: 1px solid #ddd;
border-radius: 3px;
color: #555;
font-size: 13px;
line-height: 38px;
`;

export const Header_Search_Side_Span = styled.span`
cursor: pointer;
color: #555;
font-size: 13px;
line-height: 38px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Header_legend = styled.legend`
color: #555;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
overflow: hidden;
position: absolute;
top: -9999px;
left: -9999px;
width: 1px;
height: 1px;
line-height: 0;
font-size: 0;
text-indent: -9999px;
`;

export const Header_Right_Side_Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 15px;
right: 0;
`;

export const Header_Right_Icon_1_Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
margin-right: 15px;
position: relative;
`;

export const Header_Right_Icon_1_a = styled.a`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
`;

export const Header_Right_Icon_1_Button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
position: relative;
overflow: visible;
color: transparent;
display: block;
width: 35px;
height: 35px;
text-align: center;
`;

export const Header_right_Icon_1_Span = styled.span`
cursor: pointer;
color: transparent;
text-align: center;
margin: 0;
padding: 0;
border: 0;
position: relative;
display: inline-block;
font: 0/0 a;
vertical-align: middle;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(106,106,106,0.999)' stroke='' viewBox='0 0 21 19'%3e%3cpath fill-rule='evenodd' d='M17 15v4h-1v-4h-4v-1h4v-4h1v4h4v1h-4zm-7.49-2.15a1.2 1.2 0 01-1.03-.59 1.39 1.39 0 01-.22-.75V6.25c0-.74.56-1.33 1.25-1.33.27 0 .53.09.74.26l3.38 2.62a1.4 1.4 0 010 2.16l-3.39 2.63c-.21.17-.47.26-.73.26zm3.6-3.8a.32.32 0 00-.06-.42L9.66 6.01a.24.24 0 00-.15-.06c-.15 0-.27.14-.27.3v5.26c0 .07.02.13.05.18.04.06.1.1.18.12h.04c.05 0 .1-.02.15-.05l3.4-2.63a.33.33 0 00.05-.08zM20 4.84A3.84 3.84 0 0016.16 1H4.84A3.84 3.84 0 001 4.84v8.32A3.84 3.84 0 004.84 17h6.24c.12.35.28.68.47 1H4.84A4.84 4.84 0 010 13.16V4.84A4.84 4.84 0 014.84 0h11.32A4.84 4.84 0 0121 4.84v6.9c-.29-.38-.62-.74-1-1.05V4.84z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 21px;
height: 19px;
`;

export const Header_Right_Icon_2_Button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
position: relative;
overflow: visible;
color: transparent;
float: left;
margin-right: 15px;
display: block;
width: 35px;
height: 35px;
text-align: center;
`;

export const Header_Right_Icon_2_Span = styled.span`
cursor: pointer;
color: transparent;
text-align: center;
margin: 0;
padding: 0;
border: 0;
position: relative;
display: inline-block;
font: 0/0 a;
vertical-align: middle;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(102,102,102,0.999)' stroke='' viewBox='0 0 28 18'%3e%3cpath fill-rule='evenodd' d='M27.305 15.631c-.189.099-.397.149-.603.149-.259 0-.516-.077-.737-.23l-5.325-3.677v2.279c0 2.122-1.724 3.848-3.843 3.848H3.844C1.725 18 .001 16.274.001 14.152V3.848C.001 1.726 1.725 0 3.844 0h12.953c2.119 0 3.843 1.726 3.843 3.848v2.345l5.301-3.741c.223-.158.485-.238.748-.238.203 0 .408.048.596.146.43.222.7.667.701 1.152l.013 10.968c.001.482-.267.926-.694 1.151zm-.32-12.118c0-.112-.061-.214-.16-.265-.044-.023-.089-.034-.136-.034-.043 0-.108.01-.171.054L21.217 7.01c-.172.122-.374.183-.577.183-.158 0-.315-.037-.46-.112-.332-.171-.541-.514-.541-.888V3.848C19.639 2.277 18.364 1 16.797 1H3.844C2.277 1 1.001 2.277 1.001 3.848v10.304c0 1.57 1.276 2.848 2.843 2.848h12.953c1.567 0 2.842-1.278 2.842-2.848v-2.279c0-.371.207-.712.536-.885.146-.077.306-.115.465-.115.199 0 .398.06.568.178l5.326 3.677c.062.043.126.052.168.052.048 0 .094-.012.137-.034.099-.052.16-.153.159-.265l-.013-10.968zM13.55 10.807c-.994 0-1.799-.809-1.799-1.799 0-.998.805-1.807 1.799-1.807.986 0 1.792.809 1.792 1.807 0 .99-.806 1.799-1.792 1.799zm-6.323 0c-.995 0-1.8-.809-1.8-1.799 0-.998.805-1.807 1.8-1.807.986 0 1.791.809 1.791 1.807 0 .99-.805 1.799-1.791 1.799z'/%3e%3c/svg%3e") center 0 no-repeat;
background-size: 100% 100%;
width: 28px;
height: 18px;
`;

export const Header_Right_Login_Ui_Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
align-items: center;
float: left;
position: relative;
margin-right: 0;
`;

export const Header_Right_Login_Ui_Span = styled.span`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
`;

export const Header_Right_Login_Ui_Button = styled.button`
margin: 0;
cursor: pointer;
overflow: visible;
color: transparent;
position: relative;
top: 0;
right: 0;
vertical-align: middle;
background: url("data:image/svg+xml,%3csvg viewBox='0 0 3 15' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m1.5 9c-0.829 0-1.5-0.672-1.5-1.5-0-0.829 0.671-1.5 1.5-1.5 0.828 0 1.5 0.671 1.5 1.5 0 0.828-0.672 1.5-1.5 1.5zm0-6c-0.829 0-1.5-0.672-1.5-1.5-0-0.829 0.671-1.5 1.5-1.5 0.828-0 1.5 0.671 1.5 1.5 0 0.828-0.672 1.5-1.5 1.5zm0 9c0.828 0 1.5 0.671 1.5 1.5 0 0.828-0.672 1.5-1.5 1.5-0.829 0-1.5-0.672-1.5-1.5-0-0.829 0.671-1.5 1.5-1.5z' fill='%23666'/%3e%3c/svg%3e") 50% 50% no-repeat;
background-size: 3px 15px;
width: 35px;
height: 25px;
margin-right: 10px;
padding: 0;
border: 0;
font: 0/0 a;
outline: none;
`;


export const Header_Right_Login_Ui_a = styled.a`
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
display: inline-block;
height: 35px;
color: #666;
line-height: 35px;
font-size: 14px;
font-weight: bold;
`;

export const Header_Modal_Div = styled.div`
color: #555;
font-size: 12px;
margin: 0;
padding: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
background: #fff;
width: 182px;
border: solid 1px #bfbfbf;
border-radius: 5px;
box-sizing: border-box;
z-index: 10;
line-height: 1.2;
top: 39px;
right: 40px;
position: absolute;
`;


export const Header_Modal_Div_Set = styled.div`
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
overflow: hidden;
position: relative;
padding: 12px 18px 15px 17px;
border-bottom: 1px solid #ebebeb;
color: #555;
`;

export const Header_Modal_Strong_mode = styled.strong`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
align-items: center;
color: #555;
font-size: 12px;
font-weight: normal;
padding-left: 24px;
text-align: left;
`;


export const Header_Modal_Label = styled.label`
font-size: 12px;
line-height: 1.2;
color: #555;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 15px;
right: 13px;
background: #c8c8c8;
width: 22px;
height: 8px;
border-radius: 10px;
cursor: pointer;
`;

export const Sidebar_Main_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 1184px;
margin: 0 auto;
padding: 65px 0 90px;
z-index: 11;
`;

export const Sidebar_Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 65px;
bottom: 0;
background: #f8fafc;
width: 251px;
height: 1000px;
border-right: 1px solid #f0f0f0;
z-index: 11;
`;

export const Sidebar_Div_in = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
background: #f8fafc;
height: 100%;
padding-bottom: 80px;
`;

export const Sidebar_Article_Class = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin-left: 30px;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
width: 191px;
padding: 0 px;
z-index: 10;
`;

export const Sidebar_Section_Class = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
padding: 24px 0 0;
`;

export const Sidebar_User_a = styled.a`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
`;

export const Sidebar_a_in_div =styled.div`
font-size: 12px;
line-height: 1.2;
color: inherit;
padding: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
width: 83px;
height: 83px;
margin: 0 auto;
border: 1px solid #e1e1e1;
border-radius: 50%;
`;

export const Sidebar_Profile = styled.img`
font-size: 12px;
line-height: 1.2;
color: inherit;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
width: 83px;
height: 83px;
border-radius: 50%;
`;

export const Sidebar_User_info = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-top: 8px;
text-align: center;
`;

export const Sidebar_User_name_idv = styled.div`
color: #555;
font-size: 12px;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
line-height: 1.2;
`;

export  const Sidebar_User_name_h2 = styled.h2`
text-align: center;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: inline-block;
overflow: hidden;
text-overflow: ellipsis;
max-width: 191px;
margin: 0 1px;
white-space: nowrap;
color: #000;
font-size: 15px;
font-weight: bold;
line-height: 1.2;
vertical-align: middle;
`;

export const Sidebar_User_id_span = styled.span`
text-align: center;
line-height: 1.2;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: inline-block;
margin: 0 1px;
color: #aaa;
font-size: 12px;
vertical-align: middle;
`;

export const Sidebar_User_badge_Div = styled.div`
color: #555;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-top: 9px;
font-size: 0;
line-height: 0;
`;

export const Sidebar_User_badge_i = styled.i`
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
text-decoration: none;
display: inline-block;
background: #555;
height: 21px;
margin: 6px 3px 0 3px;
padding: 0 12px;
border-radius: 30px;
color: #fff;
font-size: 11px;
font-weight: bold;
line-height: 21px;
text-align: center;
background-color: rgb(40, 191, 255);
`;

export const Sidebar_Body_article = styled.article`
    color: #555;
    font-size: 12px;
    line-height: 1.2;
    margin: 0;
    border: 0;
    font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
    vertical-align: baseline;
    display: block;
    position: relative;
    width: 180px;
    padding: 0 35px 0 36px;
    z-index: 5;
`;

export const Sidebar_Body_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-top: 20px;
`;


export const Sidebar_Body_Streaming = styled.a`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
overflow: hidden;
display: block;
position: relative;
background: #000;
height: 100px;
border-radius: 10px;
`;

export const Sidebar_Body_image_span = styled.span`
color: inherit;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
font: 0/0 a;
opacity: .7;
z-index: 1;
`;

export const Sidebar_Body_image_thumb = styled.span`
color: inherit;
font: 0/0 a;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
background-color: #f3f3f3;
width: 100%;
padding-bottom: calc(100% / 16 * 9);
font-size: 0;
line-height: 0;
`;


export const Sidebar_Body_image_Head = styled.div`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
left: 10px;
right: 10px;
color: #fff;
z-index: 3;
top: 10px;
`;

export const Sidebar_Body_image_span_live = styled.span`
font-size: 12px;
line-height: 1.2;
color: #fff;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
position: relative;
padding-left: 10px;
font-weight: bold;
`;

export const Sidebar_Body_image_span_views = styled.span`
font-size: 12px;
line-height: 1.2;
color: #fff;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-left: 12px;
padding-left: 20px;
`;

export const Sidebar_p = styled.p`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
left: 10px;
right: 10px;
color: #fff;
z-index: 3;
bottom: 10px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-weight: bold;
`;

export const Sidebar_Writing_Button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
display: block;
position: relative;
width: 100%;
height: 44px;
margin-top: 20px;
border-radius: 4px;
border: 1px solid #4279ff;
color: #4279ff;
line-height: 42px;
text-align: center;
`;

export const Sidebar_Writing_Span = styled.span`
cursor: pointer;
color: #4279ff;
line-height: 42px;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
position: relative;
padding-left: 5px;
font-size: 15px;
font-weight: bold;
`;

export const Sidebar_footer_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
width: 180px;
padding: 0 35px 0 36px;
position: sticky;
top: 60px;
z-index: 4;
`;

export const Sidebar_footer_VOD_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
width: 180px;
margin: 0 auto -1px;
padding: 20px 0;
border: 1px solid #e1e4e6;
border-width: 0 0 1px;
transition: all .2s ease;
`;

export const Sidebar_footer_VOD_h3 = styled.h3`
color: #555;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Sidebar_footer_VOD_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
display: block;
position: relative;
width: 100%;
color: #000;
font-size: 16px;
font-weight: bold;
text-align: left;
transition: all .2s ease;
height: 26px;
margin-bottom: 9px;
line-height: 26px;
`;

export const Sidebar_footer_VOD_span = styled.span`
cursor: pointer;
color: #000;
font-size: 16px;
font-weight: bold;
text-align: left;
line-height: 26px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Sidebar_footer_VOD_li_ul = styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
top: -9999em;
transition: all .1s ease;
position: static;
opacity: 1;
visibility: visible;
`;

export const Sidebar_footer_VOD_li_1 = styled.li`
color: #555;
font-size: 12px;
line-height: 1.2;
visibility: visible;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
position: relative;
background: none;
margin-bottom: 0;
padding-bottom: 0;
cursor: pointer;
&:hover{
  background: #e6edfb;
  font-weight: bold;
}
`;


export const Sidebar_footer_VOD_1_a = styled.a`
line-height: 1.2;
visibility: visible;
list-style: none;
margin: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
display: block;
overflow: hidden;
padding: 6px 0 6px 8px;
border-radius: 3px;
text-overflow: ellipsis;
font-size: 13px;
word-break: break-all;
white-space: nowrap;
`;

export const Sidebar_footer_Writing_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
width: 180px;
margin: 0 auto -1px;
padding: 20px 0;
border: 1px solid #e1e4e6;
border-width: 0 0 1px;
transition: all .2s ease;
`;


export const Sidebar_footer_Writing_h3 = styled.h3`
color: #555;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;


export const Sidebar_footer_Writing_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
display: block;
position: relative;
width: 100%;
color: #000;
font-size: 16px;
font-weight: bold;
text-align: left;
transition: all .2s ease;
height: 26px;
margin-bottom: 9px;
line-height: 26px;
`;

export const Sidebar_footer_Writing_span = styled.span`
cursor: pointer;
color: #000;
font-size: 16px;
font-weight: bold;
text-align: left;
line-height: 26px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Sidebar_footer_Writing_ul_a = styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
top: -9999em;
transition: all .1s ease;
position: static;
opacity: 1;
visibility: visible;
`;

export const Sidebar_footer_Writing_li_1 = styled.li`
color: #555;
font-size: 12px;
line-height: 1.2;
visibility: visible;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
position: relative;
background: url(/images/bj/bg_dot_lnb.png) 0 100% repeat-x;
margin-bottom: 8px;
padding-bottom: 8px;
`;

export const Sidebar_footer_Writing_1_a = styled.a`
line-height: 1.2;
visibility: visible;
list-style: none;
margin: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
display: block;
overflow: hidden;
padding: 6px 0 6px 8px;
border-radius: 3px;
text-overflow: ellipsis;
font-size: 13px;
word-break: break-all;
white-space: nowrap;
cursor: pointer;
color: #000;
font-weight: bold;
&:hover{
  background: #e6edfb;
}

`;

export const Sidebar_footer_Writing_strong = styled.strong`
line-height: 1.2;
visibility: visible;
list-style: none;
font-size: 13px;
word-break: break-all;
white-space: nowrap;
color: #000;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_form_Main_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 932px;
min-height: 900px;
margin-left: 252px;
padding: 0 0 0 0;
z-index: 4;
`;

export const Writing_form_Body_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding: 25px 0 0 48px;
transition: all .2s ease;
z-index: 10;
margin-top: 62px;
`;

export const Writing_form_Body_div1 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_form_Body_div2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_form_Body_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Writing_form_Body_form_1 = styled.form`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export  const Writing_form_Body_form_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
padding-bottom: 14px;
z-index: 5;
`;

export const Writing_form_Body_form_div2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_form_Body_title_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
position: relative;
background: #fff;
z-index: 10;
transition: all .2s ease;
max-width: calc(100% - 100px);
`;

export const Writing_form_Body_title_span = styled.span`
cursor: pointer;
color: #333;
line-height: 36px;
text-align: left;
font-size: 16px;
font-weight: bold;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
display: inline-block;
overflow: hidden;
max-width: 630px;
text-overflow: ellipsis;
white-space: nowrap;
`;

export const Writing_form_Body_title_Button = styled.div`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
display: block;
position: relative;
width: 100%;
height: 36px;
border-radius: 2px;
color: #333;
line-height: 36px;
box-sizing: border-box;
text-align: left;
padding: 0 34px 0 0;
border: 0;
font-size: 16px;
font-weight: bold;
`;


export const Writing_form_Body_title_text_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
z-index: 4;
`;

export const Writing_form_Body_title_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
padding-bottom: 18px;
border-bottom: 1px solid #d9dddf;
`;

export const Writing_form_Body_title_textarea = styled.textarea`
font-family: inherit;
text-decoration: none;
width: 100%;
overflow: hidden;
min-height: 32px;
margin: 0;
padding: 0;
border: 0;
color: #000;
font-size: 28px;
word-break: break-word;
word-wrap: break-word;
white-space: pre-wrap;
cursor: text;
resize: none;
outline: none;
height: 32px;
`;

export const Writing_form_Body_edit_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-top: 29px;
border: 1px solid #ddd;
`;

export const Writing_footer_alarm_ul =styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding-top: 50px;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
margin-top: 27px;
`;

export const Writing_footer_alarm_li_1 = styled.li`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
position: relative;
padding-left: 8px;
color: #888;
font-size: 13px;
line-height: 27px;
`;

export const Writing_footer_alarm_li_2 = styled.li`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
position: relative;
padding-left: 8px;
color: #888;
font-size: 13px;
line-height: 27px;
`;

export const Writing_footer_submit_div = styled.div`
color: #555;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font: 0/0 a;
margin-top: 35px;
padding-top: 16px;
border-top: 1px solid #eee;
`;

export const Writing_footer_submit_sdiv = styled.div`
color: #555;
font: 0/0 a;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: right;
position: relative;
text-align: right;
`;

export const Writing_footer_cancle_button = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
padding: 0 16px;
min-width: 60px;
height: 36px;
border: 1px solid #d9dddf;
border-radius: 3px;
color: #333;
font-size: 13px;
line-height: 34px;
text-align: center;
transition: all .2s ease;
margin-left: 0;
`;

export const Writing_footer_submnit_button = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
padding: 0 16px;
min-width: 60px;
height: 36px;
border: 1px solid #d9dddf;
border-radius: 3px;
font-size: 13px;
line-height: 34px;
text-align: center;
transition: all .2s ease;
border-color: #4279ff;
color: #4279ff;
font-weight: bold;
margin-left: 8px;
`;

export const Writing_footer_cancle_span = styled.span`
cursor: pointer;
color: #333;
font-size: 13px;
line-height: 34px;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Writing_footer_submit_span = styled.span`
cursor: pointer;
font-size: 13px;
line-height: 34px;
text-align: center;
color: #4279ff;
font-weight: bold;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
padding-left: 10px;
`;

export const Writing_List_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding: 25px 0 0 48px;
transition: all .2s ease;
z-index: 10;
margin-top: 62px;
`;


export const Writing_List_bs_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
min-height: 0px;
`;

export const Writing_List_bs_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_bs_title = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_bs_h2 = styled.h2`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
color: #000;
font-size: 28px;
font-weight: normal;
word-break: break-all;
`;

export const Writing_List_bs_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding-top: 20px;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin-top: 20px;
padding-bottom: 50px;
border-bottom: 1px solid #d9dddf;
`;

export const Writing_List_bs_span = styled.span`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
align-items: center;
float: left;
padding-top: 10px;
color: #666;
font-size: 13px;
`;

export const Writing_List_bs_em = styled.em`
line-height: 1.2;
font-size: 13px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
color: #4279ff;
`;

export const Writing_List_bs_button_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: right;
`;

export const Writing_List_bs_button_a =styled.a`
margin: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
padding: 0 16px;
min-width: 60px;
height: 36px;
border: 1px solid #d9dddf;
border-radius: 3px;
color: #333;
font-size: 13px;
text-align: center;
transition: all .2s ease;
display: inline-block;
line-height: 36px;
box-sizing: border-box;
float: left;
margin-left: 8px;
`;

export const Writing_List_bs_button_span = styled.span`
color: #333;
font-size: 13px;
text-align: center;
line-height: 36px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
padding-left: 10px;
font-weight: bold;
`;

export const Writing_List_title_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;


export const Writing_List_title_section_2 = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin-top: -1px;
border-top: 1px solid #d9dddf;
`;

export const Writing_List_title_table = styled.table`
color: #555;
font-size: 12px;
line-height: 1.2;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
border-collapse: collapse;
table-layout: fixed;
word-break: break-all;
width: 100%;
border-bottom: 1px solid #eee;
`;

export const Writing_List_title_thead = styled.thead`
color: #555;
font-size: 12px;
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_title_tr = styled.tr`
color: #555;
font-size: 12px;
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_title_th_1 = styled.th`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-size: 13px;
vertical-align: middle;
height: 44px;
width: 508px;
color: #555;
`;

export const Writing_List_title_th_2 = styled.th`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-size: 13px;
vertical-align: middle;
height: 44px;
width: 120px;
color: #555;
position: relative;
padding-left: 8px;
text-align: left;
`;

export const Writing_List_title_th_3 = styled.th`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-size: 13px;
vertical-align: middle;
height: 44px;
color: #555;
`;

export const Writing_List_title_th_4 = styled.th`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-size: 13px;
vertical-align: middle;
height: 44px;
color: #555;
`;

export const Writing_List_title_th_5 = styled.th`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-size: 13px;
vertical-align: middle;
height: 44px;
color: #555;
`;

export const Writing_List_tbody = styled.tbody`
color: #555;
font-size: 12px;
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_tbody_tr = styled.tr`
color: #555;
font-size: 12px;
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
-webkit-animation: left_AC 0.4s ease;
`;

export const Writing_List_tbody_td = styled.td`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
color: #666;
vertical-align: middle;
height: 34px;
padding: 5px 0;
border-top: 1px solid #eee;
text-align: center;
font-size: 13px;
padding-left: 16px;
overflow: hidden;
`;

export const Writing_List_tbody_div_1 = styled.div`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
color: #666;
text-align: center;
font-size: 13px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: table-cell;
vertical-align: middle;
width: 88px;
padding-right: 8px;
`;

export const Writing_List_tbody_1_span = styled.span`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
overflow: hidden;
width: 88px;
color: #aaa;
text-align: left;
text-overflow: ellipsis;
font-size: 12px;
white-space: nowrap;
`;

export const Writing_List_tbody_2_div = styled.div`
border-collapse: collapse;
word-break: break-all;
color: #666;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: table-cell;
vertical-align: middle;
line-height: 0;
text-align: left;
font-size: 0;
word-wrap: break-word;
max-width: 400px;
`;

export const Writing_List_tbody_2_a = styled.a`
border-collapse: collapse;
text-align: left;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
display: inline;
color: #333;
line-height: 1.3;
font-size: 14px;
word-break: break-word;
word-wrap: break-word;
`;

export const Writing_List_tbody_2_span = styled.span`
border-collapse: collapse;
word-break: break-all;
text-align: left;
word-wrap: break-word;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
margin-left: 8px;
color: #4b80ff;
font-size: 14px;
font-weight: bold;
line-height: 1.2;
`;

export const Writing_List_tbody_td_2 = styled.td`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
color: #666;
vertical-align: middle;
height: 34px;
padding: 5px 0;
border-top: 1px solid #eee;
font-size: 13px;
position: relative;
padding-left: 8px;
text-align: left;
`;

export const Writing_List_tbody_td_2_a =styled.a`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-size: 13px;
text-align: left;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
`;

export const Writing_List_tbody_td_3 = styled.td`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
color: #666;
vertical-align: middle;
height: 34px;
padding: 5px 0;
border-top: 1px solid #eee;
text-align: center;
font-size: 13px;
`;

export const Writing_List_tbody_td_4 = styled.td`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
color: #666;
vertical-align: middle;
height: 34px;
padding: 5px 0;
border-top: 1px solid #eee;
text-align: center;
font-size: 13px;
`;

export const Writing_List_tbody_td_5 = styled.td`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
color: #666;
vertical-align: middle;
height: 34px;
padding: 5px 0;
border-top: 1px solid #eee;
text-align: center;
font-size: 13px;
`;

export const Writing_List_footer_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_footer_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
padding: 24px 0 60px;
`;

export const Writing_List_footer_form = styled.form`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_footer_search_div = styled.div`
color: #555;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
text-align: center;
font-size: 0;
line-height: 0;
margin-top: 28px;
`;

export const Writing_List_footer_search_div_1 = styled.div`
color: #555;
text-align: center;
font-size: 0;
line-height: 0;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
position: relative;
background: #fff;
z-index: 10;
transition: all .2s ease;
`;

export const Writing_List_footer_search_button = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
display: block;
position: relative;
width: 100%;
height: 36px;
padding: 0 10px 0 12px;
border: 1px solid #d9dddf;
border-radius: 2px;
color: #333;
font-size: 13px;
line-height: 36px;
box-sizing: border-box;
text-align: left;
`;

export const Writing_List_footer_search_span = styled.span`
cursor: pointer;
color: #333;
font-size: 13px;
line-height: 36px;
text-align: left;
margin: 0;
padding-right: 20px;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Writing_List_footer_search_input_div = styled.div`
color: #555;
text-align: center;
font-size: 0;
line-height: 0;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: inline-block;
position: relative;
margin-left: 4px;
vertical-align: -13px;
`;

export const Writing_List_footer_search_input = styled.input`
margin: 0;
font-family: inherit;
-webkit-appearance: none;
float: left;
width: 186px;
height: 34px;
padding: 0 2px 0 12px;
border: 1px solid #d9dddf;
border-radius: 2px;
color: #000;
font-size: 13px;
line-height: 34px;
outline: none;
`;

export const Writing_List_footer_search_button_ui = styled.button`
margin: 0;
vertical-align: top;
cursor: pointer;
font-family: inherit;
float: left;
background: #fff;
height: 36px;
margin-left: -3px;
padding: 0 15px;
border: 1px solid #4279ff;
border-radius: 2px;
color: #4279ff;
font-size: 13px;
text-align: center;
line-height: 34px;
outline: none;
transition: all .2s ease;
`;

export const Writing_List_footer_search_button_span = styled.span`
cursor: pointer;
color: #4279ff;
font-size: 13px;
text-align: center;
line-height: 34px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Writing_get_bs_contents_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 932px;
min-height: 900px;
margin-left: 252px;
padding: 0 0 0 0;
z-index: 4;
`;

export const Writing_get_bs_contents_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding: 25px 0 0 48px;
transition: all .2s ease;
z-index: 10;
margin-top: 62px;
`;

export const Writing_get_bs_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
min-height: 0px;
`;

export const Writing_get_bs_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_get_bs_div_3 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
min-height: 0px;
`;

export const Writing_get_bs_div_4 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_get_bs_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Writing_get_bs_header_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding: 21px 0 16px;
border-bottom: 1px solid #eee;
`;

export const Writing_get_bs_header_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_get_bs_header_a = styled.a`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
display: inline-block;
margin-bottom: 18px;
color: #888;
font-size: 16px;
`;

export const Writing_get_bs_header_h2 = styled.h2`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: #000;
font-size: 26px;
font-weight: bold;
word-break: break-word;
font-family: "NGBS", applegothic;
word-wrap: break-word;
overflow: hidden;
`;

export const Writing_get_bs_header_user_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
position: relative;
margin-top: 16px;
`;

export const Writing_get_bs_header_user_img_div = styled.div`
color: #555;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
flex: 1 0 auto;
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
width: 40px;
height: 40px;
border-radius: 50%;
text-align: left;
font: 0/0 a;
cursor: pointer;
`;

export const Writing_get_bs_header_user_img = styled.img`
color: #555;
text-align: left;
font: 0/0 a;
cursor: pointer;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
width: 40px;
height: 40px;
border-radius: 50%;
`;

export const Writing_get_bs_header_user_box_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: flex;
align-items: center;
flex: 0 1 auto;
position: relative;
width: 100%;
padding-left: 11px;
vertical-align: middle;
`;

export const Writing_get_bs_header_user_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
line-height: 1.2;
color: #333;
font-size: 14px;
font-weight: bold;
font-family: "NGBS", verdana, applegothic, sans-serif;
`;

export const Writing_get_bs_header_user_p = styled.p`
cursor: pointer;
line-height: 1.2;
color: #333;
font-size: 14px;
font-weight: bold;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
position: relative;
font-family: "NG";
`;

export const Writing_get_bs_header_user_em = styled.em`
cursor: pointer;
line-height: 1.2;
font-size: 14px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
color: #aaa;
`;

export const Writing_get_bs_header_user_date_span = styled.span`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
line-height: 1.2;
position: relative;
margin-left: 20px;
color: #666;
font-size: 14px;
`;

export const Writing_get_bs_header_user_query_span = styled.span`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
line-height: 1.2;
position: relative;
margin-left: 20px;
color: #666;
font-size: 14px;
`;
export const Writing_get_bs_header_user_query_em = styled.em`
line-height: 1.2;
font-size: 14px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
margin-right: 4px;
color: #aaa;
`;


export const Writing_get_bs_header_user_right_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
transition: all .2s ease;
position: absolute;
bottom: 20px;
right: 0;
width: 32px;
height: 32px;
opacity: 1;
visibility: visible;
`;

export const Writing_get_header_right_button_span = styled.span`
cursor: pointer;
visibility: visible;
padding: 0;
border: 0;
vertical-align: baseline;
position: relative;
display: block;
font: 0/0 a;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(170,170,170,0.999)' stroke='' viewBox='0 0 4 20'%3e%3cpath d='M2 12c-1.105 0-2-.896-2-2 0-1.105.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zm0-8C.895 4 0 3.105 0 2s.895-2 2-2c1.104 0 2 .895 2 2s-.896 2-2 2zm0 12c1.104 0 2 .895 2 2 0 1.104-.896 2-2 2-1.105 0-2-.896-2-2 0-1.105.895-2 2-2z'/%3e%3c/svg%3e") 0 0 no-repeat;
margin: 0 auto;
width: 4px;
height: 20px;
`;

export const Writing_get_body_main_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin-bottom: 16px;
padding: 37px 0 40px 0;
border-bottom: 1px solid #eee;
`;

export const Writing_get_body_main_div = styled.div`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
overflow: hidden;
color: #000;
font-size: 15px;
word-wrap: break-word;
word-break: break-word;
line-height: 1.6;
transform: translate3d(0, 0, 0);
`;

export const Writing_get_body_main_p = styled.p`
color: #000;
font-size: 15px;
word-wrap: break-word;
word-break: break-word;
line-height: 1.6;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
`;

export const Writing_get_body_listbutton_div = styled.div`
color: #555;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font: 0/0 a;
`;

export const Writing_get_body_listbutton_div_2 = styled.div`
color: #555;
font: 0/0 a;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
position: relative;
`;

export const Writing_get_body_listbutton_button = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
min-width: 60px;
height: 36px;
border: 1px solid #d9dddf;
border-radius: 3px;
color: #333;
font-size: 13px;
line-height: 34px;
text-align: center;
transition: all .2s ease;
padding: 0 15px;
margin-left: 0;
`

export  const Writing_get_body_listbutton_span = styled.span`
cursor: pointer;
color: #333;
text-align: center;
margin: 0;
padding: 0;
border: 0;
position: relative;
display: inline-block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(170,170,170,0.999)' stroke='' viewBox='0 0 18 19'%3e%3cpath d='M17.41 10.96a2.46 2.46 0 01-.28 2.66 2.26 2.26 0 01-.85 2.93 2 2 0 01-1.93 2.43H9.73a.63.63 0 01-.63-.63c0-.35.28-.64.63-.64h4.62c.4 0 .73-.33.73-.74 0-.15-.04-.3-.13-.42a.65.65 0 01-.05-.6c.08-.2.25-.34.46-.38a.95.95 0 00.76-.94c0-.25-.09-.48-.26-.66a.64.64 0 01.09-.95 1.17 1.17 0 00.18-1.74.65.65 0 01-.16-.51.63.63 0 01.28-.46c.31-.2.5-.53.5-.9 0-.58-.47-1.06-1.05-1.06h-4.37a.62.62 0 01-.54-.32.65.65 0 010-.63c.9-1.67.13-3.71-.57-4.6-.38-.5-1.05-.63-1.34-.5-.05.03-.09.04-.06.2a13.3 13.3 0 010 3.16.69.69 0 01-.08.24L6.73 9.46c-.17.3-.57.4-.85.23a.64.64 0 01-.23-.87L7.6 5.38c.05-.44.15-1.7 0-2.67-.12-.7.18-1.3.78-1.57.85-.4 2.15.01 2.81.86a6.2 6.2 0 011.07 5.08h3.44A2.32 2.32 0 0118 9.4c0 .58-.21 1.13-.59 1.55zM5.65 14.73c0 .7-.23 1.28-.69 1.75-.51.52-1.23.79-2.13.79-.92 0-1.64-.27-2.15-.8A2.4 2.4 0 010 14.73v-4.7c0-.18.07-.34.2-.45a.7.7 0 01.8-.03c.17.12.25.29.25.48v4.7c0 .4.11.7.35.96.28.3.7.44 1.24.44s.95-.15 1.22-.44c.24-.24.36-.56.36-.95v-3.79c0-.17.07-.33.21-.44.3-.18.59-.15.8.02a.5.5 0 01.23.44v3.76zm2.32-4.1h2.16c.7 0 1.25.2 1.67.6.4.4.59 1.1.59 1.63 0 .56-.2 1.33-.6 1.7-.4.41-.97.62-1.66.62H8v2.39c0 .19-.08.35-.22.46a.65.65 0 01-.4.14.65.65 0 01-.41-.13.59.59 0 01-.22-.47v-5.82c0-.3.1-.58.31-.78.23-.23.54-.34.91-.34zm.02 1.15v2.27h2.07c.35 0 .62-.09.82-.28.12-.12.25-.58.25-.9 0-.3-.12-.7-.25-.82-.2-.2-.47-.29-.82-.29H8.07c-.05 0-.07.01-.08.02z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 18px;
height: 19px;
margin-right: 6px;
font: 0/0 a;
vertical-align: 14px;
`;

export const Writing_get_body_listbutton_em = styled.em`
cursor: pointer;
font-size: 13px;
line-height: 34px;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
position: relative;
color: #333;
`;

export const Writing_get_body_listbutton_2 = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
padding: 0 16px;
min-width: 60px;
height: 36px;
border: 1px solid #d9dddf;
border-radius: 3px;
color: #333;
font-size: 13px;
line-height: 34px;
text-align: center;
transition: all .2s ease;
margin-left: 8px;

`;

export const Writing_get_body_list2_span = styled.span`
cursor: pointer;
color: #333;
font-size: 13px;
line-height: 34px;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Writing_get_footer_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin-bottom: 60px;
padding-bottom: 0;
border-bottom: 0;
`;

export const Writing_get_footer_comments_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
margin-top: 38px;
height: 36px;
color: #555;
font-size: 18px;
line-height: 34px;
`;

export const Writing_get_footer_comments_span = styled.span`
cursor: pointer;
color: #555;
font-size: 18px;
line-height: 34px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding-right: 22px;
`;

export const Writing_get_footer_comment_count_em = styled.em`
cursor: pointer;
font-size: 18px;
line-height: 34px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
text-decoration: none;
color: #4279ff;
font-weight: bold;
`;

export const Writing_get_footer_comments_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Writing_get_footer_comments_form = styled.form`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_get_footer_comments_input_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-top: 15px;
padding: 0 0 0 68px;
`;

export const Writing_get_footer_comments_img_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 0;
left: 0;
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
width: 48px;
height: 48px;
border-radius: 50%;
`;

export const Writing_get_footer_comments_img = styled.img`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
width: 48px;
height: 48px;
border-radius: 50%;
`;

export const Writing_get_footer_comments_area_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
background: #fff;
padding: 14px 20px 16px;
border: 1px solid #d9dddf;
`;

export const Writing_get_footer_comments_area_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_get_footer_comments_textarea = styled.textarea`
color: inherit;
font-family: inherit;
text-decoration: none;
display: none;
`;

export const Writing_get_footer_comments_text_div = styled.input`
-webkit-user-modify: read-write;
-webkit-line-break: after-white-space;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
background: transparent;
padding-bottom: 21px;
color: #333;
font-size: 14px;
outline: none;
line-height: 21px;
cursor: text;
word-break: break-word;
word-wrap: break-word;
overflow: hidden;
`;

export const Writing_get_footer_comments_text_button_div = styled.div`
color: #555;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
width: 100%;
margin-top: 18px;
font: unset;
`;

export const Writing_get_footer_comments_text_button = styled.button`
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
padding: 0 16px;
min-width: 60px;
border: 1px solid #d9dddf;
border-radius: 3px;
font-size: 13px;
text-align: center;
transition: all .2s ease;
font-weight: bold;
background: #fff;
border-color: #d9dddf !important;
color: #aaa !important;
margin-left: 8px;
height: 32px;
line-height: 30px;

text-align: right;
`;

export const Writing_get_footer_comments_text_span = styled.span`
cursor: pointer;
font-size: 13px;
text-align: center;
font-weight: bold;
color: #aaa !important;
line-height: 30px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Writing_get_footer_right_div = styled.div`
color: #555;
font: unset;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: right;
position: relative;
text-align: right;
`;

export const Writing_get_body_right_button_div = styled.div`
color: #555;
font: 0/0 a;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: right;
position: relative;
text-align: right;
`;

export const Writing_get_footer_comments_list_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Writing_get_footer_comments_list_ul = styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
margin-top: 20px;
`;

export const Writing_get_footer_comments_list_li_1 = styled.li`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
float: left;
`;


export const Writing_get_footer_comments_list_button_1 = styled.button`
list-style: none;
background-color: transparent;
margin: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
height: 36px;
padding: 0 22px 0 0;
line-height: 34px;
`;

export const Writing_get_footer_comments_list_span_1 =styled.span`
list-style: none;
cursor: pointer;
line-height: 34px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
font-size: 14px;
padding-left: 10px;
color: #333;
font-weight: bold;
`;

export const Writing_get_footer_comments_list_ul_2 = styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
background: #f8fafc;
margin-top: 7px;
`;

export const Writing_footer_comments_li = styled.li`
color: #555;
font-size: 12px;
line-height: 1.2;
margin-top: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
position: relative;
padding: 30px 28px 28px 96px;
border-bottom: 1px solid #eee;
`;

export const Comments_profile_img_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 29px;
left: 28px;
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
width: 48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
`;

export const Comments_profile_img = styled.img`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
cursor: pointer;
margin: 0;
padding: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
width: 48px;
height: 48px;
border-radius: 50%;
border: 1px solid rgba(0,0,0,0.1);
`;

export const Comments_profile_user_id_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
z-index: 5;
`;

export const Comments_profile_user_id_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
position: relative;
`;

export  const Commetns_profile_user_id_div_3 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: flex;
align-items: center;
flex: 0 1 auto;
position: relative;
width: 100%;
vertical-align: middle;
padding-left: 0;
`;

export const Comments_profile_user_id_button = styled.button`
list-style: none;
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
line-height: 1.2;
color: #333;
font-weight: bold;
font-family: "NGBS", verdana, applegothic, sans-serif;
font-size: 13px;
`;

export const Comments_profile_user_id_p = styled.p`
list-style: none;
cursor: pointer;
line-height: 1.2;
color: #333;
font-weight: bold;
font-size: 13px;

margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
position: relative;
font-family: "NG";
`;

export const Comments_profile_user_id_em = styled.em`
list-style: none;
cursor: pointer;
line-height: 1.2;
font-size: 13px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
color: #aaa;
`;

export const Comments_profile_date_span = styled.span`
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
line-height: 1.2;
position: relative;
margin-left: 20px;
color: #666;
font-size: 13px;
`;

export const Comments_content_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
margin-top: 11px;
`;

export const Comments_content_p = styled.p`
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
color: #666;
font-size: 14px;
line-height: 21px;
word-break: break-word;
word-wrap: break-word;
overflow: hidden;
`;

export const Comments_up_button = styled.button`
list-style: none;
background-color: transparent;
margin: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
height: 32px;
line-height: 30px;
padding: 0;
`;

export const Comments_up_span = styled.span`
list-style: none;
cursor: pointer;
margin: 0;
padding: 0;
border: 0;
position: relative;
display: inline-block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(170,170,170,0.999)' stroke='' viewBox='0 0 18 19'%3e%3cpath d='M17.41 10.96a2.46 2.46 0 01-.28 2.66 2.26 2.26 0 01-.85 2.93 2 2 0 01-1.93 2.43H9.73a.63.63 0 01-.63-.63c0-.35.28-.64.63-.64h4.62c.4 0 .73-.33.73-.74 0-.15-.04-.3-.13-.42a.65.65 0 01-.05-.6c.08-.2.25-.34.46-.38a.95.95 0 00.76-.94c0-.25-.09-.48-.26-.66a.64.64 0 01.09-.95 1.17 1.17 0 00.18-1.74.65.65 0 01-.16-.51.63.63 0 01.28-.46c.31-.2.5-.53.5-.9 0-.58-.47-1.06-1.05-1.06h-4.37a.62.62 0 01-.54-.32.65.65 0 010-.63c.9-1.67.13-3.71-.57-4.6-.38-.5-1.05-.63-1.34-.5-.05.03-.09.04-.06.2a13.3 13.3 0 010 3.16.69.69 0 01-.08.24L6.73 9.46c-.17.3-.57.4-.85.23a.64.64 0 01-.23-.87L7.6 5.38c.05-.44.15-1.7 0-2.67-.12-.7.18-1.3.78-1.57.85-.4 2.15.01 2.81.86a6.2 6.2 0 011.07 5.08h3.44A2.32 2.32 0 0118 9.4c0 .58-.21 1.13-.59 1.55zM5.65 14.73c0 .7-.23 1.28-.69 1.75-.51.52-1.23.79-2.13.79-.92 0-1.64-.27-2.15-.8A2.4 2.4 0 010 14.73v-4.7c0-.18.07-.34.2-.45a.7.7 0 01.8-.03c.17.12.25.29.25.48v4.7c0 .4.11.7.35.96.28.3.7.44 1.24.44s.95-.15 1.22-.44c.24-.24.36-.56.36-.95v-3.79c0-.17.07-.33.21-.44.3-.18.59-.15.8.02a.5.5 0 01.23.44v3.76zm2.32-4.1h2.16c.7 0 1.25.2 1.67.6.4.4.59 1.1.59 1.63 0 .56-.2 1.33-.6 1.7-.4.41-.97.62-1.66.62H8v2.39c0 .19-.08.35-.22.46a.65.65 0 01-.4.14.65.65 0 01-.41-.13.59.59 0 01-.22-.47v-5.82c0-.3.1-.58.31-.78.23-.23.54-.34.91-.34zm.02 1.15v2.27h2.07c.35 0 .62-.09.82-.28.12-.12.25-.58.25-.9 0-.3-.12-.7-.25-.82-.2-.2-.47-.29-.82-.29H8.07c-.05 0-.07.01-.08.02z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 18px;
height: 19px;
margin-right: 6px;
font: 0/0 a;
vertical-align: 15px;
`;

export const Comments_up_em = styled.em`
list-style: none;
cursor: pointer;
line-height: 30px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
position: relative;
color: #333;
`;

export const User_info_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;


export const User_info_full_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
position: fixed;
top: 65px;
background: #fcfdfd;
width: 932px;
padding: 13px 31px 13px 48px;
border: 1px solid #ebecec;
border-bottom-right-radius: 8px;
border-width: 0 1px 1px 0;
box-sizing: border-box;
z-index: 10;
flex-wrap: wrap;
`;

export const User_info_second_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
-webkit-box-flex: 1;
flex: 1;
`;

export const User_info_title_area_div =styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const User_info_title_h4 = styled.h4`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline;
color: #000;
letter-spacing: -.1px;
font-size: 21px;
`;

export const User_info_title_a =styled.a`
line-height: 1.2;
letter-spacing: -.1px;
font-size: 21px;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
`;

export const User_info_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: inline-block;
position: relative;
top: 2px;
margin-left: 4px;
vertical-align: text-bottom;
`;

export const User_info_div_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
position: relative;
overflow: visible;
color: transparent;
`;

export const User_info_div_span = styled.span`
cursor: pointer;
color: transparent;
margin: 0;
padding: 0;
vertical-align: baseline;
position: relative;
display: block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(51,51,51,0.999)' stroke='' viewBox='0 0 2 12'%3e%3cpath d='M0 12V4h2v8H0zM0 0h2v2H0V0z'/%3e%3c/svg%3e") center no-repeat;
background-size: 2px 12px;
width: 23px;
height: 23px;
border: solid 1px #a0a0a0;
border-radius: 50%;
font: 0/0 a;
`;

export const User_info_body_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
margin-left: 40px;
-webkit-box-flex: 0;
flex: 0 0 auto;
`;

export const User_info_body_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const User_info_body_2_button = styled.button`
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
transition: all .2s ease;
float: left;
background: #fff;
height: 36px;
border: 1px solid #eceff1;
border-radius: 4px;
padding: 0 15px;
position: relative;
margin-left: 0;
`;

export const User_info_body_2_em = styled.em`
cursor: pointer;
margin-top: 0;
padding: 0;
border: 0;
text-decoration: none;
position: relative;
display: inline-block;
font: 0/0 a;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(34,34,34,0.999)' stroke='' viewBox='0 0 20 18'%3e%3cpath fill-rule='evenodd' d='M10.009 1.337l2.129 4.469.282.592.631.094 4.758.717-3.443 3.476-.457.461.108.651.813 4.91-4.257-2.32-.564-.307-.564.307-4.258 2.32.814-4.91.108-.651-.457-.461-3.443-3.476 4.759-.717.631-.094.282-.592 2.128-4.469m7.837 5.834v.001-.001M10.009.049c-.452 0-.864.265-1.064.685L6.794 5.25l-4.81.724c-.447.067-.819.391-.958.835-.14.446-.023.934.301 1.262l3.479 3.513-.822 4.963c-.065.395.06.792.326 1.071.045.047.094.091.147.131.029.022.059.042.09.061.186.116.396.174.607.174.144 0 .288-.028.426-.082.043-.017.085-.037.126-.059l4.303-2.345 4.302 2.345c.174.094.364.141.553.141.246 0 .49-.079.697-.235.366-.275.548-.74.472-1.202l-.822-4.963 3.481-3.513c.324-.328.44-.816.301-1.262-.14-.444-.512-.768-.958-.835l-4.81-.724L11.073.734c-.2-.42-.613-.685-1.064-.685z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 16px;
height: 15px;
margin-right: 6px;
vertical-align: 12px;
position: absolute;
  top: 50%;

  transform: translate(-50%, -50%);
`;

export const User_info_body_2_span =styled.span`
cursor: pointer;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
font-size: 12px;
font-weight: bold; 
margin-left: 10px;
`;
export const User_info_body_3_button = styled.button`
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
transition: all .2s ease;
float: left;
background: #fff;
height: 36px;
margin-left: 6px;
border: 1px solid #eceff1;
border-radius: 4px;
padding: 0 15px;
`;

export const User_info_body_3_em = styled.em`
cursor: pointer;
margin: 0;
padding: 0;
border: 0;
text-decoration: none;
position: relative;
display: inline-block;
font: 0/0 a;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(34,34,34,0.999)' stroke='' viewBox='0 0 20 17'%3e%3cpath fill-rule='evenodd' d='M15.468 10.85c-.174 0-.353-.016-.536-.043-.621 3.526-3.348 6.186-7.122 6.186-4.095 0-7.465-3.133-7.793-7.105H-.01V-.011h15.077v3.036c.135-.016.27-.029.401-.029 2.187 0 3.966 1.762 3.966 3.927s-1.779 3.927-3.966 3.927zM14.017.995H1.009v7.699h.029c-.016.184-.029.369-.029.557 0 3.616 2.961 6.704 6.614 6.704 3.652 0 6.394-3.088 6.394-6.704 0-.188-.013-.373-.028-.557h.028V.995zm1.451 3.103c-.14 0-.268.035-.401.058v4.538l-.007.281c.004.092.007.184.007.276 0 .123-.011.243-.016.365.136.069.274.132.417.132 1.488 0 2.852-1.351 2.852-2.825 0-1.474-1.364-2.825-2.852-2.825zm-5.099 7.696l-2.842-1.479-2.841 1.479.542-3.133-2.299-2.219 3.177-.457 1.421-2.85 1.421 2.85 3.177.457-2.298 2.219.542 3.133z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 18px;
height: 16px;
margin-right: 4px;
vertical-align: 11px;
position: absolute;
  top: 50%;

  transform: translate(-50%, -50%);
`;

export const User_info_body_3_span = styled.span`
cursor: pointer;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
font-size: 12px;
font-weight: bold;
margin-left: 13px;
`

export const User_info_body_4_button = styled.button`
margin: 0;
padding: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
transition: all .2s ease;
float: left;
background: #fff;
height: 36px;
margin-left: 6px;
border: 1px solid #eceff1;
border-radius: 4px;
width: 36px;
`;

export const User_info_body_4_em = styled.em`
cursor: pointer;
margin: 0;
padding: 0;
border: 0;
text-decoration: none;
position: relative;
display: inline-block;
font: 0/0 a;
vertical-align: 11px;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(34,34,34,0.999)' stroke='' viewBox='0 0 17 20'%3e%3cpath fill-rule='evenodd' d='M9.825 16.509c.007.077.015.167.026.265.044.388.122.775.243 1.128.147.429.344.776.587 1.014.246.24.246.63 0 .87-.246.241-.644.241-.89 0-.398-.389-.688-.898-.891-1.495-.151-.444-.248-.913-.3-1.38-.013-.109-.022-.21-.028-.3-.029.001-.056.001-.085.001-4.694 0-8.499-3.722-8.499-8.311 0-4.59 3.805-8.312 8.499-8.312 4.694 0 8.499 3.722 8.499 8.312 0 4.144-3.102 7.58-7.161 8.208zM8.487 1.104c-4.064 0-7.358 3.222-7.358 7.197 0 3.974 3.294 7.196 7.358 7.196 4.065 0 7.359-3.222 7.359-7.196 0-3.975-3.294-7.197-7.359-7.197zm2.693 8.341c-.073.071-.107.172-.089.272l.471 2.692c.044.252-.225.444-.456.325l-2.472-1.27c-.092-.048-.201-.048-.293 0l-2.473 1.27c-.231.119-.501-.073-.456-.325l.473-2.692c.017-.1-.018-.201-.092-.272l-2-1.906c-.187-.179-.084-.489.174-.526l2.765-.393c.102-.014.19-.077.237-.168l1.235-2.449c.117-.229.45-.229.565 0l1.236 2.449c.046.091.135.154.237.168l2.765.393c.257.037.361.347.174.526L11.18 9.445z'/%3e%3c/svg%3e") 50% no-repeat;
background-size: 100% 100%;
width: 15px;
height: 18px;
position: absolute;
  top: 50%;

  transform: translate(-50%, -50%);
`;

export const User_info_body_5_button = styled.button`
margin: 0;
padding: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
transition: all .2s ease;
float: left;
background: #fff;
height: 36px;
margin-left: 6px;
border: 1px solid #eceff1;
border-radius: 4px;
width: 36px;
`;

export const User_info_body_5_em = styled.em`
cursor: pointer;
margin: 0;
padding: 0;
border: 0;
text-decoration: none;
position: relative;
display: inline-block;
font: 0/0 a;
vertical-align: 11px;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(34,34,34,0.999)' stroke='' viewBox='0 0 17 20'%3e%3cpath fill-rule='evenodd' d='M9.88 16.349l1.096 1.669c.261.396.28.899.044 1.313-.234.413-.68.669-1.164.669H7.351c-.486 0-.933-.256-1.167-.669-.233-.412-.217-.917.045-1.313l1.078-1.642C3.189 15.811.009 12.381.009 8.233.009 3.693 3.818 0 8.5 0c4.682 0 8.49 3.693 8.49 8.233 0 4.084-3.083 7.472-7.11 8.116zm-2.914 2.124c-.089.135-.096.309-.015.451.079.14.232.229.4.229h2.505c.165 0 .318-.089.399-.229.08-.142.073-.316-.016-.451l-1.252-1.907c-.033-.05-.081-.083-.129-.117-.12.005-.238.018-.358.018-.055 0-.109-.006-.163-.008-.043.032-.088.063-.119.109l-1.252 1.905zM8.5.89C4.323.89.925 4.183.925 8.233c0 4.015 3.342 7.285 7.469 7.34.116-.016.234-.017.353-.007 4.061-.127 7.327-3.364 7.327-7.333C16.074 4.183 12.676.89 8.5.89zm4.72 10.068c-.24.305-.529.542-.867.712-.337.17-.708.255-1.112.255h-1.65c-.174 0-.311-.057-.412-.172-.101-.115-.151-.27-.151-.468V5.7c0-.198.05-.353.151-.468.101-.115.238-.172.412-.172h1.65c.404 0 .775.085 1.112.255.338.169.627.405.867.705.24.3.428.662.564 1.085.136.423.204.883.204 1.381s-.068.959-.204 1.382c-.136.422-.324.786-.564 1.09zm-.486-3.418c-.083-.282-.2-.521-.349-.715-.15-.195-.328-.343-.533-.447-.205-.103-.426-.154-.663-.154h-1.034v4.537h1.034c.237 0 .458-.052.663-.155.205-.103.383-.254.533-.453.149-.198.266-.438.349-.72.084-.282.126-.597.126-.947 0-.349-.042-.664-.126-.946zm-4.662 4.391c-.128.059-.264.065-.407.018-.143-.048-.249-.166-.318-.357l-.449-1.318H4.517l-.449 1.318c-.07.191-.176.309-.319.357-.143.047-.278.041-.407-.018-.129-.06-.232-.165-.308-.315-.077-.151-.08-.321-.01-.511L4.903 5.63c.056-.174.157-.323.303-.446S5.519 5 5.707 5s.355.061.501.184c.146.123.247.272.303.446l1.88 5.475c.069.19.066.36-.011.511-.077.15-.179.255-.308.315zM5.749 6.913l-.042-.214-.042.214-.751 2.197h1.587l-.752-2.197z'/%3e%3c/svg%3e") 50% no-repeat;
background-size: 100% 100%;
width: 16px;
height: 18px;
position: absolute;
  top: 50%;

  transform: translate(-50%, -50%);
`;

export const User_info_body_6_button = styled.button`
margin: 0;
padding: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
transition: all .2s ease;
float: left;
background: #fff;
height: 36px;
margin-left: 6px;
border: 1px solid #eceff1;
border-radius: 4px;
width: 36px;
`;

export const Com_main_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Com_main_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
width: 932px;
border: 1px solid #ebecec;
border-bottom-right-radius: 8px;
border-width: 0 1px 1px 0;
box-sizing: border-box;
z-index: 10;
flex-wrap: wrap;
position: relative;
top: 0;
background: #fff;
padding: 25px 31px 18px 47px;
`;

export const Com_main_in_div =styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
-webkit-box-flex: 1;
flex: 1;
`;


export const Com_main_username_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Com_main_username_h2 = styled.h2`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline;
color: #000;
letter-spacing: -.1px;
font-size: 24px;
word-break: break-all;
`;

export const Com_main_username_a = styled.a`
line-height: 1.2;
letter-spacing: -.1px;
font-size: 24px;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
`;

export const Com_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 932px;
min-height: 900px;
margin-left: 252px;
padding: 0 0 0 0;
z-index: 4;
`

export const Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 932px;
min-height: 900px;
margin-left: 252px;
padding: 0 0 0 0;
z-index: 4;
`;

export const Com_main_usericon_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
position: relative;
top: 2px;
display: inline-block;
margin-left: 4px;
vertical-align: text-bottom;
`;

export const Com_main_usericon_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
position: relative;
overflow: visible;
color: transparent;
`;

export const Com_main_usericon_span = styled.span`
cursor: pointer;
color: transparent;
margin: 0;
padding: 0;
vertical-align: baseline;
position: relative;
display: block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(51,51,51,0.999)' stroke='' viewBox='0 0 2 12'%3e%3cpath d='M0 12V4h2v8H0zM0 0h2v2H0V0z'/%3e%3c/svg%3e") center no-repeat;
background-size: 2px 12px;
width: 23px;
height: 23px;
border: solid 1px #a0a0a0;
border-radius: 50%;
font: 0/0 a;
`;

export const Com_main_usermail_div = styled.div`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
position: relative;
margin-top: 16px;
color: #555;
font-size: 14px;
line-height: 1.4;
max-width: calc(100% - 55px);
display: inline-block;
vertical-align: 9px;
`;

export const Com_main_usermail_p = styled.p`
color: #555;
font-size: 14px;
line-height: 1.4;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
overflow: hidden;
text-overflow: ellipsis;
letter-spacing: -.25px;
`;

export const Com_main_usermail_span = styled.span`
color: #555;
font-size: 14px;
line-height: 1.4;
letter-spacing: -.25px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: -webkit-box;
overflow: hidden;
height: 18px;
text-overflow: ellipsis;
word-break: break-all;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
`;

export const Com_main_in_2_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
margin-left: 40px;
-webkit-box-flex: 0;
flex: 0 0 auto;
margin-top: -5px;
`;

export const Com_main_in_2_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
justify-content: flex-end;
`;

export const Com_main_one_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
overflow: initial;
height: 188px;
z-index: 11;
margin-left: 0px;
`;

export const Com_main_one_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
z-index: 11;
transition: all .1s ease;
height: 188px;
opacity: 1;
visibility: visible;
background-image: url("//stimg.afreecatv.com/SKIN/11165615/17765c5c18e68ddbc.jpg");
background-repeat: no-repeat;
background-size: 932px 187px;
`;

export const Com_main_body_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
transition: all .2s ease;
z-index: 10;
padding: 36px 0 0 48px;
margin-top: 66px;
`;

export const Com_maind_body_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Com_main_body_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Com_main_body_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Com_main_body_vod_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Com_main_body_vod_h3 = styled.h3`
line-height: 1.2;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
margin: 48px 0 20px;
color: #000;
font-size: 19px;
margin-top: 0;
`;

export const Com_main_body_vod_a = styled.a`
line-height: 1.2;
font-size: 19px;
margin: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
display: inline-block;
position: relative;
padding: 0 15px 0 25px;
`;

export const Com_main_body_vod_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Com_main_body_vod_1_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
position: relative;
margin-left: 0;
width: 589px;

&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  z-index: 1;
}

`;

export const Com_main_body_vod_1_a = styled.a`
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
display: block;
font-size: 0;
line-height: 0;
`;

export  const Com_main_body_vod_1_span = styled.span`
color: inherit;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
display: block;
position: relative;
overflow: hidden;
border-radius: 15px;
font: 0/0 a;
`;

export const Com_main_body_vod_1_img = styled.img`
color: inherit;
font: 0/0 a;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin: 0 auto;
height: 332px;

`;

export const Com_main_body_vod_1_time_span = styled.span`
font: 0/0 a;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
bottom: 12px;
right: 12px;
background: #1b1b1b;
height: 21px;
padding: 0 4px;
border-radius: 1px;
color: rgba(255,255,255,0.8);
font-size: 14px;
line-height: 21px;
text-align: center;
z-index: 2;
`;

export const Com_main_body_vod_1_title_div = styled.div`

color: inherit;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
font-size: 12px;
line-height: 1.2;
z-index: 5;
bottom: 28px;
left: 24px;
right: 24px;
`;

export const Com_main_body_vod_1_title_p = styled.p`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
overflow: hidden;
text-overflow: ellipsis;
color: #fff;
white-space: nowrap;
font-weight: bold;
font-size: 22px;
`;

export const Com_main_body_vod_1_titleU_div = styled.div`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
color: #fff;
font-size: 0;
line-height: 0;
opacity: .7;
margin-top: 12px;
`;

export const Com_main_body_vod_1_titleU_span = styled.span`
color: #fff;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
line-height: 1.2;
font-size: 14px;
`;

export const Com_main_body_vod_1_titleU_em = styled.em`
color: #fff;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-style: normal;
font-weight: normal;
text-decoration: none;
line-height: 1.2;
display: inline-block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255,255,255,0.999)' stroke='' viewBox='0 0 7 8'%3e%3cpath fill-rule='evenodd' d='M1 1l5 3-5 3V1m0-1C.83 0 .66.043.507.13.194.307 0 .64 0 1v6c0 .36.194.693.507.87C.66 7.957.83 8 1 8c.178 0 .356-.048.514-.143l5-2.999C6.816 4.677 7 4.351 7 4s-.184-.677-.486-.857l-5-3.001C1.356.048 1.178 0 1 0z'/%3e%3c/svg%3e") 0 0 no-repeat;
margin-right: 5px;
vertical-align: -2px;
font-size: 14px;
width: 10px;
height: 12px;
`;

export const Com_main_body_vod_1_titleU_2_span = styled.span`
color: #fff;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
line-height: 1.2;
position: relative;
margin-left: 10px;
padding-left: 10px;
font-size: 14px;
`;

export const Com_main_body_vod_2_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
position: relative;
margin-left: 16px;
width: 279px;
margin-bottom: 16px;
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  z-index: 1;
`;

export const Com_main_body_vod_2_a =styled.a`
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
display: block;
font-size: 0;
line-height: 0;
`;

export const Com_main_body_vod_2_span = styled.span`
color: inherit;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
display: block;
position: relative;
overflow: hidden;
border-radius: 15px;
font: 0/0 a;
`;


export const Com_main_body_vod_2_img = styled.img`
color: inherit;
font: 0/0 a;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin: 0 auto;
height: 157px;
`;

export const Com_main_body_vod_2_time = styled.span`
font: 0/0 a;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
bottom: 12px;
right: 12px;
background: #1b1b1b;
height: 21px;
padding: 0 4px;
border-radius: 1px;
color: rgba(255,255,255,0.8);
font-size: 14px;
line-height: 21px;
text-align: center;
z-index: 2;
`;

export const Com_main_body_vod_2_title_div = styled.div`
color: inherit;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
font-size: 12px;
line-height: 1.2;
z-index: 5;
bottom: 16px;
left: 16px;
right: 16px;
`;

export const Com_main_body_vod_2_title_p = styled.p`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
overflow: hidden;
text-overflow: ellipsis;
color: #fff;
white-space: nowrap;
font-weight: bold;
font-size: 15px;
`;

export const Com_main_body_vod_2_title_div_2 = styled.div`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
color: #fff;
font-size: 0;
line-height: 0;
opacity: .7;
margin-top: 12px;
`;

export const Com_main_body_vod_2_title_span = styled.span`
color: #fff;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
line-height: 1.2;
font-size: 12px;
`;

export const Com_main_body_vod_2_title_em = styled.em`
color: #fff;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-style: normal;
font-weight: normal;
text-decoration: none;
line-height: 1.2;
display: inline-block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255,255,255,0.999)' stroke='' viewBox='0 0 7 8'%3e%3cpath fill-rule='evenodd' d='M1 1l5 3-5 3V1m0-1C.83 0 .66.043.507.13.194.307 0 .64 0 1v6c0 .36.194.693.507.87C.66 7.957.83 8 1 8c.178 0 .356-.048.514-.143l5-2.999C6.816 4.677 7 4.351 7 4s-.184-.677-.486-.857l-5-3.001C1.356.048 1.178 0 1 0z'/%3e%3c/svg%3e") 0 0 no-repeat;
margin-right: 5px;
vertical-align: -2px;
font-size: 12px;
width: 8px;
height: 10px;
`;

export const Com_main_body_vod_2_title_2_span = styled.span`
color: #fff;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
line-height: 1.2;
position: relative;
margin-left: 10px;
padding-left: 10px;
font-size: 12px;
`;

export const Com_main_body_vod_3_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
position: relative;
margin-left: 16px;
width: 279px;
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  z-index: 1;
`;

export const Com_main_body_vod_3_a = styled.a`
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
display: block;
font-size: 0;
line-height: 0;
`;

export const Com_main_body_vod_3_span = styled.span`
color: inherit;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
display: block;
position: relative;
overflow: hidden;
border-radius: 15px;
font: 0/0 a;
`;

export const Com_main_body_vod_3_img = styled.img`
color: inherit;
font: 0/0 a;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin: 0 auto;
height: 157px;
`;

export const Com_main_body_writing_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Com_main_body_writing_h3 = styled.h3`
line-height: 1.2;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
margin: 48px 0 20px;
color: #000;
font-size: 19px;
`;

export const Com_main_body_writing_a = styled.a`
line-height: 1.2;
font-size: 19px;
margin: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
display: inline-block;
position: relative;
padding: 0 15px 0 25px;
`;

export const Com_main_body_writing_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Com_main_body_writing_div_3 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: table;
position: relative;
background: #f8fafd;
height: 192px;
border: 1px solid #e3e8ea;
table-layout: fixed;
float: left;
width: 434px;
box-sizing: border-box;
`;

export const Com_main_body_writing_div_4 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: table-cell;
width: 100%;
box-sizing: border-box;
padding: 0 16px 0 28px;
`;

export const Com_main_body_writing_username_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
min-height: 42px;
margin: 20px 0 0;
padding: 6px 0 0 50px;
`;

export const Com_main_body_writing_userimage_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 4px;
left: 0;
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
border-radius: 50%;
box-sizing: border-box;
cursor: pointer;
width: 40px;
height: 40px;
`;

export const Com_main_body_writing_userimage_img =styled.img`
color: #555;
font-size: 12px;
line-height: 1.2;
cursor: pointer;
margin: 0;
padding: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
border: 1px solid rgba(0,0,0,0.1);
border-radius: 50%;
width: 38px;
height: 38px;
`;

export const Com_main_body_writing_username_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
color: #333;
font-size: 14px;
font-weight: bold;
`;

export const Com_main_body_writing_username_span = styled.span`
cursor: pointer;
color: #333;
font-size: 14px;
font-weight: bold;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Com_main_body_writing_userdate_div = styled.div`
color: #555;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-size: 12px;
margin-top: 4px;
`;

export const Com_main_body_writing_user_view_em = styled.em`
color: #555;
line-height: 1.2;
font-size: 12px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
display: inline-block;
position: relative;
margin-left: 6px;
padding-left: 7px;
`;


export const Com_main_body_writing_title_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
margin-top: 22px;
`;

export const Com_main_body_writing_title_a =styled.a`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
display: block;
word-break: break-all;
`;

export const Com_main_body_writing_title_strong = styled.strong`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
height: 25px;
text-overflow: ellipsis;
color: #333;
font-size: 22px;
font-weight: bold;
white-space: normal;
-webkit-line-clamp: 1;
word-break: break-all;
`;

export const Com_main_body_writing_title_p = styled.p`
color: inherit;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
height: 2.8em;
margin-top: 12px;
font-size: 13px;
text-overflow: ellipsis;
white-space: normal;
-webkit-line-clamp: 2;
line-height: 1.4;
`;

export const Com_main_body_writing_image_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: table-cell;
box-sizing: border-box;
width: 176px;
`;

export const Com_main_body_writing_image_a = styled.a`
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
text-decoration: none;
position: absolute;
top: 16px;
right: 16px;
overflow: hidden;
background: #fff;
width: 160px;
height: 160px;
border-radius: 1px;
font: 0/0 a;
cursor: pointer;
`;

export const Com_main_body_writing_image_img = styled.img`
color: inherit;
font: 0/0 a;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 50%;
left: 0;
width: 160px;
transform: translateY(-50%);
`;

export const Com_main_body_writing_image_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
overflow: visible;
color: transparent;
position: absolute;
top: 7px;
right: 7px;
z-index: 5;
`;

export const Com_main_body_writing_image_span = styled.span`
cursor: pointer;
color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
position: relative;
display: block;
font: 0/0 a;
background: #4279ff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255,255,255,0.999)' stroke='' viewBox='0 0 15.5 15.5'%3e%3cpath d='M11.453 8.118l-1.524 6.097-3.43-3.429-5.716 3.429 3.43-5.716L.783 5.07 6.88 3.546 9.929.497l4.573 4.573-3.049 3.048z'/%3e%3c/svg%3e") center no-repeat;
background-size: 14px 14px;
width: 32px;
height: 32px;
border-radius: 8px;
`;

export const Com_main_body_writing_list_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: right;
width: 418px;
padding-top: 3px;
`;

export const Com_main_body_writing_list_ul = styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
`;

export const Com_main_body_writing_list_li = styled.li`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
display: table;
width: 100%;
padding: 12px 2px;
border-top: 1px solid #e9e9e9;
box-sizing: border-box;
`;

export const Com_main_body_writing_list_a = styled.a`
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
display: table-cell;
color: #333;
font-size: 14px;
word-break: break-all;
`;

export const Com_main_body_writing_list_li_div = styled.div`
line-height: 1.2;
list-style: none;
color: #333;
font-size: 14px;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: table;
width: auto;
`;

export const Com_main_body_writing_list_li_p = styled.p`
line-height: 1.2;
list-style: none;
color: #333;
font-size: 14px;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: table-cell;
`;

export const Com_main_body_writing_list_li_span = styled.span`
list-style: none;
color: #333;
font-size: 14px;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: -webkit-box;
overflow: hidden;
text-overflow: ellipsis;
height: 22px;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
line-height: 20px;
font-weight: bold;
`;

export const Com_main_body_writing_list_li_em = styled.em`
line-height: 1.2;
list-style: none;
font-size: 14px;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
display: table-cell;
padding-left: 1px;
color: #4279ff;
white-space: nowrap;
`;

export const Com_main_body_writing_date_div = styled.div`
color: #555;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-size: 12px;
display: table-cell;
padding-left: 36px;
text-align: right;
white-space: nowrap;
margin-top: 3px;
`;


export const Com_main_body_writing_show_em = styled.em`
color: #555;
line-height: 1.2;
list-style: none;
font-size: 12px;
text-align: right;
white-space: nowrap;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
display: inline-block;
position: relative;
margin-left: 6px;
padding-left: 7px;
`;

export const Replay_bs_content = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 932px;
min-height: 900px;
margin-left: 252px;
padding: 0 0 0 0;
z-index: 4;
`;

export const Reaply_main_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding: 25px 0 0 48px;
transition: all .2s ease;
z-index: 10;
margin-top: 66px;
`;

export const Replay_hegiht = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
min-height: 0px;
`;

export const Replay_vod_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Replay_title_vod = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Reaply_title_wrap = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Replay_title_h2 = styled.h2`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
color: #000;
font-size: 28px;
font-weight: normal;
word-break: break-all;
`;

export const Replay_title_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin-top: 20px;
padding-bottom: 28px;
border-bottom: 1px solid #d9dddf;
`;

export const Replay_title_span = styled.span`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
align-items: center;
float: left;
padding-top: 20px;
color: #666;
font-size: 13px;
`;

export const Replay_body_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin: 0;
padding: 16px 0 22px 0;
`;

export const Replay_body_ul = styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
-webkit-animation: list-up 0.4s ease;
width: 884px;
margin: 0;
`;

export const Replay_body_li = styled.li`
color: #555;
font-size: 12px;
line-height: 1.2;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
float: left;
position: relative;
width: 100%;
min-height: 135px;
margin: 0;
padding: 10px 0;
`;

export const Replay_thum_div = styled.div`
color: #555;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-size: 0;
line-height: 0;
position: absolute;
top: 10px;
left: 8px;
width: 240px;
height: 135px;
`;

export const Replay_thum_a = styled.a`
list-style: none;
font-size: 0;
line-height: 0;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
display: block;
`;

export const Replay_thum_img = styled.img`
list-style: none;
font-size: 0;
line-height: 0;
color: inherit;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
border-radius: 4px;
width: 240px;
height: 135px;
`;

export const Replay_thum_span = styled.span`
list-style: none;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
z-index: 5;
position: absolute;
bottom: 4px;
right: 4px;
background: rgba(34,34,34,0.9);
height: 18px;
padding: 0 4px;
color: #fff;
font-size: 12px;
line-height: 18px;
`;

export const Replay_thum_em = styled.em`
list-style: none;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
position: absolute;
top: 4px;
left: 4px;
height: 18px;
padding: 0 3px;
border-radius: 3px;
color: #fff;
font-size: 12px;
line-height: 18px;
z-index: 5;
background: #1987da;
`;

export const Replay_body_info = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
margin: 7px 0 0 268px;
padding-left: 0;
`;

export const Replay_body_p = styled.p`
list-style: none;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: -webkit-box;
overflow: hidden;
text-overflow: ellipsis;
margin: 0 24px 11px 0;
color: #333;
line-height: 19px;
-webkit-box-orient: vertical;
word-wrap: break-word;
word-break: break-all;
font-weight: bold;
max-height: 19px;
margin-right: 30px;
margin-bottom: 8px;
font-size: 19px;
-webkit-line-clamp: 1;
`;

export const Replay_body_a = styled.a`
list-style: none;
line-height: 19px;
word-wrap: break-word;
word-break: break-all;
font-weight: bold;
font-size: 19px;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
display: block;
`;

export const Replay_body_line = styled.div`
color: #555;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
font-size: 0;
line-height: 0;
`;

export const Replay_line_span =styled.span`
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
position: relative;
color: #888;
line-height: 1.2;
margin-left: 0;
font-size: 14px;
`;

export const Replay_view_em = styled.em`
list-style: none;
color: #888;
margin: 0;
padding: 0;
border: 0;
text-decoration: none;
display: inline-block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(170,170,170,0.999)' stroke='' viewBox='0 0 7 8'%3e%3cpath fill-rule='evenodd' d='M1 1l5 3-5 3V1m0-1C.83 0 .66.043.507.13.194.307 0 .64 0 1v6c0 .36.194.693.507.87C.66 7.957.83 8 1 8c.178 0 .356-.048.514-.143l5-2.999C6.816 4.677 7 4.351 7 4s-.184-.677-.486-.857l-5-3.001C1.356.048 1.178 0 1 0z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 8px;
height: 9px;
margin-right: 4px;
vertical-align: middle;
font: 0/0 a;
`;

export const Replay_comment_span = styled.span`
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-left: 8px;
color: #888;
line-height: 1.2;
font-size: 14px;
display: inline-block;
`;

export const Replay_comment_em = styled.em`
list-style: none;
color: #888;
line-height: 1.2;
font-size: 14px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-style: normal;
font-weight: normal;
text-decoration: none;
display: inline-block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(170,170,170,0.999)' stroke='' viewBox='0 0 14 13'%3e%3cpath fill-rule='evenodd' d='M11.77 10.929H8.793l-.785 1.534-.025.048-.032.044c-.205.284-.538.454-.891.454-.436 0-.819-.246-.998-.632l-.868-1.448H2.246c-1.233 0-2.235-.991-2.235-2.21v-6.52c0-1.219 1.002-2.21 2.235-2.21h9.524c1.233 0 2.236.991 2.236 2.21v6.52c0 1.219-1.003 2.21-2.236 2.21zm1.516-8.73c0-.828-.679-1.499-1.516-1.499H2.246C1.408.7.729 1.371.729 2.199v6.52c0 .828.679 1.499 1.517 1.499h3.358l1.102 1.837c.06.158.206.243.354.243.115 0 .23-.051.306-.157l.985-1.923h3.419c.837 0 1.516-.671 1.516-1.499v-6.52zm-2.302 1.976H3.032c-.199 0-.36-.159-.36-.356 0-.196.161-.355.36-.355h7.952c.198 0 .359.159.359.355 0 .197-.161.356-.359.356zM3.032 5.866h5.346c.199 0 .36.159.36.356 0 .196-.161.355-.36.355H3.032c-.199 0-.36-.159-.36-.355 0-.197.161-.356.36-.356z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 14px;
height: 13px;
margin-right: 4px;
vertical-align: -3px;
`;

export const Replay_date_span = styled.span`
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
position: relative;
margin-left: 8px;
color: #888;
line-height: 1.2;
font-size: 14px;
`;