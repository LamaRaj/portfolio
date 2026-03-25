import { useState } from 'react';
import { ImageOff } from 'lucide-react';

const SmartImage = ({ src, alt, className }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-900/50 gap-2 border border-slate-800 rounded-xl ${className}`}>
        <ImageOff className="w-6 h-6 text-slate-600" />
        <span className="text-[10px] text-slate-600 font-mono italic">Image unavailable</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

export default SmartImage;
