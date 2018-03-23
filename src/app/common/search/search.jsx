import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  handleChange = (event) => {
    const { value: searchValue } = event.target;
    this.setState({ searchValue });
    this.props.onChange(searchValue);
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div className="search">
        Search by title: <input value={searchValue} onChange={this.handleChange} />
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func,
};

Search.defaultProps = {
  onChange: () => {},
};
