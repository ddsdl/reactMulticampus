import React from 'react'

class A01Class extends React.Component {
  constructor() {
    super();
    this.name = 'NolBu'

    // React에 정의된 상태 변수를 관리할 변수. Getter
    this.state = {
      address: 'Seoul',
    }
  }

  // 메서드는 Arrow 함수로
  changeName = () => this.name = '흥부';

  // setState도 React.Component의 함수. state 값을 변경할 때 사용한다 (Setter)
  // {...this.state, address: '부산'} => 새로운 객체 생성 => 값 변경 통지 => 리 렌더링
  changeAddress = () => this.setState({ address: '부산' });

  render() {
    return (
      <div className="mb-3">
        <h3>A01Class Component</h3>
        <div>
          Name: {this.name}<br />
          Address: {this.state.address}
        </div>

        <div>
          <button onClick={this.changeName}>Name</button>
          <button onClick={this.changeAddress}>Address</button>
        </div>
      </div>
    )
  }
}
export default A01Class;
