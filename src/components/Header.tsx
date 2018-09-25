import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from 'grid-styled'

import Logo from '../images/logo.svg'

const HeaderFullStopLogo = styled.img`
  width: 172px;
  height: 50px;
  object-fit: contain;
`

export default () => (
  <Flex>
    <Box ml="48px" mt="24px">
      <HeaderFullStopLogo src={Logo} alt="fullstop"/>
    </Box>
  </Flex>
)
