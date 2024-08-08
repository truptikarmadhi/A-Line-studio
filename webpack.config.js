const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production', // Set mode to 'production'
    watch: true,
    performance: {
        hints: 'error', // Change 'warning' to 'error' to hide the warnings
        maxAssetSize: 1024 * 1024, // 1024 KiB
        maxEntrypointSize: 1024 * 1024, // 1024 KiB
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    entry: './src/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/assets/js'),
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
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: '',
            raw: true,
            entryOnly: true,
        }),
    ],
};