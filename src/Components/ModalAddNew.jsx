import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { portCreateUser } from "../Services/UserServices";
import { ToastContainer, toast } from "react-toastify";

const ModalAddNew = (props) => {
  const { handleUpdateTable } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [job, setJob] = useState("");
  const [name, setName] = useState("");

  const handelSaveUser = async (name, job) => {
    let res = await portCreateUser(name, job);
    if (res && res.id) {
      handleClose();
      setJob("");
      setName("");
      toast.success("A user is created success");
      handleUpdateTable({ firts_name: name, id: res.id });
    } else {
      toast.error("An Error....");
    }
  };
  return (
    <>
      <div className=" d-flex justify-content-between align-items-center container my-3">
        <b className="">List Users:</b>
        <Button variant="success" onClick={handleShow}>
          Add new user
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Form className="p-4">
          <Form.Group className="mb-3">
            <Form.Label>Job</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handelSaveUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          // transition: Bounce
        />
      </div>
    </>
  );
};

export default ModalAddNew;
