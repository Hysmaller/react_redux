/**
 * Created by jiangtao on 2017/2/15.
 */

import types from "./../types/indexTypes";

var initState  = {
   all:[]
}

export default function (state = initState, action) {
    var copyState = Object.assign({}, state);
    switch (action.type) {
        //选择答案
        case types.GET_ALL:
            copyState.all.push("all");
            return copyState;
            break;
        default :
            return copyState;
    }
};