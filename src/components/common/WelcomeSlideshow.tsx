import React, { useState, useEffect } from 'react';

interface WelcomeSlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
}

const WelcomeSlideshow: React.FC<WelcomeSlideshowProps> = ({ 
  images, 
  interval = 4000, 
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Filter out empty images
  const validImages = images.filter(img => img && img.trim() !== '');

  useEffect(() => {
    if (validImages.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === validImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 150);
    }, interval);

    return () => clearInterval(timer);
  }, [validImages.length, interval]);

  const goToSlide = (index: number) => {
    if (index === currentIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === 0 ? validImages.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === validImages.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  if (validImages.length === 0) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {/* Main image display */}
      <div className="relative w-full h-full">
        <img
          src={validImages[currentIndex]}
          alt={`Welcome slide ${currentIndex + 1}`}
          className={`w-full h-full object-cover transition-all duration-300 ${
            isTransitioning ? 'opacity-70 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Navigation arrows (only show if more than 1 image) */}
      {validImages.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Dots indicator (only show if more than 1 image) */}
      {validImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {validImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white shadow-lg scale-110' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Image counter */}
      {validImages.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {validImages.length}
        </div>
      )}
    </div>
  );
};

export default WelcomeSlideshow;