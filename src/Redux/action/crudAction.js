import { ADD_TASK, DELETE_TASK ,UPDATE_TASK } from "../constant/actionType";

export const add_task = (data) => {
  console.log("action", data);
  return {
    type: ADD_TASK,
    data,
  };
};

export const delete_task = (index) => { 
  return {
    type: DELETE_TASK,
    index,
  };
};

export const update_task = (index, updatedData) => {
  console.log("updated action", index, updatedData);
  return {
    type: UPDATE_TASK,
    index,
    updatedData,

  };
};

