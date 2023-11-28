// A02LifeCycle.js
import React, { Component, createRef } from 'react'

export class A02LifeCycle extends Component {
  constructor() {
    super();
    // console.log('1. constructor');

    this.state = {
      name: 'nolbu',
    }
    // DOM 요소와 연결하여 직접 DOM 요소를 제어할 목적으로 사용한다..
    this.inputRef = createRef();    // const inputRef = useRef();
  }

  // 시작 전 props의 값과 state의 값 체크, 수정, 삭제, 추가 등의 작업
  static getDrivedStateFromProps(props, state) {
    // console.log('2. getDerivedStateFromProps')
    return true;
  }

  // View가 완성되었을때 실행할 메서드
  componentDidMount() {
    // console.log('4. componentDidMount');
    document.querySelector('input[name="name"]').style.background = 'orange';
    this.inputRef.current.style.background = 'orange';
  }

  // state 값이 변경되는 경우
  // 이 함수에서 리턴값이 false면 state 값이 변경되도 화면 갱신 작업은 이루어 지지 않는다
  shouldComponentUpdate(props, state) {
    // console.log('5. shouldComponentUpdate');
    if (state.name === 'nolbu') return false;  // 동일값 리렌더링 필요 없음
    else return true;
  }

  // Update가 완료되고 난 후 실행
  componentDidUpdate() {
    // console.log('6. componentDidUpdate');
  }

  changeNolbu = () => this.setState({ name: 'nolbu' });
  changeHungbu = () => this.setState({ name: 'hungbu' });

  render() {
    // console.log('3. render');
    return (
      <div className="mb-5">
        <h3>{this.props.title}</h3>

        {this.state.name}<br />

        <input type="text" className="form-control" name="name" />
        <input type="text" className="form-control" ref={this.inputRef} />

        <button onClick={this.changeNolbu}>nolbu</button>
        <button onClick={this.changeHungbu}>hungbu</button>
      </div>
    )
  }
}

export default A02LifeCycle
