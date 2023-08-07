
import Styles from "./Card.module.css";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import axios from 'axios'
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import { Main_VOD, Main_VOD_Layout, Main_VOD_container, Main_VOd_resize, Main_info_layout, Main_inner, Main_inner_2, Main_inner_3, Main_inner_4, Main_inner_5, Main_inner_6, Main_top, Resize_detector, Resize_detector_2, Resize_detector_grow, Resize_detector_grow_2, Title_inner, Title_span, User_figure, User_img, VOD_Content, VOD_Title, VOD_Title_a, VOD_category_a, VOD_info, VOD_info_inner, VOD_infomation, VOD_title_box, VOD_title_inner, VOD_tttle, VOD_userName_a, VOD_user_image_div, VOD_view_p, Video, Vod_userName_p } from './CardStyle';
function Card({ title,imagen,content,vodNo,hostUserId,category, view, hostNickName}) {
  const [show, setShown] = useState(false);
  const userId = "user9";
  const [vodList, setVodList] = useState([]);
  useEffect(()=>{
   axios.get('/community/getVodList/'+userId)
   .then((response)=>{
       setVodList(response.data['data']);
   })
 },[])

  const sendViewUp = (vodNo)=>{
    axios.get('/community/addVodView/'+vodNo);
  }

 let reportType;

 switch (category) {
   case 1:
     reportType = '기타';
     break;
   case 2:
     reportType = '게임';
     break;
   case 3:
     reportType = '일상';
     break;
   case 4:
     reportType = '스포츠';
     break;
   case 5:
     reportType = '운동';
     break;
   default:
     reportType = '';
     break;
 }
  
  
  
   
  return (
    // vodList.map((itme, index)=>{

    
    //   return(
    <animated.div
      // className={Styles.card}
      // style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <Main_top>
        <Main_inner>
          <Main_inner_2>
            <Main_inner_3>
              <Main_inner_4>
                <Main_inner_5>
                  <Main_inner_6>
                    <Main_VOD id="selector">
                      <Main_VOD_container>
                        <Main_VOd_resize>
                          <Resize_detector>
                            <Resize_detector_grow>
                            </Resize_detector_grow>
                          </Resize_detector>
                          <Resize_detector_2>
                            <Resize_detector_grow_2></Resize_detector_grow_2>
                          </Resize_detector_2>
                        </Main_VOd_resize>

                        <Main_VOD_Layout>
                          <Video autoPlay controls src={imagen}/>
                        </Main_VOD_Layout>

                      </Main_VOD_container>
                    </Main_VOD>


                    <VOD_info>
                      <VOD_info_inner>
                        <Main_info_layout>
                          <VOD_user_image_div>
                            <User_figure>
                              <User_img src={process.env.REACT_APP_IMAGE_URL+hostUserId+".jpg"}/>
                            </User_figure>
                          </VOD_user_image_div>

                          <VOD_infomation>
                            <VOD_userName_a href={"/home/"+hostUserId}>
                              <Vod_userName_p>{hostNickName}</Vod_userName_p>
                            </VOD_userName_a>
                            <VOD_category_a>{reportType}</VOD_category_a>
                            <VOD_view_p>조회수 {view}</VOD_view_p>
                          </VOD_infomation>

                        

                        </Main_info_layout>


                        <VOD_Title>
                            <VOD_title_inner>
                              <Link to={"/getVod/"+vodNo}>
                              <VOD_title_box onClick={()=>{axios.get('/community/addVodView/'+vodNo)}}>
                                <VOD_Title_a >
                                  <VOD_tttle>
                                    <Title_inner>
                                      <Title_span>{title}</Title_span>
                                    </Title_inner>
                                  </VOD_tttle>
                                </VOD_Title_a>
                              </VOD_title_box>
                              </Link>
                            </VOD_title_inner>
                          </VOD_Title>

                          <VOD_Content>
                              {content}
                          </VOD_Content>


                      </VOD_info_inner>
                    </VOD_info>

                  </Main_inner_6>
                </Main_inner_5>
              </Main_inner_4>
            </Main_inner_3>
          </Main_inner_2>
        </Main_inner>
      </Main_top>
    </animated.div>
    //   )
    // })

    
  );
}

export default Card;
