import React from "react";
import "./Sidebar.css";
import { Home, X } from "lucide-react";

const Sidebar = ({ isOpen, onClose, onCategorySelect, selectedCategory }) => {
  const categories = [
    { value: "all", label: "All Categories", icon: Home },
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "home", label: "Home & Kitchen" },
    { value: "sports", label: "Sports" },
    { value: "books", label: "Books" },
  ];

  const handleCategoryClick = (categoryValue) => {
    if (onCategorySelect) {
      onCategorySelect(categoryValue);
    }
    onClose();
  };

  return (
    <>
      {/* Overlay Background */}
      <div className={`sidebar-overlay ${isOpen ? "show" : ""}`} onClick={onClose}></div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? "slide-in" : "slide-out"}`}>
        <div className="sidebar-header">
          <h2>Categories</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close sidebar">
            <X size={20} />
          </button>
        </div>

        <ul className="sidebar-list">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.value;
            
            return (
              <li
                key={category.value}
                className={isSelected ? "active" : ""}
                onClick={() => handleCategoryClick(category.value)}
              >
                {Icon && <Icon size={18} />}
                <span>{category.label}</span>
              </li>
            );
          })}
        </ul>

        <div className="sidebar-footer">
          <div className="sidebar-divider"></div>
          <ul className="sidebar-list">
            <li onClick={onClose}>
              <span>My Orders</span>
            </li>
            <li onClick={onClose}>
              <span>Account</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
