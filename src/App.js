import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/home';
import Slider from './components/slider';
import NotFound from './shared/notFound';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/alternative" component={Slider} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
