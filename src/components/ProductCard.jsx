import React from "react";
import "./ProductCard.css";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ id, name, category, price, rating, image }) => {
  
  const ratingValue = Math.min(Math.max(Number(rating) || 0, 0), 5);
  const filledStars = Math.round(ratingValue);

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={image} alt={name} className="product-img" />
      </div>

      <p className="product-category">{category}</p>

      <h3 className="product-title">{name}</h3>

      <div className="product-rating">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            color={i < filledStars ? "#facc15" : "#ccc"}
            fill={i < filledStars ? "#facc15" : "#ccc"}
          />
        ))}
        <span className="rating-num">({ratingValue.toFixed(1)})</span>
      </div>

      <div className="product-footer">
        <span className="product-price">₹{price}</span>

        <button className="add-btn">
          <ShoppingCart size={16} />
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
