import React from "react";
import { Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const TaskItem = ({ task: { id, title, description, status } }) => {
  let task_id = id;
  return (
    <>
      <Link to={`/detail/${task_id}`}>
        <Typography varaint="body2">
          {title.length > 5 ? title.slice(0, 5) + "..." : title}
        </Typography>
        <Typography variant="body2">
          {description.length > 13
            ? description.slice(0, 13) + "..."
            : description}
        </Typography>
        <Typography variant="body2">
          {status ? "Completed" : "Uncomplete"}
        </Typography>
      </Link>
      <Divider />
    </>
  );
};

export default TaskItem;
