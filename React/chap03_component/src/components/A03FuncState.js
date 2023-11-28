import { useState } from "react";

function A03FuncState() {
  // 일반 변수: 값이 변경되도 리 렌더링은 일어나지 않는다
  let name = '놀부';

  // 상태 변수
  // const [getter, setter] = useState(초기값);
  const [num, setNumber] = useState(0);
  const [address, setAddress] = useState('Seoul');
  const [isChecked, setIsChecked] = useState(true);
  const [arr, setArray] = useState([10, 20]);
  const [user, setUser] = useState({ name: '방자', age: 20 });

  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;
  const changeName = () => name = '흥부';

  const changeNum = (evt) => {
    console.log(evt);                 // 리엑트에서 구현된 이벤트
    console.log(evt.nativeEvent);     // 순수 자바스크립트 이벤트
    setNumber(100);
    return undefined;
  }
  const changeAddress = () => setAddress('부산');
  const changeCheck = () => setIsChecked(!isChecked);

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    const newArr = arr.concat(random);
    setArray(newArr);
  }
  /*
  const updateArray = (index, value) => {
    const newArr = arr.map((item, i) => (i === index) ? value : item);
    setArray(newArr);
  }
  const deleteArray = (index, value) => {
    const newArr = arr.filter((item, i) => (i === index) ? false : true)
    setArray(newArr);
  }
  */
  const updateArray = (index, value) => setArray(arr.map((item, i) => (i === index) ? value : item));
  const deleteArray = (index) => setArray(arr.filter((item, i) => (i === index) ? false : true));

  const addUser = (key, value) => setUser({ ...user, [key]: value });
  const updateUser = (key, value) => setUser({ ...user, [key]: value });
  const deleteUser = (key) => {
    delete user[key]
    setUser({ ...user });
  }

  return (
    <div className="mb-5">
      <h3>A03 Function state</h3>

      <div>
        Name: {name}<br />
        Num: {num}<br />
        <br />
        Num: {num}<br />
        Address: {address}<br />
        {/* React는 값이 boolean, undefined, null 값인 경우 화면에 표시하지 않는다 */}
        isChecked: {isChecked ? '동의' : '동의 안함'}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        Object: {user.name} / {user.age} / {user.address}<br />
        onAdd: {onAdd(10, 20)}
      </div>

      <div>
        {/* 전달한 인수가 없거나 또는 event 객체만 이벤트 핸들러에서 사용되는 경우는 이름만 호출 => 묵시적으로 이벤트 객체가 전달된다  */}
        <button onClick={changeName}>Name</button>
        <button onClick={changeNum}>Num</button>
        <button onClick={changeAddress}>Address</button>
        <button onClick={changeCheck}>Check</button>
        <button onClick={addArray}>Add Array</button>
        <button onClick={(evt) => updateArray(1, 2000)}>Update Array</button>
        <button onClick={(evt) => deleteArray(1)}>Delete Array</button>

        <button onClick={(evt) => addUser('address', 'Seoul')}>Add Object</button>
        <button onClick={(evt) => updateUser('address', 'Busan')}>Update Object</button>
        <button onClick={(evt) => deleteUser('address', evt)}>Delete Object</button>
      </div>
    </div>
  )
}
export default A03FuncState;
