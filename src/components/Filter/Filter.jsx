import React from 'react';
import PropType from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name:
      <br/>
      <input type="text" value={value} onChange={onChange} placeholder='search...'/>
    </label>
  );
};

Filter.propTypes = {
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default Filter;