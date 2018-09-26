import React from 'react'

import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import { graphql, StaticQuery } from 'gatsby'
import { Box, Flex } from 'grid-styled'

import Footer from './Footer'
import Header from './Header'

// Normalise layout styles
const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html{
    min-height:100%;
    min-width: 100%;
    position:relative;
  }

  body{
      height:100%;
      width: 100%;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={(data: {
      site: {
        siteMetadata: {
          title: string
          description: string
          keywords: string
        }
      }
    }) => (
      <Flex>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords,
            },
          ]}
        >
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Titillium+Web:400,400i,600,600i,700,700i"
            rel="stylesheet"
          />
        </Helmet>
        <Flex flexDirection="column">
          <GlobalStyle />
          <Box style={{ width: '100%', height: '100%' }}>
            <Header />
          </Box>
          <Box>{children}</Box>
          <Box style={{ width: '100%', height: '100%' }}>
            <Footer />
          </Box>
        </Flex>
      </Flex>
    )}
  />
)

export default Layout
