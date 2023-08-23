import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Signin from './User/Signin';
import Signup from './User/Signup';

const Routes = () => {
  return (
    
      <Routes>
        <Route path='/signin' exact component={Signin}/>
        <Route path='/signup' exact component={Signup}/>
      </Routes>
   
  )
}

export default Routes
