
import React, {Component} from 'react';
import '../../App.css';
import FromField from './from';


const initValues = {
  name: '',
  email: '',
  password: '',
  birthDate: '',
  gender: '',
};
class SignUp extends Component {

  state = {
    values: initValues,
    agreement: false
  }

  handleChange = event => {
    this.setState({
      values : {
        ...this.state.values, 
        [event.target.name] : event.target.value
      }
    })
   }

   handleAgreement = event => {
    this.setState({
      agreement: event.target.checked
    })
   }


   handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.values)

    event.target.reset();
    this.setState({initValues})
   }
  render(){
    return(
      <div className='mainDiv'>
         <h4 style={{textAlign:'center', marginBottom:'20px'}}>SignUp From With React</h4>

         <FromField 
            values={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            
         />
      </div>
    )
  }
}

export default SignUp;