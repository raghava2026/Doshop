import { Search, ShoppingCart, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "./Header.css";
import Sidebar from "./sidebar.jsx";

export const Header = ({ onSearch, suggestions, onSelectSuggestion, searchQuery: externalSearchQuery, onSearchQueryChange, onCategorySelect, selectedCategory }) => {
  const [internalSearchQuery, setInternalSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchAreaRef = useRef(null);


  const searchQuery = externalSearchQuery !== undefined ? externalSearchQuery : internalSearchQuery;
  const setSearchQuery = onSearchQueryChange || setInternalSearchQuery;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchAreaRef.current && !searchAreaRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    if (showSuggestions) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSuggestions]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    l
    onSearch(value);


    if (value.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };


  useEffect(() => {

    if (suggestions.length > 0 && searchQuery.length > 0) {
      setShowSuggestions(true);
    } else if (searchQuery.length === 0) {
      setShowSuggestions(false);
    }
  }, [suggestions, searchQuery]);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    onSelectSuggestion(suggestion);
    setShowSuggestions(false);
  };

  return (
    <>

      <header className="header">
        <div className="header-inner">


          <button className="icon-btn mobile-only" onClick={() => setSidebarOpen(true)}>
            <Menu size={26} />
          </button>


          <h1 className="logo">Doshop</h1>


          <div className="search-area" ref={searchAreaRef}>
            <input
              className="search-input"
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => {
                if (searchQuery.length > 0 && suggestions.length > 0) {
                  setShowSuggestions(true);
                }
              }}
            />


            <button className="search-btn">
              <Search size={18} />
            </button>


            {showSuggestions && suggestions.length > 0 && searchQuery.length > 0 && (
              <div className="suggestions">
                {suggestions.slice(0, 5).map((suggestion, i) => (
                  <div
                    key={`suggestion-${i}-${suggestion}`}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    <Search size={16} color="#666" />
                    <span>{suggestion}</span>
                  </div>
                ))}
              </div>
            )}
          </div>


          <button className="icon-btn">
            <ShoppingCart size={26} />
          </button>
        </div>
      </header>


      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onCategorySelect={onCategorySelect}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default Header;
