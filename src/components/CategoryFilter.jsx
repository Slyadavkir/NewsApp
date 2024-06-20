import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../store/articleSlice';
import './CategoryFilter.css';

const CategoryFilter = () => {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    dispatch(fetchArticles({ category: selectedCategory, page: 1 }));
  };

  return (
    <div className="category-filter">
      <select value={category} onChange={handleChange}>
        <option value="">All</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default CategoryFilter;
