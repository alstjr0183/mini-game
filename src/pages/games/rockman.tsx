import { NEXT_REQUEST_META } from 'next/dist/server/request-meta';
import { Tracing } from 'trace_events';
import HeadInfo from '../../components/HeaderInfo';
import Rockman from '../../components/rockman/index';

const rockman = () => {
  return (
    <div>
      <HeadInfo title="런닝록맨" />
      <h1>런닝녹맨</h1>
      dd
      <Rockman />
      dd
    </div>
  );
};

export default rockman;
