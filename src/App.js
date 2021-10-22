import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import Slider from './components/slider';
import Layout from './shared/layout';
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
