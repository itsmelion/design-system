import React from 'react';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Badge } from '../components/Badge';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { Separator } from '../components/Separator';
import { Code } from '../components/Code';
import { Input } from '../components/Input';
import { Image } from '../components/Image';
import { MenuItem } from '../components/MenuItem';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { TreeItem } from '../components/TreeItem';
import { darkTheme } from '../stitches.config';
import { Dialog, styles as dialogStyles } from '@interop-ui/react-dialog';
import { Tooltip, styles as tooltipStyles } from '@interop-ui/react-tooltip';
import { Popover, styles as popoverStyles } from '@interop-ui/react-popover';
import { Accordion } from '@interop-ui/react-accordion';
import { Avatar } from '@interop-ui/react-avatar';
import { Tabs } from '@interop-ui/react-tabs';
import { SimpleToggle } from '../components/ToggleButton';
import { SimpleSwitch } from '../components/Switch';
import { Checkbox } from '../components/Checkbox';
import { Checkbox as CheckboxPrimitive, styles as checkboxStyles } from '@interop-ui/react-checkbox';
import { Switch } from '../components/Switch';
import { ScrollArea } from '../components/Scrollbar';

import { Layers } from '../composites/Layers';
import { Properties } from '../composites/Properties';
import { Color } from '../composites/Color';

