import { getMovies } from '../../pages/games/movies';
import { MovieProps } from '../../types/movies';
import { Container } from './styles';
import { useQuery } from 'react-query';

export default function MoviePage({ results }: MovieProps) {
  const { data } = useQuery('posts', getMovies, { initialData: results });
  console.log(data);

  return (
    <Container>
      <div className="inner">
        {results?.map((movie, index) => (
          <span
            style={{
              transform: `rotateY(calc(${index + 1} * 45deg)) translateZ(400px)`,
            }}
            key={movie.id}
          >
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </span>
        ))}
      </div>
    </Container>
  );
}
