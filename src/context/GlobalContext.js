import React, { createContext, useState } from "react";
import { getObjectFromList } from "../components/utils/utils";

const addTask = (tasksList, taskToBeAdded) => {
  return [...tasksList, { ...taskToBeAdded }];
};

const deleteTask = (taskList, taskToBeRemoved) => {
  return taskList.filter((taskObj) => taskObj.id !== taskToBeRemoved.id);
};

const updateTask = (taskList, taskToBeUpdated) => {
  console.log("In Task Update: ", taskToBeUpdated);
  return taskList.map((task) =>
    task.id == taskToBeUpdated.id ? { ...taskToBeUpdated } : task
  );
};

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
