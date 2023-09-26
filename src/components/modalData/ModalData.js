import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { add_Car, update_Car } from "../../Redux/action/crudAction";
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
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name required")
    .matches(/^[A-Za-z\s]{2,}$/, "Invalid Name"),

  type: yup.string().oneOf(Object.keys(CarsType), "Please select a valid type"),
  year: yup
    .number()
    .required("Year required")
    .min(1900, "The year must be greater than or equal to 1900")
    .max(new Date().getFullYear(), "The year must not  exceed current year"),
  mileage: yup
    .number()
    .required("Mileage required")
    .required("Mileage required")
    .min(0, " Mileage Should be Positive "),
});
const ModalData = ({
  open,
  handleClose,
  formType,
  add_Car,
  selectedCar,
  selectedIndex,
  getCarsData,
}) => {
  const dispatch = useDispatch();
  const isViewForm = () => formType === "view";
  const isUpdateForm = () => formType === "update";
  console.log(selectedCar);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: isViewForm() || isUpdateForm() ? selectedCar.name : "",
      type: isViewForm() || isUpdateForm() ? selectedCar.name : "",
      year: isViewForm() || isUpdateForm() ? selectedCar.year : "",
      mileage: isViewForm() || isUpdateForm() ? selectedCar.mileage : "",
    },
    resolver: yupResolver(schema),
  });
  console.log("selectedCar===", selectedCar);
  const onSubmit = (data) => {
    if (isUpdateForm()) {
      dispatch(update_Car(selectedIndex, data));
      getCarsData();
    } else {
      add_Car(data);
      getCarsData();
      handleClose();
    }

    reset();
    handleClose();
    getCarsData();
  };

  return (
    <div>
      <Dialog open={open}>
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
              margin="dense"
              name="name"
              {...register("name")}
              disabled={isViewForm()}
            />
            <p className="error-message">{errors?.name?.message}</p>
            <FormControl fullWidth>
              <InputLabel
                sx={{ marginTop: "6px" }}
                id="demo-select-small-label"
              >
                Type
              </InputLabel>

              <Select
                sx={{ marginTop: "7px" }}
                labelId="demo-select-small-label"
                label="Type"
                fullWidth
                margin="dense"
                name="type"
                {...register("type")}
                disabled={isViewForm()}
                defaultValue={
                  isViewForm() || isUpdateForm() ? selectedCar.type : "none"
                }
              >
                <MenuItem value="none">None</MenuItem>
                {Object.entries(CarsType).map(([key, value], i) => (
                  <MenuItem key={i} value={key}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <p className="error-message">{errors?.type?.message}</p>
            <TextField
              label="Year"
              fullWidth
              // variant="outlined"
              margin="dense"
              name="year"
              {...register("year")}
              disabled={isViewForm()}
            />
            {/* <p className="error-message">{errors?.year?.message}</p> */}
            <TextField
              label="Mileage"
              fullWidth
              // variant="outlined"
              margin="dense"
              name="mileage"
              {...register("mileage")}
              disabled={isViewForm()}
            />
            <p className="error-message">{errors?.mileage?.message}</p>
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
export default connect(null, { add_Car })(ModalData);
