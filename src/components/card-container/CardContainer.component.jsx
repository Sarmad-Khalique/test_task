import React from "react";

import Typography from "@mui/material/Typography";
import { MainContainer } from "./card-container.styles";
import TasksList from "../tasks-list/TasksList.component";
import TaskForm from "../task-form/TaskForm.component";

const CardContainer = () => {
  return (
    <MainContainer>
      <div className="card">
        <Typography gutterBottom variant="h4" color="secondary" sx={{textAlign:"center"}}>
          Tasks List
        </Typography>
        <TasksList />
        <TaskForm />
      </div>
    </MainContainer>
  );
};

export default CardContainer;
