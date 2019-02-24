import React, { Component } from 'react';

import './App.css';

const FuncCustomComp = (props) => {

  let textRef = null;
    
   const handleClick = () => {
     alert(`yey, input val is ${textRef.value}`)
   }
    return (
      <div style={styles.myInput}>
        <MyInput inputRef={(input) => { textRef = input; }}/>
        <input
          type="button"
          value="show input"
          onClick={handleClick}
        />
      </div>
    ); 
}

class App extends Component {
  onClick =()=>{
    console.log(this.firstName.value);
  }
  onKeyUp =(target,e)=>{
    console.log('target',target);
    if(e.keyCode ===13){
      switch(target){
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
        this.firstName.focus();
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <span>First Name:</span>
          <input ref={(input)=> {this.firstName = input}} onKeyUp={this.onKeyUp.bind(this,'firstName')} type="text"/>
        </div>
        <div>
          <span>Last Name:</span>
          <input ref={(input)=> {this.lastName = input}}  onKeyUp={this.onKeyUp.bind(this,'lastName')} type="text"/>
        </div>
        <div>
          <span>Age:</span>
          <input ref={(input)=> {this.age = input}} onKeyUp={this.onKeyUp.bind(this,'age')}  type="number"/>
         </div>
         <div>
           <input  ref={(input)=> {this.submit = input}} type="submit" value="submit" onKeyUp={this.onKeyUp.bind(this,'submit')} onClick={this.onClick}/>
           </div>
      </div>
    );
  }
}

export default App;
