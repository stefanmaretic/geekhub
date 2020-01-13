import * as React from 'react';
import { Router } from '@reach/router';

import { About } from '../pages/about';
import { Home } from '../pages/home';
import { Navbar } from './navbar';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <About path="about" />
      </Router>
    </>
  );
};
