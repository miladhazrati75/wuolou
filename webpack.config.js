const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
  new FriendlyErrorsWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "styles.css",
  }),
];

if (!dev) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "webpack-report.html",
      openAnalyzer: false,
    })
  );
}

module.exports = {
  mode: dev ? "development" : "production",
  context: path.join(__dirname, "src"),
  devtool: dev ? "none" : "source-map",
  entry: {
    app: "./index.js",
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"],
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: { name: "/static/[name].[ext]" },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins,
};
