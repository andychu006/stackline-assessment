// src/utils/mockApi.ts
import productData, { Product } from './productData'

const mockApi = {
  fetchProductData: async () => {
    return new Promise<Product[]>((resolve) => {
      setTimeout(() => {
        resolve(productData)
      }, 1000) // Simulate a 1-second delay
    })
  },
}

export default mockApi
