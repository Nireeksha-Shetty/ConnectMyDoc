import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import Meets from './Components/Meets';

function App() {
  return (
    // BEM Naming Convention
    <div className="App">
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar/>
        {/* Chat */}
        <Chat/>
        <Meets/>
      </div>
    </div>
  );
}

export default App;
