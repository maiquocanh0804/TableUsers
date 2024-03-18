import { useState } from "react";
import Header from "./Components/Header";
import TableUsers from "./Components/TableUsers";

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
