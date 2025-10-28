import { useState, useRef } from 'react';
import { Search } from 'lucide-react';

function DualSearch({ onSearch1, onSearch2, onCompare }) {
  const [query1, setQuery1] = useState('');
  const [query2, setQuery2] = useState('');
  const debounce1 = useRef(null);
  const debounce2 = useRef(null);

  const handleQuery1Change = (e) => {
    const value = e.target.value;
    setQuery1(value);
    
    if (debounce1.current) clearTimeout(debounce1.current);
    debounce1.current = setTimeout(() => {
      onSearch1(value);
    }, 500);
  };

  const handleQuery2Change = (e) => {
    const value = e.target.value;
    setQuery2(value);
    
    if (debounce2.current) clearTimeout(debounce2.current);
    debounce2.current = setTimeout(() => {
      onSearch2(value);
    }, 500);
  };

  const handleCompare = (e) => {
    e.preventDefault();
    onCompare();
  };

  return (
    <form onSubmit={handleCompare} className="space-y-4">
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Search 1 */}
        <div className="space-y-2">
          <label htmlFor="search1" className="text-caption text-text-muted uppercase tracking-wide">Title 1</label>
          <div className="relative">
            <input
              id="search1"
              type="text"
              value={query1}
              onChange={handleQuery1Change}
              placeholder="Enter first title..."
              className="w-full px-5 py-3 pl-12 bg-page-bg border border-border rounded-full text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          </div>
        </div>

        {/* Search 2 */}
        <div className="space-y-2">
          <label htmlFor="search2" className="text-caption text-text-muted uppercase tracking-wide">Title 2 (Optional)</label>
          <div className="relative">
            <input
              id="search2"
              type="text"
              value={query2}
              onChange={handleQuery2Change}
              placeholder="Enter second title..."
              className="w-full px-5 py-3 pl-12 bg-page-bg border border-border rounded-full text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          </div>
        </div>
      </div>

      {/* Compare Button (only show if both have queries) */}
      {query1 && query2 && (
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="bg-accent-red hover:bg-accent-red-dark text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-60"
          >
            Compare Buzz
          </button>
        </div>
      )}
    </form>
  );
}

export default DualSearch;
