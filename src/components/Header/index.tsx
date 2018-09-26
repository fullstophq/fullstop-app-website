import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from 'grid-styled'

import Logo from '../../images/logo.svg'

const HeaderFullStopLogo = styled.img`
  height: 38px;
  object-fit: contain;
`

export default () => (
  <Flex>
    <Box>
      <HeaderFullStopLogo src={Logo} alt="fullstop" />
    </Box>
  </Flex>
)
