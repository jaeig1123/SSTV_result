import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import UserModal from './userModal';
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';
import StreamingRollBanModal from './addStreamingRollBanModal';
import axios from "axios";
import './help.css';
import './layout.css';
import './paginate.css';
// import './mybs.css';
// import './style.css';
import './styleSecond.css'



const Report = () => {
  //paginate
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);

  //modal
  const [userModalIsOpen, setUserModalIsOpen] = useState(false);
  const [addStreamingRollbanModalIsOpen, setAddStreamingRollbanModalIsOpen] = useState(false);
  

  //검색
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchCondition, setSearchCondition] = useState('0');
  
  //회원목록
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState(null);
  
  const openUserModal = (user) => {
    setUser(user)
    setUserModalIsOpen(true);
  }

  const closeUserModal = () => {
    setUserModalIsOpen(false);
  }

  const openAddStreamingRollBanModal = () => {
    closeUserModal();
    setAddStreamingRollbanModalIsOpen(true);
  }

  const closeAddStreamingRollBanModal = () => {
    setAddStreamingRollbanModalIsOpen(false);
  }

  const fetchData = async (method, url, data) => {
    try {
      let result;

      if(method === 'GET') {
        const response = await axios.get(url, {
          params : data
        });
        result = response;
      }
      if(method === 'POST'){
        const response = await axios.post(url, data);
        result = response;
      }

      return result;
    } catch (error) {
        console.error(error);
        return [];
    }
  }
  
  const getUserList = async () => {
    const method = 'GET';    
    const url = `${process.env.REACT_APP_NODE_URL}/user/getAdminUserList`;
    const data = {
      searchCondition : searchCondition,
      searchKeyword : searchKeyword
    }

    const response = await fetchData(method, url, data);
    const userList = response.data.firstData;
    setUserList(userList);
  }

  useEffect(() => {
    getUserList();
  }, []);
  
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value)
  }

  const hanldeSearchCondition = (event) => {
    setSearchCondition(event.target.value)
  }

  const handleUserModalOnClick = () => {
    openAddStreamingRollBanModal();
  }

  const handleAddStreamingRollBanSubmit = async (data) => {
    const method = 'POST';
    const url = `${process.env.REACT_APP_NODE_URL}/ban/addStreamingRoleBan`;
    const param = {
      userId : data.userId,
      banType : data.banType,
      banContent : data.banContent,
      banPeriod : data.banPeriod
    }

    const response = await fetchData(method, url, param);
    const result = response.data.result;
    
    closeAddStreamingRollBanModal();
    
    if(result == 'success') {
      alert('정지되었습니다.');
    }else {
      alert('실패하였습니다.');
    }
    window.location.reload();
  }

  //엔터검색
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getUserList();
    }
  };
  
  //paginate
  const Users = ({ currentItems }) => {
    return (
      <>
        {currentItems.map((user) => (
          
          <tr key={JSON.stringify(user.USER_ID)}>
            <td onClick={() => openUserModal(user)}>{user.USER_NAME}</td>
            <td>{user.USER_NICKNAME}</td>
            <td onClick={() => openUserModal(user)}>{user.USER_ID}</td>
            <td>{user.DATE_BIRTH}</td>
            <td>{user.EMAIL}</td>
            <td>{user.PHONE}</td>
            <td>{user.SIGN_DATE}</td>
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


    //paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = userList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(userList.length / itemsPerPage);

    return (
      <div>
        <div style={{ marginLeft: '200px'}}>        
          <SideBar/>
        </div>


        <Header/>  
        <div id="content" className="help" style={{marginTop:'100px'}}>
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
                      <th>회원 이름</th>
                      <th>회원 닉네임</th>
                      <th>회원ID</th>
                      <th>생년월일</th>
                      <th>이메일</th>
                      <th>전화번호</th>
                      <th>가입일자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Users currentItems={currentItems} />
                  </tbody>
                </table>
                {userModalIsOpen && <UserModal 
                onClose={userModalIsOpen} 
                setOnClose={setUserModalIsOpen} 
                data = {user}
                onClick = {handleUserModalOnClick}
                />}

                {addStreamingRollbanModalIsOpen && <StreamingRollBanModal
                onClose={addStreamingRollbanModalIsOpen} 
                setOnClose={setAddStreamingRollbanModalIsOpen} 
                onSubmit = {handleAddStreamingRollBanSubmit}
                data = {user}
                />}
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
                <label htmlFor="b_subject">회원이름</label>
                <input 
                    type="radio" 
                    id="b_content" 
                    name="search" 
                    value='1' 
                    checked = {searchCondition === '1'} 
                    onChange={hanldeSearchCondition}
                />
                <label htmlFor="b_content">회원닉네임</label>
                
                <input
                  type="text"
                  className="input_txt"
                  id="searchText"
                  value={searchKeyword}
                  onChange={handleSearchKeywordChange}
                  onKeyPress={handleKeyPress}
                />
                <button class="list_search" id="searchWord" onClick={getUserList}>
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

export default Report;
