import {
  ADD_CAR,
  DELETE_CAR,
  UPDATE_CAR,
  FETCH_DATA,
} from "../constant/actionType";

export const add_Car = (carData) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:9000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });
  } catch (error) {
    console.error("Error deleting car:", error);
  }
};

export const delete_Car = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:9000/cars/${id}`, {
      method: "DELETE",
    });

    dispatch({ type: DELETE_CAR, id });
    console.log("action-delete-id", id);
  } catch (error) {
    console.error("Error deleting car:", error);
  }
};

export const update_Car = (carId, updatedCarData) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:9000/cars/${carId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCarData),
    });
  } catch (error) {
    console.error("Error updating car:", error);
  }
};

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:9000/cars");
    const data = await response.json();
    console.log("fetch__-action", data);
    dispatch({ type: FETCH_DATA, data });
  } catch (error) {
    console.log("error", error);
  }
};
