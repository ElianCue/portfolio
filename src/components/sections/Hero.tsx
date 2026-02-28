'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
    const { t } = useI18n();

    const scrollToCases = () => {
        document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
            <div className="absolute inset-0 max-w-lg mx-auto h-[40vh] bg-neutral-200/50 dark:bg-neutral-800/50 rounded-full blur-3xl -z-10 translate-y-[-20%] opacity-50" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
                    {t.hero.title}
                </h1>
                <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    {t.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button
                        size="lg"
                        onClick={scrollToCases}
                        className="rounded-full px-8 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                        {t.hero.ctaPrimary}
                        <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="rounded-full px-8 border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                    >
                        <a href={t.contact.links.cv} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            {t.hero.ctaSecondary}
                        </a>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
