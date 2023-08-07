import { React, useEffect, useState } from 'react';
import LightChatroom from './lightChatroom';
import Header from '../Mainpage/header'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Chat = () => {
  const location = useLocation();
    const [streaming, setStreaming] = useState(null);
    const [serviceUrl, setServiceUrl] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/streaming/getMyOnGoingStreamingPage`,
        {
            withCredentials : true
        });
        
        const data = response.data
        const result = response.data.result;
        
        if(result == 'success') {
          const streamingData = data.firstData;
          const serviceUrlData = data.secondData;

          setStreaming(streamingData);
          setServiceUrl(serviceUrlData);
        }
      }
      fetchData();
    },[])

    
    if (streaming && serviceUrl) {
        return (
          <body style={{ overflowY: "auto", maxHeight: "90vh" }}>
            <Header />
            <LightChatroom data={{ streaming, serviceUrl }} />
          </body>
        );
      }

    // return(
    //     <body>
    //     <Header/>
    //     <LightChatroom data = {{streaming, serviceUrl}}/>
    //     </body>
    // )
}

export default Chat;