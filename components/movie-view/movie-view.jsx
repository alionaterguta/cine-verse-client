import { useParams } from "react-router";
import { Link } from "react-router-dom"
import { MovieCard } from "../movie-card/movie-card";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  // Find similar movies based on genre
  const similarMovies = movies.filter((m) => {
    return (
      m.id !== movie.id &&
      m.genre.some((genre) => movie.genre.includes(genre)) 
    )}
    );
 

  return (
    <div>
      {/* <div> 
        <img height={300} src={movie.image} />
      </div> */}
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre + " "}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      {/* <div>
        <span>Featured: </span>
        <span>{movie.featured}</span>
      </div> */}
      <Link to={`/`}>
        <Button className="back-button"> Back </Button>
      </Link>

      <Col className="mb-5">
        <br />
        <hr />
        <br />
        <h3> SimilarMovies </h3>
          <Row>
          {similarMovies.map((movie) => (
            <Col key={movie.id} md={4}>
              <MovieCard
                movie={movie}
              />
            </Col>
          ))
        }
        </Row>
      </Col>
    </div>
  );
};

MovieView.propTypes = {
  movies: PropTypes.shape({
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   genre: PropTypes.array,
   director: PropTypes.string, 
 }).isRequired
 };