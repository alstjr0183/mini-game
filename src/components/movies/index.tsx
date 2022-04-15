import { Container } from './styles';

// TODO: Add Type
export default function MoviePage({ results }) {
  console.log(results);
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
