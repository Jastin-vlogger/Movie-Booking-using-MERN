import { combineReducers, createStore, applyMiddleware} from 'redux'
import {userLoginReducer} from './reducers/userReducer'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    userLogin:userLoginReducer
})

const middleware = [thunk]


const store = createStore(reducer,applyMiddleware(...middleware))

export default store