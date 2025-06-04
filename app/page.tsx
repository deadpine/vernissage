import { HeroSection } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { ExperienceSection } from "@/components/experience"
import { HistorySection } from "@/components/history"
import { TiersSection } from "@/components/tiers"
import { FAQSection } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="bg-[#f5f3f0]">
        <AboutSection />
        <ExperienceSection />
        <HistorySection />
        <TiersSection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  )
}
