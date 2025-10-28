import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const debounceTimerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    // Set new timer for debounced search
    debounceTimerRef.current = setTimeout(() => {
      onSearch(newQuery);
    }, 500); // Search after 500ms of no typing
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for movies or TV shows..."
          className="w-full px-6 py-5 pl-16 bg-midnight-blue/60 border-2 border-film-red/50 rounded-lg text-white placeholder-steel-gray font-montserrat focus:outline-none focus:border-film-red focus:shadow-neon-red transition-all backdrop-blur-sm"
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-film-red group-hover:glow-red transition-all" size={24} />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-electric-blue hover:bg-electric-blue-light text-white px-8 py-3 rounded-md font-bebas text-lg tracking-wider shadow-neon-blue hover:shadow-neon-blue hover:scale-105 transition-all"
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
