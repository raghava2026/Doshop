# 🗄️ MongoDB Local Setup Guide

## Step 1: Start MongoDB Service

### Windows
```powershell
# Start MongoDB service
net start MongoDB

# Or if service name is different, check with:
Get-Service -Name *mongo*
```

### Alternative: Start MongoDB Manually
If the service doesn't work, you can start MongoDB manually:
```powershell
# Navigate to MongoDB bin directory (usually)
cd "C:\Program Files\MongoDB\Server\8.0\bin"

# Start MongoDB
.\mongod.exe --dbpath "C:\data\db"
```

**Note:** Make sure the `C:\data\db` directory exists, or create it:
```powershell
mkdir C:\data\db
```

## Step 2: Verify MongoDB is Running

Open a new terminal and test the connection:
```powershell
# Connect to MongoDB shell
mongosh

# Or if mongosh is not available:
mongo
```

If you see the MongoDB prompt, it's working! Type `exit` to leave.

## Step 3: Configure Your Project

### Option A: Use Default Local Connection (Recommended)
The project is already configured to use local MongoDB by default:
- Connection String: `mongodb://localhost:27017/doshop`
- Database Name: `doshop`

### Option B: Use Environment Variables
Create a `.env` file in the project root:
```env
MONGODB_URI=mongodb://localhost:27017/doshop
PORT=5000
NODE_ENV=development
```

## Step 4: Install Dependencies

```bash
npm install
```

This will install:
- mongoose (MongoDB driver)
- dotenv (for environment variables)

## Step 5: Seed the Database

```bash
npm run seed
```

This will:
- Connect to your local MongoDB
- Create the `doshop` database
- Insert 20 sample products

You should see:
```
✅ MongoDB Connected Successfully!
   Database: doshop
   Host: localhost:27017
🗑️  Cleared existing products
✅ Seeded 20 products successfully
```

## Step 6: Start the Server

```bash
npm run server
```

You should see:
```
✅ MongoDB Connected Successfully!
   Database: doshop
   Host: localhost:27017
🚀 Server running on http://localhost:5000
📦 Environment: development
```

## Troubleshooting

### MongoDB Service Won't Start
1. **Check if MongoDB is installed:**
   ```powershell
   mongod --version
   ```

2. **Check service status:**
   ```powershell
   Get-Service -Name MongoDB*
   ```

3. **Start service manually:**
   ```powershell
   net start MongoDB
   ```

### Connection Refused Error
- Make sure MongoDB service is running
- Check if port 27017 is available
- Verify MongoDB is listening: `netstat -ano | findstr :27017`

### Database Not Found
- This is normal! MongoDB creates the database when you first insert data
- Run `npm run seed` to create the database and add products

### Permission Issues
- Make sure you have write permissions to `C:\data\db`
- Run PowerShell as Administrator if needed

## Verify Your Setup

1. **Check MongoDB is running:**
   ```powershell
   Get-Service -Name MongoDB*
   ```

2. **Test connection:**
   ```powershell
   mongosh
   # Then type: show dbs
   ```

3. **Check your database:**
   ```powershell
   mongosh
   use doshop
   show collections
   db.products.countDocuments()
   ```

## Quick Start Commands

```bash
# 1. Start MongoDB (if not running)
net start MongoDB

# 2. Install dependencies
npm install

# 3. Seed database
npm run seed

# 4. Start server
npm run server
```

## MongoDB Atlas (Cloud) Alternative

If you prefer cloud MongoDB instead of local:

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string
4. Update `.env` file:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/doshop
   ```

---

**Your local MongoDB setup is ready! 🎉**


