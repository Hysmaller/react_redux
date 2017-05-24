/**
 * Created by huangyu on 2017/5/24.
 */
 const { Component } = React ;

 import './../css/loading.scss'

 export default class Loading extends Component{
     constructor(...arg){
        super(...arg)
     }
     //设置父组件传入props值的默认值
     static defaultProps = {
         show : false
     };
     render(){
         const { show } = this.props;
         return (
             <div className={"loading-content " + (!show ? "hide" : "")}>
                 <div className="loading"></div>
             </div>
         )
     }

 }
