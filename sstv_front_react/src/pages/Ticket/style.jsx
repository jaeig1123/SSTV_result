import styled from 'styled-components'


export const  TicketProduct_div =styled.div`
    width: 100%;
    padding: 0;
    margin: 67px auto 0;
    background-color: 1px soild #000;
`;

export const H2 = styled.h2`
position: relative;
font-size: 32px;
color: #000;
letter-spacing: -1px;
font-weight: bold;
margin: 0px 0 20px 0;
padding-top: 20px;
`;

export const H3 = styled.h3`
position: relative;
font-size: 20px;
color: #000;
letter-spacing: -1px;
font-weight: bold;
margin: 28px 0 10px 0;
`;
export const Blue = styled.span`
color: rgb(73, 120, 255);
font-weight:900;
`;
export const SPAN = styled.span`
display: block;
padding: 16px 0 8px;
line-height: 30px;
font-size: 15px;
color: #7a7a7a;
font-weight: normal;
`;
export const Ticket_Li = styled.li`
width: 101%;
list-style:none;
margin-bottom: 15px;
    &::after{
        content: "";
        clear: both;
        display: block;
    }
`;

export const Ticket_item_div= styled.div`
background: #4978ff;
border-radius: 4px 0 0 4px;
width: 254px;
height: 128px;
position: relative;
padding: 0 0 0 26px;
letter-spacing: -1px;
float: left;
word-break: break-all;
word-wrap: break-word;
`;
export const Ticket_item_div1= styled.div`
background: #38cb15;
border-radius: 4px 0 0 4px;
width: 254px;
height: 128px;
position: relative;
padding: 0 0 0 26px;
letter-spacing: -1px;
float: left;
word-break: break-all;
word-wrap: break-word;
`;
export const Ticket_name= styled.span`
    color: #fff;
    font-size: 23px;
    display: block;
    margin: 30px 0 1px 0;
    line-height: 100%;
`;
export const Ticket_date= styled.strong`
color: #fff;
font-size: 23px;
letter-spacing: -1px;
width: 165px;
padding-top: 2px;
display: block;
text-align:center;
word-wrap: break-word;
`;

export const Ticket_desc_div= styled.div`
position: relative;
border: 1px solid #e0e0e0;
float: left;
height: 128px;
background: #fff;
width: 679px;
border-radius: 0 4px 4px 0;
border-left: none;
`;

export const Ticket_desc_inner = styled.ul`
padding: 17px 33px 0 42px;
`;

export const Ticket_desc_li = styled.li`
position: relative;
width: 100%;
height: 82px;
margin: 0;
list-style:none;
`;
export const Desc_span = styled.span`
height: 100%;
    display: inline-block;
    vertical-align: middle;
`;
export const Ticket_desc_mt_div= styled.div`
display: inline-block;
width: 197px;
line-height: 100%;
font-size: 16px;
color: #4978ff;
vertical-align: -6px;
`;
export const Ticket_desc_strong = styled.strong`
padding-right: 5px;
font-size: 24px;
`;

export const Ticket_desc_price = styled.div`
display: inline-block;
zoom: 1;
vertical-align: -6px;
`;

export const Ticket_desc_price_p = styled.p`
font-size: 21px;
color: #222;
text-align: right;
letter-spacing: -1px !important;
white-space: nowrap;
`;
export const Ticket_desc_buy = styled.div`
position: absolute;
top: 21px;
right: 6px;
width: auto;
margin: 0;
font-size:0;

`;

export const Ticket_desc_buy1 = styled.div`
position: absolute;
top: 21px;
right: 6px;
width: auto;
margin: 0;

`;
export const Ticket_desc_buy_btn = styled.button`
width: 215px;
border: 1px solid #74b3ff;
color: #0072ff;
font-size: 14px;
height: 41px;
margin: 0 5px 0 4px;
border-radius: 2px;
word-wrap: break-word;
background-color:#fff;
cursor: pointer;

    &:hover {
        background-color: #0072ff; /* Change the button color when clicked */
        color:#fff;
    }
`;
export const Ticket_desc_buy_btn1 = styled.button`
width: 215px;
border: 1px solid #74b3ff;
color: #ffffff;
font-size: 14px;
height: 41px;
margin: 0 5px 0 4px;
border-radius: 2px;
word-wrap: break-word;
background: rgb(73, 120, 255);
cursor: pointer;
`;

