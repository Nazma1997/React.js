import React from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import Input from './input';

const FromField = ({values, handleChange, handleSubmit, handleAgreement}) => {
  return(
      <form onSubmit={handleSubmit}>
        <Input 
           label='Enter Your Name'
           type= 'text'
           values={values.name}
           name= 'name'
           placeholder='Enter Your Name'
           onChange={handleChange}

        />
        <button type='submit'>Create User</button>
      </form>
  )
}

FromField.propTypes ={
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default FromField;