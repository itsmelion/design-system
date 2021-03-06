import React from 'react';
import { styled } from '../stitches.config';
import {
  Switch as SwitchPrimitive,
  SwitchProps as SwitchPrimitiveProps,
} from '@interop-ui/react-switch';

export type SwitchProps = SwitchPrimitiveProps;

const Track = styled('button', {
  width: 30,
  height: 7,
  backgroundColor: '$gray500',
  borderRadius: '$round',
  position: 'relative',
  my: 5,
  '&[data-state="checked"]': {
    backgroundColor: '$gray800',
  },
});

const Thumb = styled('span', {
  position: 'absolute',
  left: 0,
  width: 19,
  height: 19,
  backgroundColor: '$gray700',
  borderRadius: '$round',
  transition: 'all 100ms ease',
  '&:hover': {
    backgroundColor: '$gray900',
  },
  '&[data-state="checked"]': {
    transform: 'translateX(15px)',
  },
});

export function Switch(props: SwitchProps) {
  return (
    <SwitchPrimitive as={Track} {...props}>
      <SwitchPrimitive.Thumb as={Thumb} />
    </SwitchPrimitive>
  );
}
