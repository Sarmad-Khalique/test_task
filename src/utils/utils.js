export const getObjectFromList = (tasksList, requiredObjctID) => {
  return tasksList.filter((task) => task.id == requiredObjctID)[0];
};
export const addTask = (tasksList, taskToBeAdded) => {
  return [...tasksList, { ...taskToBeAdded }];
};

export const deleteTask = (taskList, taskToBeRemoved) => {
  return taskList.filter((taskObj) => taskObj.id !== taskToBeRemoved.id);
};

export const updateTask = (taskList, taskToBeUpdated) => {
  console.log("In Task Update: ", taskToBeUpdated);
  return taskList.map((task) =>
    task.id == taskToBeUpdated.id ? { ...taskToBeUpdated } : task
  );
};