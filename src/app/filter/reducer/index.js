import { REQUEST_SOURCE_OPTIONS, FILTER_CHANGE, RECEIVE_SOURCE_OPTIONS } from '../actions';
import { NO_SELECTED } from '../../constants';

const defaultSourceObject = { id: NO_SELECTED, name: NO_SELECTED };

const initialState = {
  sources: [defaultSourceObject],
  source: NO_SELECTED,
  category: NO_SELECTED,
  country: 'us',
  loaded: false,
  error: '',
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SOURCE_OPTIONS: {
      const sources = [defaultSourceObject, ...action.sources];
      return {
        ...state, sources, loaded: true, error: action.message,
      };
    }
    case REQUEST_SOURCE_OPTIONS: {
      return { ...state, loaded: false };
    }
    case FILTER_CHANGE: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export const getSourceOptions = state => state.filter.sources;

export const getSourceFilter = state => state.filter.source;

export const getCategoryFilter = state => state.filter.category;

export const getCountryFilter = state => state.filter.country;

export const getWrapperProps = (state) => {
  const { loaded, error } = state.filter;
  return { loaded, error };
};
