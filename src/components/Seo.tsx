import Head from "next/head";
import { Seoprops } from '../shared/const'

export default function Seo({ title }:Seoprops) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}