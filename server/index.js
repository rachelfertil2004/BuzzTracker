import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Trailer Tracker API is running' });
});

// Search movies and TV shows
app.get('/api/search', async (req, res) => {
  try {
    const { query, type = 'multi' } = req.query;
    
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    const endpoint = type === 'multi' ? 'search/multi' : `search/${type}`;
    const response = await fetch(
      `${TMDB_BASE_URL}/${endpoint}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`
    );
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Failed to search' });
  }
});

// Get movie/TV show details
app.get('/api/details/:type/:id', async (req, res) => {
  try {
    const { type, id } = req.params;
    
    const response = await fetch(
      `${TMDB_BASE_URL}/${type}/${id}?api_key=${TMDB_API_KEY}&language=en-US`
    );
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Details error:', error);
    res.status(500).json({ error: 'Failed to fetch details' });
  }
});

// Get videos (trailers) for a movie/TV show
app.get('/api/videos/:type/:id', async (req, res) => {
  try {
    const { type, id } = req.params;
    
    const response = await fetch(
      `${TMDB_BASE_URL}/${type}/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
    );
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Videos error:', error);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

app.listen(PORT, () => {
  console.log(`🎬 Trailer Tracker API running on http://localhost:${PORT}`);
  if (!TMDB_API_KEY) {
    console.warn('⚠️  Warning: TMDB_API_KEY not set in .env file');
  }
});
