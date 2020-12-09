const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true,
        }),
        new CompressionWebpackPlugin()
    ],
}
