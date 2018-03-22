import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ url }) {
  return <img src={url} width="100" height="100" alt="Article banner" />;
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
};
