import React, { Component } from 'react'

export class A02ChildTwo extends Component {
  render() {
    return (
      <div>
        <h5>A02ChildTwo</h5>

        <div>
          Name: {this.props.name}<br />
          Age: {this.props.age + 1}<br />
          Num: {this.props.num + 1}<br />
          Address: {this.props.add}<br />
          Array: {this.props.arr[0]} / {this.props.arr[1]} / {this.props.arr[2]}<br />
          User: {this.props.user.name} / {this.props.user.age} / {this.props.user.address}<br />
          onAdd: {this.props.onAdd(10, 20)}<br />
          <button onClick={this.props.changeAddress}>Address</button>
        </div>
      </div>
    )
  }
}

export default A02ChildTwo
