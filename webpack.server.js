/**
 * Created by huangyu on 2017/2/14.
 */

var webpack = require('webpack') ,
    util = require("./webpack.util"),
    path = require("path");

var baseConfig = require("./webpack.config");

var devServer = {
    //服务的根目录
    contentBase: path.join( __dirname , 'src' ),
    //热更新
    hot: true,
    // 服务器地址
    host: util.getIPAddress(),
    inline: true,
    // 端口号
    port:util.port,
    // historyApiFallback: true,
    stats: {
        colors: true,
        cached: false,
        exclude: [/node_modules[\\\/]/]
    }
};

baseConfig.plugins = baseConfig.plugins.concat([
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
        debug: true
    })
])
baseConfig.devServer = devServer

module.exports = baseConfig;
