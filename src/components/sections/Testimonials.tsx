'use client';

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
    const { t } = useI18n();

    return (
        <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="max-w-4xl mx-auto space-y-10">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 flex items-center justify-center gap-2">
                        <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                        {t.testimonials.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {t.testimonials.items.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm relative pt-6">
                                <div className="absolute top-4 left-6 text-4xl text-neutral-200 dark:text-neutral-800 font-serif leading-none">
                                    "
                                </div>
                                <CardContent className="space-y-4">
                                    <p className="text-neutral-700 dark:text-neutral-300 text-sm italic relative z-10 leading-relaxed">
                                        {review.text}
                                    </p>
                                    <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4">
                                        <a href={review.link} target="_blank" rel="noopener noreferrer" className="block group">
                                            <p className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {review.author}
                                            </p>
                                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                                {review.position}
                                            </p>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
