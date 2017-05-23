/**
 * Created by huangyu on 16/7/5.
 */

var webpack = require('webpack');
var baseConfig = require('./webpack.config');

var prodConfig = {
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(true),
        //js压缩参数
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            },
            beautify:false,
            comments:false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ]
};

baseConfig.output.publicPath = "http://www.baidu.com/dist/";

baseConfig.plugins = baseConfig.plugins.concat( prodConfig.plugins );

module.exports = baseConfig;