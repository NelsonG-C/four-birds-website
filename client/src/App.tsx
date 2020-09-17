import React from "react";
import logo from "./logo.svg";
import { Layout } from "./layout/layout";
import "./App.css";

//PAGES
import HomePage from "./pages/home";
import { TestPage } from "./pages/test";

function App() {
  return (
    <div className="App">
      <Layout className="App-header">
        <TestPage />
      </Layout>
    </div>
  );
}

export default App;
