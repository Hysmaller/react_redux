/**
 * Created by huangyu on 2017/5/25.
 */
import types from './../types/cnodIndex';

//初始化state

var initState  = {
    list:[]
};
export default ( state = initState , action ) => {

    var copyState = Object.assign( {} , state );

    switch ( action.type.types ){

        case types.GET_LIST :
            let { lists } = action.type  ;
            console.log(action.type)
            return copyState
            break;
        default:
            return copyState;
            break;
    }
}