import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import SubIntroSingle from '@components/SubIntroSingle';

function BoardList() {
  const navigate = useNavigate();

  return (
    <main id="main">

      {/* ======= Intro Single ======= */}
      <SubIntroSingle
        title="게시물 목록"
        sub="Board List"
        pathName="board">
      </SubIntroSingle>

      {/*  ======= Property Grid =======  */}
      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>타이틀</th>
                    <th>이름</th>
                    <th>작성일</th>
                    <th>조회수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><Link to="/detail">타이틀</Link></td>
                    <td>홍길동</td>
                    <td>2023-12-25</td>
                    <td>1</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end">
                      <button className="btn btn-primary btn-sm" onClick={() => navigate('/insert')}>ADD</button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default BoardList;

BoardList.defaultProps = {
  sub: ''
};
