import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Project from './pages/Project';
import './App.css';

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:language/" element={<Main />} />
        <Route path="/project/:projectId" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
