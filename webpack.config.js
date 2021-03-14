const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  demo: {
    source: path.resolve(__dirname, 'demo'),
    styles: path.resolve(__dirname, "demo", "demo.css"),
    template: path.resolve(__dirname, "demo", "index.html")
  },
  source: path.resolve(__dirname, 'src'),
  demoDist: path.resolve(__dirname, "dist", "esm", "demo"),
  es6: path.resolve(__dirname, "dist", "es6"),
  esm: path.resolve(__dirname, "dist", "esm")
};

const commonConfig = {
  output: {
    filename: '[name].js',
    path: paths.es6,
    library: 'rrule',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  devtool: 'source-map',
  mode: 'production',
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "ts-loader",
        test: /\.ts$/
      }
    ]
  },
  optimization: {
    minimize: true,
  }
};

const rruleConfig = Object.assign({
  entry: {
    rrule: path.join(paths.source, "index.ts"),
    'rrule.min': path.join(paths.source, "index.ts")
  },
  externals: {
    luxon: 'luxon'
  },
}, commonConfig);

const rruleWithLuxonConfig = Object.assign({
  entry: {
    'rrule-tz': path.join(paths.source, "index.ts"),
    'rrule-tz.min': path.join(paths.source, "index.ts")
  },
}, commonConfig);

const demoConfig = {
  entry: {
    demo: path.join(paths.demo.source, "demo.ts"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        exclude: /node_modules/,
        loader: "ts-loader",
        test: /\.ts$/
      }
    ]
  },
  output: {
    filename: "demo.js",
    path: paths.demoDist
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CopyWebpackPlugin({
      patterns: [
      {
        from: paths.demo.styles,
        to: paths.demoDist
      }
    ]}),
    new HtmlWebpackPlugin({
      template: paths.demo.template
    })
  ],
  devtool: "source-map",
  mode: "production"
};

module.exports = [rruleConfig, rruleWithLuxonConfig, demoConfig];
