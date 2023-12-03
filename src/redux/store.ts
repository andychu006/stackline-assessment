// src/redux/store.ts
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // If you want to use async actions
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
