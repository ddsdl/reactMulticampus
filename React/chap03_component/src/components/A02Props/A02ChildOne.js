import React, { Component } from 'react'

export class A02ChildOne extends Component {
  render() {
    return (
      <div className="mb-3">
        <h5>A02ChildOne</h5>

        <div>
          Name: {this.props.name}<br />
          Age: {this.props.age}<br />
          Address: {this.props.add}<br />
        </div>
      </div>
    )
  }
}

export default A02ChildOne