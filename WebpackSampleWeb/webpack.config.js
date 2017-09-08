"use strict";

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: { main: __dirname + "/ClientApp/site.scss" },
    output: {
        path: __dirname + '/wwwroot/dist/',
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]' }
        ]
    }
};
