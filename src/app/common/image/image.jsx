import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ url }) {
  return (
    <img src={url} className="news-item-image" width="100" height="200" alt="Article banner" />
  );
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
};
