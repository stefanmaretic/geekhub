import * as React from 'react';
import { Box, Button, Heading, Text } from 'rebass';

export const HomeMain: React.FC = () => {
  return (
    <Box ml={300}>
      <Box
        p={3}
        m={3}
        sx={{
          boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Heading>Discover interesting projects and people to populate your personal news feed.</Heading>
        <Text>
          Your news feed helps you keep up with recent activity on repositories you watch and people you follow.
        </Text>
        <Button>Explore GitHub</Button>
      </Box>
    </Box>
  );
};
