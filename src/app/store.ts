import {configureStore, combineReducers, legacy_createStore, applyMiddleware} from '@reduxjs/toolkit'
import {thunk, ThunkDispatch} from 'redux-thunk'

const rootReducer = combineReducers({

})

export const store = legacy_createStore(rootReducer,{}, applyMiddleware(thunk));