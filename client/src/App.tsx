import React from "react";
import logo from "./logo.svg";
import { Layout } from "./layout/layout";
import "./App.css";

//PAGES
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App">
      <Layout className="App-header">
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
