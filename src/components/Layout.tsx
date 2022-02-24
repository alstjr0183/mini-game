import HeadInfo from '../components/HeaderInfo'
import { AppLayoutprops } from '../shared/const'


export default function Layout({ children }:AppLayoutprops) {
  return (
    <>
      <HeadInfo />
      <div>{children}</div>
      </>
  );
}


