import { NEXT_REQUEST_META } from 'next/dist/server/request-meta';
import { Tracing } from 'trace_events';
import HeadInfo from '../../components/HeaderInfo';
import Rockman from '../../components/rockman/Index';

const rockman = () => {
  return (
    <div>
      <HeadInfo title="런닝록맨" />
      <Rockman />
    </div>
  );
};

export default rockman;
