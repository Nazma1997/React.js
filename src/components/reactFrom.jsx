import React, {Component} from 'react';



class ReactFrom extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({[event.target.name] : event.target.value})
  }
  SubmitHandler = event => {
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
      <div>
        <form onSubmit={this.SubmitHandler}>
          <input type="text" name='name' value={name} onChange ={this.handleChange} placeholder='Enter Your Name'/>
          <input type="text" name ='email' value={email} onChange ={this.handleChange} placeholder='Enter Your Email' />
          <input type="password" name = 'password' value={password} onChange ={this.handleChange} placeholder='Enter Your Password' />
          <button type='submit'>Submit</button>
        </form>

      </div>
    )
  }
}

export default ReactFrom;