'use client';

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function About() {
    const { t } = useI18n();

    return (
        <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-4">
                        {t.about.title}
                    </h2>
                    <p className="text-xl md:text-2xl font-medium text-neutral-800 dark:text-neutral-200 leading-snug">
                        "{t.about.description}"
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
