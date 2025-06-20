"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Copy, Landmark, Bitcoin, CreditCard } from "lucide-react"

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
        <p className="max-w-sm mx-auto text-center text-gray-800 font-serif text-xl">
          Con la compra de tu ticket nos ayudas a producir esta experiencia única.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-x divide-[#D0CCC8] pt-8">
        {tiers.map((tier, index) => (
          <Card key={index}>
            <CardContent className="px-5 py-8 h-full flex flex-col gap-8 md:py-5">
              <div className="flex items-center justify-between">
                <p className="text-base md:text-xs font-semibold text-gray-900">{tier.title}</p>
                <p className="text-base md:text-xs font-medium text-gray-700">
                  USD <span className="font-bold text-gray-900">{tier.price}</span>
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-fill h-auto flex items-center justify-center">
                  <img
                    src={tier.image || "/placeholder.svg"}
                    alt={tier.title}
                    className="w-full h-full max-w-[16rem] md:max-w-full object-contain"
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
        <DialogContent className="max-w-2xl">

          <div className="pt-8 pb-4">
            {/* Selected Tier Information */}
            {selectedTier && (
              <div className="flex justify-center items-center space-x-4 border-y border-[#BEB1A7]">
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={selectedTier.image || "/placeholder.svg"}
                    alt={selectedTier.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="pr-12 pt-2">
                  <h3 className="font-bold text-lg text-black">{selectedTier.title}</h3>
                  <p className="text-lg font-bold text-black">USD {selectedTier.price}</p>
                  {selectedTier.title === "CÓMPLICE" && (
                    <p className="text-sm text-gray-600 mt-1 max-w-xs">* Tené en cuenta que este ticket no incluye entrada a la función.</p>
                  )}
                </div>
              </div>
            )}

            <div className="text-center">
              <p className="text-black text-lg font-serif my-10">¿Cómo querés pagar?</p>
            </div>

            {/* Payment Methods */}
            <div className="grid grid-cols-3">
              {/* Bank Transfer */}
              <div className="border border-y-[#BEB1A7] overflow-hidden">
                <div
                  className="px-1 py-4 hover:bg-gray-50 cursor-pointer transition-colors text-center"
                  onClick={() => setSelectedPaymentMethod(selectedPaymentMethod === "bank" ? null : "bank")}
                >
                  <div className="text-3xl flex justify-center">
                    <Landmark className="h-6 w-6" />
                  </div>
                  <h4 className="pt-4 text-xs font-medium text-gr9y-700 uppercase flex-1">Transferencia<br />bancaria</h4>
                </div>
              </div>

              {/* Crypto Payment */}
              <div className="border border-y-[#BEB1A7] overflow-hidden">
                <div
                  className="px-1 py-4 hover:bg-gray-50 cursor-pointer transition-colors text-center"
                  onClick={() => setSelectedPaymentMethod(selectedPaymentMethod === "crypto" ? null : "crypto")}
                >
                  <div className="text-3xl flex justify-center">
                    <Bitcoin className="h-6 w-6" />
                  </div>
                  <h4 className="pt-4 text-xs font-medium text-g9ay-700 uppercase flex-1">Cripto<br />Bitcoin / USDC</h4>
                </div>
              </div>

              {/* Card Payment */}
              <div className="border border-y-[#BEB1A7] overflow-hidden">
                <div
                  className="px-1 py-4 hover:bg-gray-50 cursor-pointer transition-colors text-center"
                  onClick={() => setSelectedPaymentMethod(selectedPaymentMethod === "card" ? null : "card")}
                >
                  <div className="text-3xl flex justify-center">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h4 className="pt-4 text-xs font-medium text-gray-900 uppercase flex-1">Tarjeta<br />débito / crédito</h4>
                </div>
              </div>
            </div>

            {/* Payment Details - Show below the row */}
            {selectedPaymentMethod === "bank" && (
              <div className="py-8 px-4 border max-w-full border-b-[#BEB1A7]">
                <div className="space-y-2 text-base text-center mb-4">
                  <p>
                    <strong>Marina di Fonzo</strong>
                  </p>
                  <p>Banco Itaú</p>
                  <p>Caja de ahorro n° 9568716</p>
                  <p>Moneda: USD</p>
                </div>
                <div className="text-center pt-2 text-sm">
                  <p>Por favor enviá el comprobante por mail a:</p>
                  <p className="font-semibold"><a href="mailto:hola@vernissageteatro.com">hola@vernissageteatro.com</a></p>
                </div>
              </div>
            )}

            {selectedPaymentMethod === "crypto" && (
              <div className="py-8 px-4 border max-w-full border-b-[#BEB1A7]">
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-base text-center mb-2">Pago en BTC:</p>
                    <div className="flex items-center bg-[#FCFBFA] rounded-lg pl-3 pr-2 py-2">
                      <code className="bg-none text-xs flex-1 break-all mr-2">bc1qn5nhk94egdqqrpz9yv6wgsq5un6ulh2fpt8uvqr5x5s64z7pxcespgsdt9</code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard("bc1qn5nhk94egdqqrpz9yv6wgsq5un6ulh2fpt8uvqr5x5s64z7pxcespgsdt9")}
                        className="shrink-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-base text-center mb-2">Pago en USDC (ERC20):</p>
                    <div className="flex items-center bg-[#FCFBFA] rounded-lg pl-3 pr-2 py-2">
                      <code className="bg-none text-xs flex-1 break-all mr-2">0xAA2426Ae33AC155fD6D4E9eAd7cCe32108abe7bb</code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard("0xAA2426Ae33AC155fD6D4E9eAd7cCe32108abe7bb")}
                        className="shrink-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-center pt-2 text-sm">
                    <p>Por favor enviá el comprobante por mail a:</p>
                    <p className="font-semibold"><a href="mailto:hola@vernissageteatro.com">hola@vernissageteatro.com</a></p>
                  </div>
                </div>
              </div>
            )}

            {selectedPaymentMethod === "card" && (
              <div className="py-16 px-4 border max-w-full border-b-[#BEB1A7] center">
                <p className="text-base text-center text-gray-900 mb-8">Se agregará un 10% adicional en concepto de gastos de procesamiento.</p>
                <Button
                  onClick={() => window.open(getCardPaymentLink(selectedTier?.title || ""), "_blank")}
                  className="w-full bg-gray-900 hover:bg-white text-white hover:text-gray-900 py-4"
                >
                  Pagar con tarjeta
                </Button>
              </div>
            )}

          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
