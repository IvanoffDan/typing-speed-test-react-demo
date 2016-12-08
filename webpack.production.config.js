const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        'script!jquery/dist/jquery.min.js',
        './app/index.js'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.Tether':'tether'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()

    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {exclude: /node_modules/, loader: 'babel',},
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.scss$/, loaders: ['style', 'css', 'sass']}
        ]
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx', '.css']
    },
    devtool: 'cheap-module-source-map'
};