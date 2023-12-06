import { Route, Routes } from "react-router-dom";
import Layout from '@comps/Layout'

import Home from '@pages/Home'
import A01Counter from '@pages/A01Counter'
// import GetContactList from '@pages/contacts/GetContactList'
import ContactListContainer from './container/ContactListContainer'
import GetContact from '@pages/contacts/GetContact'
import UpdateContact from '@pages/contacts/UpdateContact'
import AddContact from '@pages/contacts/AddContact'

function App() {
  return (
    <div className="m-3">
      <h1>Chap10 ReduxThunk</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<A01Counter />} />
          <Route path="/list" element={<ContactListContainer />} />
          <Route path="/contact/:no" element={<GetContact />} />
          <Route path="/update" element={<UpdateContact />} />
          <Route path="/insert" element={<AddContact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
