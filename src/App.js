import React from 'react';
import Home from './Pages/Home/Home'
// import Login from './Pages/Login/Login';
import data from './data.json';

import './App.css';

function App() {
  return (
    <div className="App">
        <Home data={data}/>
        {/* <Login /> */}
    </div>
  );
}

export default App;
