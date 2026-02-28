'use client';

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Education() {
    const { t } = useI18n();

    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">
                        {t.education.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.education.items.map((item, index) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm"
                        >
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">{item.degree}</h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">{item.institution}</p>
                            <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-800 dark:text-neutral-300">
                                {item.status}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
