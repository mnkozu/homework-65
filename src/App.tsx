import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Pages from './containers/Pages/Pages';
import Admin from './containers/Admin/Admin';


function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path={'/'} element={(<Home/>)}/>
          <Route path={'/pages/:pageName'} element={(<Pages/>)}/>
          <Route path={'/admin'} element={(<Admin/>)}/>
        </Routes>
      </main>
    </>
);
}

export default App;
