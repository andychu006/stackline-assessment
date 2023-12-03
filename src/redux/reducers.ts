// src/redux/reducers.ts
import { Reducer } from 'redux'
import {
  ActionTypes,
  FETCH_DATA_SUCCESS,
  FetchDataSuccessAction,
} from './actionTypes'

export interface AppState {
  data: any[] // Adjust the data type according to your data structure
}

const initialState: AppState = {
  data: [],
}

const rootReducer: Reducer<AppState, ActionTypes> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
