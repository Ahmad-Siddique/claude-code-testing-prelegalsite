import Image from "next/image";
import { HeroSection } from "@/components/prelegal-components";
import { AboutSection } from "@/components/prelegal-components";
import { PracticeAreasSection } from "@/components/prelegal-components";
import { TestimonialsSection } from "@/components/prelegal-components";
import { ContactSection } from "@/components/prelegal-components";
import { Footer } from "@/components/prelegal-components";

export const metadata = {
  title: "Donner Law Firm - Home",
  description: "Professional legal services firm website built with Next.js, TypeScript, and Tailwind CSS",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}