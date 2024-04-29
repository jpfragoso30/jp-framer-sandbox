const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "cheap-source-map",
    devServer: {
        port: "1234",
        static: {
            directory: path.join(__dirname, "public"),
        },
        historyApiFallback: true,
        open: true,
        hot: true,
        liveReload: true,
    },
});
