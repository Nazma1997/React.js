import React, {Component} from 'react';
import PropTypes from 'prop-types';

const TextInput = props => (
   <input 
     type={props.type}
     name = {props.name}
     id = {props.id}
     placeholder = {props.placeholder}
     value = {props.value}
     onChange = {props.onChange}
   />
);

TextInput.propTypes = {
  name : PropTypes.string.isRequired,
  type : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired,
  placeholder:  PropTypes.string.isRequired,
  value : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired
};

TextInput.defaultProps = {
    type: 'text',
    placeholder: ''
};






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
     
      <div>
      <form onSubmit={this.submitHandler}>
  <TextInput
     name = 'name'
     placeholder='Enter Your Name'
     type = 'text'
     value = {name}
     onChange ={this.handleChange}
  />
  <TextInput
     name = 'email'
     placeholder='Enter Your Email'
     type = 'text'
     value = {email}
     onChange ={this.handleChange}
  />
  <TextInput
     name = 'password'
     placeholder='Enter Your Password'
     type = 'password'
     value = {password}
     onChange ={this.handleChange}
  />


 <button type='submit'>Submit</button>
 </form>

      </div>
    )
  }
}

export default ReactFrom; 