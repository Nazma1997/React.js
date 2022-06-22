import React from 'react';
import PropTypes from 'prop-types';
const Checked = ({handleChange}) => {
  return(
    <div>
            <input type="radio" name='gender' value= 'Male' onChange={handleChange}/> Male

            <input type="radio" name='gender' value= 'Female' onChange={handleChange}/> Female

            <input type="radio" name='gender' value='Others' onChange={handleChange}/> Others
          </div>
  )
}

Checked.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Checked;