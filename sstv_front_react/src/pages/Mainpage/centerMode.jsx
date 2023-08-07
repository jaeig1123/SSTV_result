/* eslint-disable react-hooks/rules-of-hooks */

import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import './centerMode.css'
import { useEffect,useState } from "react";
import axios from 'axios';
const centerMode= ()=> {
   const userId = "user9";
   const [vodList, setVodList] = useState([]);
   const [card, setCard] = useState([]);
   
  //  const [cards, setCards] = useState([]);
   useEffect(()=>{
    axios.get('/community/getAllVodList')
    .then((response)=>{
        console.log(response.data);
        setVodList(response.data['data']);
        return response.data['data'];
    })
  },[])

  useEffect(()=>{
    if (vodList && vodList.length > 0) {
     const cards =[
        {
          key: uuidv4(),
          content: (
            
            <Card vodNo={vodList[0].vodNo} category={vodList[0].category} hostUserId={vodList[0].hostUserId} view={vodList[0].view} title={vodList[0]?.title} content={vodList[0]?.content} imagen={process.env.REACT_APP_VOD_URL+vodList[0]?.fileName+'.mp4'} hostNickName={vodList[0]?.hostNickName}/>
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card vodNo={vodList[1].vodNo} category={vodList[1].category} hostUserId={vodList[1].hostUserId} view={vodList[1].view} title={vodList[1]?.title} content={vodList[1]?.content} imagen={process.env.REACT_APP_VOD_URL+vodList[1]?.fileName+'.mp4'} hostNickName={vodList[1]?.hostNickName}/>
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card vodNo={vodList[2].vodNo} category={vodList[2].category} hostUserId={vodList[2].hostUserId} view={vodList[2].view} title={vodList[2]?.title} content={vodList[2]?.content} imagen={process.env.REACT_APP_VOD_URL+vodList[2]?.fileName+'.mp4'} hostNickName={vodList[2]?.hostNickName}/>
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card vodNo={vodList[3].vodNo} category={vodList[3].category} hostUserId={vodList[3].hostUserId} view={vodList[3].view} title={vodList[3]?.title} content={vodList[3]?.content} imagen={process.env.REACT_APP_VOD_URL+vodList[3]?.fileName+'.mp4'} hostNickName={vodList[3]?.hostNickName}/>
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card vodNo={vodList[4].vodNo} category={vodList[4].category} hostUserId={vodList[4].hostUserId} view={vodList[4].view} title={vodList[4]?.title} content={vodList[4]?.content} imagen={process.env.REACT_APP_VOD_URL+vodList[4]?.fileName+'.mp4'} hostNickName={vodList[4]?.hostNickName}/>
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card vodNo={vodList[5].vodNo} category={vodList[5].category} hostUserId={vodList[5].hostUserId} view={vodList[5].view} title={vodList[5]?.title} content={vodList[5]?.content} imagen={process.env.REACT_APP_VOD_URL+vodList[5]?.fileName+'.mp4'} hostNickName={vodList[5]?.hostNickName}/>
          )
        },
        
      ];
      setCard(cards);
    }
  },[vodList])


  
  
  return (
    <div className="App">
      {card.length > 0 ? (
      <Carousel
        cards={card}
        height="600px"
        width="70%"
        margin="0 50"
        offset={7}
        showArrows={false}
      />
    ) : (
      <div>Loading...</div>
    )}
    </div>
  );

// }) 
}




export default centerMode;
