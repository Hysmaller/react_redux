/**
 * Created by huangyu on 2017/5/24.
 */
const { Component } = React ;
import Loading from './Loading' ;
import Modal from './modal' ;
import Select from './select'

export default class Plus extends Component{
    constructor(...arg){
        super(...arg);

        this.state = {
            loading:true,
            modalShow:false,
            modal:{
                modalTitle: <div>猪八戒</div> ,
                modalContent : <div></div> ,
                modalFooter : <div></div>,
            } ,
        }
    }
    componentWillMount(){
        window.loading = ()=> {
            this.setState({
                loading:true
            });
        };
        window.loadingClose = () => {
            this.setState({
                loading:false
            });
        };
        window.setModal = ( opt = {} ) => {
            const { modalShow } = this.state ;
            this.setState({
                modalShow: modalShow ? false : true
            });
        }
    }
    closeModal(){
        this.setState({
            modalShow: false
        });
    }
    render(){
        const { children } = this.props;
        const { loading , modalShow , modal  } = this.state;
        return(
            <div className="wrap-box">
                <div className="app-content">
                    {children}
                </div>
                {/*所有全部组件都写在这里面*/}
                <div className="plus">
                    <Loading show={loading}/>
                    <Modal modalShow={modalShow} callBack= {() => this.closeModal()} modal={modal} />
                </div>
            </div>
        )
    }
}