'use client';

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Skills() {
    const { t } = useI18n();

    return (
        <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="max-w-4xl mx-auto space-y-10">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                        {t.skills.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.skills.categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="space-y-4 bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 border-b border-neutral-100 dark:border-neutral-800 pb-2">
                                {category.name}
                            </h3>
                            <ul className="grid grid-cols-2 gap-y-2 gap-x-2">
                                {category.items.map((item) => (
                                    <li key={item} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                                        <span className="w-1.5 h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded-full mr-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
