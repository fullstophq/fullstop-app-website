import styled from 'styled-components'

import { LightMustard, White } from '../../Utils/colors'
import { BaseParagraph } from '../../Utils/typography'

const FooterLabel = styled.p`
  ${BaseParagraph};
  color: ${White};
  height: 28px;
  margin: 0;
`

const FooterLink = styled.a`
  ${BaseParagraph};
  color: ${LightMustard};
  text-transform: capitalize;
  font-weight: 600;
  cursor: pointer;
  height: 28px;

  & :hover {
    text-decoration: underline;
  }
`

export { FooterLink, FooterLabel }
