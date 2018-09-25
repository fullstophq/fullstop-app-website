import styled from 'styled-components'

import { Link } from 'gatsby'
import { LightMustard, White } from '../../Utils/colors'
import { BaseParagraph } from '../../Utils/typography'

export const FooterStatement = styled.p`
  ${BaseParagraph};
  color: ${White};
  font-size: 24px;
  line-height: 1.42;
  letter-spacing: -0.2px;
`

export const FooterLabel = styled.p`
  ${BaseParagraph};
  color: ${White};
  height: 28px;
  margin: 0;
  line-height: 2.4;
`

export const FooterLink = styled(Link)`
  ${BaseParagraph};
  color: ${LightMustard};
  text-transform: capitalize;
  font-weight: 600;
  cursor: pointer;
  height: 28px;
  line-height: 2.4;
  text-decoration: none;

  & :hover {
    text-decoration: underline;
  }
`
