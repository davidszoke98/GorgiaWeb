import React from 'react';
//PAGES
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import BorrowPage from './Pages/BorrowPage';
import ReturnPage from './Pages/ReturnPage';

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
          <Route path="/borrow" component={BorrowPage}></Route>
          <Route path="/return" component={ReturnPage}></Route>
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
