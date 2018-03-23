import React from 'react';
import PropTypes from 'prop-types';

import { Image, dateToLocaleString } from '../../../common';

export default function NewsItem(props) {
  const {
    urlToImage, title, description, author, publishedAt,
  } = props;
  return (
    <div className="news-item">
      <div className="news-item-body">
        <h4 className="title">{title}</h4>
        <div>{description}</div>
        <div>{author}</div>
        <div>{dateToLocaleString(publishedAt)}</div>
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
