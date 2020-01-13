import * as React from 'react';
import { Box, Flex } from 'rebass';

import { NavLink } from './nav-link';

export function Navbar() {
  return (
    <Flex px={2} py={3} color="white" bg="black" alignItems="center">
      {/* Left side */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pulls">Pull requests</NavLink>
      <NavLink to="/issues">Issues</NavLink>
      <NavLink to="/marketplace">Marketplace</NavLink>
      <NavLink to="/explore">Explore</NavLink>

      {/* Divider */}
      <Box mx="auto" />

      {/* Right side */}
      <NavLink to="/login">Sign in</NavLink>
      <NavLink to="/join">Sign up</NavLink>
    </Flex>
  );
}
