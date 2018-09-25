import styled, { ThemedStyledFunction } from 'styled-components'

import { Cerulean, VividCerulean } from '../Utils/colors'

interface PrimaryButtonProps {
  small?: boolean
  // tslint:disable-next-line:no-any
  children?: any
}

const styledComponentWithProps = <
  SProps,
  TProps extends object = {},
  U extends HTMLElement = HTMLElement
>(
  styledFunction: ThemedStyledFunction<any, any>, // tslint:disable-line no-any
): ThemedStyledFunction<SProps & React.HTMLProps<U>, TProps> => {
  return styledFunction
}

export const PrimaryButton = styledComponentWithProps<PrimaryButtonProps>(
  styled.button,
)`
  background-color: ${VividCerulean};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  width: ${props => (props.small ? '139px' : '168px')};
  height: ${props => (props.small ? '40px' : '48px')};
  border: none;
  box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.25);

  font-family: 'Titillium Web', sans-serif;
  font-size: ${props => (props.small ? '14px' : '16px')};
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 16px;
  letter-spacing: normal;
  color: #fefeff;

  cursor: pointer;

  &:hover:enabled {
    background-color: ${Cerulean};
  }

  &:active:enabled {
    background-color: ${Cerulean};
    box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  }

  &:focus {
      outline-offset: 0;
      outline: none;
  }

  &:disabled {
    opacity: 0.3;
  }
`
