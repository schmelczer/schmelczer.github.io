const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    host: "0.0.0.0"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      xhtml: true,
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin()
  ],
  entry: {
    index: "./src/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif|mp4)$/i,
        use: {
          loader: "file-loader",
          query: {
            outputPath: "static/"
          }
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
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
