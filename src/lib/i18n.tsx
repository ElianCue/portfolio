'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { content, Language } from '@/data/content';

type I18nContextType = {
    lang: Language;
    setLang: (lang: Language) => void;
    t: typeof content.es;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>('es');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Try to get saved language on mount
        const saved = localStorage.getItem('app-lang') as Language;
        if (saved === 'es' || saved === 'en') {
            setLang(saved);
        }
        setMounted(true);
    }, []);

    const handleSetLang = (newLang: Language) => {
        setLang(newLang);
        localStorage.setItem('app-lang', newLang);
    };

    if (!mounted) {
        // Return a default fast render on server
        return (
            <I18nContext.Provider value={{ lang: 'es', setLang: handleSetLang, t: content.es }}>
                {children}
            </I18nContext.Provider>
        );
    }

    return (
        <I18nContext.Provider value={{ lang, setLang: handleSetLang, t: content[lang] }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}
