import React, { Component } from 'react';
import {connect} from 'react-redux';
class Child extends React.Component{
      constructor(props){
        super(props);
        this.state={
            text:'This is a child Component'
        };
    }
    changeText =()=>{
        this.setState({
            text:'The text has been changed now and '+Math.random()
        })
    }
    render(){
        return(

       <div>
           {this.state.text}
        </div>

        );
    }
}
//export default connect (null)(Child);
export default Child;