import React,{Component} from 'react';
import Router from '../router/router';
// import PropTypes from 'prop-types';
import {ThemeContext, themes} from './theme-context';

class App extends Component{
  constructor(props) {
    super(props);


    this.state = {
      theme: 'light'
    };
  }

  toggleTheme = (theme) => {
    console.log(123)
    this.setState({theme});
  }



  // getChildContext(){
  //   return {
  //     color:'red'
  //   }
  // }

  render(){
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={{theme,toggleTheme:this.toggleTheme}}>
        <div><Router /></div>
      </ThemeContext.Provider>
    )
  }
}

// App.childContextTypes = {
//   color:PropTypes.string
// }

export default App;
