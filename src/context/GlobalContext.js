import React, { createContext, useState } from "react";
import { getObjectFromList, addTask, deleteTask,updateTask } from "../utils/utils";

const initialState = [
  {
    addTaskToList: () => {},
    deleteTaskFromList: () => {},
    tasks: [],
  },
];
export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getObject = (requiredObject) => {
    return getObjectFromList(tasks, requiredObject);
  };

  const addTaskToList = (taskToBeAdded) => {
    setTasks(addTask(tasks, taskToBeAdded));
  };

  const deleteTaskFromList = (taskToBeRemoved) => {
    setTasks(deleteTask(tasks, taskToBeRemoved));
  };

  const upadteTaskInList = (taskToBeUpdated) => {
    setTasks(updateTask(tasks, taskToBeUpdated));
  };
  const value = {
    tasks,
    addTaskToList,
    deleteTaskFromList,
    upadteTaskInList,
    getObject,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export default GlobalProvider;
