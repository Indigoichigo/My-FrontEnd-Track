const path = require('path');

module.exports = {
    entry: './src/redux-practice/playground/redux-practice.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: ['transform-class-properties','@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      }
}
