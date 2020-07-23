import React,{Component} from 'react';
import { connect } from 'react-redux';

class App extends Component{


  render(){
    const { state } = this.props;
    return (
    <div>{JSON.stringify(state)}</div>
    )
  }
}



export default connect((state)=>{
  return {
    state
  }
})(App);
