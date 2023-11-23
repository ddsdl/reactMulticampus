import React from 'react';

function SelectColor() {
  const colors = ['red', 'orange', 'green', 'blue', 'yellow'];
  const style = { width: '50px', height: '50px', background: 'gray', cursor: 'pointer' };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {colors.map((color) => (
          <div key={color} style={{ ...style, background: color }}>
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}
export default SelectColor;
