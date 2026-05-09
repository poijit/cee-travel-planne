"use client";

import { useState, useEffect } from "react";

interface UnsplashImageProps {
  query: string;
  className?: string;
  alt: string;
  isGenerating?: boolean;
}

export default function UnsplashImage({ query, className = "", alt, isGenerating = false }: UnsplashImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isGenerating) return; // Wait until AI is finished before fetching images to prevent rate limits and crashes

    async function fetchImage() {
      const apiKey = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY;
      
      if (!apiKey || apiKey === "your_unsplash_api_key_here") {
        // Fallback placeholder if no API key
        setImageUrl(`https://images.unsplash.com/photo-1488646953014-c8bfb192f649?w=800&q=80`);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${apiKey}&per_page=1`);
        const data = await res.json();
        
        if (data.results && data.results.length > 0) {
          setImageUrl(data.results[0].urls.regular);
        } else {
          // Fallback if no results
          setImageUrl(`https://images.unsplash.com/photo-1488646953014-c8bfb192f649?w=800&q=80`);
        }
      } catch (error) {
        console.error("Error fetching Unsplash image:", error);
        setImageUrl(`https://images.unsplash.com/photo-1488646953014-c8bfb192f649?w=800&q=80`);
      } finally {
        setLoading(false);
      }
    }

    fetchImage();
  }, [query]);

  if (loading) {
    return <div className={`bg-gray-200 dark:bg-gray-800 animate-pulse ${className}`}></div>;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imageUrl && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img 
          src={imageUrl} 
          alt={alt} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          crossOrigin="anonymous"
        />
      )}
    </div>
  );
}
