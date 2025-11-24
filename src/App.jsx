import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FiltersSection from "./components/FilterSection";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    console.log("Fetching products from http://localhost:5000/products");
    
    fetch("http://localhost:5000/products")
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Products loaded:", data.length, data);
        if (Array.isArray(data) && data.length > 0) {
          console.log("✅ Successfully loaded", data.length, "products");
        setProducts(data);
        setFiltered(data);
        } else {
          console.warn("⚠️ No products received or empty array");
          setError("No products available");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(`Failed to load products: ${err.message}. Make sure the server is running on port 5000.`);
        setLoading(false);
      });
  }, []);

  const handleSearch = async (text) => {
    if (!text || text.trim() === "") {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/search?q=${encodeURIComponent(text)}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    const data = await res.json();
      
      const suggestionNames = data.slice(0, 5).map((p) => p.name);
      setSuggestions(suggestionNames);
      console.log("Search suggestions:", suggestionNames);
    } catch (err) {
      console.error("Error searching:", err);
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (name) => {
    setSearchQuery(name);
    setSuggestions([]);
  };

  useEffect(() => {
    let result = products;

    if (searchQuery) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    setFiltered(result);
  }, [selectedCategory, priceRange, products, searchQuery]);

  return (
    <>
      <Header
        onSearch={handleSearch}
        suggestions={suggestions}
        onSelectSuggestion={handleSelectSuggestion}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <HeroSection />

      <div className="container">
        <div className="grid-layout">

          <div className="left-filter">
            <FiltersSection
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </div>

          <div className="product-grid">
            {loading ? (
              <div className="no-products">
                <h3>Loading products...</h3>
                <p>Please wait while we fetch the products</p>
              </div>
            ) : error ? (
              <div className="no-products">
                <h3>Error loading products</h3>
                <p>{error}</p>
                <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                  Make sure the backend server is running on port 5000
                </p>
              </div>
            ) : filtered.length > 0 ? (
              filtered.map((item) => (
              <ProductCard key={item.id} {...item} />
              ))
            ) : (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        

        </div>
      </div>

      <Footer />

    </>
    
  );
};

export default App;
