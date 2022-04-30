import React from "react";
import Header from "./components/header/Header.component";
import "./App.css";
import CardContainer from "./components/card-container/CardContainer.component";
import { Route, Routes } from "react-router-dom";
import TaskDetailPage from "./pages/TaskDetailPage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/detail/:id" element={<TaskDetailPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
