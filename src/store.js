import { combineReducers, createStore, applyMiddleware} from 'redux'
import {userLoginReducer} from './reducers/userReducer'
import {getMoviesReducer} from './reducers/movieReducer'
import {theaterLogin} from './reducers/theaterReducer'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    userLogin:userLoginReducer,
    getMovies:getMoviesReducer,
    theaterLogin
})

const middleware = [thunk]


const store = createStore(reducer,applyMiddleware(...middleware))

export default store