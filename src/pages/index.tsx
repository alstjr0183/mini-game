import type { NextPage, GetServerSideProps } from 'next';
import GlobalStyle from '../styles/GlobalStyeld';
import theme from '../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import axios from 'axios';
import Banner from '../components/common/Banner';
import GameList from '../components/GameList';
import { flexbox } from '../styles/utils/flexbox';
import { Bannerprops } from '../shared/const';

const Home = ({ images }: Bannerprops): any => {
  return (
    <StyledHome>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledContents>
          <Banner images={images} />
        </StyledContents>
      </ThemeProvider>
    </StyledHome>
  );
};

const StyledHome = styled.section`
  width: 100%;
  height: 100vh;
  ${flexbox('center', 'flex-start')}
`;

const StyledContents = styled.section`
  width: 50%;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
  // const test = await res.json();
  // console.log(res);

  const images: { img: string }[] = [
    { img: 'https://cdn.pixabay.com/photo/2021/08/21/19/39/greyhound-6563435__340.jpg' },
    { img: 'https://cdn.pixabay.com/photo/2022/02/19/21/46/beach-7023446__340.jpg' },
  ];
  return {
    props: {
      images,
    },
  };
};

export default Home;
