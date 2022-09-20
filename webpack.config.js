const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Sharp = require('responsive-loader/sharp');
const InlineSourceWebpackPlugin = require('inline-source-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => ({
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
  entry: {
    index: './src/index.ts',
  },
  devServer: {
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    argv.mode === 'production'
      ? new InlineSourceWebpackPlugin({
          compress: true,
        })
      : null,
    new webpack.DefinePlugin({
      __CURRENT_DATE__: Date.now(),
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          adapter: Sharp,
          name: '[contenthash].[ext]',
          outputPath: 'static/',
          sizes: [200, 400, 800, 1200, 1600, 2000],
          quality: 0.9,
          format: 'webp',
          progressive: true,
        },
      },
      {
        test: /\.(webm|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/',
              name: '[contenthash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(pdf)$/i,
        use: {
          loader: 'file-loader',
          options: {
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
        test: /no-change.*$/i,
        use: {
          loader: 'file-loader',
          options: {
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
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // required by resolve-url-loader
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
          {
            // for removing whitespace from template strings
            loader: 'string-replace-loader',
            options: {
              search: /`\s+`/gs,
              replace: ' ',
            },
          },
          {
            loader: 'string-replace-loader',
            options: {
              search: /`>\s+<`/gs,
              replace: '><',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    clean: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
});
