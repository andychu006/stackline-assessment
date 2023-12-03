// src/App.tsx
import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { fetchDataSuccess, FetchDataSuccessAction } from './redux/actions'
import { AppState } from './redux/reducers' // Import the AppState type
import productData from './utils/productData'

type AppProps = PropsFromRedux

const App: React.FC<AppProps> = ({ data, fetchDataSuccess }) => {
  useEffect(() => {
    // Use productData instead of mockData
    const mockData = productData
    fetchDataSuccess(mockData)
  }, [fetchDataSuccess])

  // Render your root component using the data from the Redux store
  return <div>{/* Your root component rendering logic */}</div>
}

const mapStateToProps = (state: AppState) => ({
  data: state.data,
})

const mapDispatchToProps = (dispatch: Dispatch<FetchDataSuccessAction>) => ({
  fetchDataSuccess: (data: any[]) => dispatch(fetchDataSuccess(data)),
})

// Connect your root component to Redux using the connect function
const connector = connect(mapStateToProps, mapDispatchToProps)

// Create a type representing props from the Redux store
type PropsFromRedux = ConnectedProps<typeof connector>

// Export your connected root component
export default connector(App)
