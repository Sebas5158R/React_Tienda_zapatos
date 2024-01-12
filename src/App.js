import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Index from './views';
import Login from './views/login';
import Registro from './views/registro';
import RegistroEmpresa from './components/RegistroEmpresa';
import Productos from './views/productos';

function App() {
  return (

    <Fragment>
    <Router>
      <Routes>
        <Route path="/" exact element = {<Index/>}/>
        <Route path="/login" exact element = {<Login/>}/>
        <Route path="/registrar" exact element = {<Registro/>}/>
        <Route path="/registrar" exact element = {<RegistroEmpresa/>}/>
        <Route path="/productos" exact element = {<Productos/>}/>
      </Routes>
    </Router>
  </Fragment>


  );
}

export default App;
