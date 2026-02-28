'use client';

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { Moon, Sun, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
    const { theme, setTheme } = useTheme();
    const { lang, setLang, t } = useI18n();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleLang = () => {
        setLang(lang === 'es' ? 'en' : 'es');
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center pointer-events-none">
            <div className="pointer-events-auto">
                {/* Placeholder for left logo or empty */}
            </div>

            <div className="flex items-center gap-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md px-3 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm pointer-events-auto">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleLang}
                    className="rounded-full h-8 w-8 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    title={lang === 'es' ? "Switch to English" : "Cambiar a Español"}
                >
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Toggle Language</span>
                </Button>
                <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700" />
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full h-8 w-8 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                    {mounted ? (
                        theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
                    ) : (
                        <div className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle Theme</span>
                </Button>
            </div>
        </header>
    );
}
