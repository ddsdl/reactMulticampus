import React, { useContext } from "react";
import ColorBoxContext from './../contexts/colorBoxContext'
import { SelectContextConsumer } from './../contexts/selectContext'

function ColorBox() {
  const { color, contextName } = useContext(ColorBoxContext);
  const { state } = useContext(SelectContextConsumer);

  return (
    <div className="mb-5">
      <h3>{contextName} / {state.contextName}</h3>
      <div style={{ width: '50px', height: '50px', display: 'inline-block', background: color }}>{color}</div>
      <div style={{ width: '50px', height: '50px', display: 'inline-block', background: state.color }}>{state.color}</div>
    </div>
  );
}
export default ColorBox;
