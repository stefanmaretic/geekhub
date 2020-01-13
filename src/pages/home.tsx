import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

import Sidebar from '../components/sidebar';

interface Props extends RouteComponentProps {}

export default function Home(props: Props) {
  return (
    <>
      <Sidebar />
    </>
  );
}
