import React from "react";
import Form from"react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";


export const UpdateUser = ({handleUpdate, handleSubmit}) => {

  return (
<Row>
    <Form onSubmit={handleSubmit}>
      <br />
      <h1> You want to make some changes to your profile data? </h1>
      <Form.Group controlId="formUsername">
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type="text"
        minLength={5}
        value={username}
        onChange={(e) => handleUpdate(e.target.value)}
        required
      />
      </Form.Group>
      <Form.Group controlId="formBirthday">
      <Form.Label> Birthday: </Form.Label>
      <Form.Control
        type="date"
        value={birthday}
        onChange={(e) => handleUpdate(e.target.value)}
        required
      />
      </Form.Group>
      <br />
      <Form.Group controlId="formEmail">
      <Form.Label> Email: </Form.Label>
      <Form.Control
        type="email"
        value={email}
        onChange={(e) => handleUpdate(e.target.value)}
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
        onChange={(e) => handleUpdate(e.target.value)}
        required
      />
      </Form.Group>
      <br />
      <Button variant="primary" type="submit"> Submit changes </Button>
    </Form>
</Row>


  )
}