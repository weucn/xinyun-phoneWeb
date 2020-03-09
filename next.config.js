// const fetch = require('isomorphic-unfetch');
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/culture': { page: '/culture' },
      '/index': { page: '/index' },
      '/mes': { page: '/mes' },
      '/oms': { page: '/oms' },
      '/sales': { page: '/sales' },
      '/policy': { page: '/policy' }
    };
    return paths;
  }
})