// src/components/ProductCard.tsx
import React from 'react'
import './ProductCard.css' // Import the CSS file for styling
import { colors, fonts } from '../constants/styles'

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
    <div
      className="product-card"
      style={{ backgroundColor: colors.backgroundWhite }}
    >
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h2
          className="product-title"
          style={{ color: colors.textBlack, fontFamily: fonts.primary }}
        >
          {product.title}
        </h2>
        <p
          className="product-subtitle"
          style={{ color: colors.textGrey, fontFamily: fonts.primary }}
        >
          {product.subtitle}
        </p>
        <div className="tag-container">
          {product.tags.map((tag, index) => (
            <button
              key={index}
              className="tag-button"
              style={{ fontFamily: fonts.primary }}
              disabled
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
