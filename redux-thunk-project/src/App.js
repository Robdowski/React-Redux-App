import React from 'react';
import './App.css';
import GetQuotes from './components/GetQuotes';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <GetQuotes />
    </div>
  );
}

export default App;
