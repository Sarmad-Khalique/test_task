import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import { FormContainer, TaskFormContainer } from "./TaskForm.styles";
import Typography from "@mui/material/Typography";
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Button } from "@mui/material";

const TaskForm = () => {
  const [taskObject, setTaskObject] = useState({
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
    setTaskObject({...taskObject, status:!status});
  }
  let { title, description, status, createdAt, updatedAt } = taskObject;
  return (
    <TaskFormContainer>
      <Typography variant="h6" color="secondary" sx={{ textAlign: "center" }}>
        Add New Task
      </Typography>
      <FormContainer>
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
          label={`${status?"Completed":"Uncomplete"}`}
          control={
            <Checkbox
              value={status}
              checked={status?true:false}
              onChange={handleCheckboxClick}
              color="secondary"
            />
          }
          sx={{display:"block"}}
        />
        <Button variant="contained" color="secondary" type="submit" sx={{width: "100%"}}>Add Task</Button>
      </FormContainer>
    </TaskFormContainer>
  );
};

export default TaskForm;
