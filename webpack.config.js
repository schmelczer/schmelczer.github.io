const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    host: "0.0.0.0"
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      xhtml: true,
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })
  ],
  entry: {
    index: "./src/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png)$/i,
        loader: "responsive-loader",
        options: {
          adapter: require("responsive-loader/sharp"),
          outputPath: "static/",
          sizes: [300, 600, 1200, 2000],
          placeholder: false
        }
      },
      {
        test: /\.(webm|mp4)$/i,
        use: [
          {
            loader: "file-loader",
            query: {
              outputPath: "static/"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              disable: !isProduction,
              mozjpeg: {
                progressive: true,
                quality: 45
              },
              optipng: {
                enabled: true
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 65
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-url-loader",
        options: {
          limit: 10 * 1024,
          noquotes: true
        }
      },
      {
        test: /\.(pdf)$/i,
        use: {
          loader: "file-loader",
          query: {
            outputPath: "static/",
            name: "[name].[ext]"
          }
        }
      },
      {
        test: /\.ico$/i,
        use: {
          loader: "file-loader",
          query: {
            outputPath: "/",
            name: "[name].[ext]"
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "resolve-url-loader",
            options: {
              keepQuery: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(?:[?#].+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/fonts/"
          }
        },
        include: /fonts/
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  }
};
