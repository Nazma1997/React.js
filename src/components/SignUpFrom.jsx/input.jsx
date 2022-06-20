import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Input = props => {
  return(
    <div>
          <label htmlFor={props.name}>{props.label}</label>
          <input
              className='InputField'
              type={props.type}
              name={props.name}
              id={props.name}
              value={props.value}
              placeholder={props.placeholder}
              onChange={props.onChange}
           />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

Input.defaultProps ={ 
  type: 'text',
  placeholder: '',
  label: ''
}

export default Input;