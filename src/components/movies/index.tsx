import { MovieProps } from '../../types/movies';
import { Container } from './styles';
import { useQuery } from 'react-query';
import { useState } from 'react';

export default function MoviePage({ results }: MovieProps) {
  const [mostPopular, setMostPopular] = useState(0);
  // const { data } = useQuery('posts', getMovies, { initialData: results });

  const handleClick = (movie) => {
    if (mostPopular !== movie.popularity) {
      alert('No');
      return;
    }

    alert('yes');
  };

  return (
    <Container>
      <div className="inner">
        {results?.map((movie, index) => {
          if (mostPopular < movie.popularity) setMostPopular(movie.popularity);

          return (
            <span
              onClick={() => handleClick(movie)}
              style={{
                transform: `rotateY(calc(${index + 1} * 18deg)) translateZ(400px)`,
              }}
              key={movie.id}
            >
              <p>{movie.original_title}</p>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <p className="temp">{movie.popularity}</p>
            </span>
          );
        })}
      </div>
    </Container>
  );
}