export const Ticket_desc_use_btn = styled.button`
width: 108px;
border: 1px solid #74b3ff;

font-size: 14px;
height: 41px;
margin: 0 5px 0 4px;
border-radius: 2px;
word-wrap: break-word;
border-color: #38cb15;
background-color:#fff;
color: #38cb15;

cursor: pointer;
    &:hover {
        background-color: #38cb15; /* Change the button color when clicked */
        color:#fff;
    }

`;
export const Ticket_desc_use_btn1 = styled.button`
width: 108px;
border: 1px solid #74b3ff;
color: #ffffff;
font-size: 14px;
height: 41px;
margin: 0 5px 0 4px;
border-radius: 2px;
word-wrap: break-word;
background: rgb(73, 120, 255);
cursor: pointer;
`;

export  const Ticket_icon = styled.span`
    right: 40px;
    background: url(/img/img_icon.png) 0 0 no-repeat;
    width: 66px;
    height: 70px;
    color: rgb(255, 255, 255);
    display: block;
    position: absolute;
    top: 50px;
    left: 198px;
 
`;

export  const Ticket_icon1 = styled.span`
    right: 40px;
    background: url(/img/img_icon.png) -210px 0 no-repeat;
    width: 66px;
    height: 70px;
    color: rgb(255, 255, 255);
    display: block;
    position: absolute;
    top: 50px;
    left: 198px;
`;
//구매날짜
export const Ticket_list_date = styled.div`
display: inline-block;
zoom: 1;
width:16%;
`;
//사용시작
export  const Ticket_list_start = styled.div`
display: inline-block;
zoom: 1;
width:16%;
margin-left:23px;
`;
//사용만료
export  const Ticket_list_end = styled.div`
display: inline-block;
zoom: 1;
width:16%;
margin: 0 15px;
`;


export  const Ticket_list_date_st = styled.p`
font-size: 16px;
color: #222;

text-align: center;
letter-spacing: -1px !important;
white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export  const Ticket_list_date_ed = styled.p`
font-size: 16px;
color: #222;
text-align: center;
letter-spacing: -1px !important;
white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Ticket_list_date_p = styled.p`
font-size: 16px;
color: #222;
text-align: center;
letter-spacing: -1px !important;
white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

`;
export const Ticket_list_mt_p = styled.p`
font-size: 16px;
color: #222;
text-align: right;
letter-spacing: -1px !important;
white-space: nowrap;
overflow:hidden;
`;
export const Ticket_list_mt_div = styled.div`
    display:inline-block;
    zoom:1;
    width:13%;
    margin:0 20px;
    text-align:center;
`;
export const Ticket_desc_use = styled.div`
position: absolute;
top: -11px;
right: 6px;
width: auto;
margin: 0;
`;


// 구매하기 
export const Pop_ticket_div = styled.div`
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 999999;
    width: 508px;
    height:300px;
    background: #EFF3F9;
    margin-top: -323.229px;
    margin-left: -254px;
    display: block;

`;

export const Add_Ticket = styled.div`
position: relative;
padding: 32px 32px 45px;
background: #eff3f9;
font-family: 'NG', AppleGothic, Sans-serif;
line-height: 1em;
border: 1px solid #2c84ce;
font-size:12px;
`;

export const Add_at = styled.div`
font-family: 'NG', AppleGothic, Sans-serif;
line-height: 1em;
`;

export const Add_dt = styled.dt`
position: relative;
padding: 0;
font-size: 14px;
line-height: 100%;
`;

export const Add_strong = styled.strong`
font-family: 'NG', AppleGothic, Sans-serif;
    line-height: 1em;
`;

