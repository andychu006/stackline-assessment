// src/redux/reducers.ts
import { Reducer } from 'redux'
import {
  ActionTypes,
  FETCH_DATA_SUCCESS,
  FetchDataSuccessAction,
} from './actionTypes'
import { Product } from '../utils/productData'

export interface AppState {
  data: {
    data: Product[]
  }
}

const initialState: AppState = {
  data: {
    data: [],
  },
}

const rootReducer: Reducer<AppState, ActionTypes> = (
  state = initialState,
  action: ActionTypes, // Use ActionTypes for the action type
) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: {
          data: action.payload,
        },
      }
    default:
      return state
  }
}

export default rootReducer
