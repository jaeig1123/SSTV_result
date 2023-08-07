import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import ReportModal from './reportModal';
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';
import axios from "axios";
import {create} from 'zustand';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import './report.css';



const Report = () => {
  const itemsPerPage = 10;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [reportList, setReportList] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchUserType, setSearchUserType] = useState('0');
  const [report, setReport] = useState(null);
  
  const openReportModal = (report) => {
    setReport(report);
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
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/report/getReportList`, {
            params : {
                searchUserType : searchUserType,
                searchKeyword : searchKeyword
            }
        });
        return response.data.firstData;
    } catch (error) {
        console.error(error);
        return [];
    }
  }

  const removeReport = async (reportNo) => {
    const response =  await axios.get(`${process.env.REACT_APP_NODE_URL}/report/removeReport`, {
      params : {
        reportNo : reportNo
      }
    });

    const result = response.data.result
    
    if(result == 'success') {
      alert('신고가 삭제되었습니다.');
      getReportList();
    }
  }
  
  const getReportList = async () => {
    const response = await fetchData();
    setReportList(response);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getReportList();
    }
  };

  useEffect(() => {
    getReportList();
  }, []);
  
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value)
  }

  const hanldeSearchUserTypeChange = (event) => {
    setSearchUserType(event.target.value)
  }

  const getReportType = (reportCode) => {
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

  //paginate
  const Reports = ({ currentItems }) => {
    return (
      <>
        {currentItems.map((report) => (
          
          <tr key={report.REPORT_NO}>
            <td onClick={() => openReportModal(report)}>{report.USER_ID}</td>
            <td>{report.STREAMING_USER_ID}</td>
            <td>{getReportType(report.REPORT_TYPE)}</td>
            <td>{report.REPORT_CONTENT}</td>
            <td>{report.REPORT_DATE} <FontAwesomeIcon icon={faXmark}  onClick={() => removeReport(report.REPORT_NO)}/></td>
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

  if (reportList != null && reportList != undefined) {
    //paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = reportList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(reportList.length / itemsPerPage);

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
                      <th>신고자ID</th>
                      <th>피신고자ID</th>
                      <th>신고 유형</th>
                      <th>신고 내용</th>
                      <th>신고 날짜</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Reports currentItems={currentItems} />
                  </tbody>
                </table>
                {modalIsOpen && <ReportModal onClose={modalIsOpen} setOnClose={setIsOpen} data = {report}/>}
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
                    checked = {searchUserType === '0'} 
                    onChange={hanldeSearchUserTypeChange}
                />
                <label htmlFor="b_subject">신고자ID</label>

                <input 
                    type="radio" 
                    id="b_content" 
                    name="search" 
                    value='1' 
                    checked = {searchUserType === '1'} 
                    onChange={hanldeSearchUserTypeChange}
                />
                <label htmlFor="b_content">피신고자ID</label>
                
                <input type="text" className="input_txt" id="searchText" value={searchKeyword} onChange={handleSearchKeywordChange}  onKeyPress={handleKeyPress}/>
                <button class="list_search" id="searchWord" onClick={getReportList}>
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
