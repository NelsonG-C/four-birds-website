import React from "react";
import logo from "./logo.svg";
import { Layout } from "./layout/layout";
import "./App.css";

//PAGES
import HomePage from "./pages/home";
import { TestPage } from "./pages/test";
import { BirdsPage } from "./pages/birds";
import { ResultsPage } from "./pages/results";
import { AboutPage } from "./pages/about";

function App() {
  return (
    <div className="App">
      <Layout className="App-header">
        <HomePage />
        <AboutPage />
        <TestPage />
        <BirdsPage />
        <ResultsPage />
      </Layout>
    </div>
  );
}

export default App;
