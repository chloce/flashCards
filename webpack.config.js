const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/client/entry.jsx"),
    output: {
        path: path.resolve(__dirname, "public/javascripts"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx", ".mjs"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }
};
