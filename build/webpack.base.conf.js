var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.less'],
        alias: {
            //公用
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname, '../src/components'),
            'utils': path.resolve(__dirname, '../src/utils'),
            'static': path.resolve(__dirname, '../static'),
            'store': path.resolve(__dirname, '../src/store'),
            'styles': path.resolve(__dirname, '../src/styles'),

            //home
            'home-components': path.resolve(__dirname, '../src/home/components'),
            'home-mixins': path.resolve(__dirname, '../src/home/components/mixins'),
            'home-widgets': path.resolve(__dirname, '../src/home/components/widgets'),
            'home-store': path.resolve(__dirname, '../src/home/components/store'),
            'home-router': path.resolve(__dirname, '../src/home/components/router'),
            'home-assets': path.resolve(__dirname, '../src/home/components/assets')


        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}