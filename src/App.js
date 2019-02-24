import React, { Component } from 'react';


import './App.css';

import Child from './Child.js';

class App extends Component {
   constructor(props){
     super(props);
     this.state={

     };
   }
   accsessChild=()=>{
    console.log(this.refs);
    this.refs.child.changeText();
      
   }
  render() {
   
    return (
      <div className="App">
         <h1>This is parent Component
            <button   onClick={this.accsessChild}
            > Click to change text</button></h1>
           <Child ref="child"/>
      </div>
      
    );
  }
}

export default App;
