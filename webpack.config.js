var express = require("express");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: true,
    port: 9000,
    before: function(app, server) {
      app.use("/api", express.static(path.join(__dirname, "data")));
    },
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /templates\/.*?\.(njk|nunjucks|html|tpl|tmpl)$/,
        use: [
          {
            loader: 'nunjucks-loader',
            query: {
              config: path.join(__dirname, 'src', 'nunjucks.config.js'),
              quiet: true
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};
