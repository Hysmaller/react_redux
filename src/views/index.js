/**
 * Created by huangyu on 2017/2/16.
 */
import css from './../css/index.scss';
import reduxComBind from './../redux'
import indexActions from './../redux/actions/index';
import indexReducers from './../redux/reducer/index'

var goodsList = [
    {
        "id":'0',
        'goods':'book', //书籍
        'price':'12.49',
        'isSaleTax':'F',
        'isImported':'F'
    },
    {
        "id":'1',
        'goods':'music CD', //cd
        'price':'14.99',
        'isSaleTax':'T',
        'isImported':'F'
    },
    {
        "id":'2',
        'goods':'chocalate bar', //巧克力棒
        'price':'0.85',
        'isSaleTax':'F',
        'isImported':'F'
    },
    {
        "id":'3',
        'goods':'imported box of chocolates', //进口巧克力
        'price':'10.00',
        'isSaleTax':'F',
        'isImported':'T'
    },
    {
        "id":'4',
        'goods':'imported bottle of perfume', //进口香水
        'price':'47.50',
        'isSaleTax':'T',
        'isImported':'T'
    },
    {
        "id":'5',
        'goods':'bottle of perfume', //香水
        'price':'27.99',
        'isSaleTax':'T',
        'isImported':'F'
    },
    {
        "id":'6',
        'goods':'packet of headache pills', //头疼药
        'price':'18.99',
        'isSaleTax':'F',
        'isImported':'F'
    },
    {
        "id":'7',
        'goods':'box of imported chocolatess', //进口巧克力
        'price':'11.25',
        'isSaleTax':'T',
        'isImported':'T'
    },

]

class GoodsList extends React.Component{
    constructor(...args){
        super(...args);
    }
    render(){
        let { props } = this;

        return (
            <div>
                <table className="goodsTable m-b-md">
                    <thead>
                    <tr className="thead">
                        <th>商品</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        goodsList.map(( item ,i ) => {
                            return <List key = {i} item = {item} {...props}/>
                        })
                    }
                    </tbody>
                </table>
                <Orderlist  goodsList = {props.indexReducers.goodsList} />
            </div>
        )
    }
}


class List extends React.Component{
    constructor( props ){
        super( props );
    }
    addCart( goods ){
        let { props , refs } = this;
        goods.quantity = refs.quantity.value;
        props.indexActions.addCart(goods);
    }
    render(){
        return (
            <tr>
                <td>
                    { this.props.item.goods }
                </td>
                <td>
                    { this.props.item.price }
                </td>
                <td>
                    <input type="number" ref = 'quantity'/>
                </td>
                <td>
                    <button type="button" onClick={ () => this.addCart(this.props.item)}>添加到购物车</button>
                </td>
            </tr>
        )
    }
};

class Orderlist extends React.Component{
    constructor(...args){
        super(...args);
    }
    render(){
        let { goodsList } = this.props;
        return (
            <table className="goodsTable m-b-md">
                <thead className="thead">
                    <tr>
                        <th>
                            商品
                        </th>
                        <th>
                            数量
                        </th>
                        <th>
                            单价
                        </th>
                        <th>
                            总价
                        </th>
                        <th>
                            销售税
                        </th>
                        <th>
                            进口税
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    goodsList.map(( item , i ) => {
                        return(
                            <tr key={i}>
                                <td>
                                    {item.goods}
                                </td>
                                <td>
                                    {item.quantity}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    {item.totalPrice}
                                </td>
                                <td>
                                    {item.taxPrice}
                                </td>
                                <td>
                                    {item.importPrice}
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
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
})(GoodsList);
