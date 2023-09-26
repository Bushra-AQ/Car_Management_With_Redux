import React, { useState, useEffect } from "react";
import { fetchData } from "../../Redux/action/crudAction";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Table.css";
import ModalData from "../modalData/ModalData";
import { delete_Car } from "../../Redux/action/crudAction";
import { useSelector, useDispatch } from "react-redux";
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
const TableData = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState("create");
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCreate = () => {
    setOpen(true);
    setFormType("create");
  };
  const todoListData = useSelector(
    (state) => state.todoData?.todoListData?.data
  );

  console.log("props", todoListData);

  useEffect(() => {
    getCarsData();
  }, []);

  const getCarsData = () => {
    dispatch(fetchData());
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = (car, carId) => {
    console.log("update-index", carId);
    setOpen(true);
    setFormType("update");
    setSelectedCar(car);
    setSelectedIndex(carId);
  };

  const handleView = (car) => {
    setOpen(true);
    setFormType("view");
    setSelectedCar(car);
  };
  const handleDelete = (carId) => {
    console.log("delete-index", carId);
    const res = dispatch(delete_Car(carId));
    getCarsData();
  };

  return (
    <div className="main-container">
      <div>
        <h1>Cars List</h1>
      </div>

      <Button
        variant="contained"
        sx={{
          display: "flex",
          marginBottom: "25px",
        }}
        onClick={handleCreate}
      >
        Add Cars
      </Button>
      {open && (
        <ModalData
          open={open}
          handleClose={handleClose}
          formType={formType}
          selectedCar={selectedCar}
          selectedIndex={selectedIndex}
          getCarsData={getCarsData}
        />
      )}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Mileage</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoListData &&
              todoListData.map((car, index) => (
                <TableRow key={index}>
                  <TableCell>{car._id}</TableCell>
                  <TableCell>{car.name}</TableCell>
                  <TableCell>{CarsType[car.type]}</TableCell>
                  <TableCell>{car.year}</TableCell>
                  <TableCell>{car.mileage}</TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      variant="outlined"
                      color="success"
                      onClick={() => handleView(car)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleUpdate(car, car._id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteOutlineIcon />}
                      className="delete"
                      onClick={() => handleDelete(car._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
