import Head from 'next/head';
import { Seoprops } from '../shared/const';
import Link from 'next/link';
import styled from 'styled-components';

export default function GameList() {
  return (
    <Container>
      <ul>
        <li>
          <Link href={{ pathname: '/games/runningman' }}>
            <a>런닝록맨</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/games/runningman' }}>
            <a>가위바위보</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/games/runningman' }}>
            <a>오목</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: '/games/runningman' }}>
            <a>두더지 잡기</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.div``;
