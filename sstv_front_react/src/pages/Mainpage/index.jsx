import React, {useEffect, useState} from 'react';
import {Main_Body,Main_stream_list_span, Main_stream_list_h4, Main_stream_top_h4, Main_first_div, Main_second_div, Main_stram_div, Main_stream_four_div, Main_stream_second_div, Main_stream_third_div, Main_stream_top_h6, Main_third_div, Main_stream_top_em, Main_stream_butto_div, Main_stream_button_a, Main_stream_body_div, Main_stream_body_div_2, Main_stream_body_div_3, Main_stream_body_title_div, Main_steram_body_title_h4, Main_stream_body_title_em, Main_body_stream_list_div, Main_stream_list_div, Main_stream_list_div_2, Main_stream_list_img, Main_stream_list_watching_ul, Main_stream_list_watching_li_1, Main_stream_list_watching_li_2, Main_four_div, BodyMain, Streaming_Div, Stream_header, Stream_header_span, Stream_header_a, Stream_list_div, Stream_list_div_inner, Stream_ScTower, Stream_ScTransition, Stream_shelf_card, Stream_selector, Stream_article, Stream_Text_area, Stream_image_area, Stream_image_area_inner, Stream_image_a, Stream_image_layout, Stream_image_ScA, Stream_Image_img, Image_div, Live_div, Live_div_inner, Live_p, View_count, View_count_div, Stream_Text_area_inner, Stream_Text_info, Stream_user_image_div, Info_div, Info_Title_a, Streaming_Title_div, Streaming_title_button, Streaming_title_h3, Title_p, Stream_category_p, Streamer_img_a, Streamer_img_div, Streamer_img_inner_div, Streamer_figure, Streamer_img } from './style';
import { faThumbsUp, faUser, faUserGroup, faCheck ,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../Community/sidebar';
import Header from './header';
import axios from 'axios';
import { key } from 'fontawesome';
import LightChatroom from '../Chat/lightChatroom';
import { useNavigate } from 'react-router-dom';
import CenterMode from './centerMode';
import MainSidebar from './mainSidebar';

const Mainpage = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    // useEffect(()=> {
    //     return <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    // },[isDarkMode])

    const [streamingList, setStreamingList] = useState([]);

    const fetchStreamingList = async () => {          
        const response = await axios.create({
          baseURL: `${process.env.REACT_APP_NODE_URL}`,
          withCredentials : true
        }).get('/streaming/getStreamingList');
      
        return response.data?.firstData; 
    };
    
    useEffect(() => {     
        fetchStreamingList().then((response) => {
          let result = []; 
          for (const data of response) {
            result.push(data);
          }
          setStreamingList(result);
        });
      }, []);
    

      const getCategory = (categoryId) => {
        let result;
        switch(categoryId) {
            case '1':
                result = '게임';
                break;
            case '2':
                result = '일상';
                break;
            case '3':
                result = '스포츠';
                break;
            case '4':
                result = '먹방';
                break;
            case '5':
                result = '요리';
                break;
            case '6':
                result = '교육';
                break;
            default:
                break;
        }
        return result;
      }

      const getStreamingViewPage = async (streamingUserId) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/streaming/getStreamingViewerPage`,
                {params : {
                    streamingUserId : streamingUserId
                },
                withCredentials : true
            });

            const firstData = response.data.result;
            if(firstData === 'success') {
                const streaming = response.data.firstData;
                const serviceUrl = response.data.secondData;
                
                navigate(`/chat`, {
                    state: {
                        streaming : streaming,
                        serviceUrl : serviceUrl,
                        streamingUserId : streamingUserId
                    }
                });
            }else {
                const firstData = response.data.firstData;
                if(firstData == '1') {
                    alert('로그인이 필요합니다.')
                }else if(firstData == '2') {
                    alert('해당 스트리머 회원의 블랙리스트에 등록되어있습니다.')
                }
            }
        } catch (error) {
            console.log('[getStreamingViewPage] error = ' + error)
        }
      }
      
        //메인페이지 더미데이터 리스트
    const dummyList = [
        {
          streaming_title: "아침 방송",
          title: "음악 여행떠나요",
          category: "일상",
          img: "Dummy1.png",
          profile: "eunjin1234.jpg",
          view: 32,
          nickName : '논현동사랑꾼'
        },
        {
          streaming_title: "산책 나왔어요",
          title: "같이 다녀요",
          category: "일상",
          img: "Dummy2.png",
          profile: "admin.jpg",
          nickName : '대방동불주먹',
          view: 73
        },
        {
            streaming_title: "즐거운 하루",
            title: "파이팅!!",
            category: "일상",
            img: "Dummy3.png",
            profile: "user3.jpg",
            nickName : '나를따르라',
            view: 47
          },
        {
            streaming_title: "드디어 출발합니다~~~",
            title: "신나는 여행!",
            category: "일상",
            img: "Dummy4.png",
            profile: "user4.jpg",
            nickName: '귀염둥이후니',
            view: 26
          },
          {
            streaming_title: "대회 준비중..",
            title: "운동!",
            category: "일상",
            img: "Dummy5.png",
            profile: "user5.jpg",
            nickName : '꽃보다수진',
            view: 86
          },
          {
            streaming_title: "맛있는 족발",
            title: "함께 해봐요",
            category: "요리",
            img: "Dummy6.png",
            profile: "user6.jpg",
            nickName: '임연수',
            view: 9
          },
          {
            streaming_title: "날씨가 덥네요..",
            title: "브이로그!",
            category: "일상",
            img: "Dummy7.png",
            profile: "user7.jpg",
            nickName:'쁘띠동욱',
            view: 129
          },
          {
            streaming_title: "맛있는 벌레",
            title: "같이 먹어요 우리",
            category: "요리",
            img: "Dummy8.png",
            profile: "user8.jpg",
            nickName:'짱민츄',
            view: 238
          },
          {
            streaming_title: "여행 갑니다 ㅎㅎ",
            title: "짐싸는 중",
            category: "일상",
            img: "Dummy9.png",
            profile: "user9.jpg",
            nickName:'희준오빠',
            view: 18
          },
          {
            streaming_title: "쌍둥이의 ASMR..",
            title: "ASMR",
            category: "일상",
            img: "Dummy10.png",
            profile: "user10.jpg",
            nickName:'sooYeon',
            view: 18
          },
          {
            streaming_title: "홈트레이닝",
            title: "누구나 가능합니다",
            category: "운동",
            img: "Dummy11.png",
            profile: "user11.jpg",
            nickName:'두팔멋쟁이',
            view: 72
          },
          {
            streaming_title: "오늘의 운세는?",
            title: "함께 알아봐요",
            category: "일상",
            img: "Dummy12.png",
            profile: "user12.jpg",
            nickName:'bangMY',
            view: 3
          },
          {
            streaming_title: "이대로 괜찮은가..?",
            title: "얘기해봐요",
            category: "일상",
            img: "Dummy13.png",
            profile: "user13.jpg",
            nickName:'의적주민',
            view: 39
          },

      ];
    
    return(
        // 메인 전체 div
        <Main_Body>
        
        <Header/>
        <BodyMain>
        {streamingList.length > 0 ? (
        <MainSidebar streaming={streamingList}/>
        ): (<div></div>)}
        <Main_first_div>
        <CenterMode/>
            <Main_second_div>
            
                <Main_third_div>
                    {/* <Main_four_div> */}
                    {/* 맨위 상단 배너 div */}
                    
                    {/* <Main_stram_div>
                        <Main_stream_second_div>
                            <Main_stream_third_div>
                                <Main_stream_four_div>
                                    <Main_stream_top_h6>Welcome To SSTV</Main_stream_top_h6>
                                    <Main_stream_top_h4><Main_stream_top_em>다양한</Main_stream_top_em> 서비스를 즐겨보세요. 최고의 서비스를 제공합니다. </Main_stream_top_h4>
                                    <Main_stream_butto_div><Main_stream_button_a>Browse Now</Main_stream_button_a></Main_stream_butto_div>
                                </Main_stream_four_div>
                            </Main_stream_third_div>
                        </Main_stream_second_div>
                    </Main_stram_div> */}
                    {/* 맨위 상단 배너 div */}
                    {/* 홈화면 중단 배너 (스트리밍) */}
                    

                    <Streaming_Div>
                                        <Stream_header>
                                            <Stream_header_span>취향 저격</Stream_header_span>
                                            <Stream_header_a> 생방송 채널</Stream_header_a>
                                        </Stream_header>
                                    </Streaming_Div>




                        {streamingList.map((streaming, index) => (

                            <Stream_list_div onClick={() => getStreamingViewPage(streaming.userId)}>
                                <Stream_list_div_inner>
                                    <Stream_ScTower>
                                        {/* <Stream_ScTransition> */}
                                            <Stream_shelf_card>
                                                <Stream_selector>
                                                    <Stream_article>
                                                        <Stream_Text_area>
                                                            <Stream_Text_area_inner>
                                                                <Stream_Text_info>
                                                                    <Info_div>
                                                                        <Info_Title_a>
                                                                            <Streaming_Title_div>
                                                                                <Streaming_title_button>
                                                                                    <Streaming_title_h3>
                                                                                        {streaming.streamingTitle}
                                                                                    </Streaming_title_h3>
                                                                                </Streaming_title_button>
                                                                            </Streaming_Title_div>
                                                                            <Title_p>
                                                                                {streaming.userNickname}
                                                                            </Title_p>
                                                                        </Info_Title_a>
                                                                        <Stream_category_p>{getCategory(streaming.streamingCategory)}</Stream_category_p>
                                                                    </Info_div>
                                                                </Stream_Text_info>

                                                                <Stream_user_image_div>
                                                                    <Streamer_img_a>
                                                                        <Streamer_img_div>
                                                                            <Streamer_img_inner_div/>

                                                                            <Streamer_figure>
                                                                                <Streamer_img src={process.env.REACT_APP_IMAGE_URL+streaming.userId+".jpg"} />
                                                                            </Streamer_figure>

                                                                        </Streamer_img_div>
                                                                    </Streamer_img_a>
                                                                </Stream_user_image_div>

                                                            </Stream_Text_area_inner>
                                                        </Stream_Text_area>




                                                        <Stream_image_area>
                                                            <Stream_image_area_inner>
                                                                <Stream_image_a>
                                                                    <Stream_image_layout>
                                                                        <Stream_image_ScA>
                                                                            <Image_div></Image_div>
                                                                            <Stream_Image_img src={streaming.thumnailUrlWithOutAd} style={{ border: '1px solid #E8E8E8' }}/>
                                                                        </Stream_image_ScA>

                                                                        <Live_div>
                                                                            <Live_div_inner>
                                                                                <Live_p>생방송</Live_p>
                                                                            </Live_div_inner>
                                                                        </Live_div>


                                                                        <View_count>
                                                                            <View_count_div>{streaming.streamingViewer}</View_count_div>
                                                                        </View_count>


                                                                    </Stream_image_layout>
                                                                </Stream_image_a>
                                                            </Stream_image_area_inner>
                                                        </Stream_image_area>


                                                    </Stream_article>
                                                </Stream_selector>
                                            </Stream_shelf_card>
                                        {/* </Stream_ScTransition> */}
                                    </Stream_ScTower>
                                </Stream_list_div_inner>
                            </Stream_list_div>

                        ))}


                       {/* 더미데이터 */}
                        {/* 구분 */}
                        {dummyList.map((dummy, index) => (
                        <Stream_list_div>
                                <Stream_list_div_inner>
                                    <Stream_ScTower>
                                        {/* <Stream_ScTransition> */}
                                            <Stream_shelf_card>
                                                <Stream_selector>
                                                    <Stream_article>
                                                        <Stream_Text_area>
                                                            <Stream_Text_area_inner>
                                                                <Stream_Text_info>
                                                                    <Info_div>
                                                                        <Info_Title_a>
                                                                            <Streaming_Title_div>
                                                                                <Streaming_title_button>
                                                                                    <Streaming_title_h3>
                                                                                        {dummy.streaming_title}
                                                                                    </Streaming_title_h3>
                                                                                </Streaming_title_button>
                                                                            </Streaming_Title_div>
                                                                            <Title_p>
                                                                               {dummy.nickName}
                                                                            </Title_p>
                                                                        </Info_Title_a>
                                                                        <Stream_category_p>{dummy.category}</Stream_category_p>
                                                                    </Info_div>
                                                                </Stream_Text_info>

                                                                <Stream_user_image_div >
                                                                    <Streamer_img_a>
                                                                        <Streamer_img_div>
                                                                            <Streamer_img_inner_div  />

                                                                            <Streamer_figure>
                                                                                <Streamer_img src={process.env.REACT_APP_IMAGE_URL+dummy.profile }/>
                                                                            </Streamer_figure>

                                                                        </Streamer_img_div>
                                                                    </Streamer_img_a>
                                                                </Stream_user_image_div>

                                                            </Stream_Text_area_inner>
                                                        </Stream_Text_area>




                                                        <Stream_image_area>
                                                            <Stream_image_area_inner>
                                                                <Stream_image_a>
                                                                    <Stream_image_layout>
                                                                        <Stream_image_ScA>
                                                                            <Image_div></Image_div>
                                                                            <Stream_Image_img src={process.env.REACT_APP_IMAGE_URL + dummy.img} style={{ border: '1px solid #E8E8E8' }}/>
                                                                        </Stream_image_ScA>

                                                                        <Live_div>
                                                                            <Live_div_inner>
                                                                                <Live_p>생방송</Live_p>
                                                                            </Live_div_inner>
                                                                        </Live_div>


                                                                        <View_count>
                                                                            <View_count_div>{dummy.view}</View_count_div>
                                                                        </View_count>


                                                                    </Stream_image_layout>
                                                                </Stream_image_a>
                                                            </Stream_image_area_inner>
                                                        </Stream_image_area>


                                                    </Stream_article>
                                                </Stream_selector>
                                            </Stream_shelf_card>
                                        {/* </Stream_ScTransition> */}
                                    </Stream_ScTower>
                                </Stream_list_div_inner>
                            </Stream_list_div>
                        ))}
                        
                </Main_third_div>
            </Main_second_div>
        </Main_first_div>
        </BodyMain>
        </Main_Body>
    )
}

export default Mainpage;