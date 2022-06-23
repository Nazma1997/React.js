
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
    agreement: false,
    errors: {}
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
      const {isValid, errors} = this.validate();
      if(isValid){
        console.log(this.state)

        event.target.reset();
        this.setState({initValues})
      }
      else{
        this.setState({errors})
      }
    //
   }

   validate = () => {
         const errors = {}
         const {values: {name, email, password, gender, birthDate}} = this.state

         if(!name){
          errors.name = 'Please Provide Your Name'
         }
         if(!email){
          errors.email = 'Please Provide Your Email'
         }
         if(!password){
          errors.password = 'Please Provide Your Password'
         }
         if(!gender){
          errors.gender = 'Select Your Gender'
         }
         if(!birthDate){
          errors.birthDate = 'Please Provide Your Birth Date'
         }
         
         return{
          errors,
          isValid: Object.keys(errors).length === 0
         }
         
   }
  render(){
    return(
      <div className='mainDiv'>
         <h4 style={{textAlign:'center', marginBottom:'20px'}}>SignUp From With React</h4>

         <FromField 
            values={this.state.values}
            errors={this.state.errors}
            agreement={this.state.agreement}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleAgreement= {this.handleAgreement}
            
         />
      </div>
    )
  }
}

export default SignUp;