import { HeroSection } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { ExperienceSection } from "@/components/experience"
import { HistorySection } from "@/components/history"
import { Tickets } from "@/components/tickets"
import { FAQSection } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="bg-[#f5f3f0]">
        <Tickets />
        <AboutSection />
        <ExperienceSection />
        <HistorySection />
        <FAQSection />  
      </div>
      <Footer />
    </div>
  )
}
