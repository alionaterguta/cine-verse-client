import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      UserName: username,
      Password: password,
    };

    fetch("https://cine-verse-b8832aa84c3e.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <br />
      <h1> Log in to your account</h1>
      <br />
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          minLength={5}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>
      <br />
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <br />
      <Button type="submit">Log In</Button>
    </Form>
  );
};

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};
