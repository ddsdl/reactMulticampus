import React, { useCallback, useRef, useState } from 'react'
import { produce } from 'immer'
import monent from 'moment'

import BoardForm from './BoardForm'
import BoardTable from './BoardTable'

function BoardContainer() {
  const [boardList, setBoardList] = useState([
    { no: 1, title: '게시물 1', content: '게시물 내용 1', name: '홍길동', regdate: '2023-12-25' },
    { no: 2, title: '게시물 2', content: '게시물 내용 2', name: '놀부', regdate: '2023-12-26' },
    { no: 3, title: '게시물 3', content: '게시물 내용 3', name: '흥부', regdate: '2023-12-20' },
  ]);

  const [data, setData] = useState({
    no: '',
    name: '',
    title: '',
    content: '',
    regdate: '',
  });

  const findItem = useCallback((no) => {
    setData((data) => {
      const item = boardList.find(board => board.no === no);
      return { ...data, ...item };
    });
  }, [boardList]);

  const changeData = useCallback((evt) => {
    setData((data) => {
      return produce(data, draft => {
        draft[evt.target.name] = evt.target.value;
      });
    })
  }, []);

  const cnt = useRef(3);

  const addBoard = useCallback((board) => {
    setBoardList((list) => {
      // list는 이전 항목
      const item = {
        no: cnt.current++,
        name: board.name,
        title: board.title,
        content: board.content,
        regdate: board.regdate || monent(new Date()).format('YYYY-MM-DD')
      };
      // 입력 후 필드의 값 비우기 
      setData({ no: '', name: '', title: '', content: '', regdate: '' })
      return list.concat(item)
    })
  }, []);

  const deleteBoard = useCallback((no) => {
    setBoardList((list) => {
      const index = list.findIndex(board => board.no === no);
      return produce(list, draft => {
        draft.splice(index, 1);
      })
    })
  }, []);

  return (
    <>
      <BoardForm addBoard={addBoard} data={data} changeData={changeData}></BoardForm >
      <BoardTable boardList={boardList} deleteBoard={deleteBoard} findItem={findItem}></BoardTable>
    </>
  )
}

export default BoardContainer