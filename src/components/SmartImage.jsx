import { useState, useEffect } from 'react';
import { Loader2, ImageOff, RefreshCcw } from 'lucide-react';

/* global heic2any */

const SmartImage = ({ src, alt, className }) => {
  const [imageUrl, setImageUrl] = useState(src);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isHeic = src?.toLowerCase().endsWith('.heic');

  useEffect(() => {
    let isMounted = true;
    let timeoutId = null;
    
    const convertHeic = async () => {
      // If it's not a HEIC or already converted, don't do anything
      if (!src || !isHeic || src.startsWith('blob:')) return;

      // Check for native support (Safari/iOS)
      const testImg = new Image();
      const nativeSupport = await new Promise((resolve) => {
        testImg.onload = () => resolve(true);
        testImg.onerror = () => resolve(false);
        testImg.src = "data:image/heic;base64,AAAAGGZ0eXBoZWljAAAAAG1pZjFoZWlj"; // Tiny HEIC pixel
      });
      
      if (nativeSupport && isMounted) {
        setImageUrl(src);
        return;
      }

      // Library check
      if (!window.heic2any) {
        if (isMounted) {
          timeoutId = setTimeout(convertHeic, 500);
        }
        return;
      }

      setIsLoading(true);
      setHasError(false);

      try {
        const res = await fetch(src);
        if (!res.ok) throw new Error('Fetch failed');
        const blob = await res.blob();
        
        const conversionResult = await window.heic2any({
          blob,
          toType: 'image/jpeg',
          quality: 0.6
        });
        
        if (!isMounted) return;

        const convertedBlob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;
        const objectUrl = URL.createObjectURL(convertedBlob);
        setImageUrl(objectUrl);
      } catch (error) {
        console.error('HEIC conversion failed:', error);
        if (isMounted) setHasError(true);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    convertHeic();
    
    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
      if (imageUrl && imageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [src, isHeic]);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-900/50 gap-2 border border-red-500/20 rounded-xl ${className}`}>
        <ImageOff className="w-6 h-6 text-red-400 opacity-50" />
        <span className="text-[10px] text-red-400 font-mono">Conversion Failed</span>
        <button 
          onClick={() => window.location.reload()}
          className="p-1 hover:bg-white/10 rounded-full transition-colors"
        >
          <RefreshCcw className="w-3 h-3 text-slate-500" />
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-900/30 gap-2 ${className}`}>
        <Loader2 className="w-6 h-6 animate-spin text-indigo-400" />
        <span className="text-[10px] text-slate-500 font-mono tracking-widest animate-pulse">OPTIMIZING HEIC...</span>
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={className} 
      loading="lazy"
    />
  );
};

export default SmartImage;
