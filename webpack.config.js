const path = require('path');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let files = glob.sync('./src/**/*.ts')
let entries = {}
files.forEach(file => {
    entries[file.replace('./src', '').replace('.ts', '')] = file
})
console.log(entries);


module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
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