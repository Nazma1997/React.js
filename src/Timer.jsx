import React, {Component} from 'react';
import './App.css';


class Timer extends Component {
      
      state ={
                count: 0
           }

      intervalId = null

      incrementTimer = () => {
          this.setState({count: this.state.count + 1})
      }

      decrementTimer = () => {
        if(this.state.count > 0){
          this.setState({count: this.state.count - 1 })
        }
      }

      startTimer = () => {
        if(this.state.count > 0 && !this.intervalId){
          this.intervalId = setInterval(() => {
            this.setState({count: this.state.count - 1}, () => {
              if(this.state.count === 0){
                alert('Timer Finished')
                clearInterval(this.intervalId)
                this.intervalId = null
              }
            });
          }, 1000)
        }
      }
      
  render(){
    return(
      <div className='App'>
            <div className='card'>
              <h1>Timer in Hour</h1>
              <button onClick={this.incrementTimer}>Increment</button>
              <span>{this.state.count}</span>
              <button onClick={this.decrementTimer}>Decrement</button>
              <div>
                  <button onClick={this.startTimer }>Start</button>
                  <button>Stop</button>
                  <button>Reset</button>
           </div>
           </div>
          
      </div>
    )
  }
}

export default Timer;