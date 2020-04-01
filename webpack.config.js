const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = ({ NODE_ENV }) => {
  const config = {
    devtool: NODE_ENV === 'production' ? undefined : 'source-map',
    entry: ['./src/gui.tsx'],
    mode: NODE_ENV,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' }
        },
        {
          test: /\.(ts|tsx)?$/,
          use: {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader', // Creates style nodes from JS strings.
            'css-loader', // Translates CSS into CommonJS.
            'sass-loader' // Compiles Sass to CSS.
          ]
        },
        {
          test: /\.(png|woff|eot|ttf|woff2|svg)(\?.*$|$)/,
          loader: 'url-loader?limit=100000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?name=images/[hash].[ext]'
        }
      ]
    },

    optimization: {
      runtimeChunk: false
    },

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      pathinfo: NODE_ENV === 'production' ? false : true
    },

    plugins: [
      new CleanWebpackPlugin() // DEFAULTS TO READING THE DIST FILE.
    ],

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  };

  if (NODE_ENV === 'development') {
    config.plugins.push(
      new HtmlWebpackPlugin({
        title: 'Odd Positive Average',
        template: './templates/webpack.html'
      })
    );

    config.devServer = {
      port: 3000,
      open: true
    };
  }

  return config;
};

module.exports = [config(process.env)];
