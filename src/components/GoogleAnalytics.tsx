/**
 * Google Analytics 4 Component
 * Initializes GA4 tracking with the measurement ID from environment variables
 */

import { useEffect } from 'react';

const GoogleAnalytics = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Only initialize if measurement ID is provided
    if (!measurementId) {
      console.warn('GA4 Measurement ID not found. Analytics will not be tracked.');
      return;
    }

    // Create and inject the GA4 script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: true, // Automatically track page views
    });

    console.log('GA4 initialized with ID:', measurementId);

    // Cleanup function
    return () => {
      // Remove script on unmount (optional, usually not needed)
      const scripts = document.querySelectorAll(`script[src*="googletagmanager"]`);
      scripts.forEach((script) => script.remove());
    };
  }, [measurementId]);

  // This component doesn't render anything
  return null;
};

export default GoogleAnalytics;
