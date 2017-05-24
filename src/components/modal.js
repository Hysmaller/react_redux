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
        e.stopPropagation();
        if((e.target.children.length > 0 && e.target.children[0].className == 'modal-content')){
            this.props.callBack()
        }
    }
    render(){
        const { modalShow , callBack , modal} = this.props ;
        return (
            <div className={ !modalShow ? "hide" : ''}>
                <div className= { "modal fade " + (modalShow ? "in" : '') } onClick={(e)=> this.closeModal(e)}>
                    <div className="modal-content">
                        <div className="modal-header clearfix">
                            <div className="modal-close" onClick={callBack} >x</div>
                            <h4 className="modal-title">{modal.modalTitle}</h4>
                        </div>
                        <div className="modal-body">{modal.modalContent}</div>
                        <div className="modal-footer">
                            {modal.modalFooter}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}