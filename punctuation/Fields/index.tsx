import styled from 'styled-components'

import { VividCerulean } from '../Utils/colors'

export const InputField = styled.input`
  width: 280px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #d8d8dc;

  padding: 11px 21px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: normal;
  color: #666666;

  &:active,
  &:focus {
    border: 1px solid ${VividCerulean};
  }

  &:focus {
    outline-offset: 0;
    outline: none;
  }
`
