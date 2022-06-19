import React, {Component} from 'react';
import '../../App.css'
class UncontrolledFrom extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const data = {};
    data.name = event.target.name.value
    data.email = event.target.email.value
    data.password = event.target.password.value
    console.log(data)

    event.target.reset()
  }
  render(){
    return(
      <div className=' mainDiv'>
        <h4 style={{textAlign:'center', marginBottom:'20px'}}>Uncontrolled Form</h4>
         <form onSubmit={this.handleSubmit}>
             <p>Enter Your Name</p>
             <input className='InputField' type="type" name= 'name' placeholder='Enter Your Name'/>
             <p>Enter Your Email</p>
             <input type="email" className='InputField' name='email' placeholder='Enter Your Email' />
             <p>Enter Your Password</p>
             <input type="password" name='password' className='InputField' placeholder='Enter Your Password' />

             <button type='submit'>Submit</button>
         </form>
      </div>
    )
  }
}

export default UncontrolledFrom;