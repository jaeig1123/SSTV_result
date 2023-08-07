import { React, useEffect, useState } from 'react';
import LightChatroom from './lightChatroom';
import Header from '../Mainpage/header'
import { useLocation } from 'react-router-dom';
import { userLock } from 'fontawesome';
import axios from 'axios';

const Chat = () => {
    const location = useLocation();
    // const {streaming} = location.state;
    // const {serviceUrl} = location.state;
    // const {streamingUserId} = location.state;
    const [streamingUserId, setStreamingUserId] = useState(location.state.streamingUserId);
    const [streaming, setStreaming] = useState(null);
    const [serviceUrl, setServiceUrl] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
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
                
                setStreaming(streaming);
                setServiceUrl(serviceUrl);
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
}

export default Chat;