import React from 'react';

const getScreenWidth = () => {
    return window.innerWidth;
  };

  export function useScreenSize() {
  
    const [screenWidth, setScreenWidth] = React.useState(getScreenWidth());

    React.useEffect(() => {
        const handleScreenSize = () => {
          setTimeout(() => {
            setScreenWidth(getScreenWidth());
          }, 1000);
        };
      window.addEventListener('resize', handleScreenSize);
      return () => window.removeEventListener('resize', handleScreenSize);
    }, []);
  
    return(screenWidth);
  }