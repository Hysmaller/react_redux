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
            selectData:[
                {
                    name:'张小三',
                    id:'1',
                    checked:false
                },
                {
                    name:'张小四',
                    id:'2',
                    checked:false
                },
                {
                    name:'张小五',
                    id:'3',
                    checked:false
                },
                {
                    name:'张小六',
                    id:'4',
                    checked:false
                },
                {
                    name:'张小七',
                    id:'5',
                    checked:false
                },
                {
                    name:'张小八',
                    id:'6'
                },
                {
                    name:'张小九',
                    id:'7',
                    checked:true
                },
            ],
            defaultData:{
                name:'请选择仓库',
                id:''
            },
            openSelect:false
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
    selectCallBack(){
        const { openSelect } =this.state ;
        this.setState({
            openSelect : openSelect ? false : true
        })
    }
    selectChecked(index){

    }
    render(){
        const { children } = this.props;
        const { loading , modalShow , modal , selectData ,openSelect , defaultData} = this.state;
        return(
            <div className="wrap-box">
                <div className="app-content">
                    {children}
                </div>
                {/*所有全部组件都写在这里面*/}
                <div className="plus">
                    <Loading show={loading}/>
                    <Modal modalShow={modalShow} callBack= {() => this.closeModal()} modal={modal} />
                    <Select selectListShow={() => this.selectCallBack()} selectChecked={(index) => {this.selectChecked(index)}} selectData={ selectData } defaultData={defaultData} openSelect={openSelect}/>
                </div>
            </div>
        )
    }
}