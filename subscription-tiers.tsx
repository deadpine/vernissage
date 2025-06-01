"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { HeroSection } from "./components/hero-section"
import { FAQSection } from "./components/faq-section"
import { AboutSection } from "./components/about-section"
import { ExperienceSection } from "./components/experience-section"
import { Footer } from "./components/footer"

interface Tier {
  id: string
  title: string
  price: string
  image: string
  features: string[]
}

export default function Component() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null)
  const [showCheckout, setShowCheckout] = useState(false)

  const tiers: Tier[] = [
    {
      id: "01",
      title: "CÓMPLICE",
      price: "USD 50",
      image: "/images/complice.png",
      features: ["Tu nombre en los agradecimientos", "Acceso anticipado a noticias"],
    },
    {
      id: "02",
      title: "EN LA LISTA",
      price: "USD 150",
      image: "/images/en-la-lista.png",
      features: [
        "1 entrada", 
        "Tu nombre en los agradecimientos", 
        "Acceso anticipado a noticias"
      ],
    },
    {
      id: "03",
      title: "ANFITRIÓN",
      price: "USD 300",
      image: "/images/anfitrion.png",
      features: [
        "2 entradas",
        "Lámina impresa de una de las obras",
        "Tu nombre en los agradecimientos",
        "Acceso anticipado a noticias",
      ],
    },
    {
      id: "04",
      title: "MECENAS",
      price: "USD 600",
      image: "/images/mecenas.png",
      features: [
        "2 entradas",
        "Elección preferencial de funciones",
        "Lámina impresa de una de las obras",
        "Tu nombre en los agradecimientos",
        "Acceso anticipado a noticias",
      ],
    },
    {
      id: "05",
      title: "ADMIRADOR SECRETO",
      price: "USD 1000",
      image: "/images/admirador-secreto.png",
      features: [
        "2 entradas",
        "Sorpresa personalizada",
        "Elección preferencial de funciones",
        "Lámina impresa de una de las obras",
        "Tu nombre en los agradecimientos",
        "Acceso anticipado a noticias",
      ],
    },
  ]

  const handlePurchaseClick = (tier: Tier) => {
    setSelectedTier(tier)
    setShowCheckout(true)
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="bg-[#f5f3f0]">
        <AboutSection />
        <ExperienceSection />

        <div id="tiers-section" className="py-20">
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            {tiers.map((tier) => (
              <Card key={tier.id} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">{tier.id}</span>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">{tier.title}</h4>
                      <span className="text-sm font-medium text-gray-900">{tier.price}</span>
                    </div>
                    
                  </div>

                  <div className="flex-1 flex items-center justify-center mb-6">
                    <div className="w-32 h-32 flex items-center justify-center">
                      <img
                        src={tier.image || "/placeholder.svg"}
                        alt={tier.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <ul className="space-y-2">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <span className="mr-2 text-gray-400">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => handlePurchaseClick(tier)}
                    variant="outline"
                    className="w-full mt-auto bg-transparent border-gray-400 text-gray-700 hover:bg-gray-50 rounded-full py-6"
                  >
                    COMPRAR
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        
        </div>

        <FAQSection />
      </div>
      <Footer />

      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">¡Gracias por tu interés!</DialogTitle>
          </DialogHeader>

          <div className="py-6 text-center space-y-4">
            <p className="text-lg font-serif">
              Has seleccionado: <strong>{selectedTier?.title}</strong>
            </p>
            <p className="text-gray-600 font-serif">
              Pronto implementaremos el sistema de pagos. Mientras tanto, puedes contactarnos directamente para
              completar tu compra.
            </p>
            <Button
              onClick={() => setShowCheckout(false)}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-serif"
            >
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
