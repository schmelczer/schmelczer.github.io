const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const InlineSourceWebpackPlugin = require('inline-source-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const domain = 'schmelczer.dev';

module.exports = (env, argv) => ({
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
  entry: {
    index: './src/index.ts',
  },
  watchOptions: {
    ignored: '**/node_modules',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          module: true,
        },
      }),
    ],
  },
  performance: {
    assetFilter: (f) => !/\.(webm|mp4|pdf)$/.test(f),
    maxEntrypointSize: 100000,
    maxAssetSize: 512000,
  },
  plugins: [
    new SitemapPlugin({
      base: `https://${domain}`,
      paths: [
        {
          path: '/',
          priority: 1,
          changefreq: 'daily',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    argv.mode === 'production'
      ? new InlineSourceWebpackPlugin({
          compress: true,
        })
      : null,
    new (require('webpack').DefinePlugin)({
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
          sizes: [200, 500, 900, 1400, 1920],
          placeholder: true,
          placeholderSize: 64,
          quality: 85,
          format: 'webp',
          progressive: true,
          name: '[hash:8].[ext]',
        },
      },
      {
        test: /\.(webm|mp4|woff2?)$/i,
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
          argv.mode === 'production'
            ? {
                // for removing whitespace (mainly from template strings) which are not part of comments
                loader: 'string-replace-loader',
                options: {
                  search: /(?<!\/\/[^\n]*)\s+/gs,
                  replace: ' ',
                },
              }
            : null,
        ].filter(Boolean),
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
