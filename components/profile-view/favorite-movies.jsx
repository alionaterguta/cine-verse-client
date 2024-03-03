import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";

export const FavoriteMovies = ({user, favoriteMovies}) => {

  return (
    <Row>
      <Col md={12}>
      <div>
      </div>
      <h3>List of my favorite movies</h3>
      </Col>
      <Row>
      <br />
        {favoriteMovies.map((movie) => {
          return (
            <Col key={movie.id} md={4}>
              <Link to={`/movies/${movie._id}`} />
              <MovieCard
                isFavorite={user.FavoriteMovies.includes(movie.title)}
                movie={movie}
              />
            </Col>
          );
        })}
      </Row>
    </Row>
  );
}
FavoriteMovies.propTypes = {
  favoriteMovies: PropTypes.array.isRequired
};