import React, { Component } from 'react'

export class A02One extends Component {
  render() {
    return (
      <div className="mb-2">
        <h5>A02One</h5>

        {this.props.contentOne}

        <div>
          Name: {this.props.name}<br />
          <button onClick={() => this.props.changeName('Hello World')}>NAME</button>
        </div>

        {this.props.contentTwo}

      </div>
    )
  }
}

export default A02One
