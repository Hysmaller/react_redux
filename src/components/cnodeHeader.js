/**
 * Created by huangyu on 2017/5/25.
 */
import './../css/cnode.scss'

const { Component } = React;

export default class CnodeHeader extends Component{
    render(){
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="container">
                        <a href="/" className="brand">
                            <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""/>
                        </a>
                        <form action="/search" id="search_form" className="navbar-search">
                            <input type="text" className="search-query span3" name="q" id="q"/>
                        </form>
                        <ul className="nav pull-right">
                            <li>
                                <a href="/">首页</a>
                            </li>
                            <li>
                                <a href="/getstart">新手入门</a>
                            </li>
                            <li>
                                <a href="/api">API</a>
                            </li>
                            <li>
                                <a href="/">关于</a>
                            </li>
                            <li>
                                <a href="/">注册</a>
                            </li>
                            <li>
                                <a href="/">登录</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
