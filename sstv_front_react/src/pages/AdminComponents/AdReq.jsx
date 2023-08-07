import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import AdModal from './adModal';
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';
import axios from "axios";
import {create} from 'zustand';
import Modal from 'react-modal';
import './style.css';
import { async } from "q";


const AdReq = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [adReqList, setAdReqList] = useState([]);
  const [adReq, setAdReq] = useState(null);


  //modal
  const openAdReqModal = (adReq) => {
    setAdReq(adReq);
    openModal();
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  //광고신청목록 가져오기
  const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/ad/getAdReqList`, {
            params : {
                searchKeyword : searchKeyword,
                processCode : 0
            }
        });
        return response.data.firstData;
    } catch (error) {
        console.error(error);
        return [];
    }
  }
  
  const getAdReqList = async () => {
    const response = await fetchData();
    setAdReqList(response);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getAdReqList();
    }
  };

  useEffect(() => {
    getAdReqList();
  }, []);

  //광고수락, 광고거절
  const updateAdReqProcessCode = async (adReqNo, processCode) => {
    if(processCode == '2') {
      await axios.get(`${process.env.REACT_APP_NODE_URL}/ad/updateProcessCode`, {
        params : {
          adReqNo : adReqNo,
          processCode : processCode,
          denyCode : 1
        }
      });
      //회원 코인, 코인 사용내역 업데이트
      axios.get('/user/getUser/'+adReq.USER_ID).then((response)=>{
        const dbCoin = response.data.data.coin;
        axios.post('/user/update',{userId:adReq.USER_ID, coin:dbCoin+10000});
      })     
      axios.post('/user/addCoinHistory',{userId:adReq.USER_ID, ticketProdNo:0, prodName:2, price:10000});
    }else {
      await axios.get(`${process.env.REACT_APP_NODE_URL}/ad/updateProcessCode`, {
        params : {
          adReqNo : adReqNo,
          processCode : processCode,
        }
      });
    }

    getAdReqList();
  }
  
  //검색창 입력
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value)
  }


  //paginate
  const AdReqs = ({ currentItems }) => {
    return (
      <>
        {currentItems.map((adReq) => (
          <tr key={adReq.AD_REQ_NO}>
            <td >{adReq.USER_ID}</td>
            <td >{adReq.AD_REQ_DATE}</td>
            <td>{adReq.PAYMENT_COIN}</td>
            <td onClick={() => updateAdReqProcessCode(adReq.AD_REQ_NO, 1)}>
              <button className="pop-btn">
                <a className="btn btn_blue" id="report_pop">수락</a>
              </button>
            </td>
            <td onClick={() => updateAdReqProcessCode(adReq.AD_REQ_NO, 2)}>
              <button className="pop-btn">
                <a className="btn btn_blue" id="report_pop">거절</a>
              </button>
            </td>
            <td onClick={ () => openAdReqModal(adReq)}>
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

  if (adReqList != null && adReqList != undefined) {
    //paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = adReqList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(adReqList.length / itemsPerPage);

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
                <table cellSpacing="0" cellPadding="0">
                  <colgroup><col width="152"/><col width="*"/><col width="120"/><col width="120"/></colgroup>
                  <thead>
                    <tr>
                      <th>신청회원ID</th>
                      <th>신청날짜</th>
                      <th>지불 코인</th>
                      <th>수락</th>
                      <th>거절</th>
                      <th>광고시청</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AdReqs currentItems={currentItems} />
                  </tbody>
                </table>
                {modalIsOpen && <AdModal onClose={modalIsOpen} setOnClose={setIsOpen} data = {adReq}/>}
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
                <input type="text" className="input_txt" id="searchText" value={searchKeyword} onChange={handleSearchKeywordChange}  onKeyPress={handleKeyPress}/>
                <button class="list_search" id="searchWord" onClick={getAdReqList}>
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

export default AdReq;
