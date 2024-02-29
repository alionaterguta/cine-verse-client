import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SingupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);

  //Find similar movies based on genre
  // const selectedMovie = movies.find((m) => m.id === movieId);
  // const similarMovies = movies.filter((m) => {
  //   return (
  //     m.id !== selectedMovie.id &&
  //     m.genre.some((genre) => selectedMovie.genre.includes(genre)) 
  //   )}
  //   );

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://cine-verse-b8832aa84c3e.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.Title,
            genre: movie.Genre,
            description: movie.Description,
            director: movie.Director,
          };
        });
        setMovies(moviesFromApi);
      });
  }, [token]);

  return (
  <BrowserRouter>
  <NavigationBar
    user ={user}
    onLoggedOut={() => {
      setUser(null);
      setToken(null);
      localStorage.clear();

     }}
    />
  <br />
    <Row className="justify-content-md-center">
      <Routes>
        <Route
          path="/users" 
          element={
            <>
            {user ? (
              <Navigate to="/" />
            ) : (
              <Col md={4}>
                <SingupView />
              </Col>
            )}
          </>
          }
          />
        <Route
        path="/login"
        element={
          <>
          {user ? (
            <Navigate to="/" />
          ) : (
            <Col md={4}>
              <LoginView 
                onLoggedIn={(user, token) => {
                  setUser(user);
                  setToken(token);
                }} />
            </Col>
          )}  
          </>
          } 
        />
        <Route 
        path="/users" 
        element={
          <>
          {!user ? (
            <Navigate to="/login" replace />
          ) : movies.length === 0 ? (
              <Col> The list is empty!</Col>
          ) : (
            <Col>
              <ProfileView
              />
            </Col>
          )
          }
          </>
        }
        />
        <Route 
        path="/movies/:movieId"
        element={
          <>
          {!user ? (
            <Navigate to="/login" replace />
            ) : movies.length === 0 ? (
              <Col> The list is empty!</Col>
            ) : ( 
          <Col md={8}>
            <MovieView 
            movies={movies} //selectedMovie={similarMovies}
            />
          </Col>
          )}
       </>
      }
     />

        <Route 
        path="/" 
        element={
          <>
          {!user ? (
            <Navigate to="/login" replace />
          ) : movies.length === 0 ? (
            <Col>The list is empty!</Col>
          ) : (
            <>
              {movies.map((movie) => (
                <Col className="mb-5" key={movie.id} md={3}>
                  <MovieCard
                    movie={movie}
                  />
                </Col>
              ))}
            </>
          )}
         </>
          }
          />
          </Routes>
        </Row>
  </BrowserRouter>
  );
};

