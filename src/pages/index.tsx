import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from 'grid-styled'

import { Heading } from '../../punctuation/Typography/Heading'
import { RaisinBlack } from '../../punctuation/Utils/colors'

import Header from '../components/Header'
import Illustration from '../images/illustration.png'

const HeroTitle = styled(Heading)`
  color: ${RaisinBlack};
  height: 104px;
`

const HeroParagraph = styled.p`
  height: 112px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: -0.2px;
  color: #4c4452;
`

const BackgroundWrapper = styled(Flex)`
  background-image: url(${Illustration});
  background-repeat: no-repeat;
`

const IndexPage = () => (
  <BackgroundWrapper>
    <Flex>
      <Box ml="48px" mt="48px">
        <HeroTitle>
          Spend less time chasing content owners over licensing rights.
        </HeroTitle>
        <HeroParagraph>
          Fullstop simplifies and speeds up the acquisition of licensing rights
          to user generated content for publishers and media organisations.{' '}
          <strong>From days to a few minutes.</strong>
        </HeroParagraph>
      </Box>
    </Flex>
  </BackgroundWrapper>
)

export default IndexPage
