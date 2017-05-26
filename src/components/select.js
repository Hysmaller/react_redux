/**
 * Created by huangyu on 2017/5/24.
 */
import './../css/common.scss'
export default class Select extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectData:props.selectData.selectList,
            checkItem : props.selectData.defaultData,
            defaultType : props.selectData.defaultType
        }
        this.closeSelect();
    }
    static defaultProps = {
        selectData:{},
    };
    //  用户下拉组件的展开和收起
    clickTitle(e){
        const { selectListShow } = this.props ;
        selectListShow();
    }
    closeSelect(e){
        const { selectListShow } = this.props ;
        //点击select框以外多的区域，整个body都能够将select框隐藏
        document.getElementsByTagName('body')[0].addEventListener('click',(e) => {
            // e.stopPropagation();
            if(!(e.target.parentNode.className == 'data-list') && !(e.target.parentNode.className == 'select-title') ){
                selectListShow(false);
            }
        },false)
    }
    //值的选择
    selectChecked(index){
        if(index == 'all'){
            this.state.checkItem = this.props.selectData.defaultData ;
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
        const { selectData , checkItem , defaultType } = this.state ;
        const { openSelect  } = this.props ;

        return (
            <div>
                <div className={"select " + ( openSelect ? 'open' : '')}>
                    <div className="select-title" onClick={(e) => this.clickTitle(e)}>
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