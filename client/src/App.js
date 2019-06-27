import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import SamplesList from "./components/SamplesList";

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <SamplesList />
    </div>
  );
}

export default App;
