import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { AppContext } from "../context/context";

const LoginPage = () => {
  const { login, userInfo } = useContext(AppContext);

  console.log("Login", userInfo);

  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container className='py-4'>
      <h1>Sign In</h1>
      <Form onSubmit={loginHandler}>
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
          Sign In
        </Button>
      </Form>

      <Row>
        <Col className='py-3'>
          New Customer? <Link to='/register'>Register Now</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
