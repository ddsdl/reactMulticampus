import { Route, Routes } from "react-router-dom";
import A01Axios from "./components/A01Axios";

function App() {
  return (
    <div className="m-3">
      <h1>Axios</h1>

      {/* <A01Axios /> */}
      <Routes>
        <Route path="/" element={<A01Axios />} />
      </Routes>
    </div>
  );
}

export default App;

// npm i react-router-dom axios bootstrap
