import 'dotenv/config';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import connectDB from '../config/database.js';

const products = [
  {
    name: "iPhone 15 Pro",
    category: "electronics",
    price: 99900,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop"
  },
  {
    name: "Samsung Galaxy S24",
    category: "electronics",
    price: 89900,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop"
  },
  {
    name: "MacBook Pro 16",
    category: "electronics",
    price: 249900,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop"
  },
  {
    name: "Nike Air Max 270",
    category: "fashion",
    price: 15000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
  },
  {
    name: "Levi's 501 Jeans",
    category: "fashion",
    price: 8900,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop"
  },
  {
    name: "Adidas Ultraboost",
    category: "fashion",
    price: 18000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop"
  },
  {
    name: "Coffee Maker Deluxe",
    category: "home",
    price: 12900,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop"
  },
  {
    name: "Stand Mixer Pro",
    category: "home",
    price: 29900,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop"
  },
  {
    name: "Air Fryer XL",
    category: "home",
    price: 14900,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop"
  },
  {
    name: "Yoga Mat Premium",
    category: "sports",
    price: 4500,
    rating: 4.5,
    image: "https://media.istockphoto.com/id/1317688319/photo/close-up-of-female-hands-folding-blue-exercise-mat-on-wooden-floor.jpg?s=1024x1024&w=is&k=20&c=zOofCYioji-0KLtXIeSv5sjBeTnGy-ipx-iJNz7NHYQ="
  },
  {
    name: "Dumbbell Set 20kg",
    category: "sports",
    price: 7900,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
  },
  {
    name: "Basketball Official",
    category: "sports",
    price: 3500,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop"
  },
  {
    name: "The Great Gatsby",
    category: "books",
    price: 1200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"
  },
  {
    name: "To Kill a Mockingbird",
    category: "books",
    price: 1400,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop"
  },
  {
    name: "1984 by George Orwell",
    category: "books",
    price: 1300,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Wireless Earbuds Pro",
    category: "electronics",
    price: 19900,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop"
  },
  {
    name: "Smart Watch Series 9",
    category: "electronics",
    price: 39900,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
  },
  {
    name: "Designer Sunglasses",
    category: "fashion",
    price: 12000,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop"
  },
  {
    name: "Leather Jacket",
    category: "fashion",
    price: 25000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop"
  },
  {
    name: "Blender Professional",
    category: "home",
    price: 8900,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=400&fit=crop"
  }
];

const seedProducts = async () => {
  try {
    await connectDB();
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log(`✅ Seeded ${products.length} products successfully`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedProducts();

