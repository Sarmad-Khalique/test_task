import React from "react";
import { useParams } from "react-router-dom";

const TaskDetailPage = () => {
  const { id } = useParams();
  return <div>TaskDetailPage for id-{id}</div>;
};

export default TaskDetailPage;
