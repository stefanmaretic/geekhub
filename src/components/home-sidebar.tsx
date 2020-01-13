import * as React from 'react';
import { Box, Button, Flex, Text } from 'rebass';
import { Input } from '@rebass/forms';

const repos = [
  'stefanmaretic/dzgn',
  'slettmayer/Dashboard',
  'strapi/strapi',
  'stefanmaretic/chatnik',
  'stefanmaretic/website',
  'stefanmaretic/samples-server'
];

const ListItem: React.FC = props => (
  <Text
    as="li"
    sx={{
      listStyle: 'none',
      marginTop: 1
    }}
    {...props}
  >
    {props.children}
  </Text>
);

export function HomeSidebar() {
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
        <Button bg="teal">New</Button>
      </Flex>
      <Box
        m={3}
        sx={{
          borderRadius: 4
        }}
      >
        <Input id="findRepository" placeholder="Find a repository" name="findRepository" type="text" />
      </Box>
      <Box as="ul" pl={3}>
        {repos.map(repo => (
          <ListItem>{repo}</ListItem>
        ))}
      </Box>
      <Text fontSize={1} ml={3} mt={2} color="grey">
        Show more...
      </Text>
    </Box>
  );
}
