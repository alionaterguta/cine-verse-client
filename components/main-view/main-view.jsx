import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [directors, setDirectors] = useState([]);
  useEffect(()  => {
    fetch("https://cine-verse-b8832aa84c3e.herokuapp.com/movies/directors")
      .then((response) => response.json())
      .then((data) => {
        const directorsFromApi = data.map((director) => {
            return {
              id: director._id,
              name: director.Name
            };
         });
      setDirectors(directorsFromApi)
      })
  }, []);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://cine-verse-b8832aa84c3e.herokuapp.com/movies")
    .then((response) => response.json())
    .then((data) => {
      const moviesFromApi = data.map((movie) => {
        return {
          id: movie.key,
          title: movie.Title,
          genre: movie.Genre,
          description: movie.Description,
          director: movie.Director
          
        };
      });
      setMovies(moviesFromApi);
      // console.log( 'hdfsgfd', directors);

    });
  }, []);

  if (selectedMovie) {
    const directorName = directors.filter((director) => director.id === selectedMovie.director);
      selectedMovie.director = directorName[0].name;
    
    return(
      <MovieView 
      movie={selectedMovie}
      onBackClick={() => {
        setSelectedMovie(null);
      }}
      />
    );
  }

  if (movies.length ===0) {
    return <div>The list is empty!</div>;
  }
  return(
    <div> 
      {movies.map((movie) =>(
        <MovieCard
        key={movie._id}
        movie={movie}
        onMovieClick={(newSelectedMovie) => {
          setSelectedMovie(newSelectedMovie);
        }}
        />
      ))}
    </div>
  );
};