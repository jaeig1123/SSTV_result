import styled from 'styled-components'


//History_div,History_table,History_thead,History_tr,History_th,History_td
//////////////////////
export const History_div = styled.div`

box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.4);
border-radius: 5px;
margin:30px auto 0;
width: 745px;
padding: 0;
    
`;

export const History_table = styled.table`
width: 100%;
border-radius: var(--border-radius-medium);
box-shadow: 0 0 0 1px var(--color-border-base);
`;
export const History_thead = styled.thead`

`;
export const History_tr = styled.tr`
`;
export const History_th = styled.th`
padding: 10px 0 10px;
background-color: #f7f7f8;
color: rgb(92 22 197) ;
vertical-align: middle;
text-align: center;
font-size: 16px;
font-weight: 900;

`;
export const History_td = styled.td`
    //color: rgb(92 22 197) ;
    align-items: center !important;
    padding: 1rem !important;
    color:#000;
    text-align:center;

`;

export const History_body = styled.tbody`

`;
export const History_title_H2 = styled.h2`
 margin-top:30px;
color:rgb(73, 120, 255);
 font-size: 32px;
 font-weight:900;

`;
