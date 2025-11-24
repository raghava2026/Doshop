import React from "react";
import "./FilterSection.css";

const FiltersSection = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}) => {
  return (
    <div className="filter-box">
      <h3 className="filter-title">Filters</h3>

      
      <label className="filter-label">Category</label>
      <select
        className="filter-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home & Kitchen</option>
        <option value="sports">Sports</option>
        <option value="books">Books</option>
      </select>

     
      <label className="filter-label">Price Range</label>

      <div className="price-range-container">
        <input
          type="range"
          min="0"
          max="300000"
          step="1000"
          value={priceRange[1]}
          onChange={(e) =>
            onPriceRangeChange([priceRange[0], Number(e.target.value)])
          }
          className="price-slider"
        />

        <div className="price-values">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
