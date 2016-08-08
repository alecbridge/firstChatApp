  var webpack = require('webpack');
  var getConfig = require('hjs-webpack')

  var config = getConfig({
    in: 'src/App.jsx',
    out:'public',
    clearBeforeBuild: '!(images|favicon.ico)'
  });

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
);

module.exports = config;