function Home() {
  return (
    <Box css={{ bc: '$loContrast', height: '100%', mx: 250 }}>
      <ScrollArea>
      
        <Section size={3}>
          <Container size="2">
            <Text as="h1" size="9" css={{ ta: 'center', fontWeight: '500', lineHeight: '55px', mb: '$3' }}>
              Radix UI test suite
            </Text>
            <Text as="h2" size="6" css={{ ta: 'center', color: '$gray900', lineHeight: '30px' }}>
              An environment for testing tokens, theming, and components on Radix UI design system.
            </Text>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size={3}>
          <Section size={1} css={{ bc: '$gray200' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 1
            </Text>
          </Section>
          <Section size={2} css={{ bc: '$gray200', my: '$1' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 2
            </Text>
          </Section>
          <Section size={3} css={{ bc: '$gray200' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 3
            </Text>
          </Section>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size={3}>
          <Container size="1">
            <Box css={{ p: '$5', border: '1px solid $gray500', borderRadius: '$2' }}>
              <Input type="email" size="2" placeholder="Email" autoComplete="off" css={{ mb: '$3' }} />
              <Input type="password" size="2" placeholder="Password" autoComplete="off" css={{ mb: '$3' }} />
              <Flex css={{ ai: 'center', jc: 'space-between' }}>
                <Text size="2" css={{ color: '$gray900' }}>Forgot password</Text>
                <Button size="large" variant="blue">Log in</Button>
              </Flex>
            </Box>
          </Container>
          <Container size="2" css={{ my: '$9' }}>
            <Text as="p" size="4" css={{ lineHeight: '27px' }}>This is a really long paragraph of text, to demonstrate prose text, like for example, the kind you might read in a blog post. The reason we're using prose here is because the most common use case for this container size is longform text. So we're previewing some longform text here so we can make sure the container width provides an optimal line length for this font size.</Text>
          </Container>
          <Container size="3" css={{ my: '$9' }}>
            <Grid css={{
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '$7'
              }}>
              <Box>
                <Text as="p" size="4" css={{ lineHeight: '27px' }}>This is a much shorter paragraph of text, to demonstrate narrow text container. The reason we're using text here is because one common use case for this container size is a 3-up grid.</Text>
              </Box>
              <Box>
                <Text as="p" size="4" css={{ lineHeight: '27px' }}>This is a much shorter paragraph of text, to demonstrate narrow text container. The reason we're using text here is because one common use case for this container size is a 3-up grid.</Text>
              </Box>
              <Box>
                <Text as="p" size="4" css={{ lineHeight: '27px' }}>This is a much shorter paragraph of text, to demonstrate narrow text container. The reason we're using text here is because one common use case for this container size is a 3-up grid.</Text>
              </Box>
            </Grid>
          </Container>
          <Container size="4">
            <Text as="p" size="3" css={{ ta: 'center', bc: '$gray200', py: '$2' }}>No max width</Text>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size={3}>
          <Container size="2">
            <Flex css={{ fd: 'column', gap: '$4' }}>
              <Flex css={{ ai: 'center' }}>
                <Text size={2} css={{ color: '$gray900', mr: '$6' }}>900</Text>
                <Text size={9} as="h1" css={{ fontWeight: 500, lineHeight: '55px' }}>The quick brown fox</Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size={2} css={{ color: '$gray900', mr: '$6' }}>800</Text>
                <Text size={8} as="h2" css={{ fontWeight: 500, lineHeight: '37px' }}>The quick brown fox jumped</Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size={2} css={{ color: '$gray900', mr: '$6' }}>700</Text>
                <Text size={7} as="h3" css={{ fontWeight: 500, lineHeight: '30px' }}>The quick brown fox jumped</Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size={2} css={{ color: '$gray900', mr: '$6' }}>600</Text>
                <Text size={6} as="p" css={{ lineHeight: '30px' }}>The quick brown fox jumped over the lazy dog.</Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size={2} css={{ color: '$gray900', mr: '$6' }}>500</Text>
                <Text size={5} as="p" css={{ lineHeight: '29px' }}>The quick brown fox jumped over the lazy dog.</Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size={2} css={{ color: '$gray900', mr: '$6' }}>400</Text>
                <Text size={4} as="p" css={{ lineHeight: '29px' }}>The quick brown fox jumped over the lazy dog.</Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size={2} css={{ color: '$gray900', mr: '$6' }}>300</Text>
                <Text size={3} as="p" css={{ lineHeight: '25px' }}>The quick brown fox jumped over the lazy dog.</Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size={2} css={{ color: '$gray900', mr: '$6' }}>200</Text>
                <Text size={2} as="p" css={{ lineHeight: '20px' }}>The quick brown fox jumped over the lazy dog.</Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size={2} css={{ color: '$gray900', mr: '$6' }}>100</Text>
                <Text size={1} as="p" css={{ lineHeight: '20px' }}>The quick brown fox jumped over the lazy dog.</Text>
              </Flex>
            </Flex>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size={3}>
          <Container size="3">
            <Flex css={{ ai: 'center', jc: 'center', gap: '$5', fw: 'wrap', mb: '$7' }}>
              <Badge size={1}>Coming soon</Badge>
              <Badge size={2}>Coming soon</Badge>
            </Flex>
            <Flex css={{ jc: 'center', gap: '$5', fw: 'wrap' }}>
              <Badge size={2} variant="red">
                New
              </Badge>
              <Badge size={2} variant="crimson">
                Approved
              </Badge>
              <Badge size={2} variant="pink">
                Pending
              </Badge>
              <Badge size={2} variant="purple">
                Failed
              </Badge>
              <Badge size={2} variant="violet">
                New
              </Badge>
              <Badge size={2} variant="indigo">
                Approved
              </Badge>
              <Badge size={2} variant="blue">
                Pending
              </Badge>
              <Badge size={2} variant="turquoise">
                Failed
              </Badge>
              <Badge size={2} variant="teal">
                New
              </Badge>
              <Badge size={2} variant="green">
                Approved
              </Badge>
              <Badge size={2} variant="lime">
                Pending
              </Badge>
              <Badge size={2} variant="yellow">
                Failed
              </Badge>
              <Badge size={2} variant="orange">
                Failed
              </Badge>
              <Badge size={2} variant="gold">
                Winner
              </Badge>
              <Badge size={2} variant="bronze">
                Runner-up
              </Badge>
            </Flex>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        
        <Section size={3}>
          <Container size="2">
            <Flex css={{ gap: '$6' }}>
              <Button>Button</Button>
              <Button variant="blue">
                Important
              </Button>
              <Button variant="green">
                Secure
              </Button>
              <Button variant="red">
                Warning
              </Button>
            </Flex>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size={3}>
          <Container size="2">
            <Flex css={{ gap: '$6' }}>
              <Text size="3" css={{ color: '$gray900' }}>
                Documentation
              </Text>
              <Text size="5" css={{ color: '$blue600' }}>
                Documentation
              </Text>
              <Text size="3" css={{ color: '$gray900' }}>
                About
              </Text>
              <Text size="3" css={{ color: '$gray900' }}>
                Blog
              </Text>
            </Flex>

            <Text size="4" as="p" css={{ lineHeight: '25px' }}>
            There are 5 variants to choose from. Use is for positive states.{' '}
            <Link css={{}} href="#">
              This is a link
            </Link>{' '}
            Traditional business literature won’t help you solve it- most of that stuff is focused on
            life after product/market fit, after the Trough of Sorrow. A lot of startup stuff is
            focused on the initial phases, when you don’t have a team, idea, or investors.
          </Text>
          <Link variant="blue" css={{}} href="#">
            This is a link
          </Link>
          <Link variant="subtle" css={{}} href="#">
            This is a link
          </Link>
          </Container>
        </Section>
        
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size={3}>
          <Container size="2">
            <Input size={1} placeholder="Search components..." css={{ mb: '$6' }} />
            <Input size={2} placeholder="Search components..." />
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size={3}>
          <Container size="2">
            <Text size="4" as="p" css={{ lineHeight: '25px' }}>
              There are 5 variants to choose from. Use <Code>console.log('Radix').console</Code> is for
              positive states. Traditional business literature won’t help you solve it- most of that
              stuff is focused on life after product/market fit, after the Trough of Sorrow. A lot of
              startup stuff is focused on the initial phases, when you don’t have a team, idea, or
              investors.
            </Text>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>

        <Section size={3}>
          <Container size="2">
            <Switch />
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        
        <Section size={3}>
          <Container size="2">
            <Dialog>
              <Dialog.Trigger as={Button}>Dialog</Dialog.Trigger>
              <Dialog.Overlay style={{
                ...dialogStyles.overlay,
                backgroundColor: 'rgba(0,0,0,.15)'
                }}
              />
              <Dialog.Content as={Box} css={{
                ...dialogStyles.content,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '$loContrast',
                minWidth: 200,
                maxWidth: 'fit-content',
                maxHeight: '85vh',
                padding: 20,
                borderRadius: 5,
                boxShadow: 'rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px',
                marginTop: '-5vh',
              }}>
                <Text size={5} as="h6" css={{ fontWeight: 500, mb: '$3' }}>Dialog Heading</Text>
                <Text size={3} as="p" css={{ lineHeight: '25px' }}>There are 5 variants to choose from. Use is for positive states. This is a link Traditional business literature won’t help you solve it- most of that stuff is focused on life after product/market fit, after the Trough of Sorrow.</Text>
                <Popover>
                  <Popover.Trigger as={Button}>Open</Popover.Trigger>
                  <Popover.Position sideOffset={0}>
                    <Popover.Content
                      style={{
                        ...popoverStyles.content,
                        backgroundColor: 'white',
                        width: 250,
                        height: 150,
                        padding: 20,
                        borderRadius: 5,
                        boxShadow: 'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
                      }}
                    >
                      <Popover.Close as={Button} variant="ghost">Close</Popover.Close>
                    </Popover.Content>
                    <Popover.Arrow width={13} height={7} style={{ ...popoverStyles.arrow, fill: 'white' }} />
                  </Popover.Position>
                </Popover>
                <Box css={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  margin: '$2',
                }}>
                  <Tooltip>
                    <Tooltip.Trigger as="div">
                      <Dialog.Close as={IconButton} variant="ghost" aria-label="Close">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                        </svg>
                      </Dialog.Close>
                    </Tooltip.Trigger>
                    <Tooltip.Position side="top" align="center" sideOffset={0}>
                      <Tooltip.Content
                        aria-label="Close"
                        as={Box}
                        css={{
                          backgroundColor: '$hiContrast',
                          borderRadius: '$2',
                          padding: '$1 $2',
                          maxWidth: 300,
                        }}>
                        <Text size={1} as="p" css={{ lineHeight: '17px', color: '$loContrast' }}>Close</Text>
                      </Tooltip.Content>
                      <Tooltip.Arrow
                        offset={0}
                        width={13}
                        height={7}
                        style={{ ...tooltipStyles.arrow, fill: 'black' }}
                      />
                    </Tooltip.Position>
                  </Tooltip>
                </Box>
              </Dialog.Content>
            </Dialog>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        
        <Section size={3}>
          <Container size="2">
            <Popover>
              <Popover.Trigger as={Button}>Popover</Popover.Trigger>
              <Popover.Position side="left" align="end">
                <Popover.Content
                  style={{
                    ...popoverStyles.content,
                    backgroundColor: 'white',
                    padding: 20,
                    borderRadius: 5,
                    boxShadow: 'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
                  }}
                >
                  <Popover.Close as={IconButton} variant="ghost" aria-label="Close">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                    </svg>
                  </Popover.Close>
                  <Popover>
                    <Popover.Trigger as={Button}>Open</Popover.Trigger>
                    <Popover.Position side="left" align="end">
                      <Popover.Content
                        style={{
                          boxSizing: 'border-box',
                          backgroundColor: 'white',
                          padding: 20,
                          borderRadius: 5,
                          boxShadow: 'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
                        }}
                      >
                        <Popover.Close as={IconButton} variant="ghost" aria-label="Close">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                          </svg>
                        </Popover.Close>
                      </Popover.Content>
                    </Popover.Position>
                  </Popover>
                </Popover.Content>
              </Popover.Position>
            </Popover>

            <Popover>
              <Popover.Trigger as={Button}>Mad complex</Popover.Trigger>
              <Popover.Position side="top">
                <Popover.Content
                  style={{
                    boxSizing: 'border-box',
                    backgroundColor: 'white',
                    borderRadius: 5,
                    boxShadow: 'rgba(22, 23, 24, 0.35) 0px 10px 38px -10px, rgba(22, 23, 24, 0.2) 0px 10px 20px -15px',
                    width: 300,
                    p: '$4'
                  }}
                >
                  <Text size={4} as="h6" css={{ fontWeight: 500 }}>fwefewfw  w few fw</Text>
                  <Popover.Close as={IconButton} variant="ghost" aria-label="Close">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                    </svg>
                  </Popover.Close>
                  <Tabs defaultSelectedId="tab3">
                    <Tabs.List aria-label="Tabs example" style={{ display: 'flex' }}>
                      <Tabs.Tab
                        as={Box}
                        id="tab1"
                        css={{
                          height: '$5',
                          display: 'inline-flex',
                          lineHeight: 1,
                          px: '$2',
                          userSelect: 'none',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                        <Box css={{ mr: '$1' }}>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="currentColor"/>
                          </svg>
                        </Box>
                        <Text size={2}>Tab 1</Text>
                      </Tabs.Tab>
                      <Tabs.Tab
                        as={Box}
                        id="tab2"
                        css={{
                          height: '$5',
                          display: 'inline-flex',
                          lineHeight: 1,
                          px: '$2',
                          userSelect: 'none',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                        <Box css={{ mr: '$1' }}>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="currentColor"/>
                          </svg>
                        </Box>
                        <Text size={2}>Tab 2</Text>
                      </Tabs.Tab>
                      <Tabs.Tab
                        as={Box}
                        id="tab3"
                        css={{
                          height: '$5',
                          display: 'inline-flex',
                          lineHeight: 1,
                          px: '$2',
                          userSelect: 'none',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                        <Box css={{ mr: '$1' }}>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="currentColor"/>
                          </svg>
                        </Box>
                        <Text size={2}>Tab 3</Text>
                      </Tabs.Tab>
                    </Tabs.List>
                    <Separator css={{ width: '100%', mb: '$4' }} />
                    <Tabs.Panel id="tab1">
                      <Box css={{ p: '$3' }}>
                      <Input size={2} placeholder="Search" />
                      </Box>
                      <Box>
                        <Text size={2} as="p" css={{ lineHeight: '20px' }}>Hi Colm, Now that the summer is over it'd be great to re-ignite our earlier discussions.</Text>
                      </Box>
                    </Tabs.Panel>
                    <Tabs.Panel id="tab2">
                      <Box css={{ p: '$3' }}>
                        <Input size={2} placeholder="Search" />
                      </Box>
                      <Text size={3} as="p" css={{ lineHeight: '20px' }}>I discussed Modulz with the team last week and we'd be interested in exploring the round you're looking to raise.</Text>
                    </Tabs.Panel>
                    <Tabs.Panel id="tab3">
                      <Box css={{ p: '$3' }}>
                      <Input size={2} placeholder="Search" />
                      </Box>
                      <Text size={3} as="p" css={{ lineHeight: '20px' }}>Would you be open to a follow-up call with myself and our General Partner Jos? Happy to jump on a quick call to discuss.</Text>
                    </Tabs.Panel>
                  </Tabs>
                </Popover.Content>
              </Popover.Position>
            </Popover>
          </Container>
        </Section>
        
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        
        <Section size={3}>
          <Container size="2">
            <Accordion>
              <Accordion.Item value="one" style={{ lineHeight: 1, }}>
                <Accordion.Button style={{ width: '100%', border: 'none', display: 'block', padding: 10, lineHeight: 1, verticalAlign: 'middle' }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                  </svg>
                </Accordion.Button>
                <Accordion.Panel>
                  <Text size={3}>I’m an investor with Menlo Ventures.  I’ve been impressed by what you have been building at Modulz and wanted to reach out. It’s an area that I’ve been spending time in alongside with my colleague, who formerly lead product and growth at Evernote. Would love to connect with you if you are open to it.</Text>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="two" style={{ lineHeight: 1, }}>
                <Accordion.Button style={{ width: '100%', border: 'none', display: 'block', padding: 10, lineHeight: 1, verticalAlign: 'middle' }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                  </svg>
                </Accordion.Button>
                <Accordion.Panel>
                  <Text size={3}>I’m an investor with Menlo Ventures.  I’ve been impressed by what you have been building at Modulz and wanted to reach out. It’s an area that I’ve been spending time in alongside with my colleague, who formerly lead product and growth at Evernote. Would love to connect with you if you are open to it.</Text>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="three" disabled style={{ lineHeight: 1, }}>
                <Accordion.Button style={{ width: '100%', border: 'none', display: 'block', padding: 10, lineHeight: 1, verticalAlign: 'middle' }}>Three (disabled)</Accordion.Button>
                <Accordion.Panel>
                  <Text size={3}>I’m an investor with Menlo Ventures.  I’ve been impressed by what you have been building at Modulz and wanted to reach out. It’s an area that I’ve been spending time in alongside with my colleague, who formerly lead product and growth at Evernote. Would love to connect with you if you are open to it.</Text>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="four" style={{ lineHeight: 1, }}>
                <Accordion.Button style={{ width: '100%', border: 'none', display: 'block', padding: 10, lineHeight: 1, verticalAlign: 'middle' }}><Text>Four</Text><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645C11.1583 3.45118 10.8417 3.45118 10.6464 3.64645L7.5 6.79289L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355L6.79289 7.5L3.64645 10.6464C3.45118 10.8417 3.45118 11.1583 3.64645 11.3536C3.84171 11.5488 4.15829 11.5488 4.35355 11.3536L7.5 8.20711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6464L8.20711 7.5L11.3536 4.35355Z" fill="currentColor"/>
                  </svg></Accordion.Button>
                <Accordion.Panel>
                  <Text size={3}>I’m an investor with Menlo Ventures.  I’ve been impressed by what you have been building at Modulz and wanted to reach out. It’s an area that I’ve been spending time in alongside with my colleague, who formerly lead product and growth at Evernote. Would love to connect with you if you are open to it.</Text>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        
        <Section size={3}>
          <Container size="2">
            <Avatar as={Box} css={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 35,
              height: 35,
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
              // backgroundImage: 'linear-gradient($gray500, $gray900)',
            }}>
              <Avatar.Image
                alt="John Smith"
                as={Image}
                // src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              />
              <Avatar.Fallback as={Text} size={5} css={{ color: '$loContrast' }}>
                C
              </Avatar.Fallback>
            </Avatar>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        
        <Section size={3}>
          <Container size="2" css={{ py: '$7' }}>
            <Tabs defaultSelectedId="tab3">
              <Tabs.List aria-label="Tabs example" style={{ display: 'flex' }}>
                <Tabs.Tab
                  as={Box}
                  id="tab1"
                  css={{
                    height: '$5',
                    display: 'inline-flex',
                    lineHeight: 1,
                    px: '$2',
                    userSelect: 'none',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Box css={{ mr: '$1' }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="currentColor"/>
                    </svg>
                  </Box>
                  <Text size={2}>Tab 1</Text>
                </Tabs.Tab>
                <Tabs.Tab
                  as={Box}
                  id="tab2"
                  css={{
                    height: '$5',
                    display: 'inline-flex',
                    lineHeight: 1,
                    px: '$2',
                    userSelect: 'none',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Box css={{ mr: '$1' }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="currentColor"/>
                    </svg>
                  </Box>
                  <Text size={2}>Tab 2</Text>
                </Tabs.Tab>
                <Tabs.Tab
                  as={Box}
                  id="tab3"
                  css={{
                    height: '$5',
                    display: 'inline-flex',
                    lineHeight: 1,
                    px: '$2',
                    userSelect: 'none',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <Box css={{ mr: '$1' }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C5.5 0.223858 5.72386 0 6 0H7.5H9C9.27614 0 9.5 0.223858 9.5 0.5C9.5 0.776142 9.27614 1 9 1H8V2.11922C9.09835 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.0581 3.05806L11.8581 2.25806C12.1021 2.01398 12.4979 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.9671 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.5 14.9C3.96538 14.9 1.1 12.0346 1.1 8.49998C1.1 5.13362 3.69906 2.3743 7 2.11922V1H6C5.72386 1 5.5 0.776142 5.5 0.5ZM2.1 8.49998C2.1 5.51764 4.51766 3.09998 7.5 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.5 13.9C4.51766 13.9 2.1 11.4823 2.1 8.49998ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5V4.5Z" fill="currentColor"/>
                    </svg>
                  </Box>
                  <Text size={2}>Tab 3</Text>
                </Tabs.Tab>
              </Tabs.List>
              <Separator css={{ width: '100%', mb: '$4' }} />
              <Tabs.Panel id="tab1">
                <Text size={3} as="p" css={{ lineHeight: '20px' }}>Hi Colm, Now that the summer is over it'd be great to re-ignite our earlier discussions.</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab2">
                <Text size={3} as="p" css={{ lineHeight: '20px' }}>I discussed Modulz with the team last week and we'd be interested in exploring the round you're looking to raise.</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab3">
                <Text size={3} as="p" css={{ lineHeight: '20px' }}>Would you be open to a follow-up call with myself and our General Partner Jos? Happy to jump on a quick call to discuss.</Text>
              </Tabs.Panel>
            </Tabs>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        
        <Section size={3}>
          <Container size="2">
            <Grid css={{
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '$7'
              }}>
                <Box>
                  <SimpleToggle shape="circle">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49988 1.12704C8.80781 1.12704 10.0237 1.52106 11.0354 2.19687L10.3479 2.88428C9.52024 2.37245 8.54455 2.07704 7.49988 2.07704C4.50494 2.07704 2.07705 4.50493 2.07705 7.49988C2.07705 8.54455 2.37246 9.52023 2.88429 10.3479L2.19688 11.0354C1.52107 10.0237 1.12705 8.8078 1.12705 7.49988C1.12705 3.98026 3.98027 1.12704 7.49988 1.12704ZM12.1157 4.65211L12.8031 3.96468C13.4788 4.97628 13.8727 6.19207 13.8727 7.49988C13.8727 11.0195 11.0195 13.8727 7.49988 13.8727C6.19208 13.8727 4.97629 13.4788 3.96469 12.8031L4.65211 12.1157C5.47976 12.6274 6.45533 12.9227 7.49988 12.9227C10.4948 12.9227 12.9227 10.4948 12.9227 7.49988C12.9227 6.45533 12.6274 5.47976 12.1157 4.65211ZM7.5 9.9C7.32905 9.9 7.18314 9.79276 7.12589 9.64188L7.66777 9.1H10.65C10.8709 9.1 11.05 9.27909 11.05 9.5C11.05 9.72091 10.8709 9.9 10.65 9.9H7.5ZM11.7 7.9H8.86777L9.66777 7.1H11.7C11.9209 7.1 12.1 7.27909 12.1 7.5C12.1 7.72091 11.9209 7.9 11.7 7.9ZM7.5 5.1H8.13223L7.35812 5.87411C7.20724 5.81686 7.1 5.67095 7.1 5.5C7.1 5.27909 7.27908 5.1 7.5 5.1ZM7.5 3.1C7.27908 3.1 7.1 3.27909 7.1 3.5C7.1 3.72091 7.27908 3.9 7.5 3.9H8.8975C9.11841 3.9 9.2975 3.72091 9.2975 3.5C9.2975 3.27909 9.11841 3.1 8.8975 3.1H7.5ZM7.5 11.1C7.27908 11.1 7.1 11.2791 7.1 11.5C7.1 11.7209 7.27908 11.9 7.5 11.9H8.8975C9.11841 11.9 9.2975 11.7209 9.2975 11.5C9.2975 11.2791 9.11841 11.1 8.8975 11.1H7.5ZM13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L13.3536 2.35355Z" fill="currentColor"/>
                    </svg>
                  </SimpleToggle>
                </Box>
                <Flex css={{ gap: 2 }}>
                  <SimpleToggle shape="circle">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.425 3.00011C5.425 2.75158 5.62647 2.55011 5.875 2.55011H5.88477H5.89453H5.9043H5.91406H5.92383H5.93359H5.94336H5.95312H5.96289H5.97266H5.98242H5.99219H6.00195H6.01172H6.02148H6.03125H6.04102H6.05078H6.06055H6.07031H6.08008H6.08984H6.09961H6.10938H6.11914H6.12891H6.13867H6.14844H6.1582H6.16797H6.17773H6.1875H6.19727H6.20703H6.2168H6.22656H6.23633H6.24609H6.25586H6.26562H6.27539H6.28516H6.29492H6.30469H6.31445H6.32422H6.33398H6.34375H6.35352H6.36328H6.37305H6.38281H6.39258H6.40234H6.41211H6.42188H6.43164H6.44141H6.45117H6.46094H6.4707H6.48047H6.49023H6.5H6.50977H6.51953H6.5293H6.53906H6.54883H6.55859H6.56836H6.57812H6.58789H6.59766H6.60742H6.61719H6.62695H6.63672H6.64648H6.65625H6.66602H6.67578H6.68555H6.69531H6.70508H6.71484H6.72461H6.73438H6.74414H6.75391H6.76367H6.77344H6.7832H6.79297H6.80273H6.8125H6.82227H6.83203H6.8418H6.85156H6.86133H6.87109H6.88086H6.89062H6.90039H6.91016H6.91992H6.92969H6.93945H6.94922H6.95898H6.96875H6.97852H6.98828H6.99805H7.00781H7.01758H7.02734H7.03711H7.04688H7.05664H7.06641H7.07617H7.08594H7.0957H7.10547H7.11523H7.125H7.13477H7.14453H7.1543H7.16406H7.17383H7.18359H7.19336H7.20312H7.21289H7.22266H7.23242H7.24219H7.25195H7.26172H7.27148H7.28125H7.29102H7.30078H7.31055H7.32031H7.33008H7.33984H7.34961H7.35938H7.36914H7.37891H7.38867H7.39844H7.4082H7.41797H7.42773H7.4375H7.44727H7.45703H7.4668H7.47656H7.48633H7.49609H7.50586H7.51562H7.52539H7.53516H7.54492H7.55469H7.56445H7.57422H7.58398H7.59375H7.60352H7.61328H7.62305H7.63281H7.64258H7.65234H7.66211H7.67188H7.68164H7.69141H7.70117H7.71094H7.7207H7.73047H7.74023H7.75H7.75977H7.76953H7.7793H7.78906H7.79883H7.80859H7.81836H7.82812H7.83789H7.84766H7.85742H7.86719H7.87695H7.88672H7.89648H7.90625H7.91602H7.92578H7.93555H7.94531H7.95508H7.96484H7.97461H7.98438H7.99414H8.00391H8.01367H8.02344H8.0332H8.04297H8.05273H8.0625H8.07227H8.08203H8.0918H8.10156H8.11133H8.12109H8.13086H8.14062H8.15039H8.16016H8.16992H8.17969H8.18945H8.19922H8.20898H8.21875H8.22852H8.23828H8.24805H8.25781H8.26758H8.27734H8.28711H8.29688H8.30664H8.31641H8.32617H8.33594H8.3457H8.35547H8.36523H8.375H8.38477H8.39453H8.4043H8.41406H8.42383H8.43359H8.44336H8.45312H8.46289H8.47266H8.48242H8.49219H8.50195H8.51172H8.52148H8.53125H8.54102H8.55078H8.56055H8.57031H8.58008H8.58984H8.59961H8.60938H8.61914H8.62891H8.63867H8.64844H8.6582H8.66797H8.67773H8.6875H8.69727H8.70703H8.7168H8.72656H8.73633H8.74609H8.75586H8.76562H8.77539H8.78516H8.79492H8.80469H8.81445H8.82422H8.83398H8.84375H8.85352H8.86328H8.87305H8.88281H8.89258H8.90234H8.91211H8.92188H8.93164H8.94141H8.95117H8.96094H8.9707H8.98047H8.99023H9H9.00977H9.01953H9.0293H9.03906H9.04883H9.05859H9.06836H9.07812H9.08789H9.09766H9.10742H9.11719H9.12695H9.13672H9.14648H9.15625H9.16602H9.17578H9.18555H9.19531H9.20508H9.21484H9.22461H9.23438H9.24414H9.25391H9.26367H9.27344H9.2832H9.29297H9.30273H9.3125H9.32227H9.33203H9.3418H9.35156H9.36133H9.37109H9.38086H9.39062H9.40039H9.41016H9.41992H9.42969H9.43945H9.44922H9.45898H9.46875H9.47852H9.48828H9.49805H9.50781H9.51758H9.52734H9.53711H9.54688H9.55664H9.56641H9.57617H9.58594H9.5957H9.60547H9.61523H9.625H9.63477H9.64453H9.6543H9.66406H9.67383H9.68359H9.69336H9.70312H9.71289H9.72266H9.73242H9.74219H9.75195H9.76172H9.77148H9.78125H9.79102H9.80078H9.81055H9.82031H9.83008H9.83984H9.84961H9.85938H9.86914H9.87891H9.88867H9.89844H9.9082H9.91797H9.92773H9.9375H9.94727H9.95703H9.9668H9.97656H9.98633H9.99609H10.0059H10.0156H10.0254H10.0352H10.0449H10.0547H10.0645H10.0742H10.084H10.0938H10.1035H10.1133H10.123H10.1328H10.1426H10.1523H10.1621H10.1719H10.1816H10.1914H10.2012H10.2109H10.2207H10.2305H10.2402H10.25H10.2598H10.2695H10.2793H10.2891H10.2988H10.3086H10.3184H10.3281H10.3379H10.3477H10.3574H10.3672H10.377H10.3867H10.3965H10.4062H10.416H10.4258H10.4355H10.4453H10.4551H10.4648H10.4746H10.4844H10.4941H10.5039H10.5137H10.5234H10.5332H10.543H10.5527H10.5625H10.5723H10.582H10.5918H10.6016H10.6113H10.6211H10.6309H10.6406H10.6504H10.6602H10.6699H10.6797H10.6895H10.6992H10.709H10.7188H10.7285H10.7383H10.748H10.7578H10.7676H10.7773H10.7871H10.7969H10.8066H10.8164H10.8262H10.8359H10.8457H10.8555H10.8652H10.875C11.1235 2.55011 11.325 2.75158 11.325 3.00011C11.325 3.24864 11.1235 3.45011 10.875 3.45011H10.8652H10.8555H10.8457H10.8359H10.8262H10.8164H10.8066H10.7969H10.7871H10.7773H10.7676H10.7578H10.748H10.7383H10.7285H10.7188H10.709H10.6992H10.6895H10.6797H10.6699H10.6602H10.6504H10.6406H10.6309H10.6211H10.6113H10.6016H10.5918H10.582H10.5723H10.5625H10.5527H10.543H10.5332H10.5234H10.5137H10.5039H10.4941H10.4844H10.4746H10.4648H10.4551H10.4453H10.4355H10.4258H10.416H10.4062H10.3965H10.3867H10.377H10.3672H10.3574H10.3477H10.3379H10.3281H10.3184H10.3086H10.2988H10.2891H10.2793H10.2695H10.2598H10.25H10.2402H10.2305H10.2207H10.2109H10.2012H10.1914H10.1816H10.1719H10.1621H10.1523H10.1426H10.1328H10.123H10.1133H10.1035H10.0938H10.084H10.0742H10.0645H10.0547H10.0449H10.0352H10.0254H10.0156H10.0059H9.99609H9.98633H9.97656H9.9668H9.95703H9.94727H9.9375H9.92773H9.91797H9.9082H9.89844H9.88867H9.87891H9.86914H9.85938H9.84961H9.83984H9.83008H9.82031H9.81055H9.80078H9.79102H9.78125H9.77148H9.76172H9.75195H9.74219H9.73242H9.72266H9.71289H9.70312H9.69336H9.68359H9.67383H9.66406H9.6543H9.64453H9.63477H9.625H9.61523H9.60547H9.5957H9.58594H9.57617H9.56641H9.55664H9.54688H9.53711H9.52734H9.51758H9.50781H9.49805H9.48828H9.47852H9.46875H9.45898H9.44922H9.43945H9.42969H9.41992H9.41016H9.40039H9.39062H9.38086H9.37109H9.36133H9.35156H9.3418H9.33203H9.32227H9.3125H9.30273H9.29297H9.2832H9.27344H9.26367H9.25391H9.24414H9.23438H9.22461H9.21484H9.20508H9.19531H9.18555H9.17578H9.16602H9.15625H9.14648H9.13672H9.12695H9.11719H9.10742H9.09766H9.08789H9.07812H9.06836H9.05859H9.04883H9.03906H9.0293H9.01953H9.00977H9H8.99023H8.98047H8.9707H8.96094H8.95117H8.94141H8.93164H8.92188H8.92045L7.35576 11.05H9.125C9.37353 11.05 9.575 11.2515 9.575 11.5C9.575 11.7486 9.37353 11.95 9.125 11.95H4.125C3.87647 11.95 3.675 11.7486 3.675 11.5C3.675 11.2515 3.87647 11.05 4.125 11.05H6.07954L7.64423 3.45011H7.64258H7.63281H7.62305H7.61328H7.60352H7.59375H7.58398H7.57422H7.56445H7.55469H7.54492H7.53516H7.52539H7.51562H7.50586H7.49609H7.48633H7.47656H7.4668H7.45703H7.44727H7.4375H7.42773H7.41797H7.4082H7.39844H7.38867H7.37891H7.36914H7.35938H7.34961H7.33984H7.33008H7.32031H7.31055H7.30078H7.29102H7.28125H7.27148H7.26172H7.25195H7.24219H7.23242H7.22266H7.21289H7.20312H7.19336H7.18359H7.17383H7.16406H7.1543H7.14453H7.13477H7.125H7.11523H7.10547H7.0957H7.08594H7.07617H7.06641H7.05664H7.04688H7.03711H7.02734H7.01758H7.00781H6.99805H6.98828H6.97852H6.96875H6.95898H6.94922H6.93945H6.92969H6.91992H6.91016H6.90039H6.89062H6.88086H6.87109H6.86133H6.85156H6.8418H6.83203H6.82227H6.8125H6.80273H6.79297H6.7832H6.77344H6.76367H6.75391H6.74414H6.73438H6.72461H6.71484H6.70508H6.69531H6.68555H6.67578H6.66602H6.65625H6.64648H6.63672H6.62695H6.61719H6.60742H6.59766H6.58789H6.57812H6.56836H6.55859H6.54883H6.53906H6.5293H6.51953H6.50977H6.5H6.49023H6.48047H6.4707H6.46094H6.45117H6.44141H6.43164H6.42188H6.41211H6.40234H6.39258H6.38281H6.37305H6.36328H6.35352H6.34375H6.33398H6.32422H6.31445H6.30469H6.29492H6.28516H6.27539H6.26562H6.25586H6.24609H6.23633H6.22656H6.2168H6.20703H6.19727H6.1875H6.17773H6.16797H6.1582H6.14844H6.13867H6.12891H6.11914H6.10938H6.09961H6.08984H6.08008H6.07031H6.06055H6.05078H6.04102H6.03125H6.02148H6.01172H6.00195H5.99219H5.98242H5.97266H5.96289H5.95312H5.94336H5.93359H5.92383H5.91406H5.9043H5.89453H5.88477H5.875C5.62647 3.45011 5.425 3.24864 5.425 3.00011Z" fill="currentColor"/>
    </svg>

                  </SimpleToggle>
                  <SimpleToggle shape="circle">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.69009 9.13721C1.20272 9.13721 0.795097 9.54889 0.952901 10.01C1.40464 11.3301 2.81542 12.0903 4.61772 12.0903C6.95121 12.0903 8.28935 10.7126 8.28935 9.03833C8.28935 7.77271 7.51152 7.01465 5.88993 6.52026L5.12528 6.28296C4.09696 5.96655 3.66191 5.58423 3.66191 4.97119C3.66191 4.29883 4.28153 3.68579 5.44828 3.68579C6.22116 3.68579 6.79579 3.94618 7.10277 4.3718C7.36153 4.73055 7.70128 5.10962 8.1436 5.10962C8.60221 5.10962 8.98932 4.72854 8.85783 4.28919C8.47516 3.01054 7.18476 2.26196 5.4351 2.26196C3.37846 2.26196 1.92826 3.42212 1.92826 5.15576C1.92826 6.44775 2.71928 7.23877 4.30131 7.73315L5.04618 7.96387C6.13383 8.30005 6.53593 8.65601 6.53593 9.33496C6.53593 10.1787 5.73173 10.6665 4.64408 10.6665C3.76538 10.6665 3.08883 10.3483 2.72959 9.84363C2.476 9.48734 2.12742 9.13721 1.69009 9.13721Z" fill="currentColor"/>
    <path d="M9.97685 6.92896C9.97685 7.81226 10.4778 8.35278 11.6775 8.7417L12.2708 8.93945C13.2398 9.25586 13.5298 9.50635 13.5298 10.0403C13.5298 10.7654 12.8311 11.3191 11.8621 11.3191C10.9747 11.3191 10.3362 10.9274 10.0814 10.3212C9.99357 10.1122 9.80867 9.94141 9.58196 9.94141C9.3202 9.94141 9.10697 10.1644 9.18157 10.4153C9.46814 11.3791 10.4606 12.0442 11.8225 12.0442C13.3255 12.0442 14.4065 11.1873 14.4065 9.99414C14.4065 9.10425 13.9121 8.59009 12.6729 8.18799L12.0796 7.99683C11.17 7.7002 10.8338 7.39697 10.8338 6.85645C10.8338 6.18408 11.4732 5.6897 12.4356 5.6897C13.1952 5.6897 13.7827 6.07027 14.0064 6.64362C14.0868 6.84963 14.265 7.02124 14.4861 7.02124C14.7306 7.02124 14.931 6.81564 14.8708 6.57867C14.6255 5.61213 13.7028 4.9646 12.4488 4.9646C10.9854 4.9646 9.97685 5.79517 9.97685 6.92896Z" fill="currentColor"/>
    </svg>

                  </SimpleToggle>
                  <SimpleToggle shape="circle">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.12422 2.5002C2.12422 2.29309 2.29211 2.1252 2.49922 2.1252H6.49922C6.70633 2.1252 6.87422 2.29309 6.87422 2.5002C6.87422 2.70731 6.70633 2.8752 6.49922 2.8752H5V7.05H10V2.8752H8.49922C8.29211 2.8752 8.12422 2.70731 8.12422 2.5002C8.12422 2.29309 8.29211 2.1252 8.49922 2.1252H12.4992C12.7063 2.1252 12.8742 2.29309 12.8742 2.5002C12.8742 2.70731 12.7063 2.8752 12.4992 2.8752H11V12.1252H12.4992C12.7063 12.1252 12.8742 12.2931 12.8742 12.5002C12.8742 12.7073 12.7063 12.8752 12.4992 12.8752H8.49922C8.29211 12.8752 8.12422 12.7073 8.12422 12.5002C8.12422 12.2931 8.29211 12.1252 8.49922 12.1252H10V7.95H5V12.0752H6.49922C6.73394 12.0752 6.92422 12.2655 6.92422 12.5002C6.92422 12.7349 6.73394 12.9252 6.49922 12.9252H2.49922C2.2645 12.9252 2.07422 12.7349 2.07422 12.5002C2.07422 12.2655 2.2645 12.0752 2.49922 12.0752H4V2.8752H2.49922C2.29211 2.8752 2.12422 2.70731 2.12422 2.5002Z" fill="currentColor"/>
    </svg>

                  </SimpleToggle>
                </Flex>
                <Flex>
                  <SimpleToggle shape="square">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor"/>
    </svg>

                  </SimpleToggle>
                  <SimpleToggle shape="square">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z" fill="currentColor"/>
    </svg>

                  </SimpleToggle>
                  <SimpleToggle shape="square">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z" fill="currentColor"/>
    </svg>

                  </SimpleToggle>
                  <SimpleToggle shape="square">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor"/>
    </svg>

                  </SimpleToggle>
                </Flex>
            </Grid>
            <Flex css={{ alignItems: 'center', gap: '$1' }}>
              <Flex css={{ gap: 2 }}>
                <SimpleToggle shape="circle">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.425 3.00011C5.425 2.75158 5.62647 2.55011 5.875 2.55011H5.88477H5.89453H5.9043H5.91406H5.92383H5.93359H5.94336H5.95312H5.96289H5.97266H5.98242H5.99219H6.00195H6.01172H6.02148H6.03125H6.04102H6.05078H6.06055H6.07031H6.08008H6.08984H6.09961H6.10938H6.11914H6.12891H6.13867H6.14844H6.1582H6.16797H6.17773H6.1875H6.19727H6.20703H6.2168H6.22656H6.23633H6.24609H6.25586H6.26562H6.27539H6.28516H6.29492H6.30469H6.31445H6.32422H6.33398H6.34375H6.35352H6.36328H6.37305H6.38281H6.39258H6.40234H6.41211H6.42188H6.43164H6.44141H6.45117H6.46094H6.4707H6.48047H6.49023H6.5H6.50977H6.51953H6.5293H6.53906H6.54883H6.55859H6.56836H6.57812H6.58789H6.59766H6.60742H6.61719H6.62695H6.63672H6.64648H6.65625H6.66602H6.67578H6.68555H6.69531H6.70508H6.71484H6.72461H6.73438H6.74414H6.75391H6.76367H6.77344H6.7832H6.79297H6.80273H6.8125H6.82227H6.83203H6.8418H6.85156H6.86133H6.87109H6.88086H6.89062H6.90039H6.91016H6.91992H6.92969H6.93945H6.94922H6.95898H6.96875H6.97852H6.98828H6.99805H7.00781H7.01758H7.02734H7.03711H7.04688H7.05664H7.06641H7.07617H7.08594H7.0957H7.10547H7.11523H7.125H7.13477H7.14453H7.1543H7.16406H7.17383H7.18359H7.19336H7.20312H7.21289H7.22266H7.23242H7.24219H7.25195H7.26172H7.27148H7.28125H7.29102H7.30078H7.31055H7.32031H7.33008H7.33984H7.34961H7.35938H7.36914H7.37891H7.38867H7.39844H7.4082H7.41797H7.42773H7.4375H7.44727H7.45703H7.4668H7.47656H7.48633H7.49609H7.50586H7.51562H7.52539H7.53516H7.54492H7.55469H7.56445H7.57422H7.58398H7.59375H7.60352H7.61328H7.62305H7.63281H7.64258H7.65234H7.66211H7.67188H7.68164H7.69141H7.70117H7.71094H7.7207H7.73047H7.74023H7.75H7.75977H7.76953H7.7793H7.78906H7.79883H7.80859H7.81836H7.82812H7.83789H7.84766H7.85742H7.86719H7.87695H7.88672H7.89648H7.90625H7.91602H7.92578H7.93555H7.94531H7.95508H7.96484H7.97461H7.98438H7.99414H8.00391H8.01367H8.02344H8.0332H8.04297H8.05273H8.0625H8.07227H8.08203H8.0918H8.10156H8.11133H8.12109H8.13086H8.14062H8.15039H8.16016H8.16992H8.17969H8.18945H8.19922H8.20898H8.21875H8.22852H8.23828H8.24805H8.25781H8.26758H8.27734H8.28711H8.29688H8.30664H8.31641H8.32617H8.33594H8.3457H8.35547H8.36523H8.375H8.38477H8.39453H8.4043H8.41406H8.42383H8.43359H8.44336H8.45312H8.46289H8.47266H8.48242H8.49219H8.50195H8.51172H8.52148H8.53125H8.54102H8.55078H8.56055H8.57031H8.58008H8.58984H8.59961H8.60938H8.61914H8.62891H8.63867H8.64844H8.6582H8.66797H8.67773H8.6875H8.69727H8.70703H8.7168H8.72656H8.73633H8.74609H8.75586H8.76562H8.77539H8.78516H8.79492H8.80469H8.81445H8.82422H8.83398H8.84375H8.85352H8.86328H8.87305H8.88281H8.89258H8.90234H8.91211H8.92188H8.93164H8.94141H8.95117H8.96094H8.9707H8.98047H8.99023H9H9.00977H9.01953H9.0293H9.03906H9.04883H9.05859H9.06836H9.07812H9.08789H9.09766H9.10742H9.11719H9.12695H9.13672H9.14648H9.15625H9.16602H9.17578H9.18555H9.19531H9.20508H9.21484H9.22461H9.23438H9.24414H9.25391H9.26367H9.27344H9.2832H9.29297H9.30273H9.3125H9.32227H9.33203H9.3418H9.35156H9.36133H9.37109H9.38086H9.39062H9.40039H9.41016H9.41992H9.42969H9.43945H9.44922H9.45898H9.46875H9.47852H9.48828H9.49805H9.50781H9.51758H9.52734H9.53711H9.54688H9.55664H9.56641H9.57617H9.58594H9.5957H9.60547H9.61523H9.625H9.63477H9.64453H9.6543H9.66406H9.67383H9.68359H9.69336H9.70312H9.71289H9.72266H9.73242H9.74219H9.75195H9.76172H9.77148H9.78125H9.79102H9.80078H9.81055H9.82031H9.83008H9.83984H9.84961H9.85938H9.86914H9.87891H9.88867H9.89844H9.9082H9.91797H9.92773H9.9375H9.94727H9.95703H9.9668H9.97656H9.98633H9.99609H10.0059H10.0156H10.0254H10.0352H10.0449H10.0547H10.0645H10.0742H10.084H10.0938H10.1035H10.1133H10.123H10.1328H10.1426H10.1523H10.1621H10.1719H10.1816H10.1914H10.2012H10.2109H10.2207H10.2305H10.2402H10.25H10.2598H10.2695H10.2793H10.2891H10.2988H10.3086H10.3184H10.3281H10.3379H10.3477H10.3574H10.3672H10.377H10.3867H10.3965H10.4062H10.416H10.4258H10.4355H10.4453H10.4551H10.4648H10.4746H10.4844H10.4941H10.5039H10.5137H10.5234H10.5332H10.543H10.5527H10.5625H10.5723H10.582H10.5918H10.6016H10.6113H10.6211H10.6309H10.6406H10.6504H10.6602H10.6699H10.6797H10.6895H10.6992H10.709H10.7188H10.7285H10.7383H10.748H10.7578H10.7676H10.7773H10.7871H10.7969H10.8066H10.8164H10.8262H10.8359H10.8457H10.8555H10.8652H10.875C11.1235 2.55011 11.325 2.75158 11.325 3.00011C11.325 3.24864 11.1235 3.45011 10.875 3.45011H10.8652H10.8555H10.8457H10.8359H10.8262H10.8164H10.8066H10.7969H10.7871H10.7773H10.7676H10.7578H10.748H10.7383H10.7285H10.7188H10.709H10.6992H10.6895H10.6797H10.6699H10.6602H10.6504H10.6406H10.6309H10.6211H10.6113H10.6016H10.5918H10.582H10.5723H10.5625H10.5527H10.543H10.5332H10.5234H10.5137H10.5039H10.4941H10.4844H10.4746H10.4648H10.4551H10.4453H10.4355H10.4258H10.416H10.4062H10.3965H10.3867H10.377H10.3672H10.3574H10.3477H10.3379H10.3281H10.3184H10.3086H10.2988H10.2891H10.2793H10.2695H10.2598H10.25H10.2402H10.2305H10.2207H10.2109H10.2012H10.1914H10.1816H10.1719H10.1621H10.1523H10.1426H10.1328H10.123H10.1133H10.1035H10.0938H10.084H10.0742H10.0645H10.0547H10.0449H10.0352H10.0254H10.0156H10.0059H9.99609H9.98633H9.97656H9.9668H9.95703H9.94727H9.9375H9.92773H9.91797H9.9082H9.89844H9.88867H9.87891H9.86914H9.85938H9.84961H9.83984H9.83008H9.82031H9.81055H9.80078H9.79102H9.78125H9.77148H9.76172H9.75195H9.74219H9.73242H9.72266H9.71289H9.70312H9.69336H9.68359H9.67383H9.66406H9.6543H9.64453H9.63477H9.625H9.61523H9.60547H9.5957H9.58594H9.57617H9.56641H9.55664H9.54688H9.53711H9.52734H9.51758H9.50781H9.49805H9.48828H9.47852H9.46875H9.45898H9.44922H9.43945H9.42969H9.41992H9.41016H9.40039H9.39062H9.38086H9.37109H9.36133H9.35156H9.3418H9.33203H9.32227H9.3125H9.30273H9.29297H9.2832H9.27344H9.26367H9.25391H9.24414H9.23438H9.22461H9.21484H9.20508H9.19531H9.18555H9.17578H9.16602H9.15625H9.14648H9.13672H9.12695H9.11719H9.10742H9.09766H9.08789H9.07812H9.06836H9.05859H9.04883H9.03906H9.0293H9.01953H9.00977H9H8.99023H8.98047H8.9707H8.96094H8.95117H8.94141H8.93164H8.92188H8.92045L7.35576 11.05H9.125C9.37353 11.05 9.575 11.2515 9.575 11.5C9.575 11.7486 9.37353 11.95 9.125 11.95H4.125C3.87647 11.95 3.675 11.7486 3.675 11.5C3.675 11.2515 3.87647 11.05 4.125 11.05H6.07954L7.64423 3.45011H7.64258H7.63281H7.62305H7.61328H7.60352H7.59375H7.58398H7.57422H7.56445H7.55469H7.54492H7.53516H7.52539H7.51562H7.50586H7.49609H7.48633H7.47656H7.4668H7.45703H7.44727H7.4375H7.42773H7.41797H7.4082H7.39844H7.38867H7.37891H7.36914H7.35938H7.34961H7.33984H7.33008H7.32031H7.31055H7.30078H7.29102H7.28125H7.27148H7.26172H7.25195H7.24219H7.23242H7.22266H7.21289H7.20312H7.19336H7.18359H7.17383H7.16406H7.1543H7.14453H7.13477H7.125H7.11523H7.10547H7.0957H7.08594H7.07617H7.06641H7.05664H7.04688H7.03711H7.02734H7.01758H7.00781H6.99805H6.98828H6.97852H6.96875H6.95898H6.94922H6.93945H6.92969H6.91992H6.91016H6.90039H6.89062H6.88086H6.87109H6.86133H6.85156H6.8418H6.83203H6.82227H6.8125H6.80273H6.79297H6.7832H6.77344H6.76367H6.75391H6.74414H6.73438H6.72461H6.71484H6.70508H6.69531H6.68555H6.67578H6.66602H6.65625H6.64648H6.63672H6.62695H6.61719H6.60742H6.59766H6.58789H6.57812H6.56836H6.55859H6.54883H6.53906H6.5293H6.51953H6.50977H6.5H6.49023H6.48047H6.4707H6.46094H6.45117H6.44141H6.43164H6.42188H6.41211H6.40234H6.39258H6.38281H6.37305H6.36328H6.35352H6.34375H6.33398H6.32422H6.31445H6.30469H6.29492H6.28516H6.27539H6.26562H6.25586H6.24609H6.23633H6.22656H6.2168H6.20703H6.19727H6.1875H6.17773H6.16797H6.1582H6.14844H6.13867H6.12891H6.11914H6.10938H6.09961H6.08984H6.08008H6.07031H6.06055H6.05078H6.04102H6.03125H6.02148H6.01172H6.00195H5.99219H5.98242H5.97266H5.96289H5.95312H5.94336H5.93359H5.92383H5.91406H5.9043H5.89453H5.88477H5.875C5.62647 3.45011 5.425 3.24864 5.425 3.00011Z" fill="currentColor"/>
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="circle">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.69009 9.13721C1.20272 9.13721 0.795097 9.54889 0.952901 10.01C1.40464 11.3301 2.81542 12.0903 4.61772 12.0903C6.95121 12.0903 8.28935 10.7126 8.28935 9.03833C8.28935 7.77271 7.51152 7.01465 5.88993 6.52026L5.12528 6.28296C4.09696 5.96655 3.66191 5.58423 3.66191 4.97119C3.66191 4.29883 4.28153 3.68579 5.44828 3.68579C6.22116 3.68579 6.79579 3.94618 7.10277 4.3718C7.36153 4.73055 7.70128 5.10962 8.1436 5.10962C8.60221 5.10962 8.98932 4.72854 8.85783 4.28919C8.47516 3.01054 7.18476 2.26196 5.4351 2.26196C3.37846 2.26196 1.92826 3.42212 1.92826 5.15576C1.92826 6.44775 2.71928 7.23877 4.30131 7.73315L5.04618 7.96387C6.13383 8.30005 6.53593 8.65601 6.53593 9.33496C6.53593 10.1787 5.73173 10.6665 4.64408 10.6665C3.76538 10.6665 3.08883 10.3483 2.72959 9.84363C2.476 9.48734 2.12742 9.13721 1.69009 9.13721Z" fill="currentColor"/>
    <path d="M9.97685 6.92896C9.97685 7.81226 10.4778 8.35278 11.6775 8.7417L12.2708 8.93945C13.2398 9.25586 13.5298 9.50635 13.5298 10.0403C13.5298 10.7654 12.8311 11.3191 11.8621 11.3191C10.9747 11.3191 10.3362 10.9274 10.0814 10.3212C9.99357 10.1122 9.80867 9.94141 9.58196 9.94141C9.3202 9.94141 9.10697 10.1644 9.18157 10.4153C9.46814 11.3791 10.4606 12.0442 11.8225 12.0442C13.3255 12.0442 14.4065 11.1873 14.4065 9.99414C14.4065 9.10425 13.9121 8.59009 12.6729 8.18799L12.0796 7.99683C11.17 7.7002 10.8338 7.39697 10.8338 6.85645C10.8338 6.18408 11.4732 5.6897 12.4356 5.6897C13.1952 5.6897 13.7827 6.07027 14.0064 6.64362C14.0868 6.84963 14.265 7.02124 14.4861 7.02124C14.7306 7.02124 14.931 6.81564 14.8708 6.57867C14.6255 5.61213 13.7028 4.9646 12.4488 4.9646C10.9854 4.9646 9.97685 5.79517 9.97685 6.92896Z" fill="currentColor"/>
    </svg>

                </SimpleToggle>
                <SimpleToggle shape="circle">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.12422 2.5002C2.12422 2.29309 2.29211 2.1252 2.49922 2.1252H6.49922C6.70633 2.1252 6.87422 2.29309 6.87422 2.5002C6.87422 2.70731 6.70633 2.8752 6.49922 2.8752H5V7.05H10V2.8752H8.49922C8.29211 2.8752 8.12422 2.70731 8.12422 2.5002C8.12422 2.29309 8.29211 2.1252 8.49922 2.1252H12.4992C12.7063 2.1252 12.8742 2.29309 12.8742 2.5002C12.8742 2.70731 12.7063 2.8752 12.4992 2.8752H11V12.1252H12.4992C12.7063 12.1252 12.8742 12.2931 12.8742 12.5002C12.8742 12.7073 12.7063 12.8752 12.4992 12.8752H8.49922C8.29211 12.8752 8.12422 12.7073 8.12422 12.5002C8.12422 12.2931 8.29211 12.1252 8.49922 12.1252H10V7.95H5V12.0752H6.49922C6.73394 12.0752 6.92422 12.2655 6.92422 12.5002C6.92422 12.7349 6.73394 12.9252 6.49922 12.9252H2.49922C2.2645 12.9252 2.07422 12.7349 2.07422 12.5002C2.07422 12.2655 2.2645 12.0752 2.49922 12.0752H4V2.8752H2.49922C2.29211 2.8752 2.12422 2.70731 2.12422 2.5002Z" fill="currentColor"/>
    </svg>

                </SimpleToggle>
              </Flex>
              <Separator orientation="vertical" />
              <Flex>
                <SimpleToggle shape="square">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor"/>
    </svg>

                </SimpleToggle>
                <SimpleToggle shape="square">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z" fill="currentColor"/>
    </svg>

                </SimpleToggle>
                <SimpleToggle shape="square">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z" fill="currentColor"/>
    </svg>

                </SimpleToggle>
                <SimpleToggle shape="square">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z" fill="currentColor"/>
    </svg>

                </SimpleToggle>
              </Flex>
              <Separator orientation="vertical" />
              <Flex>
                <SimpleToggle shape="square">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.68979 2.75C3.89667 2.74979 4.08232 2.87701 4.15679 3.07003L7.36662 11.39C7.46602 11.6477 7.33774 11.9371 7.0801 12.0365C6.82247 12.1359 6.53304 12.0076 6.43365 11.75L5.3825 9.02537H2.01133L0.966992 11.749C0.868128 12.0068 0.578964 12.1357 0.321126 12.0369C0.0632878 11.938 -0.0655864 11.6488 0.0332774 11.391L3.22344 3.07099C3.29751 2.87782 3.4829 2.75021 3.68979 2.75ZM3.69174 4.64284L5.05458 8.17537H2.33724L3.69174 4.64284ZM10.8989 5.20703C9.25818 5.20703 8.00916 6.68569 8.00916 8.60972C8.00916 10.6337 9.35818 12.0124 10.8989 12.0124C11.7214 12.0124 12.5744 11.6692 13.1543 11.0219V11.0277V11.0357V11.0436V11.0515V11.0593V11.0671V11.0748V11.0825V11.0901V11.0976V11.1051V11.1125V11.1199V11.1272V11.1344V11.1416V11.1488V11.1559V11.1629V11.1698V11.1767V11.1836V11.1904V11.1971V11.2037V11.2103V11.2169V11.2234V11.2298V11.2361V11.2424V11.2487V11.2548V11.2609V11.267V11.273V11.2789V11.2847V11.2905V11.2963V11.3019V11.3075V11.3131V11.3185V11.3239V11.3293V11.3346V11.3398V11.3449V11.35V11.355V11.36V11.3649V11.3697V11.3744V11.3791V11.3837V11.3883V11.3928V11.3972V11.4015V11.4058V11.41V11.4141V11.4182V11.4222V11.4261V11.43V11.4338V11.4375V11.4412V11.4448V11.4483V11.4517V11.4551V11.4584V11.4616V11.4648V11.4679V11.4709V11.4738V11.4767V11.4795V11.4822V11.4849V11.4874V11.4899V11.4924V11.4947V11.497V11.4992V11.5014V11.5034V11.5054V11.5073V11.5091V11.5109V11.5126V11.5142V11.5157V11.5172V11.5185V11.5198V11.5211V11.5222V11.5233V11.5243V11.5252V11.526V11.5268V11.5274V11.528V11.5286V11.529V11.5294V11.5296V11.5298V11.53L13.6043 11.53H13.1543C13.1543 11.7785 13.3557 11.98 13.6043 11.98C13.8528 11.98 14.0543 11.7785 14.0543 11.53H13.6043L14.0543 11.53V11.5298V11.5296V11.5294V11.529V11.5286V11.528V11.5274V11.5268V11.526V11.5252V11.5243V11.5233V11.5222V11.5211V11.5198V11.5185V11.5172V11.5157V11.5142V11.5126V11.5109V11.5091V11.5073V11.5054V11.5034V11.5014V11.4992V11.497V11.4947V11.4924V11.4899V11.4874V11.4849V11.4822V11.4795V11.4767V11.4738V11.4709V11.4679V11.4648V11.4616V11.4584V11.4551V11.4517V11.4483V11.4448V11.4412V11.4375V11.4338V11.43V11.4261V11.4222V11.4182V11.4141V11.41V11.4058V11.4015V11.3972V11.3928V11.3883V11.3837V11.3791V11.3744V11.3697V11.3649V11.36V11.355V11.35V11.3449V11.3398V11.3346V11.3293V11.3239V11.3185V11.3131V11.3075V11.3019V11.2963V11.2905V11.2847V11.2789V11.273V11.267V11.2609V11.2548V11.2487V11.2424V11.2361V11.2298V11.2234V11.2169V11.2103V11.2037V11.1971V11.1904V11.1836V11.1767V11.1698V11.1629V11.1559V11.1488V11.1416V11.1344V11.1272V11.1199V11.1125V11.1051V11.0976V11.0901V11.0825V11.0748V11.0671V11.0593V11.0515V11.0436V11.0357V11.0277V11.0196V11.0115V11.0034V10.9951V10.9869V10.9785V10.9702V10.9617V10.9532V10.9447V10.9361V10.9275V10.9188V10.91V10.9012V10.8924V10.8834V10.8745V10.8655V10.8564V10.8473V10.8381V10.8289V10.8196V10.8103V10.801V10.7915V10.7821V10.7725V10.763V10.7534V10.7437V10.734V10.7242V10.7144V10.7046V10.6946V10.6847V10.6747V10.6646V10.6545V10.6444V10.6342V10.624V10.6137V10.6034V10.593V10.5826V10.5721V10.5616V10.5511V10.5405V10.5298V10.5191V10.5084V10.4976V10.4868V10.4759V10.465V10.4541V10.4431V10.4321V10.421V10.4099V10.3987V10.3875V10.3763V10.365V10.3536V10.3423V10.3309V10.3194V10.3079V10.2964V10.2848V10.2732V10.2616V10.2499V10.2382V10.2264V10.2146V10.2028V10.1909V10.179V10.167V10.155V10.143V10.1309V10.1188V10.1067V10.0945V10.0823V10.07V10.0578V10.0454V10.0331V10.0207V10.0083V9.99581V9.98331V9.97079V9.95822V9.94563V9.933V9.92033V9.90763V9.89491V9.88214V9.86935V9.85652V9.84366V9.83077V9.81784V9.80489V9.7919V9.77888V9.76583V9.75276V9.73965V9.72651V9.71334V9.70014V9.68691V9.67365V9.66036V9.64704V9.6337V9.62032V9.60692V9.59349V9.58003V9.56654V9.55303V9.53948V9.52592V9.51232V9.4987V9.48505V9.47137V9.45767V9.44395V9.43019V9.41642V9.40261V9.38878V9.37493V9.36105V9.34715V9.33323V9.31928V9.3053V9.29131V9.27729V9.26324V9.24918V9.23509V9.22098V9.20684V9.19269V9.17851V9.16431V9.15009V9.13585V9.12159V9.10731V9.093V9.07868V9.06433V9.04997V9.03559V9.02118V9.00676V8.99232V8.97786V8.96338V8.94888V8.93437V8.91983V8.90528V8.89072V8.87613V8.86153V8.84691V8.83227V8.81762V8.80295V8.78826V8.77356V8.75884V8.74411V8.72936V8.7146V8.69982V8.68503V8.67022V8.6554V8.64057V8.62572V8.61086V8.59598V8.58109V8.56619V8.55128V8.53635V8.52141V8.50646V8.4915V8.47652V8.46154V8.44654V8.43153V8.41651V8.40148V8.38644V8.37139V8.35633V8.34127V8.32619V8.3111V8.296V8.28089V8.26578V8.25066V8.23552V8.22039V8.20524V8.19008V8.17492V8.15975V8.14457V8.12939V8.1142V8.09901V8.0838V8.06859V8.05338V8.03816V8.02294V8.00771V7.99247V7.97723V7.96199V7.94674V7.93149V7.91623V7.90098V7.88571V7.87045V7.85518V7.83991V7.82463V7.80936V7.79408V7.7788V7.76352V7.74823V7.73295V7.71766V7.70238V7.68709V7.6718V7.65652V7.64123V7.62594V7.61065V7.59537V7.58008V7.5648V7.54951V7.53423V7.51895V7.50368V7.4884V7.47313V7.45786V7.44259V7.42732V7.41206V7.3968V7.38155V7.3663V7.35105V7.33581V7.32057V7.30534V7.29011V7.27489V7.25967V7.24445V7.22925V7.21405V7.19885V7.18366V7.16848V7.15331V7.13814V7.12298V7.10783V7.09268V7.07754V7.06241V7.04729V7.03218V7.01708V7.00198V6.9869V6.97182V6.95675V6.94169V6.92665V6.91161V6.89658V6.88157V6.86656V6.85157V6.83658V6.82161V6.80665V6.79171V6.77677V6.76185V6.74693V6.73204V6.71715V6.70228V6.68742V6.67258V6.65774V6.64293V6.62812V6.61333V6.59856V6.5838V6.56906V6.55433V6.53962V6.52492V6.51024V6.49557V6.48092V6.46629V6.45167V6.43707V6.42249V6.40793V6.39338V6.37885V6.36434V6.34985V6.33537V6.32092V6.30648V6.29206V6.27767V6.26329V6.24893V6.23459V6.22027V6.20597V6.19169V6.17744V6.1632V6.14899V6.13479V6.12062V6.10647V6.09234V6.07824V6.06415V6.05009V6.03606V6.02204V6.00805V5.99408V5.98014V5.96622V5.95232V5.93845V5.9246V5.91078V5.89699V5.88321V5.86947V5.85575V5.84205V5.82838V5.81474V5.80113V5.78754V5.77398V5.76044V5.74693V5.73345V5.72C14.0543 5.47147 13.8528 5.27 13.6043 5.27C13.3557 5.27 13.1543 5.47147 13.1543 5.72V5.73345V5.74693V5.76044V5.77398V5.78754V5.80113V5.81474V5.82838V5.84205V5.85575V5.86947V5.88321V5.89699V5.91078V5.9246V5.93845V5.95232V5.96622V5.98014V5.99408V6.00805V6.02204V6.03606V6.05009V6.06415V6.07824V6.09234V6.10647V6.12062V6.13479V6.14899V6.1632V6.17744V6.19169V6.20597V6.22027V6.22317C12.6054 5.60095 11.7924 5.20703 10.8989 5.20703ZM13.1543 7.30534V7.30195C12.7639 6.58101 11.9414 6.05757 11.0868 6.05757C10.1088 6.05757 9.03503 6.96581 9.03503 8.60955C9.03503 10.1533 10.0088 11.1615 11.0868 11.1615C11.9701 11.1615 12.772 10.4952 13.1543 9.79823V9.7919V9.77888V9.76583V9.75276V9.73965V9.72651V9.71334V9.70014V9.68691V9.67365V9.66036V9.64704V9.6337V9.62032V9.60692V9.59349V9.58003V9.56654V9.55303V9.53948V9.52592V9.51232V9.4987V9.48505V9.47137V9.45767V9.44395V9.43019V9.41642V9.40261V9.38878V9.37493V9.36105V9.34715V9.33323V9.31928V9.3053V9.29131V9.27729V9.26324V9.24918V9.23509V9.22098V9.20684V9.19269V9.17851V9.16431V9.15009V9.13585V9.12159V9.10731V9.093V9.07868V9.06433V9.04997V9.03559V9.02118V9.00676V8.99232V8.97786V8.96338V8.94888V8.93437V8.91983V8.90528V8.89072V8.87613V8.86153V8.84691V8.83227V8.81762V8.80295V8.78826V8.77356V8.75884V8.74411V8.72936V8.7146V8.69982V8.68503V8.67022V8.6554V8.64057V8.62572V8.61086V8.59598V8.58109V8.56619V8.55128V8.53635V8.52141V8.50646V8.4915V8.47652V8.46154V8.44654V8.43153V8.41651V8.40148V8.38644V8.37139V8.35633V8.34127V8.32619V8.3111V8.296V8.28089V8.26578V8.25066V8.23552V8.22039V8.20524V8.19008V8.17492V8.15975V8.14457V8.12939V8.1142V8.09901V8.0838V8.06859V8.05338V8.03816V8.02294V8.00771V7.99247V7.97723V7.96199V7.94674V7.93149V7.91623V7.90098V7.88571V7.87045V7.85518V7.83991V7.82463V7.80936V7.79408V7.7788V7.76352V7.74823V7.73295V7.71766V7.70238V7.68709V7.6718V7.65652V7.64123V7.62594V7.61065V7.59537V7.58008V7.5648V7.54951V7.53423V7.51895V7.50368V7.4884V7.47313V7.45786V7.44259V7.42732V7.41206V7.3968V7.38155V7.3663V7.35105V7.33581V7.32057V7.30534Z" fill="currentColor"/>
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60118 2.75C3.80997 2.75 3.99677 2.87973 4.0697 3.07537L7.17075 11.3949C7.26719 11.6537 7.13562 11.9416 6.87687 12.0381C6.61812 12.1345 6.33017 12.003 6.23372 11.7442L5.21682 9.01603H1.98555L0.968643 11.7442C0.872196 12.003 0.58425 12.1345 0.325498 12.0381C0.0667463 11.9416 -0.0648272 11.6537 0.0316203 11.3949L3.13267 3.07537C3.20559 2.87973 3.3924 2.75 3.60118 2.75ZM3.60118 4.68157L4.89999 8.16603H2.30238L3.60118 4.68157ZM11.4012 2.75C11.61 2.75 11.7968 2.87973 11.8697 3.07537L14.9707 11.3949C15.0672 11.6537 14.9356 11.9416 14.6769 12.0381C14.4181 12.1345 14.1302 12.003 14.0337 11.7442L13.0168 9.01603H9.78555L8.76864 11.7442C8.67219 12.003 8.38425 12.1345 8.1255 12.0381C7.86674 11.9416 7.73517 11.6537 7.83162 11.3949L10.9327 3.07537C11.0056 2.87973 11.1924 2.75 11.4012 2.75ZM11.4012 4.68157L12.7 8.16603H10.1024L11.4012 4.68157Z" fill="currentColor"/>
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.69894 5.20703C2.05818 5.20703 0.809151 6.68569 0.809151 8.60972C0.809151 10.6337 2.15818 12.0124 3.69894 12.0124C4.52121 12.0124 5.37396 11.6693 5.95384 11.0223V11.0277V11.0357V11.0436V11.0515V11.0593V11.0671V11.0748V11.0825V11.0901V11.0976V11.1051V11.1125V11.1199V11.1272V11.1345V11.1417V11.1488V11.1559V11.1629V11.1699V11.1768V11.1836V11.1904V11.1971V11.2038V11.2104V11.2169V11.2234V11.2298V11.2361V11.2424V11.2487V11.2548V11.2609V11.267V11.273V11.2789V11.2847V11.2905V11.2963V11.3019V11.3075V11.3131V11.3185V11.3239V11.3293V11.3346V11.3398V11.3449V11.35V11.355V11.36V11.3649V11.3697V11.3744V11.3791V11.3837V11.3883V11.3928V11.3972V11.4015V11.4058V11.41V11.4142V11.4182V11.4222V11.4262V11.43V11.4338V11.4375V11.4412V11.4448V11.4483V11.4517V11.4551V11.4584V11.4616V11.4648V11.4679V11.4709V11.4738V11.4767V11.4795V11.4822V11.4849V11.4875V11.49V11.4924V11.4947V11.497V11.4992V11.5014V11.5034V11.5054V11.5073V11.5092V11.5109V11.5126V11.5142V11.5157V11.5172V11.5186V11.5199V11.5211V11.5222V11.5233V11.5243V11.5252V11.526V11.5268V11.5275V11.5281V11.5286V11.529V11.5294V11.5297V11.5299V11.53L6.40384 11.53H5.95384C5.95384 11.7785 6.15532 11.98 6.40384 11.98C6.65237 11.98 6.85384 11.7785 6.85384 11.53H6.40384L6.85384 11.53V11.5299V11.5297V11.5294V11.529V11.5286V11.5281V11.5275V11.5268V11.526V11.5252V11.5243V11.5233V11.5222V11.5211V11.5199V11.5186V11.5172V11.5157V11.5142V11.5126V11.5109V11.5092V11.5073V11.5054V11.5034V11.5014V11.4992V11.497V11.4947V11.4924V11.49V11.4875V11.4849V11.4822V11.4795V11.4767V11.4738V11.4709V11.4679V11.4648V11.4616V11.4584V11.4551V11.4517V11.4483V11.4448V11.4412V11.4375V11.4338V11.43V11.4262V11.4222V11.4182V11.4142V11.41V11.4058V11.4015V11.3972V11.3928V11.3883V11.3837V11.3791V11.3744V11.3697V11.3649V11.36V11.355V11.35V11.3449V11.3398V11.3346V11.3293V11.3239V11.3185V11.3131V11.3075V11.3019V11.2963V11.2905V11.2847V11.2789V11.273V11.267V11.2609V11.2548V11.2487V11.2424V11.2361V11.2298V11.2234V11.2169V11.2104V11.2038V11.1971V11.1904V11.1836V11.1768V11.1699V11.1629V11.1559V11.1488V11.1417V11.1345V11.1272V11.1199V11.1125V11.1051V11.0976V11.0901V11.0825V11.0748V11.0671V11.0593V11.0515V11.0436V11.0357V11.0277V11.0196V11.0115V11.0034V10.9952V10.9869V10.9786V10.9702V10.9617V10.9533V10.9447V10.9361V10.9275V10.9188V10.91V10.9012V10.8924V10.8835V10.8745V10.8655V10.8564V10.8473V10.8381V10.8289V10.8197V10.8103V10.801V10.7915V10.7821V10.7726V10.763V10.7534V10.7437V10.734V10.7242V10.7144V10.7046V10.6947V10.6847V10.6747V10.6647V10.6546V10.6444V10.6342V10.624V10.6137V10.6034V10.593V10.5826V10.5721V10.5616V10.5511V10.5405V10.5298V10.5191V10.5084V10.4976V10.4868V10.4759V10.465V10.4541V10.4431V10.4321V10.421V10.4099V10.3987V10.3875V10.3763V10.365V10.3537V10.3423V10.3309V10.3194V10.3079V10.2964V10.2848V10.2732V10.2616V10.2499V10.2382V10.2264V10.2146V10.2028V10.1909V10.179V10.167V10.155V10.143V10.1309V10.1188V10.1067V10.0945V10.0823V10.0701V10.0578V10.0455V10.0331V10.0207V10.0083V9.99582V9.98333V9.9708V9.95824V9.94564V9.93301V9.92034V9.90765V9.89492V9.88215V9.86936V9.85653V9.84367V9.83078V9.81786V9.8049V9.79191V9.7789V9.76585V9.75277V9.73966V9.72652V9.71335V9.70015V9.68692V9.67366V9.66037V9.64705V9.63371V9.62033V9.60693V9.5935V9.58004V9.56655V9.55304V9.5395V9.52593V9.51233V9.49871V9.48506V9.47139V9.45769V9.44396V9.43021V9.41643V9.40263V9.3888V9.37494V9.36107V9.34717V9.33324V9.31929V9.30532V9.29132V9.2773V9.26326V9.24919V9.2351V9.22099V9.20686V9.1927V9.17852V9.16432V9.1501V9.13586V9.1216V9.10732V9.09301V9.07869V9.06435V9.04998V9.0356V9.0212V9.00677V8.99233V8.97787V8.96339V8.9489V8.93438V8.91985V8.9053V8.89073V8.87614V8.86154V8.84692V8.83228V8.81763V8.80296V8.78827V8.77357V8.75885V8.74412V8.72937V8.71461V8.69983V8.68504V8.67023V8.65541V8.64058V8.62573V8.61087V8.59599V8.5811V8.5662V8.55129V8.53636V8.52142V8.50647V8.49151V8.47653V8.46155V8.44655V8.43154V8.41653V8.4015V8.38646V8.37141V8.35635V8.34128V8.3262V8.31111V8.29601V8.28091V8.26579V8.25067V8.23554V8.2204V8.20525V8.1901V8.17493V8.15976V8.14459V8.1294V8.11421V8.09902V8.08382V8.06861V8.05339V8.03817V8.02295V8.00772V7.99248V7.97725V7.962V7.94675V7.9315V7.91625V7.90099V7.88573V7.87046V7.85519V7.83992V7.82465V7.80937V7.79409V7.77881V7.76353V7.74825V7.73296V7.71768V7.70239V7.6871V7.67182V7.65653V7.64124V7.62595V7.61067V7.59538V7.58009V7.56481V7.54953V7.53425V7.51897V7.50369V7.48841V7.47314V7.45787V7.4426V7.42734V7.41207V7.39682V7.38156V7.36631V7.35106V7.33582V7.32058V7.30535V7.29012V7.2749V7.25968V7.24447V7.22926V7.21406V7.19887V7.18368V7.1685V7.15332V7.13815V7.12299V7.10784V7.09269V7.07756V7.06243V7.04731V7.03219V7.01709V7.00199V6.98691V6.97183V6.95676V6.94171V6.92666V6.91162V6.8966V6.88158V6.86657V6.85158V6.8366V6.82163V6.80667V6.79172V6.77678V6.76186V6.74695V6.73205V6.71716V6.70229V6.68743V6.67259V6.65776V6.64294V6.62814V6.61335V6.59857V6.58381V6.56907V6.55434V6.53963V6.52493V6.51025V6.49558V6.48093V6.4663V6.45168V6.43709V6.4225V6.40794V6.39339V6.37886V6.36435V6.34986V6.33539V6.32093V6.30649V6.29208V6.27768V6.2633V6.24894V6.2346V6.22028V6.20598V6.19171V6.17745V6.16321V6.149V6.1348V6.12063V6.10648V6.09235V6.07825V6.06417V6.05011V6.03607V6.02205V6.00806V5.99409V5.98015V5.96623V5.95234V5.93846V5.92462V5.9108V5.897V5.88323V5.86948V5.85576V5.84207V5.8284V5.81475V5.80114V5.78755V5.77399V5.76045V5.74695V5.73347V5.72001C6.85384 5.47149 6.65237 5.27001 6.40384 5.27001C6.15532 5.27001 5.95384 5.47149 5.95384 5.72001V5.73347V5.74695V5.76045V5.77399V5.78755V5.80114V5.81475V5.8284V5.84207V5.85576V5.86948V5.88323V5.897V5.9108V5.92462V5.93846V5.95234V5.96623V5.98015V5.99409V6.00806V6.02205V6.03607V6.05011V6.06417V6.07825V6.09235V6.10648V6.12063V6.1348V6.149V6.16321V6.17745V6.19171V6.20598V6.22028V6.22269C5.40501 5.60075 4.59213 5.20703 3.69894 5.20703ZM5.95384 7.30535V7.30117C5.56333 6.58064 4.74113 6.05757 3.88675 6.05757C2.90884 6.05757 1.83503 6.96581 1.83503 8.60955C1.83503 10.1533 2.80884 11.1615 3.88675 11.1615C4.76978 11.1615 5.57136 10.4957 5.95384 9.799V9.79191V9.7789V9.76585V9.75277V9.73966V9.72652V9.71335V9.70015V9.68692V9.67366V9.66037V9.64705V9.63371V9.62033V9.60693V9.5935V9.58004V9.56655V9.55304V9.5395V9.52593V9.51233V9.49871V9.48506V9.47139V9.45769V9.44396V9.43021V9.41643V9.40263V9.3888V9.37494V9.36107V9.34717V9.33324V9.31929V9.30532V9.29132V9.2773V9.26326V9.24919V9.2351V9.22099V9.20686V9.1927V9.17852V9.16432V9.1501V9.13586V9.1216V9.10732V9.09301V9.07869V9.06435V9.04998V9.0356V9.0212V9.00677V8.99233V8.97787V8.96339V8.9489V8.93438V8.91985V8.9053V8.89073V8.87614V8.86154V8.84692V8.83228V8.81763V8.80296V8.78827V8.77357V8.75885V8.74412V8.72937V8.71461V8.69983V8.68504V8.67023V8.65541V8.64058V8.62573V8.61087V8.59599V8.5811V8.5662V8.55129V8.53636V8.52142V8.50647V8.49151V8.47653V8.46155V8.44655V8.43154V8.41653V8.4015V8.38646V8.37141V8.35635V8.34128V8.3262V8.31111V8.29601V8.28091V8.26579V8.25067V8.23554V8.2204V8.20525V8.1901V8.17493V8.15976V8.14459V8.1294V8.11421V8.09902V8.08382V8.06861V8.05339V8.03817V8.02295V8.00772V7.99248V7.97725V7.962V7.94675V7.9315V7.91625V7.90099V7.88573V7.87046V7.85519V7.83992V7.82465V7.80937V7.79409V7.77881V7.76353V7.74825V7.73296V7.71768V7.70239V7.6871V7.67182V7.65653V7.64124V7.62595V7.61067V7.59538V7.58009V7.56481V7.54953V7.53425V7.51897V7.50369V7.48841V7.47314V7.45787V7.4426V7.42734V7.41207V7.39682V7.38156V7.36631V7.35106V7.33582V7.32058V7.30535ZM10.7989 5.20703C9.15818 5.20703 7.90915 6.68569 7.90915 8.60972C7.90915 10.6337 9.25818 12.0124 10.7989 12.0124C11.6214 12.0124 12.4744 11.6692 13.0543 11.0218V11.0277V11.0357V11.0436V11.0515V11.0593V11.0671V11.0748V11.0825V11.0901V11.0976V11.1051V11.1125V11.1199V11.1272V11.1344V11.1416V11.1488V11.1559V11.1629V11.1698V11.1767V11.1836V11.1904V11.1971V11.2037V11.2103V11.2169V11.2234V11.2298V11.2361V11.2424V11.2487V11.2548V11.2609V11.267V11.273V11.2789V11.2847V11.2905V11.2963V11.3019V11.3075V11.3131V11.3185V11.3239V11.3293V11.3346V11.3398V11.3449V11.35V11.355V11.36V11.3649V11.3697V11.3744V11.3791V11.3837V11.3883V11.3928V11.3972V11.4015V11.4058V11.41V11.4141V11.4182V11.4222V11.4261V11.43V11.4338V11.4375V11.4412V11.4448V11.4483V11.4517V11.4551V11.4584V11.4616V11.4648V11.4679V11.4709V11.4738V11.4767V11.4795V11.4822V11.4849V11.4874V11.4899V11.4924V11.4947V11.497V11.4992V11.5014V11.5034V11.5054V11.5073V11.5091V11.5109V11.5126V11.5142V11.5157V11.5172V11.5185V11.5198V11.5211V11.5222V11.5233V11.5243V11.5252V11.526V11.5268V11.5274V11.528V11.5286V11.529V11.5294V11.5296V11.5298V11.53L13.5043 11.53H13.0543C13.0543 11.7785 13.2557 11.98 13.5043 11.98C13.7528 11.98 13.9543 11.7785 13.9543 11.53H13.5043L13.9543 11.53V11.5298V11.5296V11.5294V11.529V11.5286V11.528V11.5274V11.5268V11.526V11.5252V11.5243V11.5233V11.5222V11.5211V11.5198V11.5185V11.5172V11.5157V11.5142V11.5126V11.5109V11.5091V11.5073V11.5054V11.5034V11.5014V11.4992V11.497V11.4947V11.4924V11.4899V11.4874V11.4849V11.4822V11.4795V11.4767V11.4738V11.4709V11.4679V11.4648V11.4616V11.4584V11.4551V11.4517V11.4483V11.4448V11.4412V11.4375V11.4338V11.43V11.4261V11.4222V11.4182V11.4141V11.41V11.4058V11.4015V11.3972V11.3928V11.3883V11.3837V11.3791V11.3744V11.3697V11.3649V11.36V11.355V11.35V11.3449V11.3398V11.3346V11.3293V11.3239V11.3185V11.3131V11.3075V11.3019V11.2963V11.2905V11.2847V11.2789V11.273V11.267V11.2609V11.2548V11.2487V11.2424V11.2361V11.2298V11.2234V11.2169V11.2103V11.2037V11.1971V11.1904V11.1836V11.1767V11.1698V11.1629V11.1559V11.1488V11.1416V11.1344V11.1272V11.1199V11.1125V11.1051V11.0976V11.0901V11.0825V11.0748V11.0671V11.0593V11.0515V11.0436V11.0357V11.0277V11.0196V11.0115V11.0034V10.9951V10.9869V10.9785V10.9702V10.9617V10.9532V10.9447V10.9361V10.9275V10.9188V10.91V10.9012V10.8924V10.8834V10.8745V10.8655V10.8564V10.8473V10.8381V10.8289V10.8196V10.8103V10.801V10.7915V10.7821V10.7726V10.763V10.7534V10.7437V10.734V10.7242V10.7144V10.7046V10.6947V10.6847V10.6747V10.6646V10.6545V10.6444V10.6342V10.624V10.6137V10.6034V10.593V10.5826V10.5721V10.5616V10.5511V10.5405V10.5298V10.5191V10.5084V10.4976V10.4868V10.4759V10.465V10.4541V10.4431V10.4321V10.421V10.4099V10.3987V10.3875V10.3763V10.365V10.3536V10.3423V10.3309V10.3194V10.3079V10.2964V10.2848V10.2732V10.2616V10.2499V10.2382V10.2264V10.2146V10.2028V10.1909V10.179V10.167V10.155V10.143V10.1309V10.1188V10.1067V10.0945V10.0823V10.07V10.0578V10.0454V10.0331V10.0207V10.0083V9.99581V9.98331V9.97079V9.95822V9.94563V9.933V9.92033V9.90764V9.89491V9.88214V9.86935V9.85652V9.84366V9.83077V9.81784V9.80489V9.7919V9.77888V9.76584V9.75276V9.73965V9.72651V9.71334V9.70014V9.68691V9.67365V9.66036V9.64704V9.6337V9.62032V9.60692V9.59349V9.58003V9.56654V9.55303V9.53948V9.52592V9.51232V9.4987V9.48505V9.47137V9.45767V9.44395V9.43019V9.41642V9.40261V9.38878V9.37493V9.36105V9.34715V9.33323V9.31928V9.3053V9.29131V9.27729V9.26324V9.24918V9.23509V9.22098V9.20684V9.19269V9.17851V9.16431V9.15009V9.13585V9.12159V9.10731V9.093V9.07868V9.06433V9.04997V9.03559V9.02118V9.00676V8.99232V8.97786V8.96338V8.94888V8.93437V8.91984V8.90528V8.89072V8.87613V8.86153V8.84691V8.83227V8.81762V8.80295V8.78826V8.77356V8.75884V8.74411V8.72936V8.7146V8.69982V8.68503V8.67022V8.6554V8.64057V8.62572V8.61086V8.59598V8.58109V8.56619V8.55128V8.53635V8.52141V8.50646V8.4915V8.47652V8.46154V8.44654V8.43153V8.41651V8.40148V8.38644V8.37139V8.35633V8.34127V8.32619V8.3111V8.296V8.28089V8.26578V8.25066V8.23552V8.22039V8.20524V8.19008V8.17492V8.15975V8.14457V8.12939V8.1142V8.09901V8.0838V8.06859V8.05338V8.03816V8.02294V8.00771V7.99247V7.97723V7.96199V7.94674V7.93149V7.91623V7.90098V7.88571V7.87045V7.85518V7.83991V7.82463V7.80936V7.79408V7.7788V7.76352V7.74823V7.73295V7.71766V7.70238V7.68709V7.6718V7.65652V7.64123V7.62594V7.61065V7.59537V7.58008V7.5648V7.54952V7.53423V7.51895V7.50368V7.4884V7.47313V7.45786V7.44259V7.42732V7.41206V7.3968V7.38155V7.3663V7.35105V7.33581V7.32057V7.30534V7.29011V7.27489V7.25967V7.24446V7.22925V7.21405V7.19885V7.18366V7.16848V7.15331V7.13814V7.12298V7.10783V7.09268V7.07754V7.06241V7.04729V7.03218V7.01708V7.00198V6.9869V6.97182V6.95675V6.94169V6.92665V6.91161V6.89658V6.88157V6.86656V6.85157V6.83658V6.82161V6.80665V6.79171V6.77677V6.76185V6.74694V6.73204V6.71715V6.70228V6.68742V6.67258V6.65774V6.64293V6.62812V6.61334V6.59856V6.5838V6.56906V6.55433V6.53962V6.52492V6.51024V6.49557V6.48092V6.46629V6.45167V6.43707V6.42249V6.40793V6.39338V6.37885V6.36434V6.34985V6.33537V6.32092V6.30648V6.29206V6.27767V6.26329V6.24893V6.23459V6.22027V6.20597V6.19169V6.17744V6.1632V6.14899V6.13479V6.12062V6.10647V6.09234V6.07824V6.06415V6.05009V6.03606V6.02204V6.00805V5.99408V5.98014V5.96622V5.95232V5.93845V5.92461V5.91078V5.89699V5.88321V5.86947V5.85575V5.84205V5.82838V5.81474V5.80113V5.78754V5.77398V5.76044V5.74693V5.73345V5.72C13.9543 5.47147 13.7528 5.27 13.5043 5.27C13.2557 5.27 13.0543 5.47147 13.0543 5.72V5.73345V5.74693V5.76044V5.77398V5.78754V5.80113V5.81474V5.82838V5.84205V5.85575V5.86947V5.88321V5.89699V5.91078V5.92461V5.93845V5.95232V5.96622V5.98014V5.99408V6.00805V6.02204V6.03606V6.05009V6.06415V6.07824V6.09234V6.10647V6.12062V6.13479V6.14899V6.1632V6.17744V6.19169V6.20597V6.22027V6.22318C12.5054 5.60095 11.6924 5.20703 10.7989 5.20703ZM13.0543 7.30534V7.30196C12.6639 6.58102 11.8414 6.05757 10.9867 6.05757C10.0088 6.05757 8.93503 6.96581 8.93503 8.60955C8.93503 10.1533 9.90884 11.1615 10.9867 11.1615C11.8701 11.1615 12.672 10.4952 13.0543 9.79822V9.7919V9.77888V9.76584V9.75276V9.73965V9.72651V9.71334V9.70014V9.68691V9.67365V9.66036V9.64704V9.6337V9.62032V9.60692V9.59349V9.58003V9.56654V9.55303V9.53948V9.52592V9.51232V9.4987V9.48505V9.47137V9.45767V9.44395V9.43019V9.41642V9.40261V9.38878V9.37493V9.36105V9.34715V9.33323V9.31928V9.3053V9.29131V9.27729V9.26324V9.24918V9.23509V9.22098V9.20684V9.19269V9.17851V9.16431V9.15009V9.13585V9.12159V9.10731V9.093V9.07868V9.06433V9.04997V9.03559V9.02118V9.00676V8.99232V8.97786V8.96338V8.94888V8.93437V8.91984V8.90528V8.89072V8.87613V8.86153V8.84691V8.83227V8.81762V8.80295V8.78826V8.77356V8.75884V8.74411V8.72936V8.7146V8.69982V8.68503V8.67022V8.6554V8.64057V8.62572V8.61086V8.59598V8.58109V8.56619V8.55128V8.53635V8.52141V8.50646V8.4915V8.47652V8.46154V8.44654V8.43153V8.41651V8.40148V8.38644V8.37139V8.35633V8.34127V8.32619V8.3111V8.296V8.28089V8.26578V8.25066V8.23552V8.22039V8.20524V8.19008V8.17492V8.15975V8.14457V8.12939V8.1142V8.09901V8.0838V8.06859V8.05338V8.03816V8.02294V8.00771V7.99247V7.97723V7.96199V7.94674V7.93149V7.91623V7.90098V7.88571V7.87045V7.85518V7.83991V7.82463V7.80936V7.79408V7.7788V7.76352V7.74823V7.73295V7.71766V7.70238V7.68709V7.6718V7.65652V7.64123V7.62594V7.61065V7.59537V7.58008V7.5648V7.54952V7.53423V7.51895V7.50368V7.4884V7.47313V7.45786V7.44259V7.42732V7.41206V7.3968V7.38155V7.3663V7.35105V7.33581V7.32057V7.30534Z" fill="currentColor"/>
                  </svg>
                </SimpleToggle>
              </Flex>
            </Flex>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        
        <Section size={3}>
          <Container size="2" css={{ py: '$7' }}>
            <Checkbox>
              <CheckboxPrimitive.Indicator style={{ ...checkboxStyles.indicator }}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                </svg>
              </CheckboxPrimitive.Indicator>
            </Checkbox>
            <Button variant="ghost" size="large" as="label">
              <Checkbox>
                <CheckboxPrimitive.Indicator style={{ ...checkboxStyles.indicator }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </CheckboxPrimitive.Indicator>
              </Checkbox>
              <Text size={2} css={{ ml: '$2' }}>Checkbox label</Text>
            </Button>
            <Button variant="ghost" size="large" as="label">
              <Checkbox>
                <CheckboxPrimitive.Indicator style={{ ...checkboxStyles.indicator }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z" fill="currentColor"/>
                  </svg>
                </CheckboxPrimitive.Indicator>
              </Checkbox>
              <Text size={2} css={{ ml: '$2' }}>Checkbox label</Text>
            </Button>
          </Container>
        </Section>

        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        
        <Color />
      </ScrollArea>

      <Layers />
      <Properties />
      
    </Box>
  );
}

export default Home;
