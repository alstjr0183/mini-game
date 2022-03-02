import type { NextPage, GetServerSideProps } from 'next';
import GlobalStyle from '../styles/GlobalStyeld';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import axios from 'axios';
import Banner from '../components/common/Banner';
import GameList from '../components/GameList';

const Home: NextPage = ({ test }: any): any => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Banner test={test} />
        <GameList />
      </ThemeProvider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
  const test = await res.json();
  console.log(res);

  // const images: object[] = [
  //   { img: 'https://cdn.pixabay.com/photo/2021/08/21/19/39/greyhound-6563435__340.jpg' },
  //   { img: 'https://cdn.pixabay.com/photo/2022/02/19/21/46/beach-7023446__340.jpg' },
  // ];
  return {
    props: {
      test,
    },
  };
};

export default Home;
