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

  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  buttonHandler = event => {
    event.preventDefault();
    console.log(this.state)
  }

  render(){

   
    const {name, email, country,bio, birthDate} = this.state
    return(
      
      <div className=' mainDiv'>
          <h3 style={{textAlign:'center', marginBottom:'20px'}}>Input From With React</h3>
          <div>
            <p>Enter Your Name</p>
            <input onChange={this.handleChange} name='name' value={name} className='InputField' type="text" />
          </div>
          <div>
            <p>Enter Your Email</p>
            <input onChange={this.handleChange} name='email' value={email} className='InputField' type="email" />
          </div>
          <div>
            <p>Select Your Country</p>
            <select onChange={this.handleChange} name="country" value={country} className='InputField'>
              <option >Select Your Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
            </select>
          </div>
          <div>
            <p>Tell About Yourself</p>
           <textarea onChange={this.handleChange} name="bio" value={bio} className='InputField '></textarea>
          </div>
          <div>
            <p>Give Your Birth Date</p>
            <input onChange={this.handleChange} name='birthDate' value={birthDate} className='InputField' type="date" />
          </div>

          <button onClick={this.buttonHandler} >Submit</button>
      </div>
    )
  }
}


export default InputFrom;