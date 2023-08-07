import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import StreamingModal from './streamingModal';
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';
import AddStreamingBanModal from "./addStreamingBanModal";
import axios from "axios";
import { Main_stream_list_img } from '../Mainpage/style';
import io from 'socket.io-client'
import './style.css';
import { json } from "react-router-dom";




const AdminStreamingList = () => {
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const socket = io(`${process.env.REACT_APP_NODE_SOCKET_URL}`);
  
  //modal
  const [streamingModalIsOpen, setStreamingModalIsOpen] = useState(false);
  const [addStreamingBanModalIsOpen, setAddStreamingBanModalIsOpen] = useState(false);
  

  //검색
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchCondition, setSearchCondition] = useState('0');
  
  //스트리밍 목록
  const [streamingList, setStreamingList] = useState([]);
  const [streaming, setStreaming] = useState(null);
  
  const openStreamingModal = (user) => {
    setStreaming(user)
    setStreamingModalIsOpen(true);
  }

  const closeStreamingModal = () => {
    setStreamingModalIsOpen(false);
  }

  const openAddStreamingBanModal = (user) => {
    setAddStreamingBanModalIsOpen(true);
  }

  const closeAddStreamingBanModal = () => {
    setAddStreamingBanModalIsOpen(false);
  }

  const fetchData = async (method, url, data) => {
    try {
      if(method == 'GET') {
        const response = await axios.get(url, {
          params : data
        });

        return response;
      }

      if(method == 'POST') {
        const response = await axios.post(url, data, {withCredentials : true});
        return response;
      }
    } catch (error) {
        return [];
    }
  }
  
  
  const getStreamingList = async () => {
    const method = 'GET';
    
    const url = `${process.env.REACT_APP_NODE_URL}/streaming/getAdminStreamingList`
    const data = {
      searchCondition : searchCondition,
      searchKeyword : searchKeyword
    }

    const response = await fetchData(method, url, data);
    const streamingList = response.data.firstData;
    setStreamingList(streamingList);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getStreamingList();
    }
  };

  useEffect(() => {
    getStreamingList();
  }, []);
  
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value)
  }

  const hanldeSearchCondition = (event) => {
    setSearchCondition(event.target.value)
  }

  const handleStreamingModalOnClick = () => {
    closeStreamingModal();
    openAddStreamingBanModal();
  }

  const handleAddStreamingBanModalOnSubmit = async (data) => {
    socket.emit('ban_streaming', {
      roomName: streaming.userId, 
      banType : data.banType,
      banContent : data.banContent
    });

    socket.disconnect();
    const method = 'POST';
    const url = `${process.env.REACT_APP_NODE_URL}/ban/addStreamingBan`;
    const param = {
      banContent : data.banContent,
      banType : data.banType,
      userId : data.streamingUserId
    }

    const response = await fetchData(method, url, param);
    const result = response.data.result;

    if(result == 'success') {
      alert('정지되었습니다.');
      
    }else {
      if(response.data.firstData == '0') {
        alert('관리자가 아닙니다.');
      }

      if(response.data.firstData == '1') {
        alert('서버에러입니다.');
      }
    }
    closeAddStreamingBanModal();
  }

  const getCategory = (categoryId) => {
    let result;
    switch(categoryId) {
        case '1':
            result = '게임';
            break;
        case '2':
            result = '일상';
            break;
        case '3':
            result = '스포츠';
            break;
        case '4':
            result = '먹방';
            break;
        case '5':
            result = '요리';
            break;
        case '6':
            result = '교육';
            break;
        default:
            break;
    }
    return result;
  }
  
  //paginate
  const AdminStreamings = ({ currentItems }) => {
    return (
      <>
        {currentItems.map((streaming) => (
          
          <tr key={JSON.stringify(streaming.streamingPk)}>
            <td onClick={() => openStreamingModal(streaming)}><Main_stream_list_img src={streaming.thumnailUrlWithOutAd}/></td>
            <td>{streaming.userNickname}</td>
            <td>{streaming.streamingTitle}</td>
            <td>{getCategory(streaming.streamingCategory)}</td>
            <td>{streaming.streamingViewer}</td>
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

  if (streamingList != null && streamingList != undefined) {
    //paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = streamingList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(streamingList.length / itemsPerPage);

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
                      <th>썸네일</th>
                      <th>회원 닉네임</th>
                      <th>스트리밍 제목</th>
                      <th>스트리밍 카테고리</th>
                      <th>실시간 시청자수</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AdminStreamings currentItems={currentItems} />
                  </tbody>
                </table>
                {streamingModalIsOpen && <StreamingModal 
                onClose={streamingModalIsOpen} 
                setOnClose={setStreamingModalIsOpen} 
                onClick = {handleStreamingModalOnClick}
                data = {streaming}/>}

                
                {addStreamingBanModalIsOpen && <AddStreamingBanModal
                onClose={addStreamingBanModalIsOpen} 
                setOnClose={setAddStreamingBanModalIsOpen} 
                onSubmit={handleAddStreamingBanModalOnSubmit}
                data = {streaming}/>}

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
                    onChange={hanldeSearchCondition}
                />
                <label htmlFor="b_subject">회원 닉네임</label>

                <input 
                    type="radio" 
                    id="b_content" 
                    name="search" 
                    value='1' 
                    checked = {searchCondition === '1'} 
                    onChange={hanldeSearchCondition}
                    
                />
                <label htmlFor="b_content">스트리밍 제목</label>
                
                <input type="text" className="input_txt" id="searchText" value={searchKeyword} onChange={handleSearchKeywordChange} onKeyPress={handleKeyPress} />
                <button class="list_search" id="searchWord" onClick={getStreamingList}>
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

export default AdminStreamingList;
