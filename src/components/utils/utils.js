export const getObjectFromList = (tasksList, requiredObjctID) => {
  return tasksList.filter((task) => task.id == requiredObjctID)[0];
};
