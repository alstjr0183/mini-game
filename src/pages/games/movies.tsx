import { GetServerSideProps } from 'next';
import HeaderInfo from '../../components/HeaderInfo';
import MoviePage from '../../components/movies';
import { MovieProps } from '../../types/movies';
// TODO: webpack 이용해서 절대경로 지정하기.
export const getMovies = fetch(
  `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${Math.floor(Math.random() * 10) + 1}`,
);

export default function Movies({ results }: MovieProps) {
  return (
    <>
      <HeaderInfo title="Popular Movies" />
      <MoviePage results={results} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await (await getMovies).json();

  return {
    props: {
      results,
    },
  };
};
