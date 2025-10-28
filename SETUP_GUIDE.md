# 🚀 Quick Setup Guide for Trailer Tracker

Follow these steps to get Trailer Tracker running on your machine.

## Step 1: Get Your TMDb API Key

1. Go to [The Movie Database](https://www.themoviedb.org/)
2. Create a free account if you don't have one
3. Navigate to: **Settings** → **API** → **Request an API Key**
4. Choose "Developer" and fill out the form
5. Copy your API Key (v3 auth)

## Step 2: Install Dependencies

Open your terminal in the project root and run:

```bash
npm run install-all
```

This will install dependencies for:
- Root project (concurrently for running both servers)
- Server (Express API)
- Client (React app)

## Step 3: Configure Environment Variables

1. Navigate to the `server` folder
2. Create a new file called `.env` (copy from `.env.example`)
3. Open `.env` and replace `your_tmdb_api_key_here` with your actual TMDb API key:

```env
TMDB_API_KEY=your_actual_api_key_from_tmdb
PORT=3001
```

**Important**: Keep your API key secure and never commit the `.env` file to version control!

## Step 4: Start the Application

From the project root, run:

```bash
npm run dev
```

This will start both:
- **Backend API**: http://localhost:3001
- **Frontend App**: http://localhost:5173

## Step 5: Open Your Browser

Navigate to: **http://localhost:5173**

You should see the Trailer Tracker homepage with a search bar.

## 🎬 Try It Out!

1. Search for a movie like "Inception" or "The Matrix"
2. Browse the results with poster images
3. Click "View Trailer & Details" on any card
4. Watch the trailer and check out the Hype Meter!

## Troubleshooting

### API Key Error
- **Symptom**: "Failed to search" or no results
- **Solution**: Make sure your `.env` file in the `server` folder has the correct API key

### Port Already in Use
- **Symptom**: Error starting server on port 3001 or 5173
- **Solution**: Stop any other applications using these ports, or change the port in:
  - `server/.env` (for backend)
  - `client/vite.config.js` (for frontend)

### Dependencies Not Installing
- **Symptom**: npm install errors
- **Solution**: Make sure you have Node.js 18+ installed. Check with: `node --version`

### CORS Errors
- **Symptom**: API calls fail in the browser
- **Solution**: Make sure both frontend and backend are running. The frontend proxy should handle this.

## Next Steps

- Explore the codebase in the `client/src` and `server` folders
- Customize the colors in `client/tailwind.config.js`
- Add new features like watchlists or advanced filters
- Deploy to Vercel, Netlify, or your preferred hosting service

## Need Help?

Check out the main [README.md](README.md) for more detailed information about the project structure, API endpoints, and architecture.

---

Happy coding! 🎬✨
