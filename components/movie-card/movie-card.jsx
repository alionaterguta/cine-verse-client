import PropTypes from "prop-types";
//destructered prop - movie is the name of the prop in main-view.jsx
export const MovieCard =({movie, onMovieClick}) => {
  return(
    <div
    onClick={() =>{
      onMovieClick(movie);
    }}
    >
      {movie.title}
    </div>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};