import React from 'react'

import ExplanationBlock from '../components/ExplanationBlock'

import { Box, Flex } from 'grid-styled'

const NotFoundPage = () => (
  <Flex flexDirection="column">
    <Box mt="18px">
      <Box px="18px">
        <ExplanationBlock
          subHeading="Page not found"
          heading="We couldn't find the page you were looking for"
          paragraph="Unfortunately the page you were looking for doesn't exist, or is not available right now."
        />
      </Box>
    </Box>
  </Flex>
)

export default NotFoundPage
