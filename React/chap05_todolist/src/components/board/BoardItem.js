import React, { memo } from 'react'
import one from './board.module.css'

function BoardItem(props) {
  const { board, deleteBoard, findItem } = props;

  return (
    <tr key={board.no}>
      <td>{board.no}</td>
      <td><span className={one.link} href="#" onClick={() => findItem(board.no)}>{board.title}</span></td>
      <td>{board.name}</td>
      <td>{board.regdate}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => deleteBoard(board.no)}>DELETE</button>
      </td>
    </tr>
  )
}

export default memo(BoardItem);
