import { ADD_TASK, DELETE_TASK , UPDATE_TASK} from "../constant/actionType";

const initialState = { todoListData: [] };

export default function todoData(state = initialState, action) {
  {
    switch (action.type) {
      case ADD_TASK:
        // console.log("add-reducer", action);
        return {
          ...state,
          todoListData: [...state.todoListData, action.data],
        };
      case DELETE_TASK:
        // console.log("delete-reducer", action);
        let updateCars = [];
        state.todoListData.forEach((car, i) => {
          if (i !== action.index) {
            updateCars.push(car);
          }
        });
        return {
          ...state,
          todoListData: updateCars,
        };

        
        case UPDATE_TASK:
            console.log("update-reducer", action);
          const updatedCars = state.todoListData.map((car, i) => {
            if (i === action.index) {
              return {
                ...car,
                ...action.updatedData,
              };
            }
            return car;
          });
        
          return {
            ...state,
            todoListData: updatedCars,
          };
        
        
      default:
        return state;
    }
  }
}
