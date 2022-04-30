import React, { useContext } from "react";
import { Typography, Stack, Alert } from "@mui/material";
import { TaskListContainer } from "./TaskList.styles";
import { GlobalContext } from "../../context/GlobalContext";
import TaskItem from "../task-item/TaskItem.component";

const TasksList = () => {
  const { tasks } = useContext(GlobalContext);
  console.log(tasks);
  return (
    <TaskListContainer>
      <Typography variant="h6" color="secondary" sx={{ textAlign: "center" }}>
        My Tasks
      </Typography>
      <Stack spacing={2}>
        {tasks.length === 0 ? (
          <Alert severity="info">No Task Added Yet</Alert>
        ) : (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </Stack>
    </TaskListContainer>
  );
};

export default TasksList;
