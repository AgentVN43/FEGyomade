// src/components/GTranslate.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Translate = () => {
  useEffect(() => {
    const initializeGTranslate = () => {
      // Wrap the initialization code in a try-catch block to handle errors
      try {
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_RIGHT },
            'google_translate_element'
          );
        };

        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      } catch (error) {
        console.error('Error initializing GTranslate:', error);
      }
    };

    initializeGTranslate();

    return () => {
      // Clean up function
      const scriptElement = document.querySelector('script[src*="translate.google.com"]');
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <Helmet>
      <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    </Helmet>
  );
};

export default Translate;
