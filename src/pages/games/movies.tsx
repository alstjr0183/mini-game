import HeaderInfo from '../../components/HeaderInfo';
import MoviePage from '../../components/movies';

// TODO: Add Type
export default function Movies({ results }) {
  console.log(results);
  return (
    <>
      <HeaderInfo title="Popular Movies" />
      <MoviePage results={results} />
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${Math.floor(Math.random() * 10) + 1}`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
