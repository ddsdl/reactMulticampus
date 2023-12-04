import React, { useCallback, useRef, useState } from 'react'
import { produce } from 'immer'
import moment from 'moment'

function BoardForm(props) {
  const { addBoard } = props;

  const [data, setData] = useState({
    no: '',
    name: '',
    title: '',
    content: '',
    regdate: '',
  });
  const changeData = useCallback((evt) => {
    setData((data) => {
      return produce(data, draft => {
        draft[evt.target.name] = evt.target.value;
      });
    })
  }, []);

  const cnt = useRef(4);

  const sendData = useCallback((evt) => {
    evt.preventDefault();

    const check = data.name.trim().length !== 0 && data.title.trim().length !== 0 && data.content.trim().length !== 0;
    if (check && !data.regdata) {
      const board = {
        no: cnt.current++,
        name: data.name,
        title: data.title,
        content: data.content,
        regdate: moment(new Date()).format('YYYY-MM-DD'),
      };
      addBoard(board);
    } else {
      const board = {
        no: cnt.current++,
        name: data.name,
        title: data.title,
        content: data.content,
        regdate: data.regdate
      };
      addBoard(board)
    }
  }, [data, addBoard]);

  return (
    <form className="mb-3">
      <div className="input-group mb-1">
        <span className="input-group-text">이 &nbsp; 름</span>
        <input type="text" id="username" name="name" className="form-control"
          value={data.name} onChange={changeData} />
      </div>
      <div className="input-group mb-1">
        <span className="input-group-text">타이틀</span>
        <input type="text" id="title" name="title" className="form-control"
          value={data.title} onChange={changeData} />
      </div>
      <div className="input-group mb-1">
        <span className="input-group-text">내 &nbsp; 용</span>
        <textarea id="content" name="content" rows={5} className="form-control"
          value={data.content} onChange={changeData} ></textarea>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">작성일</span>
        <input type="date" id="regdate" name="regdate" className="form-control"
          value={data.regdate} onChange={changeData} />
      </div>
      <div className="form-group mb-3 text-end">
        <button type="submit" className="btn btn-danger" onClick={sendData}>ADD</button>
      </div>
    </form>
  )
}

export default BoardForm
