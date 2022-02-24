import styled from "styled-components";
import { flexbox } from "../styles/utils/flexbox";
import Banner from "./common/Banner";

const Main: React.FC = () => {
  return (
    <MainSection>
      <Banner />
    </MainSection>
  );
};

export const MainSection = styled.section``;

export default Main;
