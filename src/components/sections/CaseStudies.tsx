'use client';

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function CaseStudies() {
    const { t } = useI18n();

    return (
        <section id="case-studies" className="py-16 px-4">
            <div className="max-w-4xl mx-auto space-y-10">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                        {t.caseStudies.title}
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400">
                        {t.caseStudies.subtitle}
                    </p>
                </div>

                <div className="space-y-6">
                    {t.caseStudies.items.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm hover:shadow-md group">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {study.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mt-2">
                                        {study.problem}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-5">
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-200 mb-1">{t.caseStudies.solutionLabel}</h4>
                                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                            {study.solution}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5">
                                        {study.stack.map(tech => (
                                            <Badge key={tech} variant="secondary" className="bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="details" className="border-b-0">
                                            <AccordionTrigger className="text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 hover:no-underline py-2">
                                                {t.caseStudies.detailsTrigger}
                                            </AccordionTrigger>
                                            <AccordionContent className="space-y-4 text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-md mt-1 text-sm">
                                                <div>
                                                    <strong className="text-neutral-800 dark:text-neutral-200 block mb-1">{t.caseStudies.decisionsLabel}</strong>
                                                    {study.decisions}
                                                </div>
                                                <div>
                                                    <strong className="text-neutral-800 dark:text-neutral-200 block mb-1">{t.caseStudies.impactLabel}</strong>
                                                    {study.impact}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
