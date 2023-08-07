/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Side from './sidebar';
import axios from 'axios';
import { faPencil , faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import getWriting from './getWriting';
import { useParams } from 'react-router-dom';
import UserInfo from './userInfo';
import { Writing_List_title_th_3, Writing_List_title_th_4, Writing_List_title_th_5, Writing_List_tbody_td,
    Writing_List_footer_search_button_span, Writing_List_footer_search_button_ui, Writing_List_footer_search_input, Writing_List_footer_search_input_div, Writing_List_footer_search_span, Writing_List_footer_search_button, Writing_List_footer_search_div, Writing_List_footer_form, Writing_List_footer_section, Writing_List_footer_div,  Writing_List_tbody_td_5, Writing_List_tbody_td_4, Writing_List_tbody_td_3, Writing_List_tbody_td_2_a, Writing_List_tbody_td_2, Writing_List_tbody_2_span, Writing_List_tbody_2_a, Writing_List_tbody_2_div, Writing_List_tbody_div_1, Writing_List_title_th_2, Writing_List_title_th_1,Writing_List_title_tr, Writing_List_title_section_2, Writing_List_bs_button_span, Writing_List_bs_em, Writing_List_bs_span, Writing_List_bs_section, Sidebar_Main_div, Writing_List_article, Writing_List_bs_div, Writing_List_bs_div_2, Writing_List_bs_h2, Writing_List_bs_title, Writing_form_Main_div, Writing_List_bs_button_div, Writing_List_bs_button_a, Writing_List_title_section, Writing_List_title_table, Writing_List_title_thead, Writing_List_tbody, Writing_List_tbody_tr, Writing_List_tbody_1_span, Writing_List_footer_search_div_1} from './style';
const writingList = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {userId} = useParams();
    const navigate = useNavigate();
    const [writingList, setWritingList ] = useState([]);
    const [writingCount, setWritingCount] = useState('');
    console.log("확인:"+userId);
    
    useEffect (() => {
        axios.get('/community/writingList/'+userId)
        .then((response)=> {
            const jsonData = response.data;
            
            setWritingCount(jsonData['data2']);
            setWritingList(jsonData['data']);
            const date = jsonData['data'];    
        })
            
    },[])

    const onClickWriting = () => {
        navigate(`/Writing/${userId}`);
    }
    
    console.log(writingList);

    return (
        <body>
            <Header/>
            <Sidebar_Main_div>
                <Side/>
                <Writing_form_Main_div>
                <UserInfo/>
                    <Writing_List_article>
                        
                        <Writing_List_bs_div>
                        
                            <Writing_List_bs_div_2>
                                <Writing_List_bs_title>
                                    <Writing_List_bs_h2>자유 게시판</Writing_List_bs_h2>
                                </Writing_List_bs_title>
                                <Writing_List_bs_section>
                                                <Writing_List_bs_span>
                                                        <Writing_List_bs_em>{writingCount}</Writing_List_bs_em>
                                                        개의 글
                                                    </Writing_List_bs_span>

                                                    <Writing_List_bs_button_div>
                                                        <Writing_List_bs_button_a onClick={onClickWriting}>
                                                        <FontAwesomeIcon icon={faPencil} style={{color: "#4279ff",}} />
                                                            <Writing_List_bs_button_span>
                                                                        글쓰기
                                                            </Writing_List_bs_button_span>
                                                        </Writing_List_bs_button_a>
                                                    </Writing_List_bs_button_div>
                                </Writing_List_bs_section>
                                <Writing_List_title_section>
                                    <Writing_List_title_section_2>
                                        <Writing_List_title_table>
                                            <Writing_List_title_thead>
                                                <Writing_List_title_tr>
                                                    <Writing_List_title_th_1>제목</Writing_List_title_th_1>
                                                    <Writing_List_title_th_2>작성자</Writing_List_title_th_2>
                                                    <Writing_List_title_th_3>작성일</Writing_List_title_th_3>
                                                    {/* <Writing_List_title_th_4>UP</Writing_List_title_th_4> */}
                                                    <Writing_List_title_th_5>조회</Writing_List_title_th_5>
                                                </Writing_List_title_tr>
                                            </Writing_List_title_thead>

                                        {writingList.map((item, i)=> {
                                            function padZero(number) {
                                                return number < 10 ? '0' + number : number;
                                              }
                                              let date = new Date(item.regDate);
                                              let formattedDate = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate() +' .'+padZero(date.getHours()) + ":"+ padZero(date.getMinutes());
                                            return(
                                            <Writing_List_tbody>
                                                <Writing_List_tbody_tr>
                                                    <Writing_List_tbody_td>
                                                        <Writing_List_tbody_div_1>
                                                            <Writing_List_tbody_1_span>
                                                                일상대화
                                                            </Writing_List_tbody_1_span>
                                                        </Writing_List_tbody_div_1>
                                                        <Writing_List_tbody_2_div>
                                                            <Link key={i} to={`/${item.writingNo}/${userId}`} >
                                                            <Writing_List_tbody_2_a onClick={()=>{
                                                                axios.get('/community/addView/'+item.writingNo)
                                                            }} key={i}>{item.title}</Writing_List_tbody_2_a>
                                                            </Link>
                                                            {item.commentCount===0? null:
                                                            <Writing_List_tbody_2_span>[{item.commentCount}]</Writing_List_tbody_2_span>
                                                            }
                                                        </Writing_List_tbody_2_div>
                                                    </Writing_List_tbody_td>

                                                    <Writing_List_tbody_td_2>
                                                        <Writing_List_tbody_td_2_a key={i}>{item.guestUserId}</Writing_List_tbody_td_2_a>
                                                    </Writing_List_tbody_td_2>
                                                    <Writing_List_tbody_td_3 key={i}>{formattedDate}</Writing_List_tbody_td_3>
                                                    {/* <Writing_List_tbody_td_4>{item.up}</Writing_List_tbody_td_4> */}
                                                    <Writing_List_tbody_td_5 >{item.view}</Writing_List_tbody_td_5>

                                                </Writing_List_tbody_tr>
                                            </Writing_List_tbody>
                                            )
                                       })} 
                                        

                                        </Writing_List_title_table>
                                    </Writing_List_title_section_2>
                                </Writing_List_title_section>
                                    {/* 이곳부터 footer */}
                                <Writing_List_footer_div>
                                    <Writing_List_footer_section>
                                        <Writing_List_footer_form>
                                            <Writing_List_footer_search_div>
                                                <Writing_List_footer_search_div_1>
                                                    <Writing_List_footer_search_button>
                                                        <Writing_List_footer_search_span>제목+내용</Writing_List_footer_search_span>
                                                        <FontAwesomeIcon icon={faChevronDown} />
                                                    </Writing_List_footer_search_button>
                                                </Writing_List_footer_search_div_1>
                                                {/* 이곳은 검색 input box  */}
                                                <Writing_List_footer_search_input_div>
                                                    <Writing_List_footer_search_input/>
                                                        
                                                    <Writing_List_footer_search_button_ui>
                                                        <Writing_List_footer_search_button_span>검색</Writing_List_footer_search_button_span>
                                                    </Writing_List_footer_search_button_ui>
                                                </Writing_List_footer_search_input_div>
                                                 {/* 이곳은 검색 input box  */}
                                            </Writing_List_footer_search_div>
                                        </Writing_List_footer_form>
                                    </Writing_List_footer_section>
                                </Writing_List_footer_div>
                                {/* 여가까지 footer */}
                            </Writing_List_bs_div_2>
                        </Writing_List_bs_div>
                    </Writing_List_article>
                </Writing_form_Main_div>
            </Sidebar_Main_div>
        </body>
    )
}

export default writingList;

