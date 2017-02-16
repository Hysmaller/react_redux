/**
 * Created by huangyu on 2017/2/16.
 */

import {
    connect,
    Provider
} from 'react-redux';

import {
    createStore ,
    applyMiddleware ,
    combineReducers,
    bindActionCreators
} from 'redux';

import thunkMiddleware from 'redux-thunk';

export default  ( options  ) => {

    let finalCreateStore = applyMiddleware( thunkMiddleware )( createStore );

    let opts =  { reducers:{}, actions:{} };

    let { reducers , actions } = Object.assign( opts , options );

    let store = finalCreateStore( combineReducers( reducers ) );

    return ( component ) => {
        let IndexComp = connect (
            ( state ) => {
                let bindState = {};
                for ( let key in reducers )
                {
                    bindState[key] = state[key]
                }
                return bindState;
            },
            (dispatch) => {
                let bindAction = {};
                for ( let key in actions )
                {
                    bindAction[key] = bindActionCreators ( actions[key] , dispatch )
                }
                return bindAction;
            }
        ) ( component );

        ReactDOM.render(
            <Provider store={ store }>
                <IndexComp />
            </Provider>,
            document.getElementById('app')
        )
    }
}