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

type LanguageProviderProps = {
    children: React.ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const setLanguage = (lang: string) => {
        if (typeof window !== "undefined") {
            localStorage.setItem('currentSelectedLanguage', lang);
        }
        setLanguageState(lang);
    };

    useEffect(() => {
        const fetchLanguage = async () => {
            const storedLanguage = typeof window !== "undefined" ? localStorage.getItem('currentSelectedLanguage') : "tr";
            setLanguageState(storedLanguage ? storedLanguage : 'tr');
            setLoading(false);
        };

        fetchLanguage();
    }, []);

    if (loading) {
        return <div
        style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent : "center"

        }}
        >
            <div style={{
                border: "10px solid black",
                borderRadius: "50%",
                width: "100px",
                height: "100px"
            }}></div>
        </div>;
    }

    return (
        <LanguageContext.Provider value={{ language: language || 'tr', setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
