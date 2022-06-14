import React, {Component} from 'react';

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
        [event.target.values] : event.target.value
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
    console.log(this.state);

    event.target.reset()
    this.setState({values : initValues, agreement: false})
  }


  render(){
    return(
      <div style={{textAlign: 'center'}}>
          <h1>SignUp From</h1>
      </div>
    )
  }
}

export default SignUp;