const { resolve, join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pkg = require('./package.json');
const CopyPlugin = require('copy-webpack-plugin');
const { addDisplayNameTransformer } = require('ts-react-display-name')
const webpack = require('webpack');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;


module.exports = {
  devServer: {
    static: {
      directory: join(__dirname, 'dev'),
    },
    compress: true,
    port: 9000
  },
  entry: {
    bundle: resolve(__dirname, 'src/index.tsx'),
  },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    path: resolve(__dirname, 'dev'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [
                  createStyledComponentsTransformer(),
                  addDisplayNameTransformer()
                ]
              })
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          }
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.mjs' ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(pkg.version)
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/images/*.*',
          to: () => 'assets/[name][ext]'
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  stats: {
    all: undefined,
    assets: true,
    assetsSort: '!size',
    builtAt: false,
    cached: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    chunksSort: 'size',
    depth: false,
    entrypoints: true,
    env: false,
    errors: true,
    errorDetails: true,
    modules: false,
    modulesSort: 'size',
    moduleTrace: false,
    providedExports: false,
    reasons: false,
    source: false,
    timings: true,
    usedExports: false,
    version: true,
    warnings: false,
  },
};