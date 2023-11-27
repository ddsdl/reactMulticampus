import React, { Component } from 'react'
import A02One from './A02Children/A02One'

export class A02Children extends Component {
  state = {
    name: 'A02Chilren'
  }

  changeName = (msg) => this.setState({ name: msg });

  contentOne = (<h3>상단에 표시될 컨텐츠</h3>);
  contentTwo = (<div>
    <h5>Hello World</h5>
    <div>하단 컨텐츠</div>
  </div>);

  render() {
    return (
      <div className="mb-5">
        <h3>A02Children</h3>

        <div>
          Name: {this.state.name}<br />
        </div>

        {/* A02One을 표시 후 state에 name 속성값을 전달 후 A02One에서 버튼 클릭으로 전달받은 
        name 값을 변경하도록 구현하시오... */}
        <A02One name={this.state.name} changeName={this.changeName}
          contentOne={this.contentOne} contentTwo={this.contentTwo}></A02One>
      </div>
    )
  }
}

export default A02Children
