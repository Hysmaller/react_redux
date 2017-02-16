/**
 * Created by huangyu on 2017/2/16.
 */
import types from './../types/index';


var initState  = {
    goodsList:[]
}

export default ( state = initState , action ) => {
    var copyState = Object.assign( {} , state );

    switch ( action.type.types ){
        case types.ADD_CART :
            let { goods } = action.type;
            var have = false;

            goods.totalPrice =  parseFloat(goods.price) * parseFloat(goods.quantity) ;
            goods.taxPrice = goods.isSaleTax = 'T' ? goods.totalPrice * 0.5  : 0 ;
            goods.importPrice = goods.isImported = 'T' ? goods.totalPrice * 0.1 : 0 ;
            copyState.goodsList.map(( child ) => {
                if(child.id == goods.id) {
                    have = true;
                    child = goods;
                };
            });
            if(!have) copyState.goodsList.push(goods);
            return copyState;
            break;
        default:
            return copyState;
            break;
    }
}