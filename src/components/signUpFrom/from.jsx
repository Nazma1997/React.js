import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../ReactFrom/input';

const From = ({values, handleChange, agreement, handleAgreement, handleSubmit})=> {

    
      return (
        <form onSubmit={handleSubmit}>
          <TextInput 
             name = 'name'
             type = 'text'
             placeholder='Enter Your Name'
             value = {values.name}
             onChange = {handleChange}
          /> <br /> <br />
          <TextInput 
             name = 'email'
             type = 'text'
             placeholder='Enter Your Email'
             value = {values.email}
             onChange = {handleChange}
          /> <br /> <br />
          <TextInput 
             name = 'password'
             type = 'password'
             placeholder='Enter Your Password'
             value = {values.password}
             onChange = {handleChange}
          /> <br /> <br />
         
          <TextInput 
             name = 'birthDate'
             type = 'date'
             value = {values.birthDate}
             onChange = {handleChange}
          /> <br /> <br />

          <div>
            <label>
              <input
                type="radio" 
                name = 'gender'
                value = 'Male'
                onChange= {handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio" 
                name = 'gender'
                value = 'Female'
                onChange= {handleChange}
              /> Female
            </label>
            <label>
              <input
                type="radio" 
                name = 'gender'
                value = 'others'
                onChange= {handleChange}
              /> Others
            </label>
          </div> <br /> <br />
          <div>
            <label>
              <input 
                  type="checkbox" 
                  name = 'agreement'
                  checked= {agreement}
                  onChange = {handleAgreement}
              /> I agree
            </label>
          </div>
          <button type='submit' disabled= {!agreement}> Create User</button>
        </form>
      )
}


From.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit : PropTypes.func.isRequired
}
export default From