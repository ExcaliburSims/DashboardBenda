import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="container">
      <div>
        <Header />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
