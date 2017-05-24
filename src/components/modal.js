/**
 * Created by huangyu on 2017/5/24.
 */
import  './../css/common.scss'
export default class Modal extends React.Component{
    constructor(...arg){
        super(...arg);
    }
    static defaultProps = {
        modalShow:false
    }
    closeModal(e){
        if((e.target.children.length > 0 && e.target.children[0].className == 'modal-content')){
            this.props.callBack()
        }
    }
    render(){
        const { modalShow , callBack} = this.props ;
        return (
            <div className={ !modalShow ? "hide" : ''}>
                <div className= { "modal fade " + (modalShow ? "in" : '') } onClick={(e)=> this.closeModal(e)}>
                    <div className="modal-content">
                        <div className="modal-header clearfix">
                            <div className="modal-close" onClick={callBack} >x</div>
                            <h4 className="modal-title">弹窗测试demo</h4>
                        </div>
                        <div className="modal-body"></div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}