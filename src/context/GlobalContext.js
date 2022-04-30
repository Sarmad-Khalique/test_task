import Recat, { createContext, useState } from "react";

const addTask = (tasksList, task) => {
  return [...tasksList, { ...task }];
};

const initialState = [
  {
    addTask: () => {},
    tasks: [],
  },
];
export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTaskToList = (task) => {
    setTasks(addTask(tasks, task));
  };

  const value = {
    tasks,
    addTaskToList,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export default GlobalProvider;
