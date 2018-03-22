import React from 'react';
import PropTypes from 'prop-types';

export default function FilterItem({
  label,
  options,
  value,
  onChange,
  disabled,
}) {
  return (
    <div>
      {label}
      <select value={value} onChange={onChange} disabled={disabled}>
        {options.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
      </select>
    </div>
  );
}

FilterItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

FilterItem.defaultProps = {
  label: '',
  onChange: () => {},
  disabled: false,
};
