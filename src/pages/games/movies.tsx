import HeaderInfo from '../../components/HeaderInfo';
import MoviePage from '../../components/movies';

export default function Movies({ results }) {
  console.log(results);
  return (
    <>
      <HeaderInfo title="Popular Movies" />
      <MoviePage results={results} />
    </>
  );
}

export async function getStaticProps() {
  const API_KEY = '96267eb5d8531873d025017bde38767c';

  const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${Math.floor(Math.random() * 10) + 1}`)).json();

  return {
    props: {
      results,
    },
  };
}
