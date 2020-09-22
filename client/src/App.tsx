import React, { useState } from "react";
import logo from "./logo.svg";
import { Layout } from "./layout/layout";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//PAGES
import HomePage from "./pages/home";
import { TestPage } from "./pages/test";
import { BirdsPage } from "./pages/birds";
import { ResultsPage } from "./pages/results";
import { AboutPage } from "./pages/about";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout className="App-header">
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/birds">
              <BirdsPage />
            </Route>
            <Route path="/test">
              <TestPage />
            </Route>
            <Route path="/results">
              <ResultsPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
