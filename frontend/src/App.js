import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/admin' component={AdminPage} />
          <Route exact path='/' component={HomePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
