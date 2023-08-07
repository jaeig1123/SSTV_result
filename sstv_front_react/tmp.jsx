
import Styles from "./Card.module.css";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import axios from 'axios'
import Carousel from "./Carousel";
import { Main_top } from './CardStyle';
function Card({ title,imagen,content }) {
  const [show, setShown] = useState(false);
  const userId = "user9";
  const [vodList, setVodList] = useState([]);
  useEffect(()=>{
   axios.get('/community/getVodList/'+userId)
   .then((response)=>{
       console.log(response.data);
       setVodList(response.data['data']);
   })
 },[])
  console.log(imagen+"이미젠");
  console.log(title+"타이틀");
  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    // vodList.map((itme, index)=>{

    
    //   return(
    <animated.div
      // className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <Main_top>
      <img src={imagen}  />
      <h2>{title}</h2>
      <p>
        {content}
      </p>
      <div className={Styles.btnn}>
        <Button text="시청하기" />
        <Button text="방송국으로" />
      </div>
      </Main_top>
    </animated.div>
    //   )
    // })

    
  );
}

export default Card;
