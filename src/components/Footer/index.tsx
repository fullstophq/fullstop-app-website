import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from 'grid-styled'
import { Medium } from 'styled-icons/fa-brands/Medium.cjs'
import { Twitter } from 'styled-icons/fa-brands/Twitter.cjs'

import { PrimaryButton } from '../../../punctuation/Button'
import Divider from '../../../punctuation/Divider'
import { InputField } from '../../../punctuation/Fields'
import {
  HeadingFive,
  HeadingFour,
  HeadingThree,
} from '../../../punctuation/Typography/Heading'
import {
  FooterLabel,
  FooterStatement,
} from '../../../punctuation/Typography/Paragraph'
import {
  DirtyPurple,
  OrangeYellowDark,
  White,
} from '../../../punctuation/Utils/colors'
import { BaseParagraph } from '../../../punctuation/Utils/typography'

import Background from '../../images/background-gradient.svg'

const FooterWrapper = styled(Flex)`
  background-color: ${DirtyPurple};
  background-image: url(${Background});
  background-position: 0 0;
  background-repeat: repeat;
  background-size: cover;
  /* padding-left: 195px;
  padding-right: 195px; */
`

const ContactFormWrapper = styled(Flex)`
  box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  margin-top: 27px;
  margin-bottom: 26px;
`
const ContactFormLabel = styled.p`
  ${BaseParagraph};
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 21px;
  letter-spacing: normal;
  color: ${White};
  opacity: 0.8;
`

export default () => (
  <FooterWrapper>
    <Flex flexDirection="column">
      <Box mt="34px" pl="18px" pr="18px">
        <Divider />
      </Box>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Box pl="18px" pr="18px" flex="1">
            <HeadingThree>Would you like to try it?</HeadingThree>
            <FooterStatement>
              We’re launching a private beta in <strong>Q4 2018</strong>, free
              for anyone interested, with a full release of the platform later
              in 2019.
            </FooterStatement>
          </Box>
          <Box pl="18px" pr="18px" flex="1">
            <HeadingFour>Get access as soon as we launch.</HeadingFour>
            <ContactFormWrapper flexDirection="column">
              <Box flex="1">
                <InputField placeholder="Email address" />
              </Box>
              <Box>
                <PrimaryButton style={{ width: '100%' }}>
                  Notify me
                </PrimaryButton>
              </Box>
            </ContactFormWrapper>
            <ContactFormLabel>
              We promise to send you only updates about our launch, nothing
              more.
            </ContactFormLabel>
          </Box>
        </Flex>
        <Box style={{ width: '100%' }}>
          <Flex
            style={{ width: '100%' }}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <HeadingThree>Fullstop Roadmap</HeadingThree>
            </Box>
            <Box mb="16px">
              <HeadingFour style={{ margin: 0, textAlign: 'center' }}>
                Development
              </HeadingFour>
              <HeadingFive
                style={{
                  margin: 0,
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  color: OrangeYellowDark,
                }}
              >
                In Progress
              </HeadingFive>
            </Box>
            <Box mb="16px" style={{ opacity: 0.5 }}>
              <HeadingFour style={{ margin: 0, textAlign: 'center' }}>
                Private Beta
              </HeadingFour>
              <HeadingFive
                style={{
                  margin: 0,
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                Q4 2018
              </HeadingFive>
            </Box>
            <Box mb="16px" style={{ opacity: 0.5 }}>
              <HeadingFour style={{ margin: 0, textAlign: 'center' }}>
                Public Beta
              </HeadingFour>
              <HeadingFive
                style={{
                  margin: 0,
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                Q1 2019
              </HeadingFive>
            </Box>
            <Box style={{ opacity: 0.5 }}>
              <HeadingFour style={{ margin: 0, textAlign: 'center' }}>
                Launch
              </HeadingFour>
              <HeadingFive
                style={{
                  margin: 0,
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                Q2 2019
              </HeadingFive>
            </Box>
          </Flex>
        </Box>
        <Box style={{ width: '100%' }} mt="48px" mb="35px">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              justifyContent="space-between"
              style={{
                marginTop: '17px',
                justifyContent: 'center',
              }}
            >
              <Box mx={2}>
                <a
                  href="https://medium.com/thefullstop"
                  rel="noopener"
                  target="_blank"
                >
                  <Medium style={{ height: '38px', color: White }} />
                </a>
              </Box>
              <Box mx={2}>
                <a
                  href="https://twitter.com/fullstopmediahq"
                  rel="noopener"
                  target="_blank"
                >
                  <Twitter style={{ height: '38px', color: White }} />
                </a>
              </Box>
            </Flex>
            <Box mt="38px">
              <FooterLabel>© 2018 Fullstop Media Ltd</FooterLabel>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </FooterWrapper>
)
