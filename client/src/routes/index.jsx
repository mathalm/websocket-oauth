import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "../components/Login";

function Rotas() {
  return (

    <Routes >
      <Route path="/" element={<Login />}/>

    </Routes >
  )
}

export default Rotas;