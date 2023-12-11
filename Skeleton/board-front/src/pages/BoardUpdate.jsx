import React from 'react'
import SubIntroSingle from '@components/SubIntroSingle';

function BoardUpdate() {
  return (
    <main id="main">

      {/* ======= Intro Single ======= */}
      <SubIntroSingle
        title="게시물 수정"
        sub="Board Update"
        pathName="board update">
      </SubIntroSingle>

      {/*  ======= Property Grid =======  */}
      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <form className="col-sm-12">
              <table className="table">
                <tbody>
                  <tr>
                    <td>타이틀</td>
                    <td><input type="text" className="form-control" name="title" /></td>
                  </tr>
                  <tr>
                    <td>내용</td>
                    <td><textarea cols="80" rows="10" name="content" className="form-control"></textarea></td>
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
                      <button className="btn btn-primary btn-sm">리스트</button>{' '}
                      <button className="btn btn-warning btn-sm">수정</button>{' '}
                      <button className="btn btn-danger btn-sm">삭제</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

          </div>

        </div>
      </section>
    </main>
  )
}

export default BoardUpdate;

BoardUpdate.defaultProps = {
  sub: ''
};
