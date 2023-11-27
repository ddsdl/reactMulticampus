// A01ClassState.js
import React, { Component } from 'react'

class A01ClassState extends Component {
  constructor() {
    super();

    // 일반 변수. 값이 변경되도 리엑트는 아무런 작업을 하지 않는다
    this.name = 'NolBu';

    /*
    // 상태 변수 => React.Component에 정의된 특별한 기능을 가진 객체
    // 이 객체의 값이 변경되면 리엑트는 그 값 기반으로 화면을 갱신해 준다 => 변경 값으로 표시됨
    this.state = {
      num: 0,
      address: 'Seoul',
      isChecked: true,
      arr: [10, 20],
      user: { name: '방자', age: 20 }
    }
    */
  }

  // constractor에서 빼서 밖에 정의도 가능하다.
  // constractor에서 this 변수가 필요없다면 constractor 자체를 기술하지 않아도 된다는 이점이 있다.
  state = {
    num: 0,
    address: 'Seoul',
    isChecked: true,
    arr: [10, 20],
    user: { name: '방자', age: 20 }
  }

  // method => 반드시 Arrow 함수 형태로 기술 - 표현식 방식도 가능하지만 this 참조가 안된다(다르다)
  changeName = () => this.name = '흥부';    // 변수의 값은 변경됨 -> 리 렌더링 안함 -> 화면 그대로

  // state 변수 변경 => 반드시 내장 메서드 this.setState({key: value}) 를 이용한다
  // this.setState({ ...this.state, num: this.state.num + 1 });
  changeNum = () => this.setState({ num: this.state.num + 1 });
  changeAddress = () => this.setState({ address: 'Busan' });
  changeCheck = () => this.setState({ isChecked: !this.state.isChecked });
  addArray = () => {
    const random = Math.ceil(Math.random() * 100)
    // console.log(random);
    // this.state.arr.push(random);
    // console.log(this.state.arr);

    // 참조형 변수는 반드시 기존 객체를 기반으로 추가/삭제/수정이 되는 새로운 객체를 생성해서 그 값을 대입해 주어야 한다
    const newArr = this.state.arr.concat(random);
    // console.log(this.state.arr === newArr);
    this.setState({ arr: newArr });
  }
  updateArray = (index, value) => {
    // 기존 배열을 수정 => 주소값이 변경되지 않는다
    // this.state.arr[index] = value;
    // console.log(this.state.arr);

    // 지정된 index의 값이 변경된 새로운 배열을 생성해서 기존 배열을 덮어써야 한다 -> 주소값을 변경 해 주어야 한다
    const newArr = this.state.arr.map((item, idx) => {
      if (idx === index) return value;
      else return item;
    });
    this.setState({ arr: newArr });
  }
  deleteArray = (index) => {
    // 기존 배열을 삭제 => 주소값이 변경되지 않는다
    // this.state.arr.splice(index, 1);
    // console.log(this.state.arr);

    const newArr = this.state.arr.filter((item, idx) => {
      if (index === idx) return false;
      else return true;
    });
    this.setState({ arr: newArr });
  }

  addUser = (key, value) => {
    // 주소값이 변경되지 않는다.
    // this.state.user[key] = value;

    const newUser = { ...this.state.user, [key]: value };
    // this.setState({ ...this.state, user: newUser });
    this.setState({ user: newUser });
  }
  updateUser = (key, value) => {
    // 주소값이 변경되지 않는다.
    // this.state.user[key] = value;

    const newUser = { ...this.state.user, [key]: value };
    // this.setState({ ...this.state, user: newUser });
    this.setState({ user: newUser });
  }
  deleteUser = (key) => {
    delete this.state.user[key];            // 기존 객체에서 삭제
    const newUser = { ...this.state.user }; // 지워진 객체를 기반으로 새로운 객체 생성
    this.setState({ user: newUser });
  }

  // 함수의 반환값도 바인딩(보간법)의 값으로 사용 가능
  onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  render() {
    return (
      <div className="mb-4">
        <h3>A01ClassState</h3>

        <div className="mb-2">
          Name: {this.name}<br />
          <br />
          Num: {this.state.num}<br />
          Address: {this.state.address}<br />
          {/* React는 값이 boolean, undefined, null 값인 경우 화면에 표시하지 않는다 */}
          isChecked: {this.state.isChecked ? '동의' : '동의 안함'}<br />
          Array: {this.state.arr[0]} / {this.state.arr[1]} / {this.state.arr[2]}<br />
          Object: {this.state.user.name} / {this.state.user.age} / {this.state.user.address}<br />
          onAdd: {this.onAdd(10, 20)}
        </div>

        <div>
          <button onClick={this.changeName}>Name</button>
          <button onClick={this.changeNum}>Num</button>
          <button onClick={this.changeAddress}>Address</button>
          <button onClick={this.changeCheck}>Check</button>
          <button onClick={this.addArray}>Add Array</button>
          <button onClick={() => this.updateArray(1, 2000)}>Update Array</button>
          <button onClick={() => this.deleteArray(1)}>Delete Array</button>

          <button onClick={() => this.addUser('address', 'Seoul')}>Add Object</button>
          <button onClick={() => this.updateUser('address', 'Busan')}>Update Object</button>
          <button onClick={() => this.deleteUser('address')}>Delete Object</button>
        </div>
      </div>
    )
  }
}
export default A01ClassState;
