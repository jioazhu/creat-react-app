import React,{Component} from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import {ThemeContext,themes} from '../theme-context';



class Home extends Component{


  render(){
    const { state } = this.props;
    console.log(this)
    return (
      <ThemeContext.Consumer>
        {(context)=>{
          console.log(context)
          return (
            <div>
              {JSON.stringify(state)}{JSON.stringify(themes[context.theme])}
              <button onClick={()=>{context.theme==='light'?context.toggleTheme('dark'):context.toggleTheme('light')}}>切换</button>
            </div>
          )
        }}
        
      </ThemeContext.Consumer>
    
    )
  }
}

// Home.contextTypes = {
//   color:PropTypes.string
// }

export default connect((state)=>{
  return {
    state
  }
})(Home);
