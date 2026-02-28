import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Skills } from "@/components/sections/Skills";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/ui/Header";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <Header />
      <Hero />
      <About />
      <CaseStudies />
      <Education />
      <Skills />
      {/* <Testimonials /> */}
      <Philosophy />
      <Contact />
    </main>
  );
}
