import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './input';

const From = props => (
  <div>
    <form onSubmit={props.submitHandler}>
       
        <TextInput
                   name = 'name'
                  placeholder='Enter Your Name'
                   type = 'text'
                   value = {props.values.name}
                  onChange ={props.handleChange}
        /> <br /> <br />
        <TextInput
            name = 'email'
            placeholder= 'Enter Your Email'
             type = 'text'
           value = {props.values.email}
           onChange ={props.handleChange}
         /> <br /> <br />
        <TextInput
             name = 'password'
             placeholder='Enter Your Password'
              type = 'password'
             value = {props.values.password}
            onChange ={props.handleChange}
         /> <br /> <br />


      <button type='submit'>Submit</button>
    </form>
  </div>
);

From.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitHandler : PropTypes.func.isRequired
}



export default From;