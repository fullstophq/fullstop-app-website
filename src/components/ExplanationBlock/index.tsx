import React from 'react'

import { Box, Flex } from 'grid-styled'

import {
  HeadingFive,
  HeadingThree,
} from '../../../punctuation/Typography/Heading'
import { PurplishGrey, RaisinBlack } from '../../../punctuation/Utils/colors'

import { Paragraph } from './styles'

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
