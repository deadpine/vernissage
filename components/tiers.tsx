"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Tier {
  title: string
  price: string
  image: string
  features: string[]
}

const tiers: Tier[] = [
  {
    title: "CÓMPLICE",
    price: "50",
    image: "/images/complice.png",
    features: ["Tu nombre en los agradecimientos", "Acceso anticipado a noticias"],
  },
  {
    title: "EN LA LISTA",
    price: "150",
    image: "/images/en-la-lista.png",
    features: [
      "1 entrada", 
      "Tu nombre en los agradecimientos", 
      "Acceso anticipado a noticias"
    ],
  },
  {
    title: "ANFITRIÓN",
    price: "300",
    image: "/images/anfitrion.png",
    features: [
      "2 entradas",
      "Lámina impresa de una de las obras",
      "Tu nombre en los agradecimientos",
      "Acceso anticipado a noticias",
    ],
  },
  {
    title: "MECENAS",
    price: "600",
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
    title: "ADMIRADOR SECRETO",
    price: "1000",
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

export function TiersSection() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null)
  const [showCheckout, setShowCheckout] = useState(false)

  const handlePurchaseClick = (tier: Tier) => {
    setSelectedTier(tier)
    setShowCheckout(true)
  }

  return (
    <div id="tiers-section" className="py-24 bg-[#EEEBE8]">

      <div className="pb-24 pt-16">
        <h2 className="text-7xl font-heading text-gray-900 text-center pb-8">TICKETS</h2>
        <p className="max-w-md mx-auto text-center text-gray-800 font-serif text-xl">Con la compra de tu ticket nos ayudas a financiar la producción de esta experiencia única</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-x divide-[#D0CCC8] pt-8">
        {tiers.map((tier, index) => (
          <Card key={index}>
            <CardContent className="p-5 h-full flex flex-col gap-10">
              
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-900">{tier.title}</p>
                <p className="text-xs font-medium text-gray-700">
                  USD <span className="font-bold text-gray-900">{tier.price}</span>
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-fill h-auto flex items-center justify-center">
                  <img
                    src={tier.image || "/placeholder.svg"}
                    alt={tier.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-2">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-800">
                      <span className="mr-2 text-gray-500">•</span>
                      <span>
                        {feature === "2 entradas" || feature === "1 entrada" ? (
                          <strong>{feature}</strong>
                        ) : (
                          feature
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => handlePurchaseClick(tier)}
                variant="outline"
                className="w-full font-serif font-medium text-lg py-6 bg-transparent border-[#989693] text-[#423324] hover:bg-gray-900 hover:text-white rounded-full"
              >
                COMPRAR
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">¡Gracias por tu apoyo!</DialogTitle>
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