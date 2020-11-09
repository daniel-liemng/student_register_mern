import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { AppContext } from "../context/context";

const RegisterPage = () => {
  const { register, userInfo } = useContext(AppContext);

  console.log("Login", userInfo);

  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <Container className='py-4'>
      <h1>Register</h1>
      <Form onSubmit={registerHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='info'>
          Register
        </Button>
      </Form>

      <Row>
        <Col className='py-3'>
          A member already? <Link to='/login'>Login</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
