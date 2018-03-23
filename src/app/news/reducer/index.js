import { REQUEST_ARTICLES, CHANGE_PAGE, UPDATE_SEARCH_VALUE, RECEIVE_ARTICLES } from '../actions';
import { PAGE_SIZE } from '../../constants';

const EMPTY_ARTICLES = [];

const initialState = {
  articles: EMPTY_ARTICLES,
  totalPages: 0,
  loaded: false,
  error: '',
  currentPage: 0,
  searchValue: '',
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ARTICLES: {
      const { articles = [], totalResults, message } = action;
      let total = totalResults / PAGE_SIZE;
      total = Math.round(total) < total ? total + 1 : total;
      return {
        ...state,
        articles,
        totalPages: Math.round(total),
        currentPage: articles.length ? state.currentPage || 1 : 0,
        loaded: true,
        error: message,
      };
    }
    case REQUEST_ARTICLES: {
      return { ...state, loaded: false };
    }
    case CHANGE_PAGE: {
      return { ...state, currentPage: action.payload };
    }
    case UPDATE_SEARCH_VALUE: {
      return { ...state, searchValue: action.payload };
    }
    default:
      return state;
  }
}

export const getArticles = (state) => {
  const { articles, searchValue } = state.news;
  return (articles || EMPTY_ARTICLES).filter(({ title }) => title.includes(searchValue));
};

export const getCurrentPage = state => state.news.currentPage;
export const getTotalPage = state => state.news.totalPages;
export const getWrapperProps = (state) => {
  const { loaded, error } = state.news;
  return { loaded, error };
};
