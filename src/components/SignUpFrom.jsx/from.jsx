import React from 'react';
import PropTypes from "prop-types";
import '../../App.css';
import TextInput from './input';


const FromField = ({values, handleChange, handleSubmit} )=> {
  
  // const {name, email, password, birthDate} = values
  return(
    
       <form onSubmit={handleSubmit}>
       <TextInput 
          className= 'InputField'
          label='Enter Your Name'
          type= 'text'
          name= 'name'
          value= {values.name}
          placeholder= 'Enter Your Name'
          onChange= {handleChange}
        />
         <TextInput 
          className= 'InputField'
          label='Enter Your Email'
          type= 'email'
          name= 'email'
          value= {values.email}
          placeholder= 'Enter Your Email'
          onChange= {handleChange}
        />
         <TextInput 
          className= 'InputField'
          label='Enter Your Password'
          type= 'password'
          name= 'password'
          value= {values.password}
          placeholder= 'Enter Your Password'
          onChange= {handleChange}
        />
         <TextInput 
          className= 'InputField'
          label='Enter Your Birth Date'
          type= 'date'
          name= 'birthDate'
          value= {values.birthDate}
          placeholder= 'Enter Your Birth Date'
          onChange= {handleChange}
        />

        <button type='submit'>Create User</button>
       </form>
    
  )
}

FromField.propsTypes ={ 
   values: PropTypes.object.isRequired,
   onChange: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired
}



export default FromField;