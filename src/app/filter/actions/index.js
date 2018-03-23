import fetch from 'cross-fetch';

import { API_KEY, URL, NO_SELECTED } from '../../constants';
import { loadArticles } from '../../news';

export const REQUEST_SOURCE_OPTIONS = 'REQUEST_SOURCE_OPTIONS';
const requestSourceOptions = () => ({
  type: REQUEST_SOURCE_OPTIONS,
});

export const RECEIVE_SOURCE_OPTIONS = 'RECEIVE_SOURCE_OPTIONS';
const receiveSourceOptions = optionsObj => ({
  type: RECEIVE_SOURCE_OPTIONS,
  ...optionsObj,
});

export const FILTER_CHANGE = 'FILTER_CHANGE';
export const changeFilter = (key, newValue = NO_SELECTED) => ({
  type: FILTER_CHANGE,
  payload: { [key]: newValue },
});

export const loadSourceOptions = () => (dispatch) => {
  dispatch(requestSourceOptions());

  return fetch(`${URL}sources?apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receiveSourceOptions(json)));
};

export const applyFilterChanges = (key, newValue) => (dispatch) => {
  dispatch(changeFilter(key, newValue));
  dispatch(loadArticles());
};
