
import React, {Component} from 'react';




class Event extends Component {

   state = {
      name : ""
   }
   eventListener = (event) => {
    console.log(event.target);
   }

   inputListener = events => {
    console.log(events.target.value)
   }

   inputBuinding = (event) => {
        this.setState({name: event.target.value})
   }

  render(){
    return(
      <div style={{textAlign:'center', padding:'20px'}}>
          <button  onClick={this.eventListener}>Click me</button>
          <input onBlur={this.inputListener} type="text" placeholder='Enter Some Text' />
          <br />
          <input type="text" onBlur={this.inputBuinding} />
          <br />
          {this.state.name && <h4>Hello {this.state.name}</h4>}
      </div>
    )
  }
}

export default Event;