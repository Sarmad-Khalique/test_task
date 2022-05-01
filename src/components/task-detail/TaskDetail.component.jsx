import { Button, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const TaskDetail = ({ task }) => {
  const { deleteTaskFromList } = useContext(GlobalContext);

  let navigate = useNavigate();

  const onDelClick = () => {
    deleteTaskFromList(task);
    navigate("/", { replace: "true" });
  };

  let { id, title, description, status, createdAt, updatedAt } = task;
  return (
    <React.Fragment>
      <Typography variant="h6" color="secondary">
        Title
      </Typography>
      <Typography className="wrapped-text" variant="body1" color="text.secondary">
        {title}
      </Typography>
      <Divider />
      <Typography variant="h6" color="secondary">
        Description
      </Typography>
      <Typography className="wrapped-text" variant="body1" color="text.secondary">
        {description}
      </Typography>
      <Divider />
      <Typography variant="h6" color="secondary">
        Status
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {status ? "Completed" : "Uncomplete"}
      </Typography>
      <Divider />
      <Typography variant="h6" color="secondary">
        Created At
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {createdAt}
      </Typography>
      <Divider />
      <Typography variant="h6" color="secondary">
        Updated At
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {updatedAt}
      </Typography>
      <Link to={`/update/${id}`}>
        <Button
          color="secondary"
          variant="contained"
          sx={{ width: "100%", marginY: 1 }}
        >
          Update
        </Button>
      </Link>
      <Button
        onClick={onDelClick}
        color="secondary"
        variant="outlined"
        sx={{ width: "100%" }}
      >
        Delete
      </Button>
    </React.Fragment>
  );
};

export default TaskDetail;
