/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Head, Head_h2, Layout, Layout_2, Layout_3, Sidebar_category, Sidebar_category_p, Sidebar_content, Sidebar_div, Sidebar_div_content, Sidebar_div_in, Sidebar_inner, Sidebar_layout, Sidebar_main, Sidebar_nav, Sidebar_simple_bar, Sidebar_streamCount_span, Sidebar_stream_a, Sidebar_stream_count, Sidebar_stream_layout, Sidebar_streaming_list, Sidebar_streaming_ls, Sidebar_userId_p, Sidebar_userImage_div, Sidebar_userImage_figure, Sidebar_userImage_img, Sidebar_userInfo, Sidebar_userNickName_div, Sidebar_userNickname, Sidebar_user_span, Sidebar_view, Sidebar_viewIcon, Sidebar_viewLayout } from './barStyle';
import { BodyMain } from './style';
import { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const mainSidebar = ({streaming})=> {
    const [streamList, setStreamList] = useState(streaming);
    const navigate = useNavigate();
    console.log(streamList)

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

    <Sidebar_div>
        <Sidebar_inner>
            <Sidebar_main>
                <Sidebar_simple_bar id="scroll">
                    <Sidebar_content>
                        <Sidebar_div_in>
                            <Sidebar_div_content>
                                <Sidebar_nav>
                                    <Sidebar_layout>
                                        <Layout>
                                            <Layout_2>
                                                <Layout_3>
                                                    <Head>
                                                        <Head_h2>
                                                            스트리밍 중인 채널
                                                        </Head_h2>
                                                    </Head>
                                                </Layout_3>
                                            </Layout_2>
                                        </Layout>
                                    </Sidebar_layout>
                                </Sidebar_nav>
                            </Sidebar_div_content>


                            {streamList.map((stream, index)=>{

                            return(
                            <Sidebar_streaming_list onClick={() => getStreamingViewPage(stream.userId)} style={{cursor:'pointer'}}>
                                <Sidebar_streaming_ls>
                                    <Sidebar_stream_layout>
                                        <Sidebar_stream_a>

                                        <Sidebar_userImage_div>
                                            <Sidebar_userImage_figure>
                                                <Sidebar_userImage_img src={process.env.REACT_APP_IMAGE_URL+stream.userId+".jpg"}/>
                                            </Sidebar_userImage_figure>
                                        </Sidebar_userImage_div>

                                        <Sidebar_userNickname>
                                            <Sidebar_userInfo>
                                                <Sidebar_userNickName_div>
                                                    <Sidebar_userId_p>
                                                        <Sidebar_user_span>{stream.userNickname}</Sidebar_user_span>
                                                    </Sidebar_userId_p>
                                                </Sidebar_userNickName_div>

                                                <Sidebar_category>
                                            <Sidebar_category_p>
                                                {stream.streamingTitle}
                                            </Sidebar_category_p>
                                        </Sidebar_category>

                                            </Sidebar_userInfo>
                                        </Sidebar_userNickname>

                                        <Sidebar_view>
                                            <Sidebar_viewLayout>
                                                <Sidebar_viewIcon></Sidebar_viewIcon>
                                                <Sidebar_stream_count>
                                                    <Sidebar_streamCount_span>{stream.streamingViewer}</Sidebar_streamCount_span>
                                                </Sidebar_stream_count>
                                            </Sidebar_viewLayout>
                                        </Sidebar_view>

                                        </Sidebar_stream_a>
                                    </Sidebar_stream_layout>
                                </Sidebar_streaming_ls>
                            </Sidebar_streaming_list>
                            )
                            })}
                            {/* 더미데이터 */}
                            {dummyList.map((dummy, index)=>(
                            <Sidebar_streaming_list >
                                <Sidebar_streaming_ls>
                                    <Sidebar_stream_layout>
                                        <Sidebar_stream_a>

                                        <Sidebar_userImage_div>
                                            <Sidebar_userImage_figure>
                                                <Sidebar_userImage_img src={process.env.REACT_APP_IMAGE_URL+dummy.profile}/>
                                            </Sidebar_userImage_figure>
                                        </Sidebar_userImage_div>

                                        <Sidebar_userNickname>
                                            <Sidebar_userInfo>
                                                <Sidebar_userNickName_div>
                                                    <Sidebar_userId_p>
                                                        <Sidebar_user_span>{dummy.nickName}</Sidebar_user_span>
                                                    </Sidebar_userId_p>
                                                </Sidebar_userNickName_div>

                                                <Sidebar_category>
                                            <Sidebar_category_p>
                                                {dummy.streaming_title}
                                            </Sidebar_category_p>
                                        </Sidebar_category>

                                            </Sidebar_userInfo>
                                        </Sidebar_userNickname>

                                        <Sidebar_view>
                                            <Sidebar_viewLayout>
                                                <Sidebar_viewIcon></Sidebar_viewIcon>
                                                <Sidebar_stream_count>
                                                    <Sidebar_streamCount_span>{dummy.view}</Sidebar_streamCount_span>
                                                </Sidebar_stream_count>
                                            </Sidebar_viewLayout>
                                        </Sidebar_view>

                                        </Sidebar_stream_a>
                                    </Sidebar_stream_layout>
                                </Sidebar_streaming_ls>
                            </Sidebar_streaming_list>
                            ))}
                            


                        </Sidebar_div_in>
                    </Sidebar_content>
                </Sidebar_simple_bar>
            </Sidebar_main>
        </Sidebar_inner>
    </Sidebar_div>
    
    )
}

export default mainSidebar;