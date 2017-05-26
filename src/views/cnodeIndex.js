/**
 * Created by huangyu on 2017/5/25.
 */

const { Component } = React ;
import './../css/cnode.scss'
import reduxComBind from './../redux'
import indexActions from './../redux/actions/cnodeIndex';
import indexReducers from './../redux/reducer/cnodeIndex' ;
//引入头部
import CnodeHeader  from './../components/cnodeHeader'

class CnodeIndex extends Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        let params = {
            page:'1',
            tab:'ask',
            limit:'20',
            mdrender : 'false'
        };
        this.props.indexActions.getList(params)
    }
    render(){
        return (
            <div>
                <CnodeHeader/>
                <div id="main">
                    <div id="sidebar">
                        <div className="panel">
                            <div className="inner">
                                <p>CNode：Node.js专业中文社区</p>
                                <div>
                                    您可以
                                    <a href="/signin">登录</a>
                                    或
                                    <a href="/signup">注册</a>
                                    , 也可以
                                    <a href="/auth/github">
                                      <span className="span-info">
                                        通过 GitHub 登录
                                      </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="content">
                        <div className="panel">
                            <div className="header">
                                <a href="" className="topic-tab current-tab">全部</a>
                                <a href="" className="topic-tab">精华</a>
                                <a href="" className="topic-tab">分享</a>
                                <a href="" className="topic-tab">问答</a>
                                <a href="" className="topic-tab">招聘</a>
                            </div>
                            <div className="inner no-padding">
                                <div id="topic_list">
                                    <div className="cell">
                                        <a href="" className="user_avatar pull-left">
                                            <img src="https://avatars.githubusercontent.com/u/227713?v=3&s=120" alt="" title=""/>
                                        </a>
                                        <span className="reply_count pull-left">
                                            <span className="count_of_replies" title="回复数">412</span>
                                            <span className="count_seperator">/</span>
                                            <span className="count_of_visits" title="点击数">412</span>
                                        </span>
                                        <div className="last_time pull-right">
                                            <img src="https://avatars2.githubusercontent.com/u/24771789?v=3&s=120"  className="user_small_avatar" alt=""/>
                                            <span className="last_active_time">1小时前</span>
                                        </div>
                                        <div className="topic_title_wrapper">
                                            <span className="put_top">置顶</span>
                                            <a href="" className="topic_title" title="">
                                                Egg.js 1.0.0 正式发布 - 企业级 Node.js 框架
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

reduxComBind({
    actions:{
        indexActions
    },
    reducers:{
        indexReducers
    }
})(CnodeIndex);