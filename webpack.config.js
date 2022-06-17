const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
module.exports = {
  mode:'development',
  entry: "./src/index.js",
  output: {
    clean: true,
    // publicPath:'./'
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new AntDesignThemePlugin({
      antDir: path.join(__dirname, './node_modules/antd'),
      stylesDir: path.join(__dirname, './src'),
      varFile: path.join(__dirname, './src/style/variables.less'),
      themeVariables: ['@primary-color'],
      indexFileName: "index.html",
      generateOnce: false,
      lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js",
      publicPath: "",
      customColorRegexArray: [], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
    }),
    new CopyWebpackPlugin({
      patterns:[{
        from: path.resolve(path.resolve(__dirname, './src'), 'assets/js/less.min.js'),
        to: path.resolve(__dirname, './dist'),
      },{
        from: path.resolve(path.resolve(__dirname, './src'), 'pages/case3/default.less'),
        to: path.resolve(__dirname, './dist')
      }]
    })
  ],
  devServer:{
    historyApiFallback: true
  }
  
}

// {
//   from: path.resolve(path.resolve(__dirname, './src'), 'style/antdV3.less'),
//   to: path.resolve(__dirname, './dist')
// }




