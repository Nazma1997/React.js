import React from 'react';
import '../../App.css';
class InputFrom extends React.Component {
  state = {
    name: '',
    email: '',
    country: '',
    bio: '',
    birthDate: ''
  }

  render(){

   
    const {name, email, country,bio, birthDate} = this.state
    return(
      
      <div className=' mainDiv'>
          <h3 style={{textAlign:'center', marginBottom:'20px'}}>Input From With React</h3>
          <div>
            <p>Enter Your Name</p>
            <input name='name' value={name} className='InputField' type="text" />
          </div>
          <div>
            <p>Enter Your Email</p>
            <input name='email' value={email} className='InputField' type="email" />
          </div>
          <div>
            <p>Select Your Country</p>
            <select name="country" value={country} className='InputField'>
              <option >Select Your Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
            </select>
          </div>
          <div>
            <p>Tell About Yourself</p>
           <textarea name="birthDate" className='InputField'></textarea>
          </div>
          <div>
            <p>Give Your Birth Date</p>
            <input name='birthDate' value={birthDate} className='InputField' type="date" />
          </div>

          <button>Submit</button>
      </div>
    )
  }
}


export default InputFrom;