import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../pages/home';
import List from '../pages/list';

export default () => [
  <Route key='index' path="/" render={()=><Redirect to="/home" />} exact/>,
  <Route key='home' path="/home" component={Home} />,
  <Route key='list' path="/list" component={List} />
]