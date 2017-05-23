/**
 * Created by huangyu on 2017/2/14.
 */

var path = require("path");

var viewPath = path.join(__dirname , "/src/views/"); //页面的根目录

var pages = [
    //首页
    { filename:"appIndex" , chunk : "index"},
    //设置cookie
    { filename:"setCookie" , chunk : "demoCookie"},
];

pages.forEach( function ( item ) {
    item.viewPath = viewPath;
});

module.exports = pages;