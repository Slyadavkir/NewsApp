import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import './App.css';

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:title" element={<ArticlePage />} />
        </Routes>
      
    </Router>
  );
};

export default App;
