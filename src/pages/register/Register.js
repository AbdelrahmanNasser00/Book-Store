import React, { useContext, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../../shared/CSS/Login.css";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [show, setShow] = useState(false);
  const [err, setError] = useState(null);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputs = {
      username: inputUsername,
      email: inputEmail,
      password: inputPassword,
      admin: false,
    };

    try {
      await register(inputs);
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <div className="sign-in__wrapper">
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <div className="h4 mb-2 text-center">Sign Up</div>
        {/* Alert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible>
            Registration error. Please try again.
          </Alert>
        ) : (
          <div />
        )}

        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            name="username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={inputEmail}
            placeholder="Enter email"
            name="email"
            onChange={(e) => setInputEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            name="password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        {/* Register Button */}
        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by Hendrik C | &copy;2022
      </div>
    </div>
  );
};

export default Register;
