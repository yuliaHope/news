import fetch from 'cross-fetch';

import { API_KEY, URL, NO_SELECTED, PAGE_SIZE } from '../../constants';

const getQueryByParam = (param, key) => (param !== NO_SELECTED ? `${key}=${param}&` : '');

const composeQuery = (source, category, country) => {
  const sourceQuery = getQueryByParam(source, 'sources');
  if (!sourceQuery) {
    const countruQuery = getQueryByParam(country, 'country');
    const categoryQuery = getQueryByParam(category, 'category');
    return `${countruQuery}${categoryQuery}`;
  }
  return sourceQuery;
};

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const requestArticles = () => ({
  type: REQUEST_ARTICLES,
});

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
const receiveArticles = newsObj => ({
  type: RECEIVE_ARTICLES,
  ...newsObj,
});

export const CHANGE_PAGE = 'CHANGE_PAGE';
const changePanel = pageNumber => ({
  type: CHANGE_PAGE,
  payload: pageNumber,
});

export const UPDATE_SEARCH_VALUE = 'UPDATE_SEARCH_VALUE';
export const updateSearchValue = value => ({
  type: UPDATE_SEARCH_VALUE,
  payload: value,
});

export const loadArticles = () => (dispatch, getState) => {
  dispatch(requestArticles());
  const { filter: { source, category, country }, news: { currentPage } } = getState();

  const query = composeQuery(source, category, country);
  const paginationQuery = `pageSize=${PAGE_SIZE}&page=${currentPage || 1}&`;

  return fetch(`${URL}top-headlines?${query}${paginationQuery}apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receiveArticles(json)));
};

export const changePage = pageNumber => dispatch => () => {
  dispatch(changePanel(pageNumber));
  dispatch(loadArticles());
};
