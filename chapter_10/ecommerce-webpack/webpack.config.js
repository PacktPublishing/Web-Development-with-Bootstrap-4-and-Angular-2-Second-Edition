module.exports = {
    entry: "./app/main",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        watch: true,
        inline: true,
        colors: true,
        port: 9000
    },
    module: {
        loaders: [{
            test: /\.ts/, loaders: ['ts-loader'], 
              exclude: /node_modules/
        }]
    }
};