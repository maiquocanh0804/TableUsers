import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../Services/UserServices";

const TableUsers = () => {
  const [ListUsers, setListUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let res = await fetchAllUser();
    if (res && res.data && res.data.data) {
      setListUsers(res.data.data);
    }
  };

  return (
    <>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {ListUsers &&
              ListUsers.length > 0 &&
              ListUsers.map((item, index) => {
                return (
                  <tr key={`user` - index}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default TableUsers;
