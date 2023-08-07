import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import AdModal from './adModal';
import UpdateAdCycle from "./updateAdCycle";
import axios from "axios";
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';


import './style.css';
import fa from "fontawesome";


const Ad = () => {
  const itemsPerPage = 10;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateAdCycleModalIsOpen, setUpdateAdCycleModalIsOpen] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [adList, setAdList] = useState([]);
  const [ad, setAd] = useState([]);


  //modal
  const openAdModal = (adReq) => {
    setAd(adReq);
    setIsOpen(true);
  }

  const openUpdateAdCycleModal = () => {
    setUpdateAdCycleModalIsOpen(true);
  }

  const handleUpdateAdCycleModal = (data) => {
    const adCycle = data.adCycle;
    
    axios.get(`${process.env.REACT_APP_NODE_URL}/ad/updateAdCycle`, {
      params : {
        adCycle : adCycle
      }
    }).then((response) => {
      if(response.data.result == 'success') {
        alert('설정되었습니다.');
      }
      setUpdateAdCycleModalIsOpen(false);
    });
 
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  //광고신청목록 가져오기
  const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/ad/getAdList`);
        return response.data.firstData;
    } catch (error) {
        console.error(error);
        alert('광고목록 조회에 실패했습니다.');
        return [];
    }
  }
  
  const getAdList = async () => {
    const response = await fetchData();
    setAdList(response);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getAdList();
    }
  };

  useEffect(() => {
    getAdList();
  }, []);
  
  //검색창 입력
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value)
  }


  //paginate
  const Ads = ({ currentItems }) => {
    return (
      <>
        {currentItems.map((adReq) => (
          <tr key={adReq.AD_REQ_NO}>
            <td >{adReq.USER_ID}</td>
            <td >{adReq.AD_REQ_DATE}</td>
            <td>{adReq.PAYMENT_COIN}</td>
            <td>{adReq.AD_PLAYS_COUNT}</td>
            <td>{adReq.AD_STREAMING_PLAYS_COUNT}</td>
            <td>{adReq.AD_TOTAL_VIEWERS}</td>
            <td onClick={() => openAdModal(adReq)}>
              <button className="pop-btn">
                <a className="btn btn_blue" id="report_pop">시청</a>
              </button>
            </td>
          </tr>
        ))}
      </>
    )
  };

  //paginate
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  if (adList != null && adList != undefined) {
    //paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = adList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(adList.length / itemsPerPage);

    return (
      <div>
        <div style={{ marginLeft: '200px' }}>        
        <SideBar/>
        </div>

        <Header/>
        <div style={{ marginTop: '100px' }} ></div>
        <div id="content" className="help">
          <div className="sub_area">
            <div className="stop_area">
            <h4><img src="https://advertise.kr.object.ncloudstorage.com/adminBanner.jpeg" alt="회원 신고목록" /></h4>
            </div>
            <div className="sub_wrap">
              <div className="tb_mylist">
              <button className="addAdReq-button" onClick={openUpdateAdCycleModal}>광고주기 설정</button>
              {updateAdCycleModalIsOpen && <UpdateAdCycle 
              onClose={updateAdCycleModalIsOpen} 
              setOnClose={setUpdateAdCycleModalIsOpen}
              onSubmit={handleUpdateAdCycleModal}
              />}
                <table cellSpacing="0" cellPadding="0">
                  <colgroup><col width="152"/><col width="*"/><col width="120"/><col width="120"/></colgroup>
                  <thead>
                    <tr>
                      <th>신청회원ID</th>
                      <th>신청날짜</th>
                      <th>지불 코인</th>
                      <th>광고 재생횟수</th>
                      <th>재생된 스트리밍수</th>
                      <th>시청한 회원수</th>
                      <th>광고시청</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Ads currentItems={currentItems} />
                  </tbody>
                </table>
                {modalIsOpen && <AdModal onClose={modalIsOpen} setOnClose={setIsOpen} data = {ad}/>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                  containerClassName="pagination"
                  activeClassName="active"
                  previousClassName="previous"
                  nextClassName="next"
                  disabledClassName="disabled"
                />
              </div>
              <div className="search_area">
                
                <input type="text" className="input_txt" id="searchText" value={searchKeyword} onChange={handleSearchKeywordChange} onKeyPress={handleKeyPress} />
                <button class="list_search" id="searchWord" onClick={getAdList}>
                  <span>검색</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      
    )
  }

  return null;
}

export default Ad;
