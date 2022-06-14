import React, {Component} from 'react';
import From from './from';

const initValues = {
  name: '',
  email: '',
  password: '',
  birthDate: '',
  gender: ''
}
class SignUp extends Component {

  state = {
     values: initValues,
     agreement: false
  };


  handleChange = event => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name] : event.target.value
      }
    })
  };

  handleAgreement = event => {
        this.setState({
          agreement : event.target.checked
        })
  };


  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.values);

    event.target.reset()
    this.setState({values : initValues, agreement: false})
  }


  render(){
    return(
      <div style={{textAlign: 'center'}}>
          <h1>SignUp From</h1>
          <From
             values= {this.state.values}
             agreement = {this.state.agreement}
             handleChange = {this.handleChange}
             handleAgreement = {this.handleAgreement}
             handleSubmit = {this.handleSubmit}
          ></From>
      </div>
    )
  }
}

export default SignUp;