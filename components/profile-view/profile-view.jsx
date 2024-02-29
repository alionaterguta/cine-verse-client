import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

import { useState } from "react";
import { FavoriteMovies } from "./favorite-movies";
import { UpdateUser } from "./update-user";



export const ProfileView = ({movies, updatedUserInfo}) => {
  const [user, setUser] =useState(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  console.log("gfdgf");

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
    fetch("https://cine-verse-b8832aa84c3e.herokuapp.com/users", {
      method: "PUT",
      body:JSON.stringify(updatedUserData),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  let favoriteMovies = movies.filter((m) => user.FavoriteMovies.includes(m._id))

  const handleUpdate = (e) => {
    e.preventDefault(e);
  }
  useEffect(() => {
  fetch("https://cine-verse-b8832aa84c3e.herokuapp.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }else{
      alert('Failed to fetch user data');
    }
  }) 
  .then((data) => {
    setUser(data);
    window.location.reload();
  })
  .catch((error) => {
    console.error(error);
  });
}, []);
    
  return (
    <Row>
      <Col>
        <h2> My Profile </h2>
        <p>User: {user.Username}</p>
        <p>Email: {user.Email}</p>
      </Col>
      <Col md={4}>
      <FavoriteMovies favoriteMovies={favoriteMovies} />
      </Col>
      <Col>
        <UpdateUser handleUpdate={handleUpdate} handleSubmit={handleSubmit} />
      </Col>
    </Row>
  ); 

  }
  

// MovieView.propTypes = {
//   movies: PropTypes.array.isRequired,
//   updatedUserInfo: PropTypes.func.isRequired
//  };