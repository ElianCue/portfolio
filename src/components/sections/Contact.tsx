'use client';

import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Contact() {
    const { t } = useI18n();

    return (
        <footer className="py-16 px-4 bg-neutral-900 text-neutral-50 dark:bg-black border-t border-neutral-800">
            <div className="max-w-3xl mx-auto text-center space-y-10">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {t.contact.title}
                    </h2>
                    <p className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
                        {t.contact.description}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    <Button size="lg" className="rounded-full bg-white text-neutral-900 hover:bg-neutral-200" asChild>
                        <a href={`mailto:${t.contact.email}`}>
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                        </a>
                    </Button>

                    <Button size="lg" variant="outline" className="rounded-full border-neutral-700 hover:bg-neutral-800 dark:border-neutral-800 dark:hover:bg-neutral-900 text-neutral-900 dark:text-neutral-50 bg-white dark:bg-black" asChild>
                        <a href={t.contact.links.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                        </a>
                    </Button>

                    <Button size="lg" variant="outline" className="rounded-full border-neutral-700 hover:bg-neutral-800 dark:border-neutral-800 dark:hover:bg-neutral-900 text-neutral-900 dark:text-neutral-50 bg-white dark:bg-black" asChild>
                        <a href={t.contact.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </a>
                    </Button>

                    <Button size="lg" variant="outline" className="rounded-full border-neutral-700 hover:bg-neutral-800 dark:border-neutral-800 dark:hover:bg-neutral-900 text-neutral-900 dark:text-neutral-50 bg-white dark:bg-black" asChild>
                        <a href={t.contact.links.cv} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            {t.nav.cv}
                        </a>
                    </Button>
                </div>

                <div className="pt-8 text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} Elian Cueva. Built with Next.js & Tailwind CSS.</p>
                </div>
            </div>
        </footer>
    );
}
