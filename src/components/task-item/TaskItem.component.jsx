import React from "react";

const TaskItem = ({
  task: { id, title, description, status, createdAt, updatedAt },
}) => {
  return <div>{title}</div>;
};

export default TaskItem;
