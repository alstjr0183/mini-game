import type { NextPage } from "next";
import GlobalStyle from "../styles/GlobalStyeld";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
};

export default Home;
