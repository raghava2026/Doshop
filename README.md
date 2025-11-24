# 🛍️ Doshop - MERN Stack E-Commerce Product Landing Page

A fully responsive e-commerce product landing page built with MERN stack (MongoDB, Express, React, Node.js) featuring search with autosuggest, product filtering, and a modern UI.

## 📋 Features

- ✅ **Header with Search Bar** - Real-time search with autosuggest (max 5 suggestions)
- ✅ **Autosuggest Functionality** - Case-insensitive, partial match search
- ✅ **Hero Section** - Eye-catching banner section
- ✅ **Product Grid** - Display 10-20 products with images, names, prices, and ratings
- ✅ **Filters Section** - Filter by category and price range
- ✅ **Fully Responsive** - Works on Desktop, Tablet, and Mobile devices
- ✅ **MongoDB Integration** - Persistent data storage
- ✅ **RESTful API** - Clean backend API structure

## 🚀 Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Styling with responsive design

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM

## 📁 Project Structure

```
Doshop1/
├── config/
│   └── database.js          # MongoDB connection
├── models/
│   └── Product.js            # Product schema
├── scripts/
│   └── seedData.js           # Database seeding script
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Header with search bar
│   │   ├── HeroSection.jsx   # Hero banner
│   │   ├── FilterSection.jsx # Filters sidebar
│   │   ├── ProductCard.jsx   # Product card component
│   │   ├── Footer.jsx        # Footer component
│   │   └── sidebar.jsx       # Mobile sidebar
│   ├── App.jsx               # Main app component
│   ├── App.css               # App styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── server.js                 # Express server
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Step 1: Clone or Navigate to Project
```bash
cd Doshop
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up MongoDB

#### Option A: Local MongoDB
1. Install MongoDB on your system
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # Mac/Linux
   sudo systemctl start mongod
   ```

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and get your connection string
3. Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/doshop
   PORT=5000
   ```

### Step 4: Seed the Database
```bash
npm run seed
```
This will populate your database with 20 sample products.

### Step 5: Start the Backend Server
```bash
npm run server
```
The server will start on `http://localhost:5000`

### Step 6: Start the Frontend (in a new terminal)
```bash
npm run dev
```
The frontend will start on `http://localhost:5173`

## 📡 API Endpoints

### Get All Products
```
GET http://localhost:5000/products
```
Returns array of all products.

### Search Products
```
GET http://localhost:5000/search?q=phone
```
Returns up to 5 products matching the search query (case-insensitive, partial match).

**Example:**
- Query: `phone` → Matches "iPhone 15 Pro", "Smartphone Max 20"
- Query: `NIKE` → Matches "Nike Air Max 270" (case-insensitive)

### Get Product by ID
```
GET http://localhost:5000/products/:id
```

### Create Product
```
POST http://localhost:5000/products
Content-Type: application/json

{
  "name": "Product Name",
  "category": "electronics",
  "price": 99900,
  "rating": 4.5,
  "image": "https://example.com/image.jpg"
}
```

### Update Product
```
PUT http://localhost:5000/products/:id
```

### Delete Product
```
DELETE http://localhost:5000/products/:id
```

## 🎨 Features Explained

### Search with Autosuggest
- **Real-time search** as you type
- **Case-insensitive** matching
- **Partial match** support (e.g., "phone" matches "iPhone")
- **Max 5 suggestions** displayed
- Clicking a suggestion fills the search input and filters products

### Product Filtering
- **Category Filter**: Filter by Electronics, Fashion, Home, Sports, Books
- **Price Range**: Slider to filter products by price range
- **Combined Filters**: All filters work together

### Responsive Design
- **Desktop**: Full layout with sidebar filters
- **Tablet**: Adjusted grid layout
- **Mobile**: Stacked layout, hamburger menu for categories

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/doshop
PORT=5000
NODE_ENV=development
```

### MongoDB Schema
```javascript
{
  name: String (required),
  category: String (enum: ['electronics', 'fashion', 'home', 'sports', 'books']),
  price: Number (required, min: 0),
  rating: Number (required, min: 0, max: 5),
  image: String (required),
  timestamps: true
}
```
{images}

## 🧪 Testing the Application

1. **Test Search:**
   - Type "phone" in search bar → Should show iPhone suggestions
   - Type "nike" → Should show Nike products (case-insensitive)
   - Type "book" → Should show book products

2. **Test Filters:**
   - Select "Electronics" category → Only electronics shown
   - Adjust price slider → Products filtered by price

3. **Test Responsiveness:**
   - Resize browser window
   - Test on mobile device or browser dev tools

## 📝 Sample Data

The seed script creates 20 products across 5 categories:
- **Electronics**: 5 products (iPhone, Samsung, MacBook, etc.)
- **Fashion**: 5 products (Nike, Adidas, Jeans, etc.)
- **Home**: 4 products (Coffee Maker, Mixer, Air Fryer, etc.)
- **Sports**: 3 products (Yoga Mat, Dumbbells, Basketball)
- **Books**: 3 products (The Great Gatsby, etc.)

## 🐛 Troubleshooting

### Server not starting
- Check if MongoDB is running
- Verify MongoDB connection string in `.env`
- Check if port 5000 is available

### Products not showing
- Ensure MongoDB is connected
- Run `npm run seed` to populate database
- Check browser console for errors
- Verify both frontend and backend servers are running

### Search not working
- Check browser console for API errors
- Verify backend server is running on port 5000
- Test API directly: `http://localhost:5000/search?q=test`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy server.js
3. Update frontend API URLs to production backend

## 📄 License

This project is created for educational purposes.

## 👨‍💻 Author

MERN Stack Assignment - Doshop E-Commerce Landing Page

---

**Happy Shopping! 🛒**


## 📸 Project Demo

### 🖼️ Screenshots

<p align="center">
  <img src="./demo-img1.png" width="700" alt="Demo Image 1"/>
  <br/><br/>
  <img src="./demo-img2.png" width="700" alt="Demo Image 2"/>
  <br/><br/>
  <img src="./demo-img3.png" width="700" alt="Demo Image 3"/>
  <br/><br/>
  <img src="./demo-img4.png" width="700" alt="Demo Image 4"/>
  <br/><br/>
  <img src="./demo-img5.png" width="700" alt="Demo Image 5"/>
</p>
