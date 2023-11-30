// A09HigherTwo.js

import React, { useCallback } from "react";
import A09WithFunc from './A09WithFunc'

function A09HigherTwo(props) {
  const { name, age, setAge, display } = props;

  const changeAge = useCallback(() => {
    setAge(100);
  }, [setAge]);

  return (
    <div className="mb-5">
      <h3>A09 Higher Order TWO</h3>
      props: {props.name} / {name}<br />
      age: {age}<br />
      <br />

      <button onClick={changeAge}>AGE</button>
      <button onClick={display}>display</button>
    </div>
  );
}

export default A09WithFunc(A09HigherTwo);
