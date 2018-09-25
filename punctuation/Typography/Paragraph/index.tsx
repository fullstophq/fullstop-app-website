import styled from 'styled-components'

import { Link } from 'gatsby'
import { LightMustard, White } from '../../Utils/colors'
import { BaseParagraph } from '../../Utils/typography'

export const FooterStatement = styled.p`
  ${BaseParagraph};
  color: ${White};
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.2px;
`

export const FooterLabel = styled.p`
  ${BaseParagraph};
  color: ${White};
  height: 28px;
  margin: 0;
  line-height: 28px;
  text-align: center;
`

export const FooterLink = styled(Link)`
  ${BaseParagraph};
  color: ${LightMustard};
  text-transform: capitalize;
  font-weight: 600;
  cursor: pointer;
  height: 28px;
  line-height: 28px;
  text-decoration: none;
  text-align: center;

  & :hover {
    text-decoration: underline;
  }
`
