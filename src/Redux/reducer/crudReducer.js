import {
  ADD_CAR,
  DELETE_CAR,
  UPDATE_CAR,
  FETCH_DATA,
} from "../constant/actionType";

const initialState = { todoListData: [] };

export default function todoData(state = initialState, action) {
  {
    switch (action.type) {
      case ADD_CAR:
        console.log("add-reducer", action, state);

        return {
          ...state,
          todoListData: [...state.todoListData, action.data],
        };

      case DELETE_CAR:
        return {
          ...state,
          todoListData: action.data,
        };

      case UPDATE_CAR:
        console.log("update-reducer", action);

        return {
          ...state,
          todoListData: action.data,
        };

      case FETCH_DATA:
        console.log("fetch-data-reducer", action);
        return {
          ...state,
          todoListData: action.data,
        };

      default:
        return state;
    }
  }
}
