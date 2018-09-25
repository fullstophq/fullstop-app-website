import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from 'grid-styled'
import { Medium } from 'styled-icons/fa-brands/Medium.cjs'
import { Twitter } from 'styled-icons/fa-brands/Twitter.cjs'

import { PrimaryButton } from '../../punctuation/Button'
import Divider from '../../punctuation/Divider'
import { InputField } from '../../punctuation/Fields'
import { Heading, HeadingThree } from '../../punctuation/Typography/Heading'
import {
  FooterLabel,
  FooterLink,
  FooterStatement,
} from '../../punctuation/Typography/Paragraph'
import { DirtyPurple, White } from '../../punctuation/Utils/colors'
import { BaseParagraph } from '../../punctuation/Utils/typography'

import Background from '../images/background-gradient.svg'
import Logo from '../images/logo-inverse.svg'

const FooterWrapper = styled.div`
  position: absolute;
  background-color: ${DirtyPurple};
  background-image: url(${Background});
  background-position: 0 0;
  background-size: cover;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  padding-left: 195px;
  padding-right: 195px;
`

const FooterFullstopLogo = styled.div`
  background: url(${Logo}) no-repeat;
  width: 111px;
  height: 32px;
`

const FootNote = styled(Box)`
  align-self: flex-start;
  padding-bottom: 38px;
  width: 100%;
`

const FooterStatementWithWidth = styled(FooterStatement)`
  width: 497px;
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
  line-height: 2;
  letter-spacing: normal;
  color: #ffffff;
  opacity: 0.8;
`

export default () => (
  <FooterWrapper>
    <Flex
      style={{ height: '100%' }}
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Box mt="128px">
        <Divider />
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Box mr="64px" mt="34px">
            <Heading>Would you like to try it?</Heading>
            <FooterStatementWithWidth>
              We’re launching a private beta in <strong>Q4 2018</strong>, free
              for anyone interested, with a full release of the platform later
              in 2019.
            </FooterStatementWithWidth>
          </Box>
          <Box mr="64px" mt="34px">
            <HeadingThree>Get access as soon as we launch.</HeadingThree>
            <ContactFormWrapper>
              <Box flex="1">
                <InputField placeholder="Email address" />
              </Box>
              <Box>
                <PrimaryButton>Notify me</PrimaryButton>
              </Box>
            </ContactFormWrapper>
            <ContactFormLabel>
              We promise to send you only updates about our launch, nothing
              more.
            </ContactFormLabel>
          </Box>
        </Flex>
      </Box>
      <FootNote>
        <Flex justifyContent="space-between" height="32px">
          <Box height="32px">
            <FooterFullstopLogo />
          </Box>
          <Box>
            <FooterLabel>© 2018 Fullstop Media Ltd</FooterLabel>
          </Box>
          <Box>
            <FooterLink to="">Privacy Policy</FooterLink>
          </Box>
        </Flex>
        <Flex
          justifyContent="space-between"
          style={{
            marginTop: '17px',
            paddingLeft: '15px',
            justifyContent: 'center',
          }}
        >
          <Box mx={2}>
            <a href="https://medium.com/thefullstop" target="_blank">
              <Medium style={{ height: '26px', color: White }} />
            </a>
          </Box>
          <Box mx={2}>
            <a href="https://twitter.com/fullstopmediahq" target="_blank">
              <Twitter style={{ height: '26px', color: White }} />
            </a>
          </Box>
        </Flex>
      </FootNote>
    </Flex>
  </FooterWrapper>
)
