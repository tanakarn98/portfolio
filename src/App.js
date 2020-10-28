import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top from "./components/Top.js";
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
      <Switch>
        <Route exact path="/" render={() => <Top data={works} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
