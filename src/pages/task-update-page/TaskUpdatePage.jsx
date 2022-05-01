import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MainContainer } from "../../components/card-container/card-container.styles";
import { TaskUpdateContainer } from "./TaskUpdatePage.styles";
import Typography from "@mui/material/Typography";
import { GlobalContext } from "../../context/GlobalContext";
import TaskUpdate from "../../components/task-update/TaskUpdate.component";

const TaskUpdatePage = () => {
  const { task_id } = useParams();
  const { getObject } = useContext(GlobalContext);
  const task = getObject(task_id);
  return (
    <MainContainer>
      <TaskUpdateContainer>
        <Typography variant="h6" color="secondary" sx={{ textAlign: "center" }}>
          Update Task
        </Typography>
        <TaskUpdate task={task} />
      </TaskUpdateContainer>
    </MainContainer>
  );
};

export default TaskUpdatePage;
