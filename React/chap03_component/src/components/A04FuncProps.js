// A04FuncProps.js
import React from 'react'
import PropTypes from 'prop-types'

// 함수의 첫번째 매개변수가 부모로 부터 전달받은 속성값을 저정한 객체다. 보통 props로 사용
function A04FuncProps(props) {
  // console.log(props);

  // default로 주입된 값(phone, product)도 받아야 한다.
  const { name, age, num, add, arr, user, onAdd, changeNum, changeAddress, children, phone, product } = props;

  return (
    <div className="mb-5">
      <h3>A04FuncProps</h3>

      <div>
        Name: {props.name}<br />
        Age: {props.age + 1}<br />
        Num: {props.num + 1}<br />
        Address: {props.add}<br />
        Array: {props.arr[0]} / {props.arr[1]} / {props.arr[2]}<br />
        User: {props.user.name} / {props.user.age} / {props.user.address}<br />
        onAdd: {props.onAdd(10, 20)}<br />
        <br />

        존재하지 않는 기본형 변수 참조(DEFAULT): {props.phone}<br />
        {/* 자바스크립트는 객체가 없으면 객체의 속성 참조시 에러 발생. 객체가 존재하고 객체의 요소값이 없는 경우는 에러 아님(undefined) */}
        존재하지 않는 참조형 변수 참조(DEFAULT): {props.product.name} / {props.product.age}<br />

        {/* state 변수가 아니기 때문에 아무런 변화도 없다 */}
        <button onClick={props.changeNum}>NUM</button>
        {/* 읽기전용 address 변수에 대해서는 변경할 수 있는 권한(메서드)까지 전달해 줌 
            => 자식에서 부모 메서드 실행 => 부모 리렌더링 => 자식 리렌더링(새로운 값 할당 받음) */}
        <button onClick={props.changeAddress}>Address</button>
        <br />

        {/* 상위 컴퍼넌트에서 전달한 태그 사이의 View를 표시 할 영역 */}
        {props.children}
      </div>

      <hr />

      <div>
        Name: {name}<br />
        Age: {age + 1}<br />
        Num: {num + 1}<br />
        Address: {add}<br />
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        User: {user.name} / {user.age} / {user.address}<br />
        onAdd: {onAdd(10, 20)}<br />
        <br />

        존재하지 않는 기본형 변수 참조(DEFAULT): {phone}<br />
        존재하지 않는 참조형 변수 참조(DEFAULT): {product.name} / {product.age}<br />

        <button onClick={changeNum}>NUM</button>
        <button onClick={changeAddress}>Address</button>
        <br />

        {children}
      </div>
    </div>
  )
}
export default A04FuncProps

// TypeCheck
A04FuncProps.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  num: PropTypes.number.isRequired,
  add: PropTypes.string,
  arr: PropTypes.array,
  user: PropTypes.object,
  onAdd: PropTypes.func,
  changeNum: PropTypes.func,
}

A04FuncProps.defaultProps = {
  phone: '삼성 갤럭시 S20',
  product: {
    name: 'UNKNOWN',
    price: '-'
  }
}