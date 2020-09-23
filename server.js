const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Sugere ao express usar o webpack-dev-middleware e o webpack.config.js
// como arquivo de configuração base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

// Disponibiliza o servidor na porta 3000
app.listen(3000, null);