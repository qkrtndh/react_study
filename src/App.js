import React, { useState } from 'react';
import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className="container">
      <h1>최상단</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
