import React, { useState, useContext } from "react";
import { FormContainer } from "./TaskUpdate.styles";
import { GlobalContext } from "../../context/GlobalContext";
import FormInput from "../form-input/FormInput";
import { Button, FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TaskUpdate = ({ task }) => {
  const { upadteTaskInList } = useContext(GlobalContext);
  const [currentTaskObject, setCurrentTaskObject] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
    updatedAt: task.updatedAt,
    createdAt: task.createdAt,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;

    setCurrentTaskObject({ ...currentTaskObject, [name]: value });
  };

  const handleCheckboxClick = (e) => {
    setCurrentTaskObject({ ...currentTaskObject, status: !status });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let { id, title, description, status, createdAt, updatedAt} =
      currentTaskObject;
    let time_in_milliseconds = new Date().getTime();
    let date_obj = new Date(time_in_milliseconds);
    updatedAt = date_obj.toString();
    
    upadteTaskInList({ id, title, description, status, createdAt, updatedAt });
    navigate(`/detail/${id}`, {replace:"true"});
  };
  let { title, description, status } = currentTaskObject;
  return (
    <FormContainer onSubmit={onSubmit}>
      <FormInput
        type="text"
        name="title"
        onChange={handleChange}
        value={title}
        label="Title"
      />
      <FormInput
        type="text"
        name="description"
        onChange={handleChange}
        value={description}
        label="Description"
      />
      <FormControlLabel
        label={`${status ? "Completed" : "Uncomplete"}`}
        control={
          <Checkbox
            value={status}
            checked={status ? true : false}
            onChange={handleCheckboxClick}
            color="secondary"
          />
        }
        sx={{ display: "block" }}
      />
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        sx={{ width: "100%" }}
      >
        Update Task
      </Button>
    </FormContainer>
  );
};

export default TaskUpdate;
