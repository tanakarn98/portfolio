import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top from "./components/Top.js";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Top />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
