import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios'

import Pagination from 'react-js-pagination'
import 'components/css/pagination.css';     // jsconfig 때문에 절대 패스 사용 가능

import ContactItem from 'components/ContactItem'

const baseURL = process.env.REACT_APP_CONTACT_LONG_PATH;

function GetContactList() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [contactList, setContactList] = useState({
    pageno: 1, pagesize: 10, totalcount: 0, contacts: []
  });

  const [activePage, setActivePage] = useState(1);
  const handlePageChange = (page) => {
    setActivePage(page);
    getContactList(page, 10);
  }

  const getContactList = useCallback(async (no = 1, size = 10) => {
    setIsLoading(true);
    try {
      const resp = await axios.get(baseURL, { params: { pageno: no, pagesize: size } });
      // console.log(resp.data);
      setContactList(resp.data);
      setIsLoading(false);
    } catch (error) {
      // console.error(error.message);
      setError(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getContactList(1, 10);
  }, [getContactList]);

  if (isLoading) return <div>Loading.....</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {/* 
            1. {contactList && contactList.contacts?.map((contact) => ( 
            2. {contactList?.contacts?.map((contact) => ( 
            3. contactList의 초기값을 세팅 해 놓는다. 즉 빈 배열이라도 배열 객체는 존재 => 에러 아님
          */}
          {/* {contactList.contacts.map((contact) => (
            <tr key={contact.no}>
              <td>{contact.no}</td>
              <td>{contact.name}</td>
              <td>{contact.tel}</td>
              <td>{contact.address}</td>
              <td><img src={contact.photo} alt="증명 사진" width="70px" /></td>
            </tr>
          ))} */}
          {contactList.contacts.map((contact) => (
            <ContactItem key={contact.no} contact={contact} />
          ))}
        </tbody>
      </table>

      <Pagination
        activePage={activePage} // 현재 페이지
        itemsCountPerPage={contactList.pagesize}  // 한 페이지당 보여 줄 개수
        totalItemsCount={contactList.totalcount}   // 총 아이펨 개수
        pageRangeDisplayed={5}  // 하단에 표시할 그룹의 수
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default GetContactList;
