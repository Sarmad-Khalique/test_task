import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { MainContainer } from "../../components/card-container/card-container.styles";
import TaskDetail from "../../components/task-detail/TaskDetail.component";
import { GlobalContext } from "../../context/GlobalContext";
import { TaskDetailContainer } from "./TaskDetail.styles";

const TaskDetailPage = () => {
  const { task_id } = useParams();
  const { getObject } = useContext(GlobalContext);
  const task = getObject(task_id);
  return (
    <MainContainer>
      <TaskDetailContainer>
        <Typography variant="h6" color="secondary" sx={{ textAlign: "center" }}>
          Details of Task
        </Typography>
        <TaskDetail task={task} />
      </TaskDetailContainer>
    </MainContainer>
  );
};

export default TaskDetailPage;
