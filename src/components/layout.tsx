import React from 'react'

import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

import { graphql, StaticQuery } from 'gatsby'

import Footer from './footer'

// Normalise layout styles
// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${styledNormalize}
`

const PageContent = styled.div`
  position: relative;
  height: 200vh;
  width: 100vw;
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
        siteMetadata: { title: string; description: string; keywords: string }
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
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Titillium+Web:400,400i,600,600i,700,700i"
            rel="stylesheet"
          />
        </Helmet>
        <PageContent>
          {children}
          <Footer />
        </PageContent>
      </>
    )}
  />
)

export default Layout
