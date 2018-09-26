import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from 'grid-styled'

import { Heading } from '../../punctuation/Typography/Heading'
import { RaisinBlack } from '../../punctuation/Utils/colors'

import ExplanationBlock from '../components/ExplanationBlock'
import IllustrationHeader from '../images/illustration-header@2x.png'
import IllustrationStepOne from '../images/illustration-step-1@2x.png'
import IllustrationStepTwo from '../images/illustration-step-2@2x.png'
import IllustrationStepThree from '../images/illustration-step-3@2x.png'

const HeroTitle = styled(Heading)`
  color: ${RaisinBlack};
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.5px;
`

const Paragraph = styled.p`
  font-family: 'Titillium Web', sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 24px;
  color: ${RaisinBlack};
`

const IndexPage = () => (
  <Flex flexDirection="column">
    <Box>
      <img
        src={IllustrationHeader}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: -1,
        }}
      />
    </Box>
    <Box mt="232px" mb="18px" mx="18px">
      <HeroTitle>
        Spend less time chasing content owners over licensing rights.
      </HeroTitle>
      <Paragraph>
        Fullstop simplifies and speeds up the acquisition of licensing rights to
        user generated content for publishers and media organisations.{' '}
        <strong>From days to a few minutes.</strong>
      </Paragraph>
      <Box>
        <img
          src={IllustrationStepOne}
          style={{
            width: '100%',
          }}
        />
      </Box>
      <Box>
        <ExplanationBlock
          subHeading="Intelligent data capture"
          heading="Meet content owners in their natural environment."
          paragraph="Simplify communication by allowing our messaging robots to capture all
          necessary data and pre-validate it for you automatically, right where
          the content owners are. We plan to support Facebook Messenger and
          web-based contact forms out of the box, with other platforms to
          follow."
        />
      </Box>
      <Box>
        <img
          src={IllustrationStepTwo}
          style={{
            width: '100%',
          }}
        />
      </Box>
      <Box>
        <ExplanationBlock
          subHeading="Automatic content processing"
          heading="Speed up content audits by leveraging clever automation."
          paragraph="Let the machines do the hard work. Fullstop can process uploaded videos,
          flagging things like nudity or violence, determine the age of individuals,
          and ensure the video is brand-safe; all to help you make quicker,
          smarter and more accurate decisions about which content works best for you."
        />
      </Box>
      <Box>
        <img
          src={IllustrationStepThree}
          style={{
            width: '100%',
          }}
        />
      </Box>
      <Box>
        <ExplanationBlock
          subHeading="Fully asynchronous workflow"
          heading="Be the first. Beat the competition."
          paragraph="Instead of wasting time waiting for a reply from a content owner to your licensing offer,
          Fullstop speeds up the process by running all steps in parallel,
          often allowing you to make a decision and send an agreement within minutes,
          without any additional follow-up required on your part."
        />
      </Box>
    </Box>
  </Flex>
)

export default IndexPage
