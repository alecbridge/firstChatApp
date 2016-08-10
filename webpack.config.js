  var webpack = require('webpack');
  var getConfig = require('hjs-webpack')

  var config = getConfig({
    in: 'src/App.jsx',
    out:'public',
    clearBeforeBuild: '!(images|favicon.ico)',

  html: function (context) {
    console.log(context.defaultTemplate({
      head: '<base href="/" />'
    }));
    return {
      'index.html': context.defaultTemplate({
        head: '<base href="/" />'
      })
    }
  }
  });

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
);

module.exports = config;