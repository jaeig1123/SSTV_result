import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import StreamingBanModal from './streamingBanModal';
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './style.css';


const Report = () => {
  //paginate
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);

  //modal
  const [modalIsOpen, setIsOpen] = useState(false);

  //search
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchCondition, setSearchCondition] = useState('0');

  //banList
  const [streamingBanList, setStreamingBanList] = useState([]);
  const [streamingBan, setStreamingBan] = useState(null);
  
  
  const openStreamingBanModal = (report) => {
    setStreamingBan(report);
    openModal();
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/ban/getStreamingBanList`, {
          params : {
            searchCondition : searchCondition,
            searchKeyword :searchKeyword
          }
        });
        return response.data.firstData;
    } catch (error) {
        console.error(error);
        return [];
    }
  }
  
  const getStreamingBanList = async () => {
    const response = await fetchData();
    setStreamingBanList(response);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getStreamingBanList();
    }
  };

  useEffect(() => {
    getStreamingBanList();
  }, []);
  
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value)
  }

  const hanldeSearchUserTypeChange = (event) => {
    setSearchCondition(event.target.value)
  }

  const getBanType = (reportCode) => {
    let reportType;

    switch (reportCode) {
      case 1:
        reportType = '불법/음란';
        break;
      case 2:
        reportType = '저작권 침해';
        break;
      case 3:
        reportType = '명예훼손';
        break;
      case 4:
        reportType = '청소년 유해';
        break;
      case 5:
        reportType = '기타';
        break;
      default:
        break;
    }
    return reportType;
  }

  const getCategory = (categoryId) => {
    let result;
    switch(categoryId) {
        case 1:
            result = '게임';
            break;
        case 2:
            result = '일상';
            break;
        case 3:
            result = '스포츠';
            break;
        case 4:
            result = '먹방';
            break;
        case 5:
            result = '요리';
            break;
        case 6:
            result = '교육';
            break;
        default:
            break;
    }
    return result;
  }

  //paginate
  const StreamingBans = ({ currentItems }) => {
    return (
      // <th>회원 닉네임</th>
      // <th>스트리밍 제목</th>
      // <th>스트리밍 카테고리</th>
      // <th>정지 유형</th>
      // {/* <th>정지 내용</th> */}
      // <th>정지 날짜</th>

      <>
        {currentItems.map((streamingBan) => (
          
          <tr key={streamingBan.STREAMING_NO}>
            <td onClick={() => openStreamingBanModal(streamingBan)}>{streamingBan.USER_NICKNAME}</td>
            <td>{streamingBan.STREAMING_TITLE}</td>
            <td>{getCategory(streamingBan.STREAMING_CATEGORY)}</td>
            <td>{getBanType(streamingBan.BAN_TYPE)}</td>
            <td>{streamingBan.BAN_DATE}</td>
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

  if (streamingBanList != null && streamingBanList != undefined) {
    //paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = streamingBanList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(streamingBanList.length / itemsPerPage);

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
                      <th>회원 닉네임</th>
                      <th>스트리밍 제목</th>
                      <th>스트리밍 카테고리</th>
                      <th>정지 유형</th>
                      <th>정지 날짜</th>
                    </tr>
                  </thead>
                  <tbody>
                    <StreamingBans currentItems={currentItems} />
                  </tbody>
                </table>
                {modalIsOpen && <StreamingBanModal onClose={modalIsOpen} setOnClose={setIsOpen} data = {streamingBan}/>}
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

                <input 
                    type="radio" 
                    id="b_subject" 
                    name="search" 
                    value='0' 
                    checked = {searchCondition === '0'} 
                    onChange={hanldeSearchUserTypeChange}
                />
                <label htmlFor="b_subject">회원 닉네임</label>

                <input 
                    type="radio" 
                    id="b_content" 
                    name="search" 
                    value='1' 
                    checked = {searchCondition === '1'} 
                    onChange={hanldeSearchUserTypeChange}
                />
                <label htmlFor="b_content">스트리밍 제목</label>
                
                <input type="text" className="input_txt" id="searchText" value={searchKeyword} onChange={handleSearchKeywordChange} onKeyPress={handleKeyPress} />
                <button class="list_search" id="searchWord" onClick={getStreamingBanList}>
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

export default Report;
