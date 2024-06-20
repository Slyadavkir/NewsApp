import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../store/articleSlice';
import Article from './Article';
import Pagination from './Pagination';
import CategoryFilter from './CategoryFilter';
import './ArticleList.css';

const ArticleList = () => {
  const dispatch = useDispatch();
  const { articles, status, error, totalResults } = useSelector(state => state.articles);

  useEffect(() => {
    dispatch(fetchArticles({ category: '', page: 1 }));
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="article-list">
      <CategoryFilter />
      <div className="articles">
        {articles.map(article => (
          <Article key={article.title} article={article} />
        ))}
      </div>
      <Pagination totalResults={totalResults} />
    </div>
  );
};

export default ArticleList;
