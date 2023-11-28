import React, { useState } from 'react'

function A05FuncEvent() {

  const [data, setData] = useState({
    name: '',
    age: '',
    date: '2023-12-25',
    sports: 'basketball',
    isChecked: true,
    language: ['Vue', 'React'],
    baseball: '엘지',
    four: []
  });

  const changeString = (evt) => setData({ ...data, [evt.target.name]: evt.target.value });
  const changeNumber = (evt) => {
    let value = Number(evt.target.value);
    if (isNaN(value)) value = 0;
    setData({ ...data, [evt.target.name]: value })
  }
  const changeBoolean = (evt) => {
    // const newData = { ...data, isChecked: !data.isChecked }
    const newData = { ...data, [evt.target.name]: !data[evt.target.name] }
    setData(newData);
  }
  const changeLanguage = (evt) => {
    const value = evt.target.value;
    if (data[evt.target.name].includes(value)) {
      const newLang = data.language.filter((item) => {
        if (item === value) return false;
        else return true;
      })
      const newData = { ...data, language: newLang };
      setData(newData);
    } else {
      const newLang = data.language.concat(value);
      const newData = { ...data, language: newLang };
      setData(newData);
    }
  }

  const changeMultiSelect = (evt) => {
    // const options = evt.target.selectedOptions;
    // console.log(options);    // 유사배열
    const optArr = Array.from(evt.target.selectedOptions);
    // console.log(optArr);        // 순수 배열

    const optValue = optArr.map((opt) => opt.value);
    // const newData = { ...data, four: optValue };
    setData({ ...data, four: optValue });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(data);
  }

  /*
  const changeName = (evt) => {
    const newData = { ...data, name: evt.target.value };
    setData(newData);
  }
  const changeAge = (evt) => {
    let value = Number(evt.target.value);
    if (isNaN(value)) value = 0;        // NaN === value (X)
    const newData = { ...data, age: value }
    setData(newData)
  }
  */

  /*
  // useState 구문은 재 실행되더라도 새롭게 만들어지지 않는다...
  const [name, setName] = useState('Hello');
  const [age, setAge] = useState(0);

  const changeName = (evt) => {
    // name = evt.target.value;
    setName(evt.target.value);
  }
  const changeAge = (evt) => {
    let value = Number(evt.target.value);
    if (isNaN(value)) value = 0;        // NaN === value (X)
    setAge(value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();   // 요소가 가지고 있는 기본 자바스크립트 명령을 취소
    const data = {
      name: name,
      age: age
    }
    console.log(data);
  }
  */

  return (
    <div className="mb-5">
      <h3>A05 Function Component Event & Form</h3>

      <form>
        Name: {data.name}
        {/* form 요소에 
          value 속성 => 리엑트에서는 사용자가 폼의 값을 변경하면 연결된 상태변수를 변경하는 형태로 사용하는 것으로 인식 
            반드시 값을 변경하는 로직(이벤트 핸들러 => 값 변경 로직)이 같이 기술되어야 한다
            oninput의 자바스크립트 이벤트를 리엑트에서는 onChange로 사용
          defaultValue => 변수의 값을 가져와 표시만 할 목적. 이 필드에서 사용자의 조작에 의해 매칭된 변수는 변경하지 않는다
            이벤트 핸들러가 꼭 필요하 않다 (필요에 따라 기술도 가능)
        */}
        <input type="text" name="name" className="form-control" value={data.name} onChange={changeString} />

        Age: {data.age + 1}
        <input type="text" name="age" className="form-control" value={data.age} onChange={changeNumber} />
        Date: {data.date}
        <input type="date" name="date" className="form-control" value={data.date} onChange={changeString} />

        RadioButton: {data.sports} <br />
        <div className="form-check">
          <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input"
            onChange={changeString} defaultChecked={data.sports === 'baseball'} />
          <label htmlFor="baseball" className="form-check-label">야구</label>
        </div>
        <div className="form-check">
          <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input"
            onChange={changeString} defaultChecked={data.sports === 'soccer'} />
          <label htmlFor="soccer" className="form-check-label">축구</label>
        </div>
        <div className="form-check">
          <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input"
            onChange={changeString} defaultChecked={data.sports === 'basketball'} />
          <label htmlFor="basketball" className="form-check-label">농구</label>
        </div>

        CheckBox One: {data.isChecked ? '동의' : '동의 안함'}<br />
        <div className="form-check">
          <input type="checkbox" name="isChecked" className="form-check-input"
            onChange={changeBoolean} defaultChecked={data.isChecked} />
          <label htmlFor="check" className="form-check-label">동의</label>
        </div>

        CheckBox: <br />
        <div className="form-check">
          <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
            onChange={changeLanguage} defaultChecked={data.language.includes('Angular')} />
          <label htmlFor="baseball" className="form-check-label">앵귤러</label>
        </div>
        <div className="form-check">
          <input type="checkbox" name="language" value="React" id="react" className="form-check-input"
            onChange={changeLanguage} defaultChecked={data.language.includes('React')} />
          <label htmlFor="react" className="form-check-label">리엑트</label>
        </div>
        <div className="form-check">
          <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
            onChange={changeLanguage} defaultChecked={data.language.includes('Vue')} />
          <label htmlFor="vue" className="form-check-label">뷰</label>
        </div>

        SelectBox: {data.baseball}<br />
        <select name="baseball" className="form-control" value={data.baseball} onChange={changeString}>
          <option>NC</option>
          <option>두산</option>
          <option>엘지</option>
          <option>한화</option>
          <option>롯데</option>
          <option>삼성</option>
          <option>키움</option>
        </select>

        SelectBox Multi: {data.four.join(' - ')}<br />
        <select name="four" multiple size="5" className="form-control"
          value={data.four} onChange={changeMultiSelect}>
          <option>NC</option>
          <option>두산</option>
          <option>엘지</option>
          <option>한화</option>
          <option>롯데</option>
          <option>삼성</option>
          <option>키움</option>
        </select>
        <br />

        <button type="submit" onClick={handleSubmit}>SEND</button>
      </form>
    </div>
  )
}

export default A05FuncEvent
