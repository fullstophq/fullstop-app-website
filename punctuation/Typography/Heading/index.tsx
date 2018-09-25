import styled from 'styled-components'

import { White } from '../../Utils/colors'

const HeadingFont = `'Titillium Web', sans-serif`

const Heading = styled.h1`
  font-family: ${HeadingFont};
  font-size: 48px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: -1.5px;
  color: ${White};
  margin: 0;
`

const SubHeading = styled.h5`
  font-family: ${HeadingFont};
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  color: #555555;
  text-transform: uppercase;
  margin: 0;

  & > h1 {
    margin-bottom: 20px;
  }
`

const HeadingThree = styled.h3`
  font-family: ${HeadingFont};
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: normal;
  color: ${White};
`

const HeadingFour = styled.h4`
  font-family: ${HeadingFont};
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: normal;
  color: ${White};
`

const HeadingFive = styled.h5`
  font-family: ${HeadingFont};
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: normal;
  color: ${White};
`

export { Heading, SubHeading, HeadingThree, HeadingFour, HeadingFive }
