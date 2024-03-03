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
  const [username, setUsername] = useState(user.UserName);
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);
  const [password, setPassword] = useState(user.Password);

  const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m.title));

  const formData = {
    UserName: username,
    Email: email,
    Birthday: birthday,
    Password: password
  };

  const handleSubmit = (event) => {
    event.preventDefault(event);
    const isoDate = new Date(birthday);

    const updatedUserData= {
      UserName: username,
      Email: email,
      Birthday: isoDate,
      Password: password
    };
    // Send updated user information to the server, endpoint /users/:username
    fetch("https://cine-verse-b8832aa84c3e.herokuapp.com/users/", {
      method: "PUT",
      body:JSON.stringify(updatedUserData),
      headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}` }
      }
    )
     .then((response) => {
      if (response.ok) {
       alert("Update successful");
        window.location.reload();
      }else{
        alert("Update failed");
}
});
}

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
    setBirthday(e.target.value);
    default:
}
}
  
  return (
    <>
      <Row>
        <Card>
        <Card.Img src="holder.js/171x180" roundedCircle />
        <Card.Body>
        <Card.Title><h2> My Profile </h2></Card.Title>
        <Card.Text>
          <h4>{username}</h4>
          <h4>{email}</h4>
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
      </Row>
      <br />
      <hr />
      <br />
      <Row>
        <Col className="mb-5" xs={12} md={8}>
          <FavoriteMovies user={user} favoriteMovies={favoriteMovies} />
        </Col>
      </Row>
    </>
  ); 
}
  

// MovieView.propTypes = {
//   movies: PropTypes.array.isRequired,
//   updatedUserInfo: PropTypes.func.isRequired
//  };