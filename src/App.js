import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BodyContainer from "./components/body/body";
import HireMe from './components/sections/hireMe/hireMe'
function App() {
  return (
   
    <BrowserRouter basename="/portfolio">
      <Switch>
        <Route path="/" component={BodyContainer} exact />
        <Route path="/hireme" component={HireMe} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
