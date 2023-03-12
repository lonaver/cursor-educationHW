const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { Template } = require("webpack");
module.exports = {
  entry: {
    app: "./src/script.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html" })],

  devServer: {
    port: 5000,
    open: true,
  },
};
