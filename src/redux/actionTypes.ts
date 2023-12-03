// src/redux/actionTypes.ts
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

// Define payload types for each action type
export type FetchDataRequestAction = { type: typeof FETCH_DATA_REQUEST }
export type FetchDataSuccessAction<T> = {
  type: typeof FETCH_DATA_SUCCESS
  payload: T
}
export type FetchDataFailureAction = {
  type: typeof FETCH_DATA_FAILURE
  payload: string
}

// Define a union type to represent all action types
export type ActionTypes =
  | { type: typeof FETCH_DATA_REQUEST }
  | { type: typeof FETCH_DATA_SUCCESS; payload: any[] }
  | { type: typeof FETCH_DATA_FAILURE; payload: string }
