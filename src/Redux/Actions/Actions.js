import { ADD_TODO } from "./ActionsTypes";

const addTodo = (newItem) => {
  return {
    type: ADD_TODO,
    payload: newItem,
  };
};
