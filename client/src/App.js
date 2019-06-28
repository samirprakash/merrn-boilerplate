import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import SamplesList from "./components/SamplesList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <SamplesList />
      </div>
    </Provider>
  );
}

export default App;
