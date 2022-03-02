import styled from 'styled-components';
import Banner from './common/Banner';
import GameList from '../components/GameList';

const Main: React.FC = () => {
  return (
    <MainSection>
      <Banner />
      <GameList />
    </MainSection>
  );
};

export const MainSection = styled.section``;

export default Main;
