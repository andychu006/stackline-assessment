// src/components/ProductCard.tsx
import React from 'react'

interface ProductCardProps {
  product: any // Adjust the type according to your data structure
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Implement the ProductCard UI using the provided data
  return (
    <div className="product-card">
      {/* Display product information */}
      <h2>{product.title}</h2>
      {/* Add more details as needed */}
    </div>
  )
}

export default ProductCard
