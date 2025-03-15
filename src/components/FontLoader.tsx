import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import FontFaceObserver from 'fontfaceobserver';

// Create a context to share font loading status across components
interface FontContextType {
  fontsLoaded: boolean;
}

const FontContext = createContext<FontContextType>({ fontsLoaded: false });

// Hook to use font loading status
export const useFontLoaded = () => useContext(FontContext);

interface FontLoaderProps {
  children: ReactNode;
}

export const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Only wait for the regular (400) weight font to load
    const sourceSerifRegular = new FontFaceObserver('Source Serif Pro', { weight: 400 });

    // Wait for the font to load with a timeout
    sourceSerifRegular
      .load(null, 3000)
      .then(() => {
        setFontsLoaded(true);
        document.documentElement.classList.add('fonts-loaded');
      })
      .catch((err) => {
        console.error('Font loading failed:', err);
        // Still set to true to prevent indefinite waiting if font loading fails
        setFontsLoaded(true);
      });
  }, []);

  // Don't render children until the font is loaded
  if (!fontsLoaded) {
    return null;
  }

  return <FontContext.Provider value={{ fontsLoaded }}>{children}</FontContext.Provider>;
};

export default FontLoader;
