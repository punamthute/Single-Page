import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Form from './Components/Form';
import Features from "./Components/Features";
import Blog from "./Components/Blog";







function App() {
  return (
    <Router>
      <Header />
       <Blog/>
      
     
      <Switch>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/features" component={Features}></Route>
      {/* <Route exact path="/Blog" component={Blog}></Route> */}
      <Route exact path="/contact" component={Form}></Route>

      
      
      </Switch>
    </Router>
  );
}

export default App;
