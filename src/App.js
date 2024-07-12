import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Body from './body/Body'
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
    </div>
  );
}

export default App;