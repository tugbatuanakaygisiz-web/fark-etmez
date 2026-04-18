import React from 'react';

const LoadingSpinner = ({ message = 'Kurye yolda...' }) => {
  return (
    <div className="loading-spinner" id="loading-spinner">
      <div className="loading-spinner__ring" />
      <span className="loading-spinner__text">{message}</span>
    </div>
  );
};

export default LoadingSpinner;
