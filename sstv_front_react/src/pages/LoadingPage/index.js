import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { render } from "react-dom";
import _ from "lodash";
import { Snowflakes, RippleBox, Button, Center } from "./components";
import ReactModal from "react-modal";
import "./styles.css";


const LoadingPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [pageContent, setPageContent] = useState();
  const [dots, setDots] = useState("...");
  const [response, setResponse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handlePrevious = () => {
    setPage(page => {
      const updatedPage = page > 0 ? page - 1 : page;
      return updatedPage;
    });
  };

  const handleNext = () => {
    setPage(page => {
      const updatedPage = page >= 5 ? page : page + 1;
      return updatedPage;
    });
  };

  const requestServiceUrl = async () => {
    const getServiceUrlResponse = await axios.create({
      baseURL : `${process.env.REACT_APP_NODE_URL}`,
      withCredentials : true
    }).get('/streaming/getServiceUrl');
    
    const result = (JSON.parse(getServiceUrlResponse.data)).result;
    if(result === 'success') {
      const getStreamingResponse = await axios.create({
        baseURL : `${process.env.REACT_APP_NODE_URL}`,
        withCredentials : true
      }).get('/streaming/getMyStreamingPage');

      const data = getStreamingResponse.data
      const streaming = data.firstData;
      const serviceUrl = data.secondData;

      navigate('/streamerChat', {
        state : {
          streaming : streaming,
          serviceUrl : serviceUrl
        }
      });
    }else {
      setResponse(getServiceUrlResponse.data);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      requestServiceUrl();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === ".") {
          return "..";
        } else if (prevDots === "..") {
          return "...";
        } else {
          return ".";
        }
      });
    }, 500);
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  

  const firstStep = () => {
    return (
      <>
      OBS를 다운받아주세요
      <div style={{ margin: "10px 0"}}/>
      <a href="https://obsproject.com/ko" target="_blank" rel="noopener noreferrer">
        <img
          src="https://advertise.kr.object.ncloudstorage.com/loadingPage1.png"
          alt="#"
          className="img-size"
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </a>
      </>
    );
  };

  const secondStep = () => {
    return (
      <>
        <div style={{ margin: "10px 0", fontSize: "18px", color: "white" }}>
          광고 재생을 위해서는 채널이 2개 필요합니다.
          <br/>
           다중송출을 위해 회원님의 운영체제에 맞는 플러그인을 다운받아주세요
        </div>
        <div style={{ margin: "10px 0" }} />
        <a href="https://github.com/sorayuki/obs-multi-rtmp/releases" target="_blank" rel="noopener noreferrer">
          <img
            src="https://advertise.kr.object.ncloudstorage.com/loadingPage2.png"
            alt="#"
            className="img-size"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </a>
      </>
    );
  };

  const thirdStep = () => {
    return (
      <>
        <div style={{ margin: "10px 0", fontSize: "18px", color: "white" }}>
          OBS를 설치 한 뒤 독의 '다중송출'을 활성화 해주세요
          <br/>
        </div>
        <div style={{ margin: "10px 0" }} />
          <img
            src="https://advertise.kr.object.ncloudstorage.com/loadingPage3.png"
            alt="#"
            className="img-size"
            style={{ maxWidth: "80%", height: "auto" }}
          />
      </>
    );
  };
  
  const fourthStep = () => {
    return (
      <>
      <div style={{ margin: "10px 0", fontSize: "18px", color: "white" }}>
          OBS의 설정을 클릭해 주세요
          <br/>
        </div>
        <div style={{ margin: "10px 0" }} />
          <img
            src="https://advertise.kr.object.ncloudstorage.com/loadingPage4.png"
            alt="#"
            className="img-size"
            style={{ maxWidth: "80%", height: "auto" }}
          />
      </>
    )
  }

  const fifthStep = () => {
    return (
      <>
      <div style={{ margin: "10px 0", fontSize: "18px", color: "white" }}>
          OBS의 서버입력란에 publishUrl, 스트림 키 입력란에 streamKey를 입력해주세요
          <br/>
          publishUrl, streamKey는 스트리밍이 생성 된 후 확인 할 수 있습니다.
          <br/>
        </div>
        <div style={{ margin: "10px 0" }} />
          <img
            src="https://advertise.kr.object.ncloudstorage.com/loadingPage5.png"
            alt="#"
            className="img-size"
            style={{ maxWidth: "85%", maxHeight: "85%" }}
          />
      </>
    )
  }

  const sixthStep = () => {
    return (
      <>
      <div style={{ margin: "10px 0", fontSize: "18px", color: "white" }}>
          다중송출창도 동일하게 설정해주세요
      </div>
      </>
    )
  }

  useEffect(() => {
    switch(page) {
      case 0 : 
      setPageContent(firstStep);
      break;

      case 1 : 
      setPageContent(secondStep);
      break;

      case 2 : 
      setPageContent(thirdStep);
      break;

      case 3 : 
      setPageContent(fourthStep);
      break;

      case 4 : 
      setPageContent(fifthStep);
      break;

      case 5 : 
      setPageContent(sixthStep);
      break;

      default:
      break;
    }
  },[page])
  
  return (
    <div>
      {/* 생성중 {response} */}
      <Snowflakes style={{ height: 1000 }}>
        <Center>
        <div style={{ position: "absolute", top: 0, right: 0, left: 10,  margin: "10px" }}>
          <h1 style={{ color: "white", fontSize: "24px" }}>
          {/* 스트리밍을 생성중입니다<img src="../img/25.gif" alt="예시 GIF 이미지" /> */}
          스트리밍을 생성중입니다{dots}
          </h1>
        </div>
        
          <h1 style={{ color: "white", fontSize: "40px" }}>
            <br/><br/>
            SSTV 스트리밍 시작방법을 알려드릴게요!
            <br/><br/>
            
          </h1>
          <Button onClick={openModal}>시작방법 보기</Button>
          <ReactModal
            isOpen={isOpen}
            onRequestClose={_.debounce(closeModal, 300)}
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <RippleBox>
              <div onClick={_.debounce(closeModal, 300)}>X</div>
              <Center
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "40px",
                  color: "white"
                }}
              >
                {pageContent}
              </Center>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "10px",
                  background: "none" // 배경색 없애기
                }}
              >
                <Button
                  style={{
                    background: "none",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px", // 작은 크기로 조정
                    cursor: "pointer"
                  }}
                  onClick={handlePrevious}
                >
                  Previous
                </Button>
                <Button
                  style={{
                    background: "none",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px", // 작은 크기로 조정
                    cursor: "pointer"
                  }}
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </RippleBox>
          </ReactModal>
        </Center>
      </Snowflakes>
    </div>
  );
}

export default LoadingPage;