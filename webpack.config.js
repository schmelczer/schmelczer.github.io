const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const InlineSourceWebpackPlugin = require('inline-source-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => ({
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
  entry: {
    index: './src/index.ts',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          module: true,
        },
      }),
    ],
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
        exclude: /no-change/i,
        loader: 'responsive-loader',
        options: {
          adapter: require('responsive-loader/sharp'),
          sizes: [200, 400, 800, 1200, 1920],
          placeholder: true,
          placeholderSize: 64,
          quality: 90,
          format: 'webp',
          progressive: true,
          name: '[hash:8].[ext]',
        },
      },
      {
        test: /\.(webm|mp4)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[hash:8][ext]',
        },
      },
      {
        test: /\.svg$/i,
        use: 'svg-inline-loader',
      },
      {
        test: /(\/no-change\/|.pdf$)/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
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
            // for removing whitespace (mainly from template strings) which are not part of comments
            loader: 'string-replace-loader',
            options: {
              search: /(?<!\/\/[^\n]*)\s+/gs,
              replace: ' ',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.js', // required for development
    ],
  },
  output: {
    clean: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
});
