import React, {Component} from 'react';
import './App.css'
// import SignUp from './components/SignUpFrom.jsx/SignUp';
import Todo from './useState/useState';

// import FullForm from './components/splite-From/spliteFrom';
// import ControlledFrom from './components/controlledFrom';
// import InputFrom from './components/inputElements/input';
// import ReactFrom from './components/reactFrom';
// import Event from './components/eventListener';
// import UncontrolledFrom from './components/unControlledFrom/input';

// import Timer from './Timer';

class App extends Component {
  render(){
    return(
       
        
         <div>
          {/* <InputFrom></InputFrom> */}
          {/* <UncontrolledFrom></UncontrolledFrom> */}
          {/* <ControlledFrom></ControlledFrom> */}
          {/* <FullForm></FullForm> */}
          {/* <SignUp /> */}
          <Todo />
        </div>
       
      
    )
  }
}

export default App;