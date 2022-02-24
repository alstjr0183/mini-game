import Head from 'next/head'

type HeaderInfoprops = {
    title: string, 
    keyword: string,
    contents: string,
}

function HeaderInfo({title, keyword, contents}:HeaderInfoprops) {
  return (
      <Head>
          <title>{title}</title>
          {/* <meta keyword={keyword} />
          <meta contents={contents} /> */}
    </Head>
  )
}

HeaderInfo.defaultProps = {
    title: 'Mini Game Site',
    keyword: 'Mini Game Site, 미니게임, 미니게임 사이트',
    contents: '미니게임 웹 사이트입니다.'
}

export default HeaderInfo