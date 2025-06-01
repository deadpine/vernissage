import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { TiersSection } from "@/components/tiers-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="bg-[#f5f3f0]">
        <AboutSection />
        <ExperienceSection />
        <TiersSection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  )
}
