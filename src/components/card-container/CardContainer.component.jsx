import React from "react";

import { MainContainer } from "./card-container.styles";
import TasksList from "../tasks-list/TasksList.component";
import TaskForm from "../task-form/TaskForm.component";

const CardContainer = () => {
  return (
    <MainContainer>
      <div className="card">
        <TasksList />
        <TaskForm />
      </div>
    </MainContainer>
  );
};

export default CardContainer;
