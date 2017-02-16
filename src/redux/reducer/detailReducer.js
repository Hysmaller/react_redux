/**
 * Created by jiangtao on 2017/2/15.
 */

import types from "./../types/detailTypes";

var initState  = {
    detail:""
}

export default function (state = initState, action) {
    var copyState = Object.assign({}, state);
    switch (action.type) {
        //选择答案
        case types.GET_DETAIL:
            copyState.detail = "这里详情";
            return copyState;
            break;
        default :
            return copyState;
    }
};
