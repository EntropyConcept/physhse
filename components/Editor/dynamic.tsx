import dynamic from 'next/dynamic';
import { Loader } from '@mantine/core';

export default dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => <Loader style={{marginTop: "5rem"}}/>,
});