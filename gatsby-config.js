require("dotenv").config({
  path: `.env`,
})

const { githubApiQuery } = require("./github-api")

module.exports = {
  siteMetadata: {
    title: "Iamdevo",
    description: "a truly opinionated platform for developers",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    //#region  sourcing the github for accessing github userdata
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint

        // token: required by the GitHub API
        token: process.env.GITHUB_ACCESS_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: githubApiQuery,

        // variables: defaults to variables needed for a search query
        variables: {
          github_login: process.env.GITHUB_LOGIN,
        },
      },
    },
    //#endregion
    //#region gtasby pugin-mdx
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: ["gatsby-remark-images"],
        plugins: ["gatsby-remark-images"],
      },
    },
    //#endregion
    //#region sourcing local filesystem
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/pages/posts`,
      },
    },
    //#endregion
    //#region sourcing local filesystem for images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/pages/images`,
      },
    },
    //#endregion
    //#region  sourcing dev for posts
    {
      resolve: "gatsby-source-dev",
      options: {
        username: "akashkumaryadav",
      },
    },
    //#endregion
    //#region sourcing conteful for blogs
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      },
    },
    //#endregion
    //#region pwa configutration web manifesto
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "iamdevo",
    //     short_name: "iamdevo",
    //     start_url: "/",
    //     display: "standalone",
    //   },
    // },
  ],
}
