import React from 'react';
import './LoadMoreButton.scss';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      type="button"
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
