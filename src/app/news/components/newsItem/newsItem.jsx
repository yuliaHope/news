import React from 'react';
import PropTypes from 'prop-types';

import { Image, dateToLocaleString } from '../../../common';

export default function NewsItem(props) {
  const {
    urlToImage, title, description, author, publishedAt,
  } = props;
  return (
    <div>
      <div>
        <div>{title}</div>
        <div>{description}</div>
        <span>{author}</span>
        <span>{dateToLocaleString(publishedAt)}</span>
      </div>
      <Image url={urlToImage} />
    </div>
  );
}

NewsItem.propTypes = {
  urlToImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
};

NewsItem.defaultProps = {
  urlToImage: '',
  title: '',
  description: '',
  author: '',
  publishedAt: '',
};
