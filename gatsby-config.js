module.exports = {
  siteMetadata: {
    title:
      'Simplify the acquisition of licensing rights to user generated content - fullstop',
    description:
      'We simplify the acquisition of licensing rights to user generated content. Dependable services for publishers and media organisations.',
    keywords: 'viral video, video acquisition, video licensing',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'fullstop',
        short_name: 'fullstop',
        start_url: '/',
        background_color: '#251c2b',
        theme_color: '#251c2b',
        display: 'minimal-ui',
        icon: 'src/images/fullstop-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
