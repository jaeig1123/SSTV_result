import styled from 'styled-components'



export const PurchaseList_div = styled.div`
position:relactive;
width: 960px;
padding: 0;
margin: 109px auto 0 auto;
background: none;
`;

export const Sub_contents =styled.div`
width: 745px;
padding-top: 0px;
float: left;
text-align: left;
padding-bottom: 40px;
min-height: 100px;
`;

export const Purchase_table =styled.table`
width: 100%;
border-top: 2px solid #62a4be;
border-bottom: 1px solid gray;
`;

export const Colgroup = styled.colgroup`
    
`;
export const Col = styled.col`
width: 16%;
`;
export const Purchase_button = styled.button`
margin: 20px auto;
display: block;
width: 100px;
border: 1px solid rgb(116, 179, 255);
color: rgb(0, 114, 255);
font-size: 14px;
height: 41px;
border-radius: 2px;
overflow-wrap: break-word;
background-color: rgb(255, 255, 255);
cursor: pointer;
    &:hover {
        background-color: #0072ff; /* Change the button color when clicked */
        color:#fff;
    }

`;


export const Table_thead = styled.thead``;
export const Table_tr = styled.tr`
    
`;
export const Table_th = styled.th`
font-family: '돋움';
text-decoration: none;
line-height: 16px;
margin: 0;
color: #62a4be;
font-size: 12px;
text-align: center;
padding: 8px 0 4px 0;
border-bottom: 1px solid #cbcbcb;
background: #f6f6f6 url('/images/item/myitem/bg_th.gif') right no-repeat;
`;
export const Table_td = styled.th`
    font-weight:600;
    font-size:16px;
    line-height:30px;
    text-align:center;
`;

export const Button_div = styled.div`
width: 100%;
position: relative;
margin: 0px auto;
`;

export const Table_title = styled.p`
width: 100%;
    text-align:right;
    font-weight:900;
    &::after{
        content: "";
        clear: both;
        display: block;
    }
`;
export const Table_title1 = styled.p`
display:inline-block;
float:right;
text-align:right;
margin:34px 0 10px;
font-weight:900;

    &::after{
        content: "";
        clear: both;
        display: block;
    }
    
`;
export const Table_title2 = styled.p`
position: absolute;
right: 600px;
top: 363px;
float:right;
margin: 34px 0px 10px;
font-weight: 900;

`;
export const Tabke_span = styled.span`
    display: inline-block;
    padding-right: 2px;
    font-family: NGB;
    font-size: 16px;
    color: rgb(0, 107, 254);
    text-align: right;
`;
export const Purchase_title = styled.h3`
    float:left;
    font-size:24px;
    // margin-bottom:30px;
`;

export const Purchase_notice_p = styled.p`
    margin-top:30px;
    text-align:left;
    font-size:18px;
    font-family: NGB;
    line-height:32px;
`;
export const Purchase_notice_H3 = styled.p`
    position:relative;
    margin-top:50px;
    font-weight: 900;
    font-family: NGB;
    color: #3333CC;
    text-align:left;
    font-size:32px;
    // &::before{
    //     content: "";
    //     position: absolute;
    //     left:-15px;
    //     top:20px;
    //     width:10px;
    //     height:10px;
    //     border-radius:50%;
    //     background-color:rgb(73, 120, 255);
    // }
`;
// 모달
export const Modal =styled.div`
    
`;
export const Modal_div= styled.div`
background-color:#000;
opactiy:0.7;

`;

export const Add_txt_span_tkName = styled.span`
position: absolute;
 top: 0;
 right: 36px;
 font-size: 16px;
 line-height: 53px;
 font-family: 'NGB';
 color: #111;
 transition: all 0.3s cubic-bezier(0.56, 0.12, 0.12, 0.98);
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
 text-align:right;
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

 export const Exchange_button = styled.button`
 width: 100px;
 height: 42px;
 font-size:16px;
 border: 1px solid #d3d4d5;
    color: #000;
    background: #fff;
    cursor: default;
 `;

 export const H2 = styled.h2`
position: relative;
font-size: 32px;
color: #000;
letter-spacing: -1px;
font-weight: bold;
margin: 28px 0 20px 0;
`;
 export const Blue =styled.span`
 color: rgb(73, 120, 255);
 font-weight:800;
`;

export const Purchase_banner_div = styled.div`
    position:relative;
    width:101%;

`;
export const Purchase_banner_p = styled.p`
//background: url(img/SSTV.GIF) center center / contain no-repeat;
 position:abosulte;
 top: 1000px;
 height: 200px;
`;

export const Table_td_noLogin = styled.p`
    text-align:center;
    font-size: 16px; 
    font-weight:900;
    display:block;
    margin:0 auto
`;



//MyAmount_ul ,MyAmount_li ,MyAmount_p , MyAmount_strong
export const MyAmount_ul = styled.ul`
float: right;
top: 300px;
font-family: ng;
`;
export const MyAmount_li = styled.li`
float: left;
padding: 15px 15px 15px 15px;
font-family: ng;
`;
export const MyAmount_p = styled.p`
    font-size: 14px;
    color: #888;
    text-align: center;
    font-family: ng;
    margin-bottom: 5px;
    letter-spacing: -1px;
`;
export const MyAmount_strong = styled.strong`
display: block;
    color: #0e54ff;
    font-size: 16px;
    font-family: ngb;
    text-align: center;
`;