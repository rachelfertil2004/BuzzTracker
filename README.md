# 🎯 Buzz Tracker

A modern web application that helps entertainment and marketing professionals **compare audience buzz** for movies and TV shows. Unlike review-based platforms, Buzz Tracker focuses on **audience momentum** using TMDb's popularity, ratings, and trending data.

## ✨ Core Features

### **Audience Momentum Analysis**
- **Hype Score**: Weighted mix of TMDb popularity + vote average
- **Viral Potential Tags**: 🔥 High / ⚡ Medium / 💧 Low classification
- **Marketing Insights**: AI-powered suggestions for campaign strategy
- **Trending Indicators**: See which title has stronger momentum this week

### **Side-by-Side Comparison**
- Search up to **two titles** (movie or TV)
- Visual **comparison bar chart** highlighting buzz differences
- Each title displays:
  - Poster and overview
  - Official YouTube trailer
  - Hype Score (0-100)
  - Viral potential rating
  - Marketing insight recommendations

### **Professional Tools**
- **Presentation-ready**: Sleek design optimized for portfolios and client meetings
- **Real-time Data**: Live TMDb API integration
- **Responsive Layout**: Works on all devices
- **Cinematic UI**: Deep red, midnight blue, and jet black color scheme

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- TMDb API Key ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone and navigate to the project**:
   ```bash
   cd "c:/windsurf projects/TrailerTracker"
   ```

2. **Install all dependencies**:
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**:
   - Navigate to the `server` folder
   - Copy `.env.example` to `.env`
   - Add your TMDb API key:
     ```
     TMDB_API_KEY=your_actual_api_key_here
     PORT=3001
     ```

4. **Start the application**:
   ```bash
   npm run dev
   ```

   This will start:
   - Backend API server on `http://localhost:3001`
   - Frontend React app on `http://localhost:5173`

5. **Open your browser** and visit `http://localhost:5173`

## 📁 Project Structure

```
TrailerTracker/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── SearchBar.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   ├── HypeMeter.jsx
│   │   │   ├── TrailerPlayer.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                # Express backend
│   ├── index.js          # API server
│   ├── .env.example      # Environment template
│   └── package.json
├── package.json          # Root package
└── README.md
```

## 🎨 Design System

### Color Palette
- **Deep Red**: `#C53030` - Primary accent, dramatic highlights
- **Midnight Blue**: `#0A0A23` - Rich backgrounds
- **Jet Black**: `#000000` - Pure black elements
- **Steel Gray**: `#4A5568` - Text and secondary elements
- **Electric Blue**: `#3B82F6` - Interactive highlights and buttons

### Typography
- **Headings**: Bebas Neue (sans-serif) - Bold, cinematic, uppercase
- **Body**: Montserrat (sans-serif) - Modern, highly readable

### Visual Style
- **Neon glow effects** on borders and text
- **Gradient backgrounds** (red → black → blue)
- **Smooth fade-in animations** for search results
- **Movie theater ambiance** with dramatic lighting

See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for complete design documentation.

## 🔧 API Endpoints

The backend provides these endpoints:

- `GET /api/search?query={query}&type={type}` - Search movies/TV shows
- `GET /api/details/:type/:id` - Get detailed info
- `GET /api/videos/:type/:id` - Get trailers and videos

## 📊 Buzz Analysis Algorithm

### Hype Score Calculation (0-100)
```
Hype Score = (Normalized Popularity × 0.6) + (Normalized Rating × 0.4)
```
- **60% weight**: Popularity (current buzz and visibility)
- **40% weight**: Vote Average (audience quality signal)

### Viral Potential Classification
- 🔥 **HIGH** (70-100): Strong social traction potential
- ⚡ **MEDIUM** (40-69): Moderate mainstream visibility
- 💧 **LOW** (0-39): Limited visibility, grassroots appeal

### Marketing Insights
Automatically generated recommendations based on buzz score:
- **80-100**: "Explosive pre-release buzz — strong viral potential"
- **65-79**: "High momentum — significant mainstream visibility"
- **50-64**: "Steady attention — moderate buzz with niche appeal"
- **30-49**: "Growing interest — potential sleeper hit"
- **0-29**: "Emerging title — grassroots or cult following potential"

## 🛠️ Built With

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **node-fetch** - HTTP client
- **dotenv** - Environment management

## 🔐 Security Notes

- API keys are stored server-side only
- CORS is configured for development
- Environment variables are not committed to git

## 🚀 Future Enhancements

- [ ] Export comparison reports as PDF/PNG
- [ ] Historical buzz tracking over time
- [ ] Social media sentiment analysis integration
- [ ] Genre-specific buzz benchmarking
- [ ] Competitor analysis (compare 3+ titles)
- [ ] Buzz forecasting with ML predictions
- [ ] API for programmatic access
- [ ] White-label options for agencies

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for the amazing API
- Built with modern web technologies for entertainment professionals

---

**Happy Trailer Tracking!** 🎬✨
