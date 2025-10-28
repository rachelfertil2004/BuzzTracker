import { Play } from 'lucide-react';

function TrailerPlayer({ url, title }) {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-page-bg border border-border animate-fade-in">
      <iframe
        src={url}
        title={`${title} - Trailer`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

export default TrailerPlayer;
