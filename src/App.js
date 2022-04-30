import React from "react";
import Header from "./components/header/Header.component";
import "./App.css";
import CardContainer from "./components/card-container/CardContainer.component";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <CardContainer />
    </React.Fragment>
  );
};

export default App;
