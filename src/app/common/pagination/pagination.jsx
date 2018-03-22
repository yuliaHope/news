import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({ currentPage, onChange, totalPage }) {
  const firstPage = 1;
  const step = 1;
  return (
    <div>
      <button disabled={currentPage === firstPage} onClick={onChange(currentPage - step)}>
        Prev
      </button>
      {currentPage} / {totalPage}
      <button disabled={currentPage === totalPage} onClick={onChange(currentPage + step)}>
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  onChange: () => () => {},
};
