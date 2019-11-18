const path = require('path');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let files = glob.sync('./src/2-策略模式/**/test.js')
let entries = {}
files.forEach(file => {
    entries[file.replace('./src', '').replace('.js', '')] = file
})
console.log(entries);


module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
};