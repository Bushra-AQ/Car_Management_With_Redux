import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import TableData from "./components/table/TableData";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar/>
        <TableData/>
    </BrowserRouter>
    </div>
  );
}

export default App;


// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import "./Table.css";
// import ModalData from "../modalData/ModalData";
// import { delete_task } from "../../Redux/action/crudAction"; 
// const TableData = () => {
//   const [open, setOpen] = useState(false);
//   const [formType, setFormType] = useState("create");

//   const handleCreate = () => {
//     setOpen(true);
//     setFormType("create");
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleUpdate = () => {
//     setOpen(true);
//     setFormType("update");
//   };

//   const handleView = () => {
//     setOpen(true);
//     setFormType("view");
//   };
//   const handleDelete = (id) => {
//     delete_task(id);
//   };
//   return (
    
//     <div className="main-container">
//       <div>
//         <h1>Cars List</h1>
//       </div>

//       <Button
//         variant="contained"
//         sx={{
//           display: "flex",
//         }}
//         onClick={handleCreate}
//       >
//         Add Cars
//       </Button>
//       {open && (
//         <ModalData open={open} handleClose={handleClose} formType={formType} />
//       )}
    

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell className="tablehead">ID</TableCell>
//               <TableCell className="tablehead">Name</TableCell>
//               <TableCell className="tablehead">Type</TableCell>
//               <TableCell className="tablehead">Year</TableCell>
//               <TableCell className="tablehead">Mileage</TableCell>
//               <TableCell className="tablehead">Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell>1</TableCell>
//               <TableCell>civic</TableCell>
//               <TableCell>honda</TableCell>
//               <TableCell>2020</TableCell>
//               <TableCell>2500</TableCell>
//               <TableCell>
//                 {" "}
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   startIcon={<DeleteOutlineIcon />}
//                   className="delete"
//                   onClick={() => handleDelete()}
//                 >
//                   Delete
//                 </Button>
//                 {/* <button className="delete">Umar</button> */}
//                 <Button
//                   variant="outlined"
//                   color="success"
//                   onClick={() => handleView()}
//                 >
//                   View
//                 </Button>
//                 <Button variant="outlined" onClick={() => handleUpdate()}>
//                   Update
//                 </Button>
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>2</TableCell>
//               <TableCell>civic</TableCell>
//               <TableCell>honda</TableCell>
//               <TableCell>2020</TableCell>
//               <TableCell>2500</TableCell>
//               <TableCell>
//                 {" "}
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   startIcon={<DeleteOutlineIcon />}
//                   sx
//                 >
//                   Delete
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="success"
//                   onClick={() => handleView()}
//                 >
//                   View
//                 </Button>
//                 <Button variant="outlined" onClick={() => handleUpdate()}>
//                   Update
//                 </Button>
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>3</TableCell>
//               <TableCell>civic</TableCell>
//               <TableCell>honda</TableCell>
//               <TableCell>2020</TableCell>
//               <TableCell>2500</TableCell>
//               <TableCell>
//                 {" "}
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   startIcon={<DeleteOutlineIcon />}
//                 >
//                   Delete
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="success"
//                   onClick={() => handleView()}
//                 >
//                   View
//                 </Button>
//                 <Button variant="outlined" onClick={() => handleUpdate()}>
//                   Update
//                 </Button>
//               </TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>4</TableCell>
//               <TableCell>civic</TableCell>
//               <TableCell>honda</TableCell>
//               <TableCell>2020</TableCell>
//               <TableCell>2500</TableCell>
//               <TableCell>
//                 {" "}
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   startIcon={<DeleteOutlineIcon />}
//                 >
//                   Delete
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="success"
//                   onClick={() => handleView()}
//                 >
//                   View
//                 </Button>
//                 <Button variant="outlined" onClick={() => handleUpdate()}>
//                   Update
//                 </Button>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default TableData;
