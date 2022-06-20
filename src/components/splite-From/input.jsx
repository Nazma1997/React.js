import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';


const InputFrom = props => {
  return(
    <div className='mainDiv'>
      <input
       className='InputField'
      
       type={props.type}
       name={props.name}
       value={props.value}
       placeholder= {props.placeholder}
       onChange= {props.onChange}
       />

    </div>
  )
}

InputFrom.propTypes ={
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired
}
 InputFrom.defaultProps = {
     type : 'text',
     placeholder: ''
 }
export default InputFrom;