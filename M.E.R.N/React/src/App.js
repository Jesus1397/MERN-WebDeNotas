import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import NotesList from "./components/NotesList";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route path="/" component={NotesList} exact />
          <Route path="/edit/:id" component={CreateNote} exact />
          <Route path="/create" component={CreateNote} exact />
          <Route path="/user" component={CreateUser} exact />
      </Switch>
    </Router>
  );
}

export default App;