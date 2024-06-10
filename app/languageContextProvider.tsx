"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Define the type for LanguageProvider props to include children
type LanguageProviderProps = {
    children: React.ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<string>(() => {
        const storedLanguage = localStorage.getItem('currentSelectedLanguage');
        return storedLanguage ? storedLanguage : 'en';
    });

    const setLanguage = (lang: string) => {
        localStorage.setItem('currentSelectedLanguage', lang);
        setLanguageState(lang);
    };

    // Optional: Use effect to update language when localStorage changes
    useEffect(() => {
        const storedLanguage = localStorage.getItem('currentSelectedLanguage');
        if (storedLanguage && storedLanguage !== language) {
            setLanguageState(storedLanguage);
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
