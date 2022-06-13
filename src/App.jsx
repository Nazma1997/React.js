import React, {Component} from 'react';
import './App.css'
import FullFrom from './components/ReactFrom/fullFrom';
import ReactFrom from './components/reactFrom';
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
        </div>
       
      
    )
  }
}

export default App;