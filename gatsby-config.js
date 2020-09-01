/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Doo Holdings Group | Build Your Financial Enterprise",
    description: "Doo Holdings group test seo",
    url: "https://neezar-landingpage-seo.netlify.app",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
  ],
}
