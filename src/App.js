import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./routes/home";
import Rooms from "./routes/rooms";
import SingleRoom from "./routes/singleRoom";
import Error404 from "./routes/error404";

import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route path="/error" exact component={Error404} />
        <Route component={Error404} />
      </Switch>
    </>
  );
}

export default App;
