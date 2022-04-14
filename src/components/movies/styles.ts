import styled from 'styled-components';
import { flexbox } from '../../styles/utils/flexbox';

export const Container = styled.section`
  ${flexbox()};
  min-height: 100vh;
  background: #000;

  .inner {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: animate 20s linear infinite;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: 100%;
  }

  @keyframes animate {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }
    100% {
      transform: perspective(1000px) rotateY(360deg);
    }
  }
`;
