import React, {Component} from 'react';
import './App.css'
// import InputFrom from './components/inputElements/input';
// import ReactFrom from './components/reactFrom';
// import Event from './components/eventListener';
import UncontrolledFrom from './components/unControlledFrom/input';

// import Timer from './Timer';

class App extends Component {
  render(){
    return(
       
        
         <div>
          {/* <InputFrom></InputFrom> */}
          <UncontrolledFrom></UncontrolledFrom>
        </div>
       
      
    )
  }
}

export default App;