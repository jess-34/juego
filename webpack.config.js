import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'), // <--- Cambiado de 'dist' a 'docs'
    filename: 'bundle.js',
  },
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, 'docs'), // <--- Cambiado de 'dist' a 'docs'
      },
      {
        directory: path.resolve(__dirname, 'public'),
        publicPath: '/public',
      }
    ],
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        type: 'asset/resource',
      }
    ]
  }
};