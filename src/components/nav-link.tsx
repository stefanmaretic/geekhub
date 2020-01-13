import * as React from 'react';
import { Text } from 'rebass';
import { Link } from '@reach/router';

interface Props {
  to: string;
  children: React.ReactNode;
}

export default function NavLink({ to, children, ...props }: Props) {
  return (
    <Link to={to} {...props}>
      <Text
        sx={{
          display: 'inline-block',
          fontWeight: 'bold',
          color: 'white',
          px: 2,
          py: 1
        }}
      >
        {children}
      </Text>
    </Link>
  );
}
