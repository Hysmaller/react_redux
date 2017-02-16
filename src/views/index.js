/**
 * Created by huangyu on 2017/2/16.
 */
import css from './../css/index.scss'
class GoodsList extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <table className="goodsTable m-b-md">
                    <thead>
                    <tr className="thead">
                        <th>Goods</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { list }
                    </tbody>
                </table>
            </div>
        )
    }
}