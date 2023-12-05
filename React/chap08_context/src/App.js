import ColorBox from '@comps/ColorBox.js'
import SelectColor from '@comps/SelectColor.js'
import TodoTemplate from '@comps/TodoTemplate'

import ColorBoxContext from './contexts/colorBoxContext'
import { SelectContextProvider } from './contexts/selectContext'
import { TodoContextProvider } from './contexts/todoContext'

function App() {

  const colorBoxValue = { color: 'orange', contextName: 'ColorBox Context' };

  return (
    <div className="m-3">
      <h1>Chap08 Context</h1>

      <TodoContextProvider>
        <TodoTemplate></TodoTemplate>
      </TodoContextProvider>


      <ColorBoxContext.Provider value={colorBoxValue}>
        <SelectContextProvider>
          <ColorBox></ColorBox>
          <SelectColor></SelectColor>
        </SelectContextProvider>
      </ColorBoxContext.Provider>
    </div>
  );
}

export default App;
