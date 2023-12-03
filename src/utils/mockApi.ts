// src/utils/mockApi.ts
import productData from './productData'

// Simulate an asynchronous API call
export const fetchProductData = async (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productData)
    }, 1000) // Simulate a 1-second delay
  })
}
