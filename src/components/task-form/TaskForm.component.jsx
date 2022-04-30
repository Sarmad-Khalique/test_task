import React, { useContext, useId, useState } from "react";
import FormInput from "../form-input/FormInput";
import { FormContainer, TaskFormContainer } from "./TaskForm.styles";
import {
  Typography,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import { Button } from "@mui/material";
import { GlobalContext } from "../../context/GlobalContext";

const TaskForm = () => {
  const { addTaskToList } = useContext(GlobalContext);

  const [taskObject, setTaskObject] = useState({
    id: "",
    title: "",
    description: "",
    status: false,
    createdAt: "",
    updatedAt: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setTaskObject({ ...taskObject, [name]: value });
  };

  const handleCheckboxClick = (e) => {
    setTaskObject({ ...taskObject, status: !status });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let { id, title, description, status, createdAt, updatedAt } = taskObject;
    let time_in_milliseconds = new Date().getTime();
    let date_obj = new Date(time_in_milliseconds);

    id = time_in_milliseconds.toString();
    createdAt = date_obj.toString();
    updatedAt = date_obj.toString();

    addTaskToList({ id, title, description, status, createdAt, updatedAt });

    setTaskObject({
      id: "",
      title: "",
      description: "",
      status: false,
      createdAt: "",
      updatedAt: "",
    });
  };
  let { title, description, status } = taskObject;
  return (
    <React.Fragment>
      <Typography variant="h6" color="secondary" sx={{ textAlign: "center" }}>
        Add New Task
      </Typography>
      <TaskFormContainer>
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
            Add Task
          </Button>
        </FormContainer>
      </TaskFormContainer>
    </React.Fragment>
  );
};

export default TaskForm;
