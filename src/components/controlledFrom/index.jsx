import React, {Component} from 'react';
import '../../App.css'
class ControlledFrom extends Component {

  state = {
    name: '',
    email: '',
    password: ''
  }
  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
   console.log(this.state)
   event.target.reset()
   this.setState({
    name: '',
    email: '',
    password: ''
   })
  }
  render(){
    return(
      <div className=' mainDiv'>
        <h4 style={{textAlign:'center', marginBottom:'20px'}}>Uncontrolled Form</h4>
         <form onSubmit={this.handleSubmit}>
             <p>Enter Your Name</p>
             <input onChange={this.handleChange} className='InputField' type="type" name= 'name' placeholder='Enter Your Name'/>
             <p>Enter Your Email</p>
             <input onChange={this.handleChange} type="email" className='InputField' name='email' placeholder='Enter Your Email' />
             <p>Enter Your Password</p>
             <input onChange={this.handleChange} type="password" name='password' className='InputField' placeholder='Enter Your Password' />

             <button type='submit'>Submit</button>
         </form>
      </div>
    )
  }
}

export default ControlledFrom;