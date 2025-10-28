import { BarChart3, TrendingUp } from 'lucide-react';

function ComparisonChart({ title1, score1, title2, score2 }) {
  const maxScore = Math.max(score1, score2);
  const percentage1 = (score1 / 100) * 100;
  const percentage2 = (score2 / 100) * 100;
  
  const winner = score1 > score2 ? 'left' : score1 < score2 ? 'right' : 'tie';

  return (
    <div className="bg-card-bg rounded-xl border border-border p-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="text-accent-blue" size={24} />
        <h3 className="text-h2 text-text-primary">
          Buzz Comparison
        </h3>
      </div>

      {/* Comparison Bars */}
      <div className="space-y-4">
        {/* Title 1 */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-caption text-text-primary truncate max-w-[60%] font-medium">
              {title1}
            </span>
            <span className={`text-body font-bold ${winner === 'left' ? 'text-accent-red' : 'text-text-primary'}`}>
              {score1}
              {winner === 'left' && <TrendingUp className="inline ml-1" size={14} />}
            </span>
          </div>
          <div className="relative h-2.5 bg-page-bg rounded-full overflow-hidden border border-border">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                winner === 'left' ? 'bg-accent-red' : 'bg-accent-blue'
              }`}
              style={{ width: `${percentage1}%` }}
            />
          </div>
        </div>

        {/* VS Divider */}
        <div className="flex items-center justify-center">
          <div className="h-px flex-1 bg-border"></div>
          <span className="px-3 text-body text-text-muted font-medium">
            vs
          </span>
          <div className="h-px flex-1 bg-border"></div>
        </div>

        {/* Title 2 */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-caption text-text-primary truncate max-w-[60%] font-medium">
              {title2}
            </span>
            <span className={`text-body font-bold ${winner === 'right' ? 'text-accent-red' : 'text-text-primary'}`}>
              {score2}
              {winner === 'right' && <TrendingUp className="inline ml-1" size={14} />}
            </span>
          </div>
          <div className="relative h-2.5 bg-page-bg rounded-full overflow-hidden border border-border">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                winner === 'right' ? 'bg-accent-red' : 'bg-accent-blue'
              }`}
              style={{ width: `${percentage2}%` }}
            />
          </div>
        </div>
      </div>

      {/* Winner Announcement */}
      {winner !== 'tie' && (
        <div className="mt-6 pt-4 border-t border-border">
          <div className="text-center">
            <p className="text-caption text-text-muted mb-1">
              Trending Higher This Week
            </p>
            <p className="text-body text-text-primary font-bold">
              {winner === 'left' ? title1 : title2}
            </p>
            <p className="text-caption text-accent-blue mt-1">
              +{Math.abs(score1 - score2)} point advantage
            </p>
          </div>
        </div>
      )}

      {winner === 'tie' && (
        <div className="mt-6 pt-4 border-t border-border text-center">
          <p className="text-body text-text-primary font-medium">
            Equal Buzz — Neck and Neck!
          </p>
        </div>
      )}
    </div>
  );
}

export default ComparisonChart;
