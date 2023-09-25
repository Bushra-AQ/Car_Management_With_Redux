import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,FormControl
} from "@mui/material";
import { useForm } from "react-hook-form";
import { add_task, update_task } from "../../Redux/action/crudAction";

const CarsType = {
  aventador: "Aventador",
  huracan: "Huracan",
  land_cruiser: "Land Cruiser Prado",
  type_r: "Type R",
  type_s: "Type S",
  sedans: "Sedans",
  stype_uvs: "SUVs",
  fortuner: "Fortuner",
};
const ModalData = ({ open, handleClose, formType, add_task, selectedCar, selectedIndex }) => {
  const dispatch = useDispatch();
  const isViewForm = () => formType === "view";
  const isUpdateForm = () => formType === "update";
  console.log(selectedCar);
  const {
    register,
    // formState: { errors },
    // errors,
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: isViewForm() || isUpdateForm() ? selectedCar.name : "",
      type: isViewForm() || isUpdateForm() ? selectedCar.name : "",
      year: isViewForm() || isUpdateForm() ? selectedCar.year : "",
      mileage: isViewForm() || isUpdateForm() ? selectedCar.mileage : "",
    },
  });
  console.log("selectedCar===", selectedCar);
  const onSubmit = (data) => {
    if (isUpdateForm()) {
      dispatch(update_task(selectedIndex, data));
      // console.log("vvvv", dispatch(update_task(selectedCar.index, data)))
    } else {
      add_task(data);
      handleClose();
    }

    reset();
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onHide={handleClose}>
        <DialogTitle>
          {isUpdateForm()
            ? "Update Car"
            : isViewForm()
            ? "View Car"
            : "Add Car"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              margin="normal"
              name="name"
              {...register("name")}
              disabled={isViewForm()}
            />
            {/* <p className="error-message">{errors?.name?.message}</p> */}
            <FormControl fullWidth>

            <InputLabel id="demo-select-small-label">Type</InputLabel>
   

<Select
  labelId="demo-select-small-label"
  label="Type"
  fullWidth
  variant="outlined"
  margin="normal"
  name="type"
  {...register("type")}
  disabled={isViewForm()}
  defaultValue={isUpdateForm() ? selectedCar.type : "none"}
>
  <MenuItem value="none">None</MenuItem>
  {Object.entries(CarsType).map(([key, value], i) => (
    <MenuItem key={i} value={key}>
      {value}
    </MenuItem>
  ))}
</Select>




            </FormControl>
            
            {/* <p className="error-message">{errors?.type?.message}</p> */}
            <TextField
              label="Year"
              fullWidth
              variant="outlined"
              margin="normal"
              name="year"
              {...register("year")}
              disabled={isViewForm()}
            />
            {/* <p className="error-message">{errors?.year?.message}</p> */}
            <TextField

              label="Mileage"
              fullWidth
              variant="outlined"
              margin="normal"
              name="mileage"
              {...register("mileage")}
              disabled={isViewForm()}
            />
            {/* <p className="error-message">{errors?.mileage?.message}</p> */}
            <DialogActions>
              {!isViewForm() && (
                <Button type="submit" variant="outlined" color="success">
                  Submit
                </Button>
              )}

              <Button variant="outlined" onClick={handleClose}>
                Close
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default connect(null, { add_task })(ModalData);
