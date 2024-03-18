import { useState } from "react";
import Header from "./Components/Header";
import TableUsers from "./Components/TableUsers";
import ModalAddNew from "./Components/ModalAddNew";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <TableUsers />
      </div>
    </>
  );
}

export default App;
