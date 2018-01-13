const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const deployPath = "deploy";

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader", // creates style nodes from JS strings
                use: [{
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(deployPath, {
            exclude: ["index.html"]
        }),
        new ExtractTextPlugin("styles/[name].css"),
    ],
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, deployPath)
    }
}