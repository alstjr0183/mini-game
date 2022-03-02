import Head from 'next/head';
import { Seoprops } from '../shared/const';
import HeaderInfo from './HeaderInfo';

export default function Seo({ title }: Seoprops) {
  return <HeaderInfo title="" />;
}
