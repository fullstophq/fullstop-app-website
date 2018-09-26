import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from 'grid-styled'

import {
  Heading,
  HeadingFive,
  HeadingThree,
} from '../../../punctuation/Typography/Heading'
import { PurplishGrey, RaisinBlack } from '../../../punctuation/Utils/colors'

const Paragraph = styled.p`
  font-family: 'Titillium Web', sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 24px;
  color: ${RaisinBlack};
`

const ExplanationBlock = ({
  subHeading,
  heading,
  paragraph,
}: {
  subHeading: string
  heading: string
  paragraph: string
}): JSX.Element => (
  <Flex>
    <Box>
      <HeadingFive
        style={{
          color: PurplishGrey,
          textTransform: 'uppercase',
          padding: 0,
          margin: '18px 0 4px 0',
        }}
      >
        {subHeading}
      </HeadingFive>
      <HeadingThree style={{ color: RaisinBlack, margin: '0 0 18px 0' }}>
        {heading}
      </HeadingThree>
      <Paragraph>{paragraph}</Paragraph>
    </Box>
  </Flex>
)

export default ExplanationBlock
