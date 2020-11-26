const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const Sharp = require('responsive-loader/sharp');
const webpack = require('webpack');
const Sass = require('sass');

module.exports = (env, argv) => ({
  watchOptions: {
    ignored: /node_modules/,
  },
  devtool: argv.mode === 'development' ? 'inline-source-map' : '',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        sourceMap: argv.mode === 'development',
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      xhtml: true,
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      inlineSource: argv.mode === 'development' ? '' : '.(js|css)$',
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      __CURRENT_DATE__: Date.now(),
    }),
  ],
  entry: {
    index: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          adapter: Sharp,
          name: '[contenthash]-[width].[ext]',
          outputPath: 'static/',
          sizes: [200, 400, 800, 1200, 1600, 2000],
          format: 'webp',
        },
      },
      {
        test: /\.(webm|mp4|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            query: {
              outputPath: 'static/',
              name: '[contenthash].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: argv.mode === 'development',
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 65,
              },
            },
          },
        ],
      },
      {
        test: /\.(pdf)$/i,
        use: {
          loader: 'file-loader',
          query: {
            outputPath: 'static/',
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/i,
        use: 'svg-inline-loader',
      },
      {
        test: /no-change.*(ico|html|txt|png|webmanifest)$/i,
        use: {
          loader: 'file-loader',
          query: {
            outputPath: '/',
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'resolve-url-loader',
            options: {
              keepQuery: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: Sass,
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
          {
            // for removing whitespace from template strings
            loader: 'string-replace-loader',
            options: {
              search: /`.*?`/gs,
              replace: match => match.replace(/\s\s+/g, ' ').trim(),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
});
