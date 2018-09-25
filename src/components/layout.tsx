import React from 'react'

import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import { graphql, StaticQuery } from 'gatsby'

import Footer from './footer'

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

const PageContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
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
      <>
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
        <PageContent>
          <GlobalStyle />
          <Footer />
        </PageContent>
      </>
    )}
  />
)

export default Layout