export const Add_dd = styled.dd`
overflow: hidden;
position: relative;
z-index: 11;
margin-top: 15px;
height: 52px;
border: 2px solid #bbb;
background: #fff;
margin-left:0;
padding: 0;
`;
 export const Add_txt_span = styled.span`
 position: absolute;
 top: 0;
 left: 13px;
 font-size: 16px;
 line-height: 52px;
 color: #111;
 letter-spacing: -1px;
 font-family: 'NGB';
 `;
 export const Add_coin_input = styled.input`
 position: absolute;
 top: 7px;
 right: 53px;
 width: 170px;
 padding: 0;
 text-align: right;
 color: #016cfe;
 border: none;
 outline: none;
 font-family: 'NGB';
 color: #2e2e33;
 font-size: 26px;
 background-color: #fff;
 transition: all 0.3s cubic-bezier(0.56, 0.12, 0.12, 0.98);
 `;
 export const Add_count = styled.span`
 position: absolute;
 top: 0;
 right: 36px;
 font-size: 16px;
 line-height: 53px;
 font-family: 'NGB';
 color: #111;
 transition: all 0.3s cubic-bezier(0.56, 0.12, 0.12, 0.98);
 `;
 export const Add_st_dl = styled.dl`
 margin-top: 19px;
 height: 16px;
 `;
 export const Add_st_dt = styled.dt`
 display: inline-block;
 color: #444;
 font-size: 14px;
 `;
 export const Add_st_dd = styled.dd`
 display: inline-block;
 color: #444;
 font-size: 14px;
 margin-left: 6px;
 `;
 export const Add_st_span = styled.span`
 display: inline-block;
 padding-right: 2px;
 font-family: 'NGB';
 font-size: 16px;
 color: #006bfe;
`;

 export const Add_btn_area = styled.div`
 padding-top: 35px;
 text-align: center;
 `;
 export const Btn_gift = styled.button`
 margin-right: 16px;
 color: #fff;
 background: #006bfe;
 display: inline-block;
    width: 132px;
    height: 42px;
    line-height: 42px;
    vertical-align: middle;
    font-size: 16px;
    outline: none;
    font-family: 'NGB', AppleGothic, Sans-serif;
    cursor: pointer;
    `;
 export const Btn_cancel = styled.button`
 display: inline-block;
 width: 132px;
 height: 42px;
 line-height: 42px;
 vertical-align: middle;
 font-size: 16px;
 outline: none;
 font-family: 'NGB', AppleGothic, Sans-serif;
 border: 1px solid #d3d4d5;
    color: #000;
    background: #fff;
    cursor: pointer;
 `;

 export const ReactModal__Overlay =styled.div`
    inset:0;
 `;
 export const Modal_div= styled.div`
 background-color:#000;
 opactiy:0.7;

 `;

 export const Add_txt_span_tkName = styled.span`
 position: absolute;
 top: 0;
 right: 40%;
 font-size: 24px;
 font-weight:900;
 line-height: 52px;
 color: #111;
 letter-spacing: -1px;
 font-family: 'NGB';
 `;
 export const Ticket_title_div = styled.div`
 width: 101%;
 list-style: none;
 margin-bottom: 15px;
 `;



 //구매날짜---------------------------------- 이부분2222222
export const Tab_sub_wrap =  styled.div`
    width: 960px;
    margin-top: 25px;
    position: relative;
  
`;
export const Subtab = styled.ul`
width: 100%;
overflow: hidden;
height:100px;
background-color: rgb(56, 203, 21);
`;

export const Tab_list = styled.li`
padding-bottom: 2px;
float: left;
width: 16%;
height:100px;
display:inline-block;
border: 1px solid #fff;
color:#fff;
font-size: 16px;
`;

export const Ticket_desc_inner1 = styled.div`
padding: 50px 33px 0 33px;
`;

export const Title_storng = styled.strong`
font-weight:900;
`;

export const Ticket_list_noTicket = styled.p`
    font-size: 24px;
    color:#000;
    font-weight:900;
    text-align:center;
`;


// 나의 이용권 보유갯수 사용중인지 확인

export const My_item_TK_area_div = styled.div`
    border-bottom: 1px solid #e5e5e5;
    background: #fff;
    height: 127px;
    padding: 0 !important;
`;
export const My_item_inner_div = styled.div`
    position: relative;
    width: 960px;
    margin: 0 auto;
    font-family: ng;
`;
export const My_Tk_div = styled.div`

`;
export const MY_Tk_span = styled.span`
background: url(img/img_icon.png) -350px 0 no-repeat;
text-indent:-9999px;
display: inline-block;
width:66px;
height:66px;
margin-right: 13px;
vertical-align: middle;
position: absolute;
top: 31px;
left: 0;
`;
export const My_item_div = styled.div`

`;
export const My_Tk_p = styled.p`
position: absolute;
top: 50px;
left: 84px;
font-size: 24px;
color: #222;
letter-spacing: -1px;
font-family: ng;
`;
export const My_Tk_ul = styled.ul`
position: absolute;
top: 15px;
right: 20px;
float:right;
`;
export const My_Tk_li = styled.li`
float: left;
padding: 15px 15px 15px 15px;
`;
export const My_Tk_strong = styled.strong`
display: block;
color: #0e54ff;
font-size: 16px;
font-family: ngb;
text-align: center;
`;

export const MY_TK_a = styled.a`
padding-right: 10px;
    color: #888;

`;

export const MY_TK_P = styled.p`
font-size: 14px;
    color: #888;
    text-align: center;
    font-family: ng;
    margin-bottom: 5px;
    letter-spacing: -1px;
`;

export const Ticket_Area = styled.div`
    margin: 0 auto;
    width:960px;
    background: #f5f5f5;
`;
export const Ticket_wrap = styled.div`
width:100%;
background: #f5f5f5;
`;