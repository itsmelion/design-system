import { Box } from '../components/Box';
import { MenuItem } from '../components/MenuItem';
import { Text } from '../components/Text';
import { ScrollArea } from '../components/Scrollbar';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Grid } from '../components/Grid';
import { Code } from '../components/Code';
import { Flex } from '../components/Flex';

export function Color() {
  return (
    <Section size={3}>
      <Container size="2">
        <Box css={{ height: 35, backgroundColor: '$hiContrast' }}></Box>
        <Text css={{ color: '$hiContrast' }}>fewfwefwefw</Text>
        <Box css={{ height: 35, backgroundColor: '$canvas' }}></Box>
      </Container>
      
      <Container size="3" css={{ py: '$7' }}>
        <Grid css={{
          gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
          gap: 2,
          ai: 'center'
        }}> 
            <Box></Box>
            <Box css={{ ta: 'center', pb: '$2' }}><Text css={{ fontSize: '$2', color: '$gray900' }}>100</Text></Box>
            <Box css={{ ta: 'center', pb: '$2' }}><Text css={{ fontSize: '$2', color: '$gray900' }}>200</Text></Box>
            <Box css={{ ta: 'center', pb: '$2' }}><Text css={{ fontSize: '$2', color: '$gray900' }}>300</Text></Box>
            <Box css={{ ta: 'center', pb: '$2' }}><Text css={{ fontSize: '$2', color: '$gray900' }}>400</Text></Box>
            <Box css={{ ta: 'center', pb: '$2' }}><Text css={{ fontSize: '$2', color: '$gray900' }}>500</Text></Box>
            <Box css={{ ta: 'center', pb: '$2' }}><Text css={{ fontSize: '$2', color: '$gray900' }}>600</Text></Box>
            <Box css={{ ta: 'center', pb: '$2' }}><Text css={{ fontSize: '$2', color: '$gray900' }}>700</Text></Box>
            <Box css={{ ta: 'center', pb: '$2' }}><Text css={{ fontSize: '$2', color: '$gray900' }}>800</Text></Box>
            <Box css={{ ta: 'center', pb: '$2' }}><Text css={{ fontSize: '$2', color: '$gray900' }}>900</Text></Box>
            
            <Box><Text css={{ fontSize: '$2' }}>Gray</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$gray100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gray900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Red</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$red100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$red900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Crimson</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$crimson900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Pink</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$pink100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$pink900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Purple</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$purple100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$purple900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Violet</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$violet100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$violet900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Indigo</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$indigo900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Blue</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$blue100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$blue900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Turquoise</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$turquoise100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$turquoise200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$turquoise300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$turquoise400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$turquoise500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$turquoise600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$turquoise700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$turquoise800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$turquoise900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Teal</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$teal100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$teal900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Green</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$green100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$green900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Lime</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$lime100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$lime200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$lime300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$lime400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$lime500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$lime600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$lime700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$lime800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$lime900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Yellow</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$yellow900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Orange</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$orange100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$orange900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Bronze</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$bronze100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$bronze200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$bronze300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$bronze400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$bronze500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$bronze600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$bronze700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$bronze800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$bronze900' }}></Box>

            <Box><Text css={{ fontSize: '$2' }}>Gold</Text></Box>
            <Box css={{ height: 35, backgroundColor: '$gold100' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gold200' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gold300' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gold400' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gold500' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gold600' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gold700' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gold800' }}></Box>
            <Box css={{ height: 35, backgroundColor: '$gold900' }}></Box>
        </Grid>
      </Container>

      <Container size="2">
        <Box as="ol" css={{ my: '$3' }}>
          <li>
            <Text size={3} css={{ color: '$hiContrast', lineHeight: '25px' }}>Step 1: Subtle backgrounds</Text>
          </li>
          <li>
            <Text size={3} css={{ color: '$hiContrast', lineHeight: '25px' }}>Steps 2–4: Interactive backgrounds</Text>
          </li>
          <li>
            <Text size={3} css={{ color: '$hiContrast', lineHeight: '25px' }}>Step 5: Separators</Text>
          </li>
          <li>
            <Text size={3} css={{ color: '$hiContrast', lineHeight: '25px' }}>Steps 6–7: Borders</Text>
          </li>
          <li>
            <Text size={3} css={{ color: '$hiContrast', lineHeight: '25px' }}>Step 8: Backgrounds</Text>
          </li>
          <li>
            <Text size={3} css={{ color: '$hiContrast', lineHeight: '25px' }}>Step 9: Text</Text>
          </li>
        </Box>
      </Container>

      <Container size="2" css={{ py: '$7' }}>
        <Text size={4} as="p" css={{ color: '$hiContrast', lineHeight: '25px', mb: '$4' }}>Here we are testing <Code>gray500</Code> for its suitability as a separator. It should subtle, though visible on all backgrounds.</Text>

        <Flex css={{ position: 'relative' }}>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$loContrast' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray100' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray200' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray300' }}></Box>
          <Box css={{ fb: '0', fg: '1', height: 160, backgroundColor: '$gray400' }}></Box>
          <Box css={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: 1, backgroundColor: '$gray500' }}></Box>
        </Flex>
      </Container>
    </Section>
  );
}