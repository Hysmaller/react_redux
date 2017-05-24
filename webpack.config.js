/**
 * Created by huangyu on 2017/2/14.
 */
var webpack = require("webpack");

//这个插件是用来生成模板的
var HtmlWebpackPlugin = require('html-webpack-plugin');

//这个插件是用来分离css的
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require("path");

var util = require("./webpack.util");

var pages = require("./webpack.page");

var webpackBaseConfig = {
    cache:true,

    //入口文件
    entry:{
        common:[ "react" , "react-dom",'react-router' ]
    },

    //输出
    output:{
        path:path.join( __dirname , "/dist"),
        publicPath:"http://" + util.getIPAddress() + ":" + util.port + "/",
        filename:"js/[name].js"
    },

    module:{
        //这里编译es6和react
        loaders:[
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    //这里需要下载 babel-preset-react 依赖才能编译react
                    presets: ['react','es2015','stage-0'],
                    cacheDirectory:true
                }
            },
            //加载css、scss文件
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader:"style-loader",
                    loader:"css-loader!sass-loader!autoprefixer-loader"
                })
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: 'url-loader?limit=1024&name=img/[name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff[1-9]?)$/,
                use: "file-loader?name=img/[name].[ext]"
            },
            {
                test: /\.jpeg?$/,
                use: 'file-loader?name=img/[name].[ext]'
            }
        ]
    },

    //插件
    plugins:[

        //在全局直接访问
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM:"react-dom"
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name:"common",
            filename:"js/common.js"
        }),

        //提取css,将它放在css文件夹下
        new ExtractTextPlugin("css/[name].css"),
    ]
};


pages.forEach(function ( item ) {
    webpackBaseConfig.entry[ item.chunk ] = item.viewPath + item.chunk + '.js';
    webpackBaseConfig.plugins.push( new HtmlWebpackPlugin({
        title:"",
        filename: item.filename + ".html" ,
        template:  "server.template.html",
        chunks: [ "common", item.chunk ],
        inject:false
    } ));
});



module.exports = webpackBaseConfig;