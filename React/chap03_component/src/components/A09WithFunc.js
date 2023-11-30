// A09WithFunc.js

import { useCallback, useState } from "react";

const A09WithFunc = (Comp) => {

  const InnerComponent = (props) => {
    // 공통적으로 사용할 변수, 함수를 정의해 매개변수로 전달받은 컴퍼넌트에 속성으로 다시 전달
    const [age, setAge] = useState(20);
    const display = useCallback(() => {
      console.log('display method...');
    }, []);

    return (
      <>
        {/* <h3>Inner Component</h3> */}

        <Comp {...props} age={age} setAge={setAge} display={display}></Comp>
      </>
    );
  };

  return InnerComponent;
}
export default A09WithFunc;
