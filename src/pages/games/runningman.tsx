import { NEXT_REQUEST_META } from 'next/dist/server/request-meta';
import { Tracing } from 'trace_events';
import HeadInfo from '../../components/HeaderInfo';

const runningman = () => {
  return (
    <div>
      <HeadInfo title="런닝록맨" />
      <h1>런닝녹맨</h1>
    </div>
  );
};

export default runningman;
