import React from 'react'
import { useNavigate } from 'react-router-dom';

import SubIntroSingle from '@components/SubIntroSingle';

function BoardDetail() {
  const navigate = useNavigate();

  return (
    <main id="main">

      {/* ======= Intro Single ======= */}
      <SubIntroSingle
        title="게시물 상세"
        sub="board detail"
        pathName="board detail">
      </SubIntroSingle>

      {/*  ======= Property Grid =======  */}
      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <tbody>
                  <tr>
                    <td>타이틀</td>
                    <td>첫번째 게시물</td>
                  </tr>
                  <tr>
                    <td>내용</td>
                    <td>첫번째 게시물 내용</td>
                  </tr>
                  <tr>
                    <td>작성일</td>
                    <td>2023-12-25</td>
                  </tr>
                  <tr>
                    <td>조회수</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="text-end">
                      <button className="btn btn-primary btn-sm" onClick={() => navigate('/boards')}>리스트</button>{' '}
                      <button className="btn btn-warning btn-sm" onClick={() => navigate('/update')}>수정</button>{' '}
                      <button className="btn btn-danger btn-sm">삭제</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default BoardDetail;

BoardDetail.defaultProps = {
  sub: ''
};
