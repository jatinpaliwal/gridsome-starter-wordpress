module.exports = {
  siteName: 'Yo!',
  siteDescription: 'A WordPress starter for Gridsome yo!',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://testyo.local/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
      }
    }
  ]
}


