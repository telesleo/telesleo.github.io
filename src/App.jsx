import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Main from './pages/Main';
import Project from './pages/Project';
import getLanguage from './utils/localization';
import './App.css';

function App() {
  const [pageLanguage, setPageLanguage] = useState('en');

  const { language } = useParams();

  useEffect(() => {
    let newPageLanguage = language || getLanguage(navigator) || 'en';
    if (newPageLanguage !== 'en' && newPageLanguage !== 'pt') {
      newPageLanguage = 'en';
    }
    setPageLanguage(newPageLanguage);
  }, [language]);

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Main pageLanguage={pageLanguage} />} />
        <Route path="/:language/" element={<Main pageLanguage={pageLanguage} />} />
        <Route path="/project/:projectId" element={<Project pageLanguage={pageLanguage} />} />
        <Route path="/:language/project/:projectId" element={<Project pageLanguage={pageLanguage} />} />
      </Routes>
    </div>
  );
}

export default App;
