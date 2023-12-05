import React, { createContext, useState } from 'react'

const SelectContext = createContext({
  state: { color: '', bgColor: '', contextName: '' },
  action: {
    setColor: () => { },
    setBgColor: () => { },
  }
});

function SelectContextProvider(props) {
  const [color, setColor] = useState('lightgreen');
  const [bgColor, setBgColor] = useState('lightgray');

  const selectValue = {
    state: { color, bgColor, contextName: 'Select Context' },
    action: { setColor, setBgColor }
  }
  return (
    <SelectContext.Provider value={selectValue}>
      {props.children}
    </SelectContext.Provider>
  )
}

const SelectContextConsumer = SelectContext

export { SelectContextProvider, SelectContextConsumer }
