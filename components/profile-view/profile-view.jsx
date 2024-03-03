import React from "react";
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import { FavoriteMovies } from "./favorite-movies";
import { UpdateUser }  from "./update-user";
import { Card } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';

export const ProfileView = ({ token, user, movies }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [username, setUsername] = useState(user.UserName);
  const [email, setEmail] = useState(user.Email);
  const [birthdate, setBirthdate] = useState(user.Birthdate);
  const [password, setPassword] = useState(null);

  const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m.title));
  
  const formData = {
    UserName: username,
    Email: email,
    Birthdate: birthdate,
    Password: password
  };

  const handleSubmit = (event) => {
    event.preventDefault(event);
 
    // Send updated user information to the server, endpoint /users/:username
    fetch(`https://cine-verse-b8832aa84c3e.herokuapp.com/users/${storedUser.UserName}`, {
      method: "PUT",
      body:JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}` }
      }
    )
     .then((response) => {
      if (response.ok) {
        alert("Update successful");
        window.location.reload();
        return response.json()
      }
       alert("Update failed");
      })
      .then((user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user)
        }    
      })
      .catch((error) => {
        console.error(error);
      });
};

  const handleUpdate = (e) => {
    switch(e.target.type) {
      case "text":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "date":
        setBirthdate(e.target.value);
        default:
    }
}
  
  return (
    <>
      <Row>
        <Card>
        {/* <Card.Img src="holder.js/171x180" roundedCircle /> */}
        <Card.Body>
        <Card.Title><h2> My Profile </h2></Card.Title>
        <Card.Text>
          <h6>{username}</h6>
          <h6>{email}</h6>
        </Card.Text>
        </Card.Body>
        </Card>
        <Col>
          <UpdateUser 
           formData={formData}
           handleUpdate={handleUpdate}
           handleSubmit={handleSubmit}
           />
        </Col>
        <br />
      </Row>
      <hr />
       <Row>
        <Col className="mb-5" xs={12} md={9}>
          <FavoriteMovies user={user} favoriteMovies={favoriteMovies} />
        </Col>
      </Row>
    </>
  ); 
}
  

