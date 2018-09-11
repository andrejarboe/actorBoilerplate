module.exports = {
  siteMetadata: {
    title: 'Actor Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms'
  ],
}
