import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from 'grid-styled'

import { FooterLabel, FooterLink } from '../../punctuation/Typography/Paragraph'
import { DirtyPurple } from '../../punctuation/Utils/colors'

import Logo from '../images/logo-inverse.svg'

const FooterWrapper = styled.div`
  position: absolute;
  background-color: ${DirtyPurple};
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  padding-left: 195px;
  padding-right: 195px;
`

const FooterFullstopLogo = styled.div`
  background: url(${Logo}) no-repeat;
  height: 32px;
  width: 111px;
`

const FootNote = styled.div`
  padding-bottom: 86px;
  width: 100%;
`

export default () => (
  <FooterWrapper>
    <Flex flexDirection="column" alignItems="end">
      <FootNote>
        <Flex justifyContent="space-between">
          <Box alignSelf="flex-start">
            <FooterFullstopLogo />
          </Box>
          <Box alignSelf="center">
            <FooterLabel style={{ minWidth: '178px' }}>
              © 2018 Fullstop Media Ltd
            </FooterLabel>
          </Box>
          <Box alignSelf="flex-end">
            <FooterLink style={{ minWidth: '96px' }}>Privacy Policy</FooterLink>
          </Box>
        </Flex>
      </FootNote>
    </Flex>
  </FooterWrapper>
)
