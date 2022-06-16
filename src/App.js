import './App.css';
import React, {useState} from 'react'
import {Header} from './components/Header'
import {Characters} from './components/Characters'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark"
  return (
    <div className={"App " + bg}>
    <Header
      darkMode={darkMode}
      onClick={() => setDarkMode(!darkMode)}
    />
    <Characters/> 
    <h1>Hola</h1>
    </div>
  );
}

export default App;
