/**
 * Created by huangyu on 2017/2/16.
 */
import types from './../types/index';

export default {
    addCart:(goods) => {
        return {
            type:{types:types.ADD_CART,goods}
        }
    }
}