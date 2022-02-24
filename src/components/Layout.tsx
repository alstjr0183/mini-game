import HeadInfo from '../components/HeaderInfo'


type AppLayoutprops = {
  children: any,
}

export default function Layout({ children }:AppLayoutprops) {
  return (
    <>
      <HeadInfo />
      <div>{children}</div>
      </>
  );
}


