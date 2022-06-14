import React, {Component} from 'react';
import './App.css'
import SignUp from './components/signUpFrom/signUp';
import FullFrom from './components/ReactFrom/fullFrom';
// import ReactFrom from './components/reactFrom';
// import Event from './components/eventListener';
// import From from './components/inputFild';
// import Timer from './Timer';

class App extends Component {
  render(){
    return(
       
        
         <div>
           {/* <From></From> */}
           {/* <ReactFrom></ReactFrom> */}
           <FullFrom></FullFrom>
           {/* <SignUp /> */}
        </div>
       
      
    )
  }
}

export default App;