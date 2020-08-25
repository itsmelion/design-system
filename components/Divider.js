import { styled } from '../css';

const Divider = styled.div(
  {
    // Reset
    boxSizing: 'border-box',
    flexShrink: 0,

    height: '1px',
    backgroundColor: 'gray300',
    borderRadius: 1,
    width: 3,
  },
  {
    size: {
      large: {
        width: 7,
      },
    },
    orientation: {
      vertical: {
        width: '1px',
        height: 3,
      },
    },
  }
);

export default Divider;
