import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';

function App() {
  return (
    // BEM Naming Convention
    <div className="App">
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar/>
        {/* Chat */}
        <Chat/>
      </div>
    </div>
  );
}

export default App;
