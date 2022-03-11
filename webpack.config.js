const path = require("path");

module.exports = {
    target: "node",
    mode: "production",
    entry: "./src/index.ts",
    output: {
        globalObject: "this",
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            type: "umd",
            name: "simple-react-uikit"
        },
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".scss"],
        alias: {
            styles: path.resolve(__dirname, "src/styles/"),
            components: path.resolve(__dirname, "src/components")
        }
    },
    externals: {
        react: "react"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(sass|css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    }
}