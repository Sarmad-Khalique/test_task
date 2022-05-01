import React from "react";
import Header from "./components/header/Header.component";
import "./App.css";
import CardContainer from "./components/card-container/CardContainer.component";
import { Route, Routes } from "react-router-dom";
import TaskDetailPage from "./pages/task-detail-page/TaskDetailPage";
import TaskUpdatePage from "./pages/task-update-page/TaskUpdatePage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/detail/:task_id" element={<TaskDetailPage />} />
        <Route path="/update/:task_id" element={<TaskUpdatePage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
