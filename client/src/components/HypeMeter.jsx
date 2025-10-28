import { TrendingUp, Flame } from 'lucide-react';

function HypeMeter({ popularity, rating }) {
  // Calculate hype score (0-100)
  // Formula: Weighted average of normalized popularity and rating
  const normalizedPopularity = Math.min(popularity / 100, 1) * 100; // Cap at 10000 popularity
  const normalizedRating = (rating / 10) * 100;
  const hypeScore = Math.round((normalizedPopularity * 0.6 + normalizedRating * 0.4));

  const getHypeLevel = (score) => {
    if (score >= 80) return { label: 'BLOCKBUSTER', color: 'from-film-red via-orange-500 to-film-red-dark', icon: '🔥' };
    if (score >= 60) return { label: 'HIGH HYPE', color: 'from-film-red to-electric-blue', icon: '⚡' };
    if (score >= 40) return { label: 'MODERATE', color: 'from-electric-blue to-film-red', icon: '✨' };
    if (score >= 20) return { label: 'GROWING', color: 'from-midnight-blue-light to-electric-blue', icon: '🌱' };
    return { label: 'EMERGING', color: 'from-steel-gray to-midnight-blue-light', icon: '🎬' };
  };

  const hypeLevel = getHypeLevel(hypeScore);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bebas tracking-wider text-steel-gray-light flex items-center gap-2">
          <Flame size={18} className="text-film-red" />
          HYPE METER
        </span>
        <span className="text-sm font-bebas text-electric-blue glow-blue">{hypeScore}/100</span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-4 bg-jet-black rounded-full overflow-hidden border border-steel-gray/30 shadow-inner">
        <div
          className={`h-full bg-gradient-to-r ${hypeLevel.color} transition-all duration-500 rounded-full shadow-neon-subtle`}
          style={{ width: `${hypeScore}%` }}
        />
      </div>

      {/* Hype Level Badge */}
      <div className="flex items-center justify-center">
        <span className={`text-xs font-bebas tracking-wider px-4 py-1.5 rounded-md bg-gradient-to-r ${hypeLevel.color} text-white shadow-neon-blue`}>
          {hypeLevel.icon} {hypeLevel.label}
        </span>
      </div>

      {/* Metrics Breakdown */}
      <div className="grid grid-cols-2 gap-2 text-xs text-steel-gray pt-2 font-montserrat">
        <div className="flex items-center gap-1">
          <TrendingUp size={12} className="text-film-red" />
          <span>Pop: {Math.round(popularity)}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>⭐</span>
          <span>Rating: {rating?.toFixed(1)}/10</span>
        </div>
      </div>
    </div>
  );
}

export default HypeMeter;
