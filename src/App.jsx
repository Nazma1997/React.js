import React, {Component} from 'react';
import './App.css'
import ControlledFrom from './components/controlledFrom';
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
          <ControlledFrom></ControlledFrom>
        </div>
       
      
    )
  }
}

export default App;