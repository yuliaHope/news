import { REQUEST_SOURCE_OPTIONS, FILTER_CHANGE, RECEIVE_SOURCE_OPTIONS } from '../actions';
import { NO_SELECTED } from '../../constants';

const defaultSourceObject = { id: NO_SELECTED, name: NO_SELECTED };

const initialState = {
  sources: [defaultSourceObject],
  source: NO_SELECTED,
  category: NO_SELECTED,
  country: 'us',
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SOURCE_OPTIONS: {
      const sources = [defaultSourceObject, ...action.sources];
      return { ...state, sources, loaded: true };
    }
    case REQUEST_SOURCE_OPTIONS: {
      return { ...state, loaded: false };
    }
    case FILTER_CHANGE: {
      return { ...state, ...action.payload };
    }
    default: return state;
  }
}

export function getSourceOptions(state) {
  return state.filter.sources;
}

export function getSourceFilter(state) {
  return state.filter.source;
}

export function getCategoryFilter(state) {
  return state.filter.category;
}

export function getCountryFilter(state) {
  return state.filter.country;
}
