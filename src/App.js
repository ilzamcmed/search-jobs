import React from 'react';
import './App.css';
import data from './data.json';
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
       
        <Home data={data}/>
    </div>
  );
}

export default App;
