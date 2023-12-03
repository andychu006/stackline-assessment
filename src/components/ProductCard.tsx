// src/components/ProductCard.tsx
import React from 'react'

interface ProductCardProps {
  product: {
    title: string
    image: string
    subtitle: string
    tags: string[]
  }
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.subtitle}</p>
      <ul>
        {product.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductCard
