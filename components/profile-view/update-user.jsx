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
        <h2> You want to make some changes to your profile data? </h2>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            minLength={5}
            value={formData.UserName}
            onChange={(e) => handleUpdate(e)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBirthday">
          <Form.Label> Birthday: </Form.Label>
          <Form.Control
            type="date"
            value={formData.Birthday}
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
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            minLength={8}
            value={formData.Password}
            onChange={(e) => handleUpdate(e)}
            required
            placeholder="Password at least 8 characters"
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          {" "}
          Submit changes{" "}
        </Button>
      </Form>
    </Row>
  );
};
