const path = require('path')
const autoprefixer = require('autoprefixer')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const rootDir = path.resolve(__dirname, '..')

module.exports = () => ({
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    entry: {
        main: path.resolve(rootDir, 'src', 'Index.tsx'),
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@components': path.resolve(rootDir, 'src', 'components'),
            '@constants': path.resolve(rootDir, 'src', 'constants'),
            '@context': path.resolve(rootDir, 'src', 'context'),
            '@domain': path.resolve(rootDir, 'src', 'domain'),
            '@hooks': path.resolve(rootDir, 'src', 'hooks'),
            '@services': path.resolve(rootDir, 'src', 'services'),
            '@public': path.resolve(rootDir, 'public'),
        },
    },

    output: {
        publicPath: '/',
    },

    devServer: {
        historyApiFallback: true,
        inline: true,
        stats: 'errors-only',
        hot: true,
    },

    plugins: [
        //Extract Css from js files
        new MiniCssExtractPlugin(),

        // Optimize css assets
        new OptimizeCSSAssetsPlugin(),

        // Create index html page
        new HtmlWebpackPlugin({
            template: path.join(rootDir, 'public', 'templates', 'index.html'),
            inject: 'body',
            filename: 'index.html',
            minify: true,
            publicPath: '/',
            title: 'Entropy Loss',
            favicon: path.join(
                rootDir,
                'public',
                'templates',
                'logo_dark_small.png'
            ),
        }),

        // Perform style lint
        new StyleLintPlugin(),

        // If you need to copy some static files.
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: path.join(rootDir, 'public'),
        //             to: path.join(rootDir, 'dist')
        //         },
        //     ],
        // }),

        // Sync Css changes without page reload
        new BrowserSyncPlugin(
            {
                proxy: 'localhost:8080',
                port: 3000,
                files: ['./src/*'],
            },
            {
                // disable reload from the webpack plugin since browser-sync will handle CSS injections and JS reloads
                reload: false,
            }
        ),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                    'resolve-url-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
                exclude: /node_modules/,
            },
        ],
    },
})
