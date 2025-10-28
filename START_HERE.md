# 🎬 START HERE - Trailer Tracker Setup

## ⚠️ IMPORTANT: Before Running the App

### Step 1: Get TMDb API Key (Free)
1. Go to: https://www.themoviedb.org/signup
2. Create a free account
3. Go to: https://www.themoviedb.org/settings/api
4. Click "Request an API Key" → Choose "Developer"
5. Fill out the simple form (you can use dummy info for learning)
6. Copy your **API Key (v3 auth)**

### Step 2: Create Server Environment File
1. Navigate to the `server` folder
2. Create a new file named `.env` (no extension)
3. Add this content (replace with your actual key):

```
TMDB_API_KEY=paste_your_tmdb_api_key_here
PORT=3001
```

**Example:**
```
TMDB_API_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
PORT=3001
```

### Step 3: Start the Application
Open terminal in the project root and run:

```bash
npm run dev
```

This starts:
- Backend API on http://localhost:3001
- Frontend app on http://localhost:5173

### Step 4: Use the App
1. Open browser to: http://localhost:5173
2. **Start typing** a movie name (e.g., "Inception", "Avatar", "Matrix")
3. Results will appear automatically as you type!
4. Click "View Trailer & Details" to watch trailers

## 🐛 Troubleshooting

### "Nothing shows up when I search"

**Most Common Causes:**

1. **Servers not running**
   - Make sure you ran `npm run dev` from the project root
   - You should see both servers starting in the terminal

2. **No .env file or wrong API key**
   - Check that `server/.env` exists
   - Verify your TMDb API key is correct
   - Make sure there are no spaces or quotes around the key

3. **API key not activated yet**
   - Sometimes TMDb takes a few minutes to activate new keys
   - Try waiting 5 minutes and restart the server

### How to verify servers are running:

1. Check terminal - you should see:
   ```
   🎬 Trailer Tracker API running on http://localhost:3001
   VITE ... ready in ... ms
   ```

2. Test backend: http://localhost:3001/api/health
   - Should show: `{"status":"ok","message":"Trailer Tracker API is running"}`

3. Test frontend: http://localhost:5173
   - Should show the Trailer Tracker homepage

### Still not working?

Check the browser console (F12) for error messages and verify:
- Both servers are running
- `.env` file is in the `server` folder (not the root)
- API key is valid and active

## 📝 Quick Commands

```bash
# Install all dependencies (first time only)
npm run install-all

# Start both servers
npm run dev

# Start only backend
npm run server

# Start only frontend
npm run client
```

## 🎉 What's New?

**Now supports real-time search!** Just start typing and results appear automatically (no need to press Enter or click Search).

---

Need more help? Check out [SETUP_GUIDE.md](SETUP_GUIDE.md) or [README.md](README.md)
