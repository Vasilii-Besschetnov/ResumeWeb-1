const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const deployPath = "deploy";

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{ // Process JS with Babel.
            test: /\.(js|jsx|mjs)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        },
        { // styles
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader", // creates style nodes from JS strings
                use: [{
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            })
        }, { // fonts
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "images/[name].[ext]"
                }
            }
        }, { // images
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]"
                }
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(deployPath, {
            exclude: ["index.html"]
        }),
        new ExtractTextPlugin("styles/[name].css"),
    ],
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/images/'),
            components: path.resolve(__dirname, 'src/components/')
        }
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, deployPath)
    }
}