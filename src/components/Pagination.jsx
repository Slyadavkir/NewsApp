import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../store/articleSlice';
import './Pagination.css';

const Pagination = ({ totalResults }) => {
  const dispatch = useDispatch();
  const totalPages = Math.ceil(totalResults / 10); // Assuming 10 articles per page
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(fetchArticles({ category: '', page }));
  };

  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
