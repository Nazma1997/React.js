import React from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import Input from './input';
// import Checked from './checked';

const FromField = ({values, handleChange, handleSubmit, handleAgreement, agreement,errors}) => {
  return(
      <form onSubmit={handleSubmit}>
        <Input 
           label='Enter Your Name'
           type= 'text'
           values={values.name}
           error= {errors.name}
           name= 'name'
           placeholder='Enter Your Name'
           onChange={handleChange}

        />
        <Input 
            label='Enter Your Email'
            type='email'
            values = {values.email}
            error= {errors.email}
            name = 'email'
            placeholder='Enter Your Email'
            onChange={handleChange}
        />
        <Input 
           label='Enter Your Password'
           type='password'
           values ={ values.password}
           error= {errors.password}
           name= 'password'
           placeholder='Enter Your Password'
           onChange={handleChange}
        />
        <Input 
           label='Provide Your BirthDate'
           type='date'
           values= {values.birthDate}
           error= {errors.birthDate}
           name= 'birthDate'
           placeholder='Give Your Birth Date'
           onChange={handleChange}
        />
        {/* <Checked 
            onChange={handleChange}
        /> */}
        <div>
            <input type="radio" name='gender' value= 'Male' onChange={handleChange}/> Male

            <input type="radio" name='gender' value= 'Female' onChange={handleChange}/> Female

            <input type="radio" name='gender' value='Others' onChange={handleChange}/> Others
            
            {errors.gender && <div className='input:invalid'>{errors.gender} </div>}
          </div>

          <div>
          <label>
              <input
                   type="checkbox"
                   
                   name='agreement'
                   checked={agreement}
                   onChange= {handleAgreement}
               />
            </label> I agree this terms and policy
          </div>
         
          
          
        <button style={{ marginTop:'5px'}} disabled={!agreement} type='submit' >Create User</button>
      </form>
  )
}

FromField.propTypes ={
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default FromField;