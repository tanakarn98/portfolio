import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top from "./screens/Top";
import Works from "./screens/Works";
import Navbar from "./components/Navbar";
import * as contentful from "contentful";
import ApiKey from "./constants/contentful";

const App = () => {
  const client = contentful.createClient(ApiKey);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        order: "-sys.createdAt",
        "sys.contentType.sys.id": "works",
      })
      .then((res) => setWorks(res.items));
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Top />} />
        <Route exact path="/works" render={() => <Works data={works} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
