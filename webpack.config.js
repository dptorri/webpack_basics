module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
            test: /\.json$/,
            loader: "json-loader"
            },
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            },
            {
            test: /\.css$/,
            loader: 'style-loader!css-loader'         
            },
        ]
    },

    devServer: {
        contentBase: "./public",
        //colors: true,
        historyApiFallback: true,
        inline: true
    }
}
