module.exports = {
  siteMetadata: {
    title: "audicore",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "RNrW-qtRHmEOOt9Uz7Hu-nXxCGklLEa3MiHUaQzA4X8",
        spaceId: "cdy24shqikkc",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
