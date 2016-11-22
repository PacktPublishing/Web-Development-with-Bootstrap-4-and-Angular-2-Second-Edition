const path = require('path');
const autoprefixer = require('autoprefixer');

//----------------------
// WEBPACK PLUGINS
//----------------------
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');


//----------------------
// THIRD PARTS PLUGINS
//----------------------
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//----------------------
//  ENVIRONMENT VARS
//----------------------
const NODE_ENV = process.env.NODE_ENV;

const ENV_DEVELOPMENT = NODE_ENV === 'development';
const ENV_PRODUCTION = NODE_ENV === 'production';

const HOST = 'localhost';
const PORT = 3000;

//----------------------
//  LOADERS
//----------------------
const loaders = {
  typescript: {
    test: /\.ts$/,
    loader: 'ts',
    exclude: /node_modules/
  },
  html: {
    test: /\.html$/,
    loader: 'raw'
  },
  componentStyles: {
    test: /\.scss$/,
    loader: 'raw!postcss!sass',
    exclude: path.resolve('src/assets/ecommerce.scss')
  },
  sharedStyles: {
    test: /\.scss$/,
    loader: 'style!css!postcss!sass',
    include: path.resolve('src/assets/ecommerce.scss')
  }
};


//----------------------
//  COMMON CONFIG
//----------------------
const config = module.exports = {};

config.entry = {
  main: ['./src/main.ts'],
  polyfills: './src/polyfills.ts',
  vendor: './src/vendor.ts'
};

config.output = {
  filename: '[name].js',
  path: path.resolve('./dist'),
  publicPath: '/'
};

config.resolve = {
  extensions: ['', '.ts', '.js', '.css', '.scss', '.html'],
  modules: [
    path.resolve('.'),
    'node_modules'
  ]
};

config.module = {
  loaders: [
    loaders.typescript,
    loaders.html,
    loaders.componentStyles
  ]
};

config.postcss = [
  autoprefixer({ browsers: ['last 3 versions'] })
];

config.sassLoader = {
  outputStyle: 'compressed',
  precision: 10,
  sourceComments: false
};

config.plugins = [
  new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  }),

  new LoaderOptionsPlugin({
    debug: false,
    minimize: ENV_PRODUCTION
  }),

  new ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    path.resolve('src')
  ),

  new CommonsChunkPlugin({
    name: ['vendor', 'polyfills'],
    minChunks: Infinity
  }),

  new HtmlWebpackPlugin({
    chunkSortMode: 'dependency',
    filename: 'index.html',
    hash: false,
    inject: 'body',
    template: './src/index.html',
  })
];

//----------------------
//  DEVELOPMENT
//----------------------
if (ENV_DEVELOPMENT) {
  config.devtool = 'cheap-module-source-map';

  config.module.loaders.push(loaders.sharedStyles);

  config.plugins.push(new ProgressPlugin());

  config.devServer = {
    contentBase: './src',
    historyApiFallback: true,
    host: HOST,
    port: PORT,
    open: true,
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false
    }
  };
}

//----------------------
//  PRODUCTION
//----------------------
if (ENV_PRODUCTION) {
  config.devtool = 'source-map';

  config.output.filename = '[name].[chunkhash].js';

  config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css?-autoprefixer!postcss!sass'),
    include: path.resolve('src/assets/ecommerce.scss')
  });

  config.plugins.push(
    new WebpackMd5Hash(),
    new ExtractTextPlugin('styles.[contenthash].css'),
    new UglifyJsPlugin({
      comments: false,
      compress: {
        dead_code: true, // eslint-disable-line camelcase
        screw_ie8: true, // eslint-disable-line camelcase
        unused: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true  // eslint-disable-line camelcase
      }
    })
  );
}
