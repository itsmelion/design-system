import React from 'react';
import './App.css';
import Button from './Button';
import IconButton from './IconButton';
import Box from './Box';
import Flex from './Flex';
import Grid from './Grid';
import { darkTheme } from '@stitches/styled';

function App() {
  return (
    <div className="App">
      <Grid css={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        <Box>
          <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
            <Button>
              <Box css={{ mr: '1' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <path d="M8 13V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </Box>
              Button
            </Button>
            <Button size="large">
              <Box css={{ mr: '2' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <path d="M8 13V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </Box>
              Large
            </Button>
          </Flex>
          <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
            <Button>Button</Button>
            <Button variant="blue">Blue</Button>
            <Button variant="green">Green</Button>
            <Button variant="red">Red</Button>
            <Button variant="ghost">Ghost</Button>
          </Flex>
          <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
            <Button state="active">Active</Button>
            <Button state="waiting">Waiting</Button>
          </Flex>
          <Flex css={{ alignItems: 'center', gap: '32px' }}>
            <Button disabled>Disabled</Button>
          </Flex>
        </Box>
        <Box>
          <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
            <IconButton aria-label="Add something">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 13V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </IconButton>
            <IconButton aria-label="Add something" size="large">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 13V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </IconButton>
          </Flex>
          <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
            <IconButton variant="ghost">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 13V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </IconButton>
            <IconButton variant="raised">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 13V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </IconButton>
          </Flex>
          <Flex css={{ alignItems: 'center', mb: 6, gap: '32px' }}>
            <IconButton state="active">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 13V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </IconButton>
            <IconButton state="waiting">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 13V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </IconButton>
          </Flex>
        </Box>
      </Grid>

      <Box css={{ position: 'absolute', top: '400px', left: '1400px', bottom: 0, width: '160px', height: '250px', borderRadius: 2, boxShadow: '0 16px 32px -10px hsl(206deg 12% 5% / 25%), 0 8px 16px -15px hsl(0deg 0% 0% / 10%)' }}></Box>

      <Box css={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '245px', borderRightWidth: '1px', borderRightStyle: 'solid', borderColor: 'gray300' }}></Box>
      <Box css={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '245px', borderLeftWidth: '1px', borderLeftStyle: 'solid', borderColor: 'gray300' }}></Box>
    </div>
  );
}

export default App;
