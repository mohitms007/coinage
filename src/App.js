import React from 'react';
import Home from './pages/index'
import{ BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import SigninPage from './pages/signin'

import '../src/App.css'
function App() {
  return (
    <Router> 
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={SigninPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
