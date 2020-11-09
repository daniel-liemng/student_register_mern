import React, { useState } from "react";
import { Container, Button, Row, Col, Table, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteMajorHandler = () => {};
  const deleteStudentHandler = () => {};

  return (
    <Container className='py-4' fluid>
      <h1 className='text-center'>AdminPage</h1>
      <Row>
        <Col sm={6} md={3}>
          <h3>Major</h3>
          <Row className='py-2'>
            <Col>
              <Button type='button' variant='primary' onClick={handleShow}>
                Add Major
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant='primary' onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover size='sm'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Major</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>
                      <LinkContainer to={`/admin/user/edit`}>
                        <Button variant='light' className='btn-sm'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteMajorHandler()}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
        <Col sm={6} md={9}>
          <h3>Students</h3>
          <Row className='py-2'>
            <Col>
              <Button type='button' variant='primary'>
                Add Student
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover size='sm'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Major</th>

                    <th>Major</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>
                      <LinkContainer to={`/admin/user/edit`}>
                        <Button variant='light' className='btn-sm'>
                          <i className='fas fa-edit'></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteStudentHandler()}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
