import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
class From extends Component {
  state = {
    name: "",
    country: '',
    bio: '',
    birthDate: '',
    gender: '',
    agree: false,
    skills : []
  }

  handleChange = events => {
    this.setState({[events.target.name]: events.target.value})
  //  console.log(events)
  }

  handleChangeCheckBox = events => {
    this.setState({agree: events.target.checked})
  }

  skillsChangeHandler = events => {
        if(events.target.checked){
           this.setState({
            skills: [...this.state.skills, events.target.value]
           })
        }else{
          const skills = this.state.skills.filter(skill => skill !== events.target.value)
          this.setState({skills})
        }
  }
  render(){

    const {name, country, bio, birthDate, agree, skills} = this.state;
   return(
    <div className='card'>
      <div className='main'>
      
        <input onChange={this.handleChange} type="text" value={name} name='name' placeholder='Enter Your Name'/>
      
      <select value={country} name="country" className='SelectTerm' onChange={this.handleChange}>
        <option value="Select Country">Select Country</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="India">India</option>
        <option value="Pakistan">Pakistan</option>
      </select>
      <textarea value={bio} onChange={this.handleChange} name="bio" className='textType' placeholder='Tell me about yourself'></textarea>
      <input value={birthDate} onChange={this.handleChange} type="date" name='birthDate' className='dateInput' />
    </div>
    <div>
      <input  style={{marginRight:'5px', }}type="radio" value="male" name="gender"  onChange={this.handleChange}/> Male
      <input style={{marginLeft:'5px'}} type="radio" value="female" name="gender" onChange={this.handleChange} /> Female
      <input type="radio" value="others" name="gender" onChange={this.handleChange} /> Others
    </div>
    <div>
      <input type="checkbox" name="skills" value="Java"  checked = {skills.includes("Java")} onChange={this.skillsChangeHandler}/> Java
      <input type="checkbox" name="skills" value="Javascript"  checked = {skills.includes("Javascript")} onChange={this.skillsChangeHandler}/> Javascript
      <input type="checkbox" name="skills" value="python"  checked = {skills.includes("python")} onChange={this.skillsChangeHandler}/> Python
      <input type="checkbox" name="skills" value="goLang"  checked = {skills.includes("goLang")} onChange={this.skillsChangeHandler}/> GoLang
      
      
    </div>
    <div>
      <input type="checkbox" name="agree" checked={agree} onChange={this.handleChangeCheckBox} /> I agree this terms and policy
    </div>

   <button onClick={() => console.log(this.state)}>Show Data</button>
    {<h2>{this.state.name} {this.state.bio} {this.state.country} {this.state.birthDate}</h2>}
  
    </div>
   )
  }
}

export default From;