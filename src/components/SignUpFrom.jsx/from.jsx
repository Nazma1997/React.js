import React from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import Input from './input';
// import Checked from './checked';

const FromField = ({values, handleChange, handleSubmit, handleAgreement, agreement}) => {
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
        <Input 
            label='Enter Your Email'
            type='email'
            values = {values.email}
            name = 'email'
            placeholder='Enter Your Email'
            onChange={handleChange}
        />
        <Input 
           label='Enter Your Password'
           type='password'
           values ={ values.password}
           name= 'password'
           placeholder='Enter Your Password'
           onChange={handleChange}
        />
        <Input 
           label='Provide Your BirthDate'
           type='date'
           values= {values.birthDate}
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
         
          
          
        <button style={{backgroundColor:'goldenrod', color:'white', marginTop:'5px'}} type='submit' >Create User</button>
      </form>
  )
}

FromField.propTypes ={
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default FromField;