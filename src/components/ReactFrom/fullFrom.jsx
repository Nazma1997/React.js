import React, {Component} from 'react';
import TextInput from './input';



class ReactFrom extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value})
  }
  submitHandler = event => {
    event.preventDefault()


    console.log(this.state)
    event.target.reset()
    this.setState({  name: "",
                     email: "",
                      password: ""})
  }

  render(){
    const {name, email, password} = this.state
    return(
     
      <div style={{textAlign:'center'}}> <br />
      <form onSubmit={this.submitHandler}>
        <TextInput
                   name = 'name'
                  placeholder='Enter Your Name'
                   type = 'text'
                   value = {name}
                  onChange ={this.handleChange}
        /> <br /> <br />
        <TextInput
            name = 'email'
            placeholder= 'Enter Your Email'
             type = 'text'
           value = {email}
           onChange ={this.handleChange}
         /> <br /> <br />
        <TextInput
             name = 'password'
             placeholder='Enter Your Password'
              type = 'password'
             value = {password}
            onChange ={this.handleChange}
         /> <br /> <br />


      <button type='submit'>Submit</button>
    </form>

      </div>
    )
  }
}

export default ReactFrom; 