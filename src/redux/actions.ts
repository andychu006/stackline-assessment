// src/redux/actions.ts
import { Action } from 'redux'
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './actionTypes'

// Define a more flexible Action type with payload
interface ActionWithPayload<T> extends Action {
  payload: T
}

export interface FetchDataSuccessAction extends ActionWithPayload<any[]> {
  type: typeof FETCH_DATA_SUCCESS
}

export const fetchDataRequest = (): Action<typeof FETCH_DATA_REQUEST> => ({
  type: FETCH_DATA_REQUEST,
})
export const fetchDataSuccess = <T>(data: T): ActionWithPayload<T> => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
})
export const fetchDataFailure = (error: string): ActionWithPayload<string> => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
})
