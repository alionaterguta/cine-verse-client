import React from "react";
import {useState} from "react";
import Form from"react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export const UpdateUser = ({ formData, handleUpdate, handleSubmit }) => {

  return (
    <Row>
      <Form onSubmit={handleSubmit}>
        <br />
        <h2> Would you like to update your profile information? </h2>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            minLength={5}
            value={formData.UserName}
            onChange={(e) => handleUpdate(e)}
            required
          />
        <br />
        </Form.Group>
        <Form.Group controlId="formBirthday">
          <Form.Label> Birthday: </Form.Label>
          <Form.Control
            type="date"
            value={formData.Birthdate}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formEmail">
          <Form.Label> Email: </Form.Label>
          <Form.Control
            type="email"
            value={formData.Email}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formPassword">
          <Form.Label>Password:
            <p>Please enter your old password or choose a new one.
            Your new password must be at least 8 characters long.</p>
          </Form.Label>
          <Form.Control
            type="password"
            minLength={8}
            value={formData.Password}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          {" "}
          Submit changes{" "}
        </Button> 
      </Form>
      <br /> 
     </Row>
    
  );
};
