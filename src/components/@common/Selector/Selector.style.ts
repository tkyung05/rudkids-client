import Select from 'react-select';
import { StylesConfig } from 'react-select';
import styled from 'styled-components';

import { PALETTE } from '@/constants/style';

export const Selector = styled(Select)`
  width: 100%;

  margin: 2rem 0;

  * {
    font-size: 4rem;
  }

  .css-1fdsijx-ValueContainer {
    margin: 0;
    padding-left: 4rem;
  }

  .css-1xc3v61-indicatorContainer,
  .css-15lsz6c-indicatorContainer {
    margin: 0;
    padding: 0;
  }
`;

export const colorStyles: StylesConfig<any> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: `${PALETTE.WHITE}`,
    boxShadow: 'none',
    borderColor: `${PALETTE.GRAY_2}`,

    ':hover': {
      borderColor: `${PALETTE.BLACK}`,
      cursor: 'none',
    },
  }),
  option: (styles, { isDisabled, isSelected }) => {
    const defaultColor = `${PALETTE.WHITE}`;
    return {
      ...styles,
      backgroundColor: `${defaultColor}`,
      color: 'black',
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':hover': {
        backgroundColor: `${PALETTE.GRAY}`,
        cursor: 'none',
      },

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled ? (isSelected ? defaultColor : `${PALETTE.GRAY}`) : 'white',
      },
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles }),
};
