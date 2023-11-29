import React, { useRef, useState } from "react";

function A06CreateDOM() {
  const baseArray = ["NC", "두산", "엘지", "KT", "키움"];

  const [baseObject, setBaseObject] = useState([
    { id: 1, team: "NC", value: "NC" },
    { id: 2, team: "두산", value: "Doosan" },
    { id: 3, team: "엘지", value: "LG" },
  ]);

  const [data, setData] = useState({
    teamOne: "",
    teamTwo: "",
    team: "",
    isChecked: false,
  });

  const changeTeam = (evt) => setData({ ...data, team: evt.target.value });
  const addBaseArray = () => {
    baseArray.push(data.team);
    // console.log(baseArray);
  }
  const changeCheck = () => {
    setData({ ...data, isChecked: !data.isChecked });
  }

  // 리 렌더링 될때마다 4로 다시 초기화된다
  // let cnt = 4;

  // 상태변수 => 리엑트에 의해 변경된 값이 유지되는 변수
  // const [cnt, setCnt] = useState(4);     => 화면 리렌더링을 한다

  // 상태변수 =>리엑트에 의해 변경된 값이 유지되는 변수. 다만 값이 변경되도 화면 리 렌더링 작업은 하지 않음
  // useState => 리 렌더링 한다. useRef => 리 렌더링 안한다
  const cnt = useRef(4);
  const addbaseObject = () => {
    const team = { id: cnt.current++, team: '삼성', value: 'Samsung' };
    // setCnt(cnt + 1);
    // console.log(cnt)
    setBaseObject(baseObject.concat(team));
    // console.log(baseObject);
  }

  const makeTeamView = () => {
    const dom = baseObject.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.team}</td>
        <td>{item.value}</td>
      </tr>
    ));
    return dom;
  }

  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <div>Loading.....</div>

  return (
    <div className="mb-5">
      <h3>A06 Make DOM</h3>
      SelectBox: {data.teamOne}
      <br />
      <select name="teamOne" className="form-control">
        <option>선택해주세요</option>
        {/* ["NC", "두산", "엘지", "KT", "키움"]; 
          index는 가능하면 key로 사용하지 말자
        */}
        {
          baseArray.map((item, idx) => <option key={idx}>{item}</option>)
        }
      </select>

      SelectBox: {data.teamTwo}
      <br />
      <select name="teamTwo" className="form-control">
        <option value="">선택해주세요</option>
        {baseObject.map((item) => <option key={item.id} value={item.value}>{item.team}</option>)}
      </select>

      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Team</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {baseObject.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.team}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          {makeTeamView()}
        </tfoot>
      </table>

      {/* baseObject 배열에 { id: 4, team: '삼성', value: 'Samsung'}을 추가하고 값을 console.log로 확인하시오 */}
      <button className="btn btn-outline-primary btn-sm" onClick={addbaseObject}>ADD TEAM</button>
      <br />
      <br />

      {data.isChecked &&
        <div className="input-group">
          {/* input에 입력된 값을 기반으로  baseArray에 입력된 값을 추가하시오.
          값은 data의 team에 사용자가 입력한 값 대입 => Add 버튼을 클릭하면 baseArray에 입력된 값을 배열 맨 뒤에 추가
          console.log로 확인
        */}
          <input type="text" className="form-control" value={data.team} onChange={changeTeam} />
          <button className="btn btn-outline-primary btn-sm" onClick={addBaseArray}>ADD</button>
        </div>
      }
      <br />

      {/* 클릭할때마다 data의 isChecked를 true => false => true 형태로 변경하시오.
      그 값에 따라 버튼 내부의 텍스트를 true => HIDE로 표시, false인 경우 SHOW로 표시하시오 */}
      <button className="btn btn-outline-primary btn-sm" onClick={changeCheck}>
        {data.isChecked ? 'HIDE' : 'SHOW'}
      </button>
    </div>
  );
}
export default A06CreateDOM;
