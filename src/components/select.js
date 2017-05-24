/**
 * Created by huangyu on 2017/5/24.
 */
import './../css/common.scss'
export default class Select extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectData:props.selectData,
            checkItem : props.defaultData
        }
    }
    static defaultProps = {
        selectData:[],
    }
    //  用户下拉组件的展开和收起
    clickTitle(){
        const { selectListShow } = this.props ;
        selectListShow();
    }
    //值的选择
    selectChecked(index){
        if(index == 'all'){
            this.state.checkItem = this.props.defaultData ;
        }
        const {  selectData } = this.state ;

        const { selectListShow } = this.props ;

        selectData.map((item,i) => {
            if(i == index.index){
                item.checked = true ;
                this.state.checkItem = item
            }else {
                item.checked = false ;
            }
        });


        this.setState({
            selectData:selectData
        });

        selectListShow();
    }
    render(){
        const { selectData , checkItem } = this.state ;
        const { openSelect  } = this.props ;

        return (
            <div>
                <div className={"select " + ( openSelect ? 'open' : '')}>
                    <div className="select-title" onClick={() => this.clickTitle()}>
                        <div className="ellipsis">{checkItem.name}</div>
                        <span className="select-caret"><i></i></span>
                    </div>
                    <div className="dropdown">
                        <ul className="data-list">
                            <li onClick={() => this.selectChecked('all')}>全部</li>
                            { selectData.map((item,index) => {
                              return (<li className={(item.checked ? 'li-active' : '')} data-index={item.id} key={index} onClick={() => this.selectChecked({index})}>{item.name}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}