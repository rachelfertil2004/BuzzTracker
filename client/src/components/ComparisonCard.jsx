import { useState, useEffect } from 'react';
import { Calendar, Star, TrendingUp, Flame, Zap, Droplet } from 'lucide-react';
import TrailerPlayer from './TrailerPlayer';

function ComparisonCard({ item, position }) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);

  const posterUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : 'https://via.placeholder.com/500x750/0A0A23/C53030?text=No+Poster';

  const title = item.title || item.name;
  const releaseDate = item.release_date || item.first_air_date;
  const mediaType = item.media_type === 'movie' ? 'Movie' : 'TV Show';

  // Calculate Hype Score
  const normalizedPopularity = Math.min(item.popularity / 100, 1) * 100;
  const normalizedRating = (item.vote_average / 10) * 100;
  const hypeScore = Math.round((normalizedPopularity * 0.6 + normalizedRating * 0.4));

  useEffect(() => {
    if (showTrailer && videos.length === 0) {
      fetchVideos();
    }
  }, [showTrailer]);

  const fetchVideos = async () => {
    setLoadingVideos(true);
    try {
      const response = await fetch(`/api/videos/${item.media_type}/${item.id}`);
      const data = await response.json();
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

  const getViralPotential = (score) => {
    if (score >= 70) return { label: 'HIGH', icon: Flame, color: 'text-film-red', bg: 'bg-film-red/20', border: 'border-film-red' };
    if (score >= 40) return { label: 'MEDIUM', icon: Zap, color: 'text-electric-blue', bg: 'bg-electric-blue/20', border: 'border-electric-blue' };
    return { label: 'LOW', icon: Droplet, color: 'text-steel-gray', bg: 'bg-steel-gray/20', border: 'border-steel-gray' };
  };

  const getMarketingInsight = (score, popularity, rating) => {
    if (score >= 80) {
      return "🔥 Explosive pre-release buzz — strong viral potential and social traction.";
    } else if (score >= 65) {
      return "⚡ High momentum — significant mainstream visibility and engagement.";
    } else if (score >= 50) {
      return "✨ Steady attention — moderate buzz with niche audience appeal.";
    } else if (score >= 30) {
      return "🌱 Growing interest — limited mainstream visibility, potential sleeper hit.";
    } else {
      return "💧 Emerging title — low visibility, grassroots or cult following potential.";
    }
  };

  const viral = getViralPotential(hypeScore);
  const ViralIcon = viral.icon;

  return (
    <div className="bg-card-bg rounded-xl border border-border p-4 animate-fade-in">
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-4">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-accent-red text-white px-2 py-0.5 rounded text-caption font-medium">
          {mediaType}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Title */}
        <h3 className="text-h2 text-text-primary line-clamp-2">
          {title}
        </h3>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-caption text-text-muted">
          {releaseDate && (
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{new Date(releaseDate).getFullYear()}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Star size={14} />
            <span>{item.vote_average?.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp size={14} />
            <span>{Math.round(item.popularity)}</span>
          </div>
        </div>

        {/* Hype Score */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-caption text-text-muted uppercase tracking-wide">
              Hype Score
            </span>
            <span className="text-h2 text-text-primary font-bold">
              {hypeScore}
            </span>
          </div>
          <div className="relative h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-red transition-all duration-500 rounded-full"
              style={{ width: `${hypeScore}%` }}
            />
          </div>
        </div>

        {/* Viral Potential Tag */}
        <div className="flex items-center justify-center">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${viral.label === 'HIGH' ? 'border-success bg-success/10 text-success' : viral.label === 'MEDIUM' ? 'border-accent-blue bg-accent-blue/10 text-accent-blue' : 'border-text-muted bg-text-muted/10 text-text-muted'}`}>
            <ViralIcon size={14} />
            <span className="text-caption font-medium">
              {viral.label} Viral Potential
            </span>
          </div>
        </div>

        {/* Marketing Insight */}
        <div className="bg-page-bg border border-border rounded-lg p-3">
          <p className="text-caption text-text-secondary leading-relaxed">
            <span className="font-semibold text-text-primary">Insight:</span>{' '}
            {getMarketingInsight(hypeScore, item.popularity, item.vote_average)}
          </p>
        </div>

        {/* Overview */}
        <div>
          <p className="text-caption text-text-secondary leading-relaxed line-clamp-3">
            {item.overview || 'No overview available.'}
          </p>
        </div>

        {/* Trailer Button */}
        <button
          onClick={() => setShowTrailer(!showTrailer)}
          className="w-full bg-accent-red hover:bg-accent-red-dark text-white py-2.5 rounded-lg font-medium transition-colors"
        >
          {showTrailer ? 'Hide Trailer' : 'Watch Trailer'}
        </button>

        {/* Trailer Player */}
        {showTrailer && (
          <div className="animate-fade-in">
            {loadingVideos ? (
              <div className="text-center text-text-muted py-8 text-caption">
                Loading trailer...
              </div>
            ) : getTrailerUrl() ? (
              <TrailerPlayer url={getTrailerUrl()} title={title} />
            ) : (
              <div className="text-center text-text-muted py-8 bg-page-bg rounded-lg border border-border text-caption">
                No trailer available
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ComparisonCard;
