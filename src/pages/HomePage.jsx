import React from 'react';
import ArticleList from '../components/ArticleList';
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>News Articles</h1>
      <ArticleList />
    </div>
  );
};

export default HomePage;
