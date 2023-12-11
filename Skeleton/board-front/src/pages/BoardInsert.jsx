import React from 'react'
import SubIntroSingle from '@components/SubIntroSingle';
import { useNavigate } from 'react-router-dom';

function BoardInsert() {
  const navigate = useNavigate();

  return (
    <main id="main">

      {/* ======= Intro Single ======= */}
      <SubIntroSingle
        title="Our Amazing Properties"
        sub="Grid Properties"
        pathName="board">
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
                    <td colSpan="2" className="text-end">
                      <button type="button" className="btn btn-primary btn-sm" onClick={() => navigate('/boards')}>취소</button>{' '}
                      <button type="submit" className="btn btn-warning btn-sm">입력</button>
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

export default BoardInsert;

BoardInsert.defaultProps = {
  sub: ''
};
