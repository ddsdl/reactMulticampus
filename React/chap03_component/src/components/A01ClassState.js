// A01ClassState.js
import React, { Component } from 'react'

class A01ClassState extends Component {
  constructor() {
    super();

    // 일반 변수. 값이 변경되도 리엑트는 아무런 작업을 하지 않는다
    this.name = 'NolBu';

    // 상태 변수 => React.Component에 정의된 특별한 기능을 가진 객체
    // 이 객체의 값이 변경되면 리엑트는 그 값 기반으로 화면을 갱신해 준다 => 변경 값으로 표시됨
    this.state = {
      num: 0,
      address: 'Seoul',
      isChecked: true,
      arr: [10, 20],
      user: { name: '방자', age: 20 }
    }
  }

  // method => 반드시 Arrow 함수 형태로 기술 - 표현식 방식도 가능하지만 this 참조가 안된다(다르다)
  changeName = () => this.name = '흥부';    // 변수의 값은 변경됨 -> 리 렌더링 안함 -> 화면 그대로

  // state 변수 변경 => 반드시 내장 메서드 this.setState({key: value}) 를 이용한다
  changeNum = () => this.setState({ num: this.state.num + 1 });
  changeAddress = () => this.setState({ address: 'Busan' });
  changeCheck = () => this.setState({ isChecked: !this.state.isChecked });

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
        </div>

        <div>
          <button onClick={this.changeName}>Name</button>
          <button onClick={this.changeNum}>Num</button>
          <button onClick={this.changeAddress}>Address</button>
          <button onClick={this.changeCheck}>Check</button>
        </div>
      </div>
    )
  }
}
export default A01ClassState;
