import * as React from 'react';
import { RouteComponentProps } from '@reach/router';

import { HomeSidebar } from '../components/home-sidebar';
import { HomeMain } from '../components/home-main';

interface Props extends RouteComponentProps {}

export function Home(props: Props) {
  return (
    <>
      <HomeSidebar />
      <HomeMain />
    </>
  );
}
