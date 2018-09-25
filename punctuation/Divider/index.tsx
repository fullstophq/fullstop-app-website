import React from 'react'
import styled from 'styled-components'

import { Box, Flex } from 'grid-styled'

import {
  LightMustard,
  OrangeYellowDark,
  OrangeYellowLight,
} from '../Utils/colors'

const DividerWrapper = styled(Flex)`
  background-color: ${OrangeYellowLight};
  width: 84px;
  height: 10px;
  border-radius: 14px;
`

const Bar = styled(Box)`
  border-radius: 14px;
`

const Divider = () => (
  <DividerWrapper>
    <Bar flex="1" />
    <Bar
      flex="1"
      style={{ backgroundColor: LightMustard, marginLeft: '-7px' }}
    />
    <Bar
      flex="1"
      style={{ backgroundColor: OrangeYellowDark, marginLeft: '-7px' }}
    />
  </DividerWrapper>
)

export default Divider
