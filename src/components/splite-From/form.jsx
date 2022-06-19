import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css'
import TextInput from './input'
const Form = props => {
  return(
    <div className='mainDiv'>
      <form onSubmit={props.handleSubmit}>
      <TextInput 
           className='InputField'
           type="text"
           name={props.values.name}
           placeholder= {props.placeholder}
           onChange= {props.onChange}
       />
        <TextInput 
           className='InputField'
           type="email"
           name={props.values.name}
           placeholder= {props.placeholder}
           onChange= {props.onChange}
       />
       <TextInput 
           className='InputField'
           type="password"
           name={props.values.name}
           placeholder= {props.placeholder}
           onChange= {props.onChange}
       />
       <button type='submit'>Submit</button>
      </form>
       
    </div>
  )
}

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Form;
     


