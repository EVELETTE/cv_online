import React from 'react';
import avatar from './image/avataaars.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-avatar" alt="avatar" />
        <a
          className="App-link"
          href=""
          target=""
          rel="noopener noreferrer"
        >
          EVELETTE Dylan
        </a>
      </header>
    </div>
  );
}

export default App;
