import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../Services/UserServices";
import ReactPaginate from "react-paginate";
import ModalAddNew from "./ModalAddNew";

const TableUsers = () => {
  const [ListUsers, setListUsers] = useState([]);
  const [totalPage, settotalPage] = useState(0);

  useEffect(() => {
    getUsers(1);
  }, []);
  const handleUpdateTable = (user) => {
    setListUsers([user, ...ListUsers]);
  };

  const getUsers = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data) {
      setListUsers(res.data);
      settotalPage(res.total_pages);
    }
  };

  const handlePageClick = (event) => {
    getUsers(+event.selected + 1);
  };

  return (
    <>
      <ModalAddNew handleUpdateTable={handleUpdateTable} />

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
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPage}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      </div>
    </>
  );
};
export default TableUsers;
