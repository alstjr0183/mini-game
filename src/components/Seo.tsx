import Head from "next/head";


type Seoprops ={
  title: string,
}
export default function Seo({ title }:Seoprops) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}