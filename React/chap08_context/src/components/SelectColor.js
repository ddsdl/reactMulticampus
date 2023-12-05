import React, { useContext } from 'react';
import ColorBoxContext from './../contexts/colorBoxContext'
import { SelectContextConsumer } from './../contexts/selectContext'

function SelectColor() {
  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer' };

  const { contextName } = useContext(ColorBoxContext);
  const { state, action } = useContext(SelectContextConsumer);

  return (
    <div className="mb-5">
      <h3>{contextName} / {state.contextName}</h3>
      <div style={{ display: 'flex' }}>
        {colors.map((color) => (
          <div key={color} style={{ ...style, background: color }} onClick={() => action.setColor(color)}>
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}
export default SelectColor;
