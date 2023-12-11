import { Route, Routes } from "react-router-dom";

import Layout from "@components/Layout";
import Home from "@pages/Home";
import Users from "@pages/Users";
import BoardList from "@pages/BoardList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/boards" element={<BoardList />} />
      </Route>
    </Routes>
  );
}

export default App;
