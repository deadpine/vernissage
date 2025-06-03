"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Copy } from "lucide-react"

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
    features: ["1 entrada", "Tu nombre en los agradecimientos", "Acceso anticipado a noticias"],
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
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null)

  const handlePurchaseClick = (tier: Tier) => {
    setSelectedTier(tier)
    setShowCheckout(true)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const getCardPaymentLink = (tierTitle: string) => {
    const links = {
      CÓMPLICE: "https://buy.stripe.com/aFa14o6D9acg2bogx4gjC00",
      "EN LA LISTA": "https://buy.stripe.com/dRmeVe9Pl8483fs1CagjC04",
      ANFITRIÓN: "https://buy.stripe.com/eVq8wQe5Beswg2eft0gjC03",
      MECENAS: "https://buy.stripe.com/6oU28saTp3NSeYadkSgjC02",
      "ADMIRADOR SECRETO": "https://buy.stripe.com/5kQ28sgdJfwA03g0y6gjC01",
    }
    return links[tierTitle as keyof typeof links] || "#"
  }

  return (
    <div id="tiers-section" className="py-24 bg-[#EEEBE8]">
      <div className="pb-24 pt-16 px-8">
        <h2 className="text-7xl font-heading text-gray-900 text-center pb-8">TICKETS</h2>
        <p className="max-w-md mx-auto text-center text-gray-800 font-serif text-xl">
          Con la compra de tu ticket nos ayudas a financiar la producción de esta experiencia única
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-x divide-[#D0CCC8] pt-8">
        {tiers.map((tier, index) => (
          <Card key={index}>
            <CardContent className="px-5 py-8 h-full flex flex-col gap-8 md:py-5">
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
                        {feature === "2 entradas" || feature === "1 entrada" ? <strong>{feature}</strong> : feature}
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

      <Dialog
        open={showCheckout}
        onOpenChange={(open) => {
          setShowCheckout(open)
          if (!open) setSelectedPaymentMethod(null)
        }}
      >
        <DialogContent className="max-w-lg">
          {/* <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center font-serif">¡Gracias por tu apoyo!</DialogTitle>
          </DialogHeader> */}

          <div className="py-6 space-y-6">
            {/* Selected Tier Information */}
            {selectedTier && (
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={selectedTier.image || "/placeholder.svg"}
                    alt={selectedTier.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{selectedTier.title}</h3>
                  <p className="text-xl font-bold text-gray-700">USD {selectedTier.price}</p>
                </div>
              </div>
            )}

            <div className="text-center">
              <p className="text-gray-600 font-serif mb-6">Cómo queres pagar?</p>
            </div>

            {/* Payment Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Bank Transfer */}
              <div className="border border-stone-200 overflow-hidden">
                <div
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors text-center"
                  onClick={() => setSelectedPaymentMethod(selectedPaymentMethod === "bank" ? null : "bank")}
                >
                  <div className="text-3xl">🏦</div>
                  <h4 className="font-semibold text-gray-900 font-sans text-base/5 flex-1">Transferencia bancaria</h4>
                </div>
              </div>

              {/* Crypto Payment */}
              <div className="border border-stone-200 overflow-hidden">
                <div
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors text-center"
                  onClick={() => setSelectedPaymentMethod(selectedPaymentMethod === "crypto" ? null : "crypto")}
                >
                  <div className="text-3xl">💳</div>
                  <h4 className="font-semibold text-gray-900 font-sans text-base/5 flex-1">Cripto Bitcoin o USD Coin</h4>
                </div>
              </div>

              {/* Card Payment */}
              <div className="border border-stone-200 p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                <a
                  href={getCardPaymentLink(selectedTier?.title || "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 w-full text-center"
                >
                  <div className="text-3xl">💳</div>
                  <h4 className="font-semibold text-gray-900 font-sans text-base/5 flex-1">Tarjeta de débito/crédito</h4>
                </a>
              </div>
            </div>

            {/* Payment Details - Show below the row */}
            {selectedPaymentMethod === "bank" && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                <div className="space-y-2 text-sm font-serif">
                  <p>
                    <strong>Marina di Fonzo</strong>
                  </p>
                  <p>Banco Itaú</p>
                  <p>Caja de ahorro n° 9568716</p>
                  <p>Moneda: USD</p>
                </div>
              </div>
            )}

            {selectedPaymentMethod === "crypto" && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border space-y-4">
                <div>
                  <p className="font-semibold text-sm font-serif mb-2">Pago en BTC:</p>
                  <div className="flex items-center space-x-2">
                    <code className="bg-white px-2 py-1 rounded text-xs flex-1 border truncate overflow-hidden">bc1qkfgdmxrdwpy0xt527trwgs25cp9kp5nguxafx4wlv39j0plwttds4ychkw</code>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard("bc1qkfgdmxrdwpy0xt527trwgs25cp9kp5nguxafx4wlv39j0plwttds4ychkw")}
                      className="text-xs"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-sm font-serif mb-2">Pago en USDC (ERC20):</p>
                  <div className="flex items-center space-x-2">
                    <code className="bg-white px-2 py-1 rounded text-xs flex-1 border truncate overflow-hidden">1234567890</code>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard("1234567890")}
                      className="text-xs"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* <div className="text-center pt-4">
              <Button
                onClick={() => setShowCheckout(false)}
                className="w-full bg-white hover:bg-gray-800 text-gray-900 py-3 font-serif"
              >
                Cancelar
              </Button>
            </div> */}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
