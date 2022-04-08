import Head from 'next/head';
import { Seoprops } from '../shared/const';
import Link from 'next/link';
import styled from 'styled-components';

export default function GameList() {
  return (
    <Container>
      <ul className="game__list">
        <li className="first__line game__name ">
          <Link href={{ pathname: '/games/runningman' }}>
            <a>런닝록맨</a>
          </Link>
        </li>
        <div className="second__line">
          <li className="game__name">
            <Link href={{ pathname: '/games/fantasy' }}>
              <a>fantasy</a>
            </Link>
          </li>
          <li className="game__name">
            <Link href={{ pathname: '/games/runningman' }}>
              <a>오목</a>
            </Link>
          </li>
          <li className="game__name">
            <Link href={{ pathname: '/games/runningman' }}>
              <a>두더지 잡기</a>
            </Link>
          </li>
        </div>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  .game__list {
    width: 100%;
    display: flex;
    flex-direction: column;

    .game__name {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 100px;
      background-color: #f2f2f2;
      font-family: 'Jal_Haru';
    }

    .first__line {
      margin: 10px;
      background-color: #c1c1c1;
    }
    .second__line {
      width: 100%;
      display: flex;
      flex: 1;

      .game__name {
        flex: 1;
        margin: 10px;
      }
    }
  }
`;
