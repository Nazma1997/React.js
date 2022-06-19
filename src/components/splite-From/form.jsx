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
           name='name'
           value={props.values.name}
           placeholder= 'Enter Your Name'
           onChange= {props.handleChange}
       />
       
        <TextInput 
           className='InputField'
           type="email"
           name='email'
           value={props.values.email}
           placeholder= 'Enter Your Email'
           onChange= {props.handleChange}
       />
       
       <TextInput
           className='InputField'
           type="password"
           name='password'
           value={props.values.password}
           placeholder= 'Enter Your Password'
           onChange= {props.handleChange}
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
     


