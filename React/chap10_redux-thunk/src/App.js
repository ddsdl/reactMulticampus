import { Route, Routes } from "react-router-dom";
import Layout from '@comps/Layout'

import Home from '@pages/Home'
import A01Counter from '@pages/A01Counter'

function App() {
  return (
    <div className="m-3">
      <h1>Chap10 ReduxThunk</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<A01Counter />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
