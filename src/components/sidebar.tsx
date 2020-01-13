import * as React from 'react';
import { Box, Button, Flex, Text } from 'rebass';

export default function Sidebar() {
  return (
    <Box
      display="inline-block"
      width={300}
      sx={{
        position: 'fixed',
        // TODO: find out how to convert this to config variable
        height: 'calc(100vh - 61px)',
        boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Flex justifyContent="space-between" m={3} alignItems="center">
        <Text display="inline-block">Repositories</Text>
        <Button backgroundColor="teal">New</Button>
      </Flex>
    </Box>
  );
}
