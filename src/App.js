import React from 'react';
//PAGES
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import BorrowPage from './Pages/BorrowPage';
import ReturnPage from './Pages/ReturnPage';

import aes from "crypto-js/aes";
import Base64 from 'crypto-js/enc-base64';
import CryptoJS from "crypto-js"

import moment from 'moment';

//ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  if(window.localStorage.getItem('exp')){
    setInterval(() => {
      var exp=window.localStorage.getItem('exp');
      var decoded=aes.decrypt(exp,process.env.REACT_APP_NOT_SECRET_CODE).toString(CryptoJS.enc.Utf8);
      var time=moment(decoded);
      if(moment().isAfter(time)){
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('exp');
        window.localStorage.removeItem('role');
        window.location.replace('/');
      }
    }, 1000);
  }

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
