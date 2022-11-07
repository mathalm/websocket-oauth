import React from "react";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Rotas from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
      <Rotas/>
      </div>
    </Router>
  );
}

export default App;
