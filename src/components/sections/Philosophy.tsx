'use client';

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Philosophy() {
    const { t } = useI18n();

    return (
        <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="p-8 md:p-10 rounded-3xl bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 shadow-xl"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {t.philosophy.title}
                    </h2>
                    <p className="text-base md:text-lg text-neutral-300 dark:text-neutral-700 leading-relaxed max-w-2xl mx-auto">
                        {t.philosophy.description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
