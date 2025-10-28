import { useState, useEffect } from 'react';
import { Calendar, Star, TrendingUp } from 'lucide-react';
import HypeMeter from './HypeMeter';
import TrailerPlayer from './TrailerPlayer';

function MovieCard({ item }) {
  const [showDetails, setShowDetails] = useState(false);
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);

  const posterUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : 'https://via.placeholder.com/500x750/1a1a1a/d4af37?text=No+Poster';

  const title = item.title || item.name;
  const releaseDate = item.release_date || item.first_air_date;
  const mediaType = item.media_type === 'movie' ? 'Movie' : 'TV Show';

  useEffect(() => {
    if (showDetails && videos.length === 0) {
      fetchVideos();
    }
  }, [showDetails]);

  const fetchVideos = async () => {
    setLoadingVideos(true);
    try {
      const response = await fetch(`/api/videos/${item.media_type}/${item.id}`);
      const data = await response.json();
      
      // Filter for trailers and teasers
      const trailers = data.results?.filter(
        video => video.type === 'Trailer' || video.type === 'Teaser'
      ) || [];
      
      setVideos(trailers);
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    } finally {
      setLoadingVideos(false);
    }
  };

  const getTrailerUrl = () => {
    const officialTrailer = videos.find(v => v.official && v.type === 'Trailer');
    const anyTrailer = videos.find(v => v.type === 'Trailer');
    const trailer = officialTrailer || anyTrailer || videos[0];
    
    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
  };

  return (
    <div className="bg-midnight-blue/40 rounded-lg overflow-hidden card-neon backdrop-blur-sm animate-fade-in">
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden group">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jet-black via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-3 right-3 bg-film-red/90 text-white px-3 py-1 rounded-md text-sm font-bebas tracking-wide shadow-neon-red">
          {mediaType}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bebas font-bold text-electric-blue mb-3 line-clamp-2 tracking-wide">
          {title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-steel-gray-light mb-4 font-montserrat">
          {releaseDate && (
            <div className="flex items-center gap-1">
              <Calendar size={14} className="text-film-red" />
              <span>{new Date(releaseDate).getFullYear()}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Star size={14} className="text-electric-blue" />
            <span className="font-semibold">{item.vote_average?.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp size={14} className="text-film-red" />
            <span className="font-semibold">{Math.round(item.popularity)}</span>
          </div>
        </div>

        <HypeMeter popularity={item.popularity} rating={item.vote_average} />

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full mt-4 bg-gradient-to-r from-film-red to-electric-blue text-white py-3 rounded-md font-bebas text-lg tracking-wider shadow-neon-blue hover:shadow-neon-red hover:scale-105 transition-all"
        >
          {showDetails ? 'HIDE DETAILS' : 'VIEW TRAILER & DETAILS'}
        </button>

        {showDetails && (
          <div className="mt-5 pt-5 border-t border-electric-blue/30 animate-fade-in">
            {/* Overview */}
            <p className="text-steel-gray-light text-sm mb-5 leading-relaxed font-montserrat">
              {item.overview || 'No overview available.'}
            </p>

            {/* Trailer */}
            {loadingVideos ? (
              <div className="text-center text-steel-gray py-8 font-montserrat animate-pulse">Loading trailer...</div>
            ) : getTrailerUrl() ? (
              <TrailerPlayer url={getTrailerUrl()} title={title} />
            ) : (
              <div className="text-center text-steel-gray py-8 bg-midnight-blue/50 rounded border border-film-red/30 font-montserrat">
                No trailer available
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
