import React, { useState } from "react";
import axios from 'axios'

function A01Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState();

  const getContactList = (no = 1, size = 10) => {
    // "http://localhost:8000/contacts?pageno=1&pagesize=10";
    // axios.get(URL, { params: {}, headers: {} });
    axios.get(baseURL, { params: { pageno: no, pagesize: size } })
      .then((resp) => {
        // console.log(resp.data);
        setData(resp.data);
      })
      .catch((error) => {
        // console.error(error);
        setData(error);
      })
  }

  const getContactListAsync = async (no = 1, size = 10) => {
    try {
      const resp = await axios.get(baseURL, { params: { pageno: no, pagesize: size } });
      setData(resp.data);
    } catch (error) {
      setData(error);
    }
  }

  const getContact = (no) => {
    axios({
      method: 'GET',
      url: `${baseURL}${no}`,
      params: {},                                           // GET  (select, delete)
      data: {},                                             // POST (insert, update)
      headers: { 'Content-Type': 'application/json', },     // POST
    })
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        setData(error);
      })
  }

  const addContect = () => {
    // axios.post(URL, 입력데이터, { params: {}, headers: {} });

    const sendData = { "name": "강감찬", "tel": "010-2222-3339", "address": "서울시" };
    axios.post(baseURL, sendData, { headers: { 'Content-Type': 'application/json' } })
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        setData(error);
      })
  }
  const upodateContect = (no) => {
    // axios.put(URL, 수정데이터, { params: {}, headers: {} });

    const sendData = { "no": no, "name": "이순신", "tel": "010-2222-2222", "address": "진해시" };
    axios.put(baseURL + no, sendData, { headers: { 'Content-Type': 'application/json' } })
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        setData(error);
      })
  }
  const deleteContect = (no) => {
    // axios.delete(URL, { params: {}, headers: {} });

    axios.delete(baseURL + no)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        setData(error);
      })
  }

  return (
    <div>
      <h3>A01 Axios GET</h3>
      <button onClick={() => getContactList(1, 10)}>DATA LIST</button>
      <button onClick={() => getContactListAsync(2, 10)}>DATA LIST ASYNC</button>
      <button onClick={() => getContact(1)}>GET</button>
      <button onClick={addContect}>ADD</button>
      <button onClick={() => upodateContect(1701663917590)}>UPDATE</button>
      <button onClick={() => deleteContect(1701663917590)}>DELETE</button>
      <br />
      <br />

      <textarea cols="100" rows="15" defaultValue={JSON.stringify(data, '', 4)}></textarea>
    </div>
  );
}
export default A01Axios;
