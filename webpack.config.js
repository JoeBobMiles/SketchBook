const path = require('path');

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: {
        app: "./index.ts"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(vert|frag)$/,
                use: "shader-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ ".ts", ".js" ]
    },
    output: {
        filename: "[id].js",
        path: path.resolve(__dirname, "build")
    }
};
