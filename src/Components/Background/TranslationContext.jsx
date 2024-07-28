import React, { createContext, useContext, useState, useEffect } from 'react';
import { translateText } from './translate';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('English');
  const [translations, setTranslations] = useState({});

  const translatePage = async (texts, targetLanguage) => {
    const translatedTexts = {};
    for (const [key, value] of Object.entries(texts)) {
      translatedTexts[key] = await translateText(value, targetLanguage);
    }
    setTranslations(translatedTexts);
  };

  const handleLanguageChange = async (lang) => {
    setLanguage(lang);
    const targetLanguage = lang === 'Sinhala' ? 'si' : lang === 'Tamil' ? 'ta' : 'en';
    const textsToTranslate = {
      home: 'Home',
      news: 'News',
      blog: 'Blog',
      login: 'Login',
      // Add other texts here
    };
    await translatePage(textsToTranslate, targetLanguage);
  };

  return (
    <TranslationContext.Provider value={{ language, translations, handleLanguageChange }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};
