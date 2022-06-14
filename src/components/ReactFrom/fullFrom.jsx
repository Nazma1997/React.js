import React, {Component} from 'react';
import From from './from';




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
    // const {name, email, password} = this.state
    return(
     
      <div style={{textAlign:'center'}}> <br />
      <h3>Simple From With React</h3>
       <From
          values= {this.state}
          handleChange = {this.handleChange}
          submitHandler = {this.submitHandler}
        />

      </div>
    )
  }
}

export default ReactFrom; 