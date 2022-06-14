import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => (
   <input 
     type={props.type}
     name = {props.name}
     id = {props.id}
     placeholder = {props.placeholder}
     value = {props.value}
     onBlur = {props.onBlur}
   />
);

TextInput.propTypes = {
  name : PropTypes.string.isRequired,
  type : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired,
  placeholder:  PropTypes.string.isRequired,
  value : PropTypes.string.isRequired,
  onBlur : PropTypes.func.isRequired
};

TextInput.defaultProps = {
    type: 'text',
    placeholder: ''
};

export default TextInput;