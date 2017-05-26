/**
 * Created by huangyu on 2017/5/25.
 */
import types from './../types/cnodIndex' ;
let Lists = [] ;
export default {
    getList:(params) =>{
        //数据请求在action里面

        // method：请求方法，常用的有get和post；
        // headers：请求头信息，最常用的就是表单格式的数据：”Content-type”:”application/x-www-form-urlencoded”；
        // mode：控制是否允许跨域。same-origin（同源请求）、no-cors（默认）和cros（允许跨域请求）；
        // cache：关于缓存的一些设置；
        // body：要发送到后台的参数，可以为ArrayBuffer，String，FormData等类型；
        let url = 'https://cnodejs.org/api/v1/topics' ;
        params.method = 'get' ;
        params.headers = {
            "Content-type":"application/x-www-form-urlencoded"
        };
        return (sync) => {
            fetch(url,params).then((res) => {
                res.json().then((obj) => {
                    if(obj.success){
                        Lists.push(obj.data);
                        sync({types:types.GET_LIST,Lists})
                    }
                })

            },(ex) => {
                console.log(ex);
            });
        }

    }
}