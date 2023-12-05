import React from 'react'
import BoardItem from './BoardItem';
import { useSelector } from 'react-redux';

function BoardTable() {
  const { boardList } = useSelector(state => state.boardStore);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>번호</th>
          <th>타이틀</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {boardList?.map((board) => <BoardItem key={board.no} board={board} />)}
      </tbody>
    </table>
  )
}
export default BoardTable
