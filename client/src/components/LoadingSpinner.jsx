import { Film } from 'lucide-react';

function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-border border-t-accent-blue rounded-full animate-spin" />
      </div>
      <p className="text-text-muted text-body">
        Loading...
      </p>
    </div>
  );
}

export default LoadingSpinner;
