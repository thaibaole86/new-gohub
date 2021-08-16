const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "G-YEJMPV7K65", // Google Analytics / GA
                "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
              ],
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: true
              },
            },
          }
    ]
};
