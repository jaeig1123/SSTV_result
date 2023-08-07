import styled from 'styled-components'



export const PurchaseList_div = styled.div`
width: 960px;
padding: 0;
margin: 9px auto 0 auto;
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
position: absolute;
    top: 15px;
    left: 50%;
    width: 100px;
    border: 1px solid rgb(116, 179, 255);
    color: rgb(0, 114, 255);
    font-size: 14px;
    height: 41px;
    margin-left: -50px;
    border-radius: 2px;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    cursor:pointer;

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
    font-weight:500;
    font-size:14px;
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
export const Tabke_span = styled.span`
    display: inline-block;
    padding-right: 2px;
    font-family: NGB;
    font-size: 16px;
    color: rgb(0, 107, 254);
    text-align: right;
`;
export const Purchase_title = styled.h3`
    margin-top:100px;
`;

export const Purchase_notice_p = styled.p`
    margin-top:50px;
    text-align:center;
    font-size:18px;
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

 export const Exchange_button1 = styled.button`
    width: 77px;
    border: 1px solid rgb(116, 179, 255);
    color: rgb(0, 114, 255);
    font-size: 14px;
    height: 41px;
    margin: 0px 5px 0px 4px;
    border-radius: 2px;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    cursor: pointer;

 `;

 export const Exchange_button2 = styled.button`
    width: 77px;
    border: 1px solid rgb(116, 179, 255);
    color: rgb(0, 114, 255);
    font-size: 14px;
    height: 41px;
    margin: 0px 5px 0px 4px;
    border-radius: 2px;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    cursor: pointer;

 `;

 export const Footer = styled.div`
    width: calc(100% - 92px);
    margin: 0 auto;
 `;

  export const Footer_inner_div = styled.div`
    height: auto;
    position: relative;
    height: 82px;
    margin: 0 auto;
    padding-top: 25px;
  `;
  export const F_List_ul = styled.ul`
  display: flex;
  overflow: visible;
  position: relative;
  justify-content: center;
  text-align: center;
  `;
  export const F_List_li = styled.li`
  display: inline;
  padding: 0 6px;
  color: #5f5f5f;
  font-size: 11px;
  white-space: nowrap;
  position: relative;
  `;
export const F_List_a = styled.a`
color: #666;
font-size: 14px;
line-height: 14px;
letter-spacing: -1px;
`;
//  export const Footer = styled.footer``;
//  export const Footer = styled.footer``;
//  export const Footer = styled.footer``;
//  export const Footer = styled.footer``;
//  export const Footer = styled.footer``;
//  export const Footer = styled.footer``;
//  export const Footer = styled.footer``;
//  export const Footer = styled.footer``;