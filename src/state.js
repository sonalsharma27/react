import React from 'react';
import './App.css'
 class State extends React.Component{
    
    constructor(){
        super();
        this.state={
            counter:0
        };
    }
    addition = () => {
        debugger;
        this.setState((prevstate)=>({ 
            
            counter:prevstate.counter+1
        }));
          
        
    };
    subtraction = () => {
        debugger;
        this.setState((prevstate)=>({ 
            
            counter:prevstate.counter-1
        }));
          
        
    };
    reset = () => {
        debugger;
        this.setState((prevstate)=>({ 
            
            counter:prevstate.counter-prevstate.counter
        }));
          
        
    };
  
        render() {
            return (
              <div className="App">
                <div >
                 COUNTER: <input
                    type="text"
                    name="counter"
                    value={this.state.counter}
                    // onChange={(e) => {
                    //   this.inputChangeHandler(e);
                    // }}
                    
                   /> <button onClick={(this.addition)}>
                   PLUS
               </button>
               <button onClick={(this.subtraction)}>
                   MINUS
               </button>
                  </div>
                  <div>
                  <button onClick={(this.reset)}>
                   reset
               </button>
                  
                  </div>
            
            </div> );
             
    }
}
export default State;