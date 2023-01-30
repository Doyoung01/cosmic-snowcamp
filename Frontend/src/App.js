import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BeforeN from './components/BeforeN';
import Main from './components/Main';
import Upperbar from './components/Upperbar';
import Write from './components/Write';

function App() {
  let [exist, setExist] = useState(false);

  return (
    <Routes>
      <Route path='/' element={<Upperbar />}>
        <Route path='/' element={<Main />} />
        <Route path='/writes' element={<Write />} />
        <Route path='/beforen' element={<BeforeN exist={exist} />} />
      </Route>
    </Routes>
  );
}

export default App;
