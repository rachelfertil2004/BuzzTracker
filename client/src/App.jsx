import { useState } from 'react';
import { Film, Target } from 'lucide-react';
import DualSearch from './components/DualSearch';
import ComparisonCard from './components/ComparisonCard';
import ComparisonChart from './components/ComparisonChart';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [title1, setTitle1] = useState(null);
  const [title2, setTitle2] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const searchTitle = async (query, setTitle, setLoading, position) => {
    if (!query.trim()) {
      setTitle(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}&type=multi`);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success === false) {
        throw new Error(data.status_message || 'TMDb API error');
      }
      
      const filtered = data.results?.filter(
        item => item.media_type === 'movie' || item.media_type === 'tv'
      ) || [];
      
      if (filtered.length > 0) {
        setTitle(filtered[0]); // Use first result
      } else {
        setTitle(null);
        if (query.trim()) {
          setError(`No results found for title ${position}.`);
        }
      }
    } catch (error) {
      console.error('Search failed:', error);
      setError('Unable to search. Make sure the server is running and TMDb API key is configured.');
      setTitle(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch1 = (query) => searchTitle(query, setTitle1, setLoading1, 1);
  const handleSearch2 = (query) => searchTitle(query, setTitle2, setLoading2, 2);
  const handleCompare = () => setShowComparison(true);

  return (
    <div className="min-h-screen bg-page-bg">
      {/* Header */}
      <header className="border-b border-border bg-page-bg sticky top-0 z-50">
        <div className="max-w-content mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-h1 text-text-primary">
              Buzz Tracker
            </h1>
          </div>
          <p className="text-text-secondary text-body mb-6">
            Compare audience momentum and viral potential for movies & TV shows
          </p>
          <DualSearch onSearch1={handleSearch1} onSearch2={handleSearch2} onCompare={handleCompare} />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-content mx-auto px-6 py-8">
        {error && (
          <div className="max-w-content mx-auto mb-6 p-4 bg-card-bg border border-accent-red rounded-lg animate-fade-in">
            <p className="text-accent-red text-center font-medium">
              ⚠️ {error}
            </p>
            <p className="text-text-muted text-caption text-center mt-2">
              Run <code className="bg-page-bg px-2 py-1 rounded border border-border">npm run dev</code> from the project root to start both servers.
            </p>
          </div>
        )}
        
        {(loading1 || loading2) && (
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner />
          </div>
        )}

        {!loading1 && !loading2 && (title1 || title2) && (
          <div className="space-y-6">
            {/* Comparison Cards */}
            <div className="grid lg:grid-cols-2 gap-6">
              {title1 && <ComparisonCard item={title1} position="left" />}
              {title2 && <ComparisonCard item={title2} position="right" />}
            </div>

            {/* Comparison Chart */}
            {title1 && title2 && showComparison && (
              <ComparisonChart
                title1={title1.title || title1.name}
                score1={Math.round((Math.min(title1.popularity / 100, 1) * 100 * 0.6) + ((title1.vote_average / 10) * 100 * 0.4))}
                title2={title2.title || title2.name}
                score2={Math.round((Math.min(title2.popularity / 100, 1) * 100 * 0.6) + ((title2.vote_average / 10) * 100 * 0.4))}
              />
            )}
          </div>
        )}

        {!loading1 && !loading2 && !title1 && !title2 && !error && (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <Target className="text-text-muted mb-4" size={64} />
            <h2 className="text-h2 text-text-secondary mb-2">
              Compare Audience Buzz
            </h2>
            <p className="text-text-muted text-body max-w-2xl">
              Enter one or two titles to analyze their audience momentum and viral potential
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-6 text-center">
        <p className="text-text-muted text-caption">Powered by <a href="https://www.themoviedb.org/" className="text-accent-blue hover:underline">TMDb API</a> — Built for entertainment & marketing professionals</p>
      </footer>
    </div>
  );
}

export default App;
