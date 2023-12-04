import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import Home from './pages/Home'
import A01Axios from "./pages/A01Axios";
import GetContactList from "./pages/GetContactList";
import GetContact from "./pages/GetContact";
import UpdateContact from "./pages/UpdateContact";
import AddContact from "./pages/AddContact";

function App() {
  return (
    <div className="m-3">
      <h1>Axios</h1>

      {/* <A01Axios /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/A01Axios" element={<A01Axios />} />
          <Route path="/contactList" element={<GetContactList />} />
          <Route path="/contact/:no" element={<GetContact />} />
          <Route path="/update/:no" element={<UpdateContact />} />
          <Route path="/insert" element={<AddContact />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;

// npm i react-router-dom axios bootstrap
