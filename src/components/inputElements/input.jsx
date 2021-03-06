import React from 'react';
import '../../App.css';
class InputFrom extends React.Component {
  state = {
    name: '',
    email: '',
    country: '',
    bio: '',
    birthDate: '',
    gender: '',
    agree: false,
    skills: []
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

   handleCheckbox = event => {
    this.setState({
      agree: event.target.checked
    })
   }

   skillsChangeHandler = event => {
    if(event.target.checked){
      this.setState({
        skills: [...this.state.skills, event.target.value]
      } )
    }
    else{
      const skills = this.state.skills.filter(skill => skill !== event.target.value)
      this.setState({skills})
    }
   }
  render(){

   
    const {name, email, country,bio, birthDate, agree, skills} = this.state
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
          <div>
            <input type="radio" name='gender' value= 'Male' onChange={this.handleChange}/> Male

            <input type="radio" name='gender' value= 'Female' onChange={this.handleChange}/> Female

            <input type="radio" name='gender' value='Others' onChange={this.handleChange}/> Others
          </div>
          <div>
            <h5>Skills :</h5> 
            <input type="checkbox" onChange={this.skillsChangeHandler} name= 'skills' value='Java' checked= {skills.includes('Java')} /> Java
            <input type="checkbox" onChange={this.skillsChangeHandler} name= 'skills' value='Javascript' checked= {skills.includes('Javascript')} /> Javascript
            <input type="checkbox" onChange={this.skillsChangeHandler} name= 'skills' value='C++' checked= {skills.includes('C++')} /> C++
            <input type="checkbox" onChange={this.skillsChangeHandler} name= 'skills' value='Python' checked= {skills.includes('Python')} /> Python
          </div>
          <div>
            <input type="checkbox" value={agree}  onChange={this.handleCheckbox }/> I agree this terms and policy
          </div>
          <button onClick={this.buttonHandler} >Submit</button>
      </div>
    )
  }
}


export default InputFrom;