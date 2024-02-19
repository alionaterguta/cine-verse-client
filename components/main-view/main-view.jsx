import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'La Femme Nikita',
      description: 'Is a 1990 French-language action thriller film written and directed by Luc Besson.A teen criminal who is convicted and sentenced to life imprisonment for murdering policemen during an armed pharmacy robbery. Her government handlers fake her death and recruit her as a professional assassin. After intense training, she starts a career as a killer, where she struggles to balance her work with her personal life. She shows talent at this and her career progresses until a mission in an embassy goes awry.',
      genre: [ 'Action' ],
      director: 'Luc Besson',
      image: 'https://media.themoviedb.org/t/p/original/owzoJZoIIRgRyAbr8rx78wkCJaj.jpg',
      featured: true

    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'The movie follows a team of astronauts who embark on a space mission through a wormhole near Saturn to find a new habitable planet for humanity, as Earth faces environmental collapse. Interweaving elements of theoretical physics and emotional storytelling, the film explores themes of love, time dilation, and the survival of the human race.',
      genre: [ 'Science Fiction' ],
      director: 'Christopher Nolan',
      image: 'https://media.themoviedb.org/t/p/original/bzONet3OeCTz5q9WOkGjVpOHMSR.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'The Prestige',
      description: 'Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate.',
      genre: [ 'Thriller' ],
      director: 'Christopher Nolan', 
      image: 'https://media.themoviedb.org/t/p/original/a03qYIZM0zkEutN5JRZddTBmQqY.jpg',
      featured: true
    }
  ]);

  const [selectedMovie, setSelectedMovie] =useState(null);

  if (selectedMovie) {
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
        key={movie.id}
        movie={movie}
        onMovieClick={(newSelectedMovie) => {
          setSelectedMovie(newSelectedMovie);
        }}
        />
      ))}
    </div>
  );
};