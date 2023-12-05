import React, { memo } from 'react'
import one from './board.module.css'
import { useDispatch } from 'react-redux';

import { deleteBoard, findBoard } from '@stores/boardStore'

function BoardItem(props) {
  const { board } = props;
  const dispatch = useDispatch();

  return (
    <tr key={board.no}>
      <td>{board.no}</td>
      <td><span className={one.link} onClick={() => dispatch(findBoard(board.no))}>{board.title}</span></td>
      <td>{board.name}</td>
      <td>{board.regdate}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteBoard(board.no))}>DELETE</button>
      </td>
    </tr>
  )
}

export default memo(BoardItem);
