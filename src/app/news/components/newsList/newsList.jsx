import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewsItem from '../newsItem';
import { Pagination, Search, withLoadingHandlers } from '../../../common';
import { loadArticles, changePage, updateSearchValue } from '../../actions';
import { getArticles, getCurrentPage, getTotalPage, getWrapperProps } from '../../reducer';

class NewsList extends React.Component {
  componentDidMount() {
    this.props.loadArticles();
  }

  getListItems = articles => articles.map(article => <NewsItem key={article.title} {...article} />);

  render() {
    const {
      articles, currentPage, totalPageNumber, className,
    } = this.props;
    return (
      <div className={`${className} articles-container`}>
        <Search onChange={this.props.updateSearchValue} />
        {this.getListItems(articles)}
        <Pagination
          currentPage={currentPage}
          onChange={this.props.changePage}
          totalPage={totalPageNumber}
        />
      </div>
    );
  }
}

NewsList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPageNumber: PropTypes.number.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadArticles: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  updateSearchValue: PropTypes.func.isRequired,
  className: PropTypes.string,
};

NewsList.defaultProps = {
  className: '',
};

function mapStateToProps(state) {
  return {
    articles: getArticles(state),
    currentPage: getCurrentPage(state),
    totalPageNumber: getTotalPage(state),
    ...getWrapperProps(state),
  };
}

const NewsWithLoadingWrapper = withLoadingHandlers(NewsList);

export default connect(mapStateToProps, {
  loadArticles,
  changePage,
  updateSearchValue,
})(NewsWithLoadingWrapper);
