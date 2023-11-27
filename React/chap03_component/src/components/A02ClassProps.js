// A02ClassProps.js
import React, { Component } from 'react'
import TypeCheck from 'prop-types'

import A02ChildOne from './A02Props/A02ChildOne'
import A02ChildTwo from './A02Props/A02ChildTwo'

export class A02ClassProps extends Component {
  render() {
    return (
      <div className="mb-5">
        <h3>A02ClassProps - props 값은 읽기 전용</h3>

        <div className="mb-2">
          {/* 상위 컴퍼넌트(부모컴퍼넌트)로 부터 속성으로 전달받은 값은 내장 객체 this.props.속성명 형태로 참조 */}
          Name: {this.props.name}<br />
          Age: {this.props.age + 1}<br />
          Num: {this.props.num + 1}<br />
          Address: {this.props.add}<br />
          Array: {this.props.arr[0]} / {this.props.arr[1]} / {this.props.arr[2]}<br />
          User: {this.props.user.name} / {this.props.user.age} / {this.props.user.address}<br />
          onAdd: {this.props.onAdd(10, 20)}<br />
          <br />

          존재하지 않는 기본형 변수 참조 - 에러 아님: {this.props.tel}<br />
          {/* 존재하지 않는 참조형 변수 참조 - 에러 출력: {this.props.obj.name}<br /> */}

          {/* this.props.obj가 없으면 값은 undefined => undefined, null, bool 값은 화면 출력 안함 */}
          존재하지 않는 참조형 변수 참조 - 에러 출력: {this.props.obj && this.props.obj.name}<br />
          존재하지 않는 참조형 변수 참조 - 에러 출력: {this?.props?.obj?.name}<br />
          <br />

          존재하지 않는 기본형 변수 참조(DEFAULT): {this.props.phone}<br />
          {/* 자바스크립트는 객체가 없으면 객체의 속성 참조시 에러 발생. 객체가 존재하고 객체의 요소값이 없는 경우는 에러 아님(undefined) */}
          존재하지 않는 참조형 변수 참조(DEFAULT): {this.props.product.name} / {this.props.product.age}<br />

          {/* state 변수가 아니기 때문에 아무런 변화도 없다 */}
          <button onClick={this.props.changeNum}>NUM</button>
          {/* 읽기전용 address 변수에 대해서는 변경할 수 있는 권한(메서드)까지 전달해 줌 
            => 자식에서 부모 메서드 실행 => 부모 리렌더링 => 자식 리렌더링(새로운 값 할당 받음) */}
          <button onClick={this.props.changeAddress}>Address</button>
        </div>

        <A02ChildOne name={this.props.name} age={this.props.age} add={this.props.add}></A02ChildOne>
        <A02ChildTwo {...this.props}></A02ChildTwo>

        {/* 상위 컴퍼넌트에서 전달한 태그 사이의 View를 표시 할 영역 */}
        {this.props.children}
      </div>
    )
  }
}

export default A02ClassProps

// props로 넘어오는 값의 타입을 체크 할 목적으로 정의한다.
// import TypeCheck from 'prop-types'로 import 후에 사용 할 필요가 있다
A02ClassProps.propTypes = {
  name: TypeCheck.string.isRequired,
  age: TypeCheck.number,
  num: TypeCheck.number.isRequired,
  add: TypeCheck.string,
  arr: TypeCheck.array,
  user: TypeCheck.object,
  onAdd: TypeCheck.func,
  changeNum: TypeCheck.func,
}

// 값이 넘어오지 않을 경우를 대비해서 기본값을 정의할 수 있다
// this.props에 정의한 속성을 지정한 값으로 추가해 준다.
A02ClassProps.defaultProps = {
  phone: '삼성 갤럭시 S20',
  product: {
    name: 'UNKNOWN',
    price: '-'
  }
}