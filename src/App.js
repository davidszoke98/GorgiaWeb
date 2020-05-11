import React from 'react';
//PAGES
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

//ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  var token=window.localStorage.getItem('token');
  if(token){
    return (
      <Router>
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </Router>
      
    );
  }
  else{
    return <LoginPage></LoginPage>
  }

}

export default App;
