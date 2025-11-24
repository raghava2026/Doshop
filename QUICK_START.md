# 🚀 Quick Start - MongoDB Local Connection

## ✅ Good News!
Your MongoDB service is **already running**! 

## Next Steps:

### 1. Seed the Database (First Time Only)
```bash
npm run seed
```

This will:
- Connect to your local MongoDB at `mongodb://localhost:27017/doshop`
- Create the database and insert 20 products

### 2. Start the Server
```bash
npm run server
```

You should see:
```
✅ MongoDB Connected Successfully!
   Database: doshop
   Host: localhost:27017
🚀 Server running on http://localhost:5000
```

### 3. Start the Frontend (in a new terminal)
```bash
npm run dev
```

## Connection Details

- **MongoDB URI:** `mongodb://localhost:27017/doshop`
- **Database Name:** `doshop`
- **Port:** `27017` (default MongoDB port)
- **Status:** ✅ Running

## If MongoDB Stops

If you need to restart MongoDB service:
```powershell
# Stop
net stop MongoDB

# Start
net start MongoDB
```

## Verify Connection

Test your connection:
```bash
# Option 1: Run seed script
npm run seed

# Option 2: Use MongoDB shell
mongosh
use doshop
show collections
db.products.find().count()
```

---

**Everything is ready! Just run `npm run seed` and then `npm run server`** 🎉


