import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Index from './views';
import Login from './views/login';
import Registro from './views/registro';

function App() {
  return (

    <Fragment>
    <Router>
      <Routes>
        <Route path="/" exact element = {<Index/>}/>
        <Route path="/login" exact element = {<Login/>}/>
        <Route path="/registrar" exact element = {<Registro/>}/>
      </Routes>
    </Router>
  </Fragment>


  );
}

export default App;
