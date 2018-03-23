import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilterItem from '../filterItem';
import { loadSourceOptions, applyFilterChanges, changeFilter } from '../../actions';
import {
  getSourceOptions,
  getCountryFilter,
  getCategoryFilter,
  getSourceFilter,
  getWrapperProps,
} from '../../reducer';
import { mappedCategories, mappedCountries, filters } from './constants';
import { withLoadingHandlers } from '../../../common';

const SOURCE_RADIO_VALUE = 'source';
const MANUAL_RADIO_VALUE = 'category';

class FilterList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formValue: MANUAL_RADIO_VALUE,
    };
  }

  componentDidMount() {
    this.props.loadSourceOptions();
  }

  handleRadioChange = (event) => {
    const { value: formValue } = event.target;
    this.setState({ formValue });
  };

  handleFilterChange = (key, formValue) => (event) => {
    const { value } = event.target;
    this.props.changeFilter(formValue);
    this.props.applyFilterChanges(key.toLowerCase(), value);
  };

  isFilterDisabled = (value) => {
    const { formValue } = this.state;
    return value !== formValue;
  };

  render() {
    const {
      sources, countryFilter, sourceFilter, categoryFilter, className,
    } = this.props;

    return (
      <form className={`${className} filters`}>
        <div className="filter-container">
          <input
            type="radio"
            name="filter"
            value={SOURCE_RADIO_VALUE}
            onChange={this.handleRadioChange}
          />
          <div>
            <FilterItem
              label={filters.sources}
              options={sources}
              value={sourceFilter}
              onChange={this.handleFilterChange(filters.sources, MANUAL_RADIO_VALUE)}
              disabled={this.isFilterDisabled(SOURCE_RADIO_VALUE)}
            />
          </div>
        </div>
        <div className="filter-container">
          <input
            type="radio"
            name="filter"
            checked={this.isFilterDisabled(SOURCE_RADIO_VALUE)}
            value={MANUAL_RADIO_VALUE}
            onChange={this.handleRadioChange}
          />
          <div>
            <FilterItem
              label={filters.category}
              options={mappedCategories}
              value={categoryFilter}
              onChange={this.handleFilterChange(filters.category, SOURCE_RADIO_VALUE)}
              disabled={this.isFilterDisabled(MANUAL_RADIO_VALUE)}
            />
            <FilterItem
              label={filters.country}
              options={mappedCountries}
              value={countryFilter}
              onChange={this.handleFilterChange(filters.country, SOURCE_RADIO_VALUE)}
              disabled={this.isFilterDisabled(MANUAL_RADIO_VALUE)}
            />
          </div>
        </div>
      </form>
    );
  }
}

FilterList.propTypes = {
  loadSourceOptions: PropTypes.func.isRequired,
  applyFilterChanges: PropTypes.func.isRequired,
  sources: PropTypes.arrayOf(PropTypes.object).isRequired,
  countryFilter: PropTypes.string.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  sourceFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FilterList.defaultProps = {
  className: '',
};

function mapStateToProps(state) {
  return {
    sources: getSourceOptions(state),
    countryFilter: getCountryFilter(state),
    categoryFilter: getCategoryFilter(state),
    sourceFilter: getSourceFilter(state),
    ...getWrapperProps(state),
  };
}

const filterWithLoadingWrapper = withLoadingHandlers(FilterList);

export default connect(mapStateToProps, {
  loadSourceOptions,
  applyFilterChanges,
  changeFilter,
})(filterWithLoadingWrapper);
