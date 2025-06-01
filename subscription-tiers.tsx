"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Minus, Plus, ExternalLink, User } from "lucide-react"

interface Tier {
  id: string
  title: string
  price: string
  priceValue: number
  icon: string
  features: string[]
}

interface PurchaseForm {
  firstName: string
  email: string
  phone: string
}

export default function Component() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null)
  const [quantities, setQuantities] = useState<Record<string, number>>({
    "01": 1,
    "02": 1,
    "03": 1,
    "04": 1,
    "05": 1,
  })
  const [showCheckout, setShowCheckout] = useState(false)
  const [errors, setErrors] = useState<Partial<PurchaseForm>>({})
  const [formData, setFormData] = useState<PurchaseForm>({
    firstName: "",
    email: "",
    phone: "",
  })

  const tiers: Tier[] = [
    {
      id: "01",
      title: "CÓMPLICE",
      price: "USD 50",
      priceValue: 50,
      icon: "🏅",
      features: ["Tu nombre en los agradecimientos", "Acceso anticipado a noticias"],
    },
    {
      id: "02",
      title: "EN LA LISTA",
      price: "USD 150",
      priceValue: 150,
      icon: "✉️",
      features: ["1 entrada", "Tu nombre en los agradecimientos", "Acceso anticipado a noticias"],
    },
    {
      id: "03",
      title: "ANFITRIÓN",
      price: "USD 300",
      priceValue: 300,
      icon: "📖",
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
      priceValue: 600,
      icon: "🖼️",
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
      priceValue: 1000,
      icon: "🎩",
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

  const updateQuantity = (tierId: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [tierId]: Math.max(1, prev[tierId] + change),
    }))
  }

  const handlePurchaseClick = (tier: Tier) => {
    setSelectedTier(tier)
    setShowCheckout(true)
    setErrors({})
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<PurchaseForm> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "Nombre es requerido"
    if (!formData.email.trim()) newErrors.email = "Email es requerido"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido"
    if (!formData.phone.trim()) newErrors.phone = "Teléfono es requerido"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // Prepare data for redirect
    const purchaseData = {
      tier: selectedTier?.title,
      tierId: selectedTier?.id,
      quantity: quantities[selectedTier?.id || "01"],
      unitPrice: selectedTier?.priceValue,
      totalPrice: (selectedTier?.priceValue || 0) * quantities[selectedTier?.id || "01"],
      customer: formData,
    }

    // Log the data (in real implementation, you might want to save this to localStorage or send to your backend)
    console.log("Redirecting with purchase data:", purchaseData)

    // Create URL with parameters for the external payment site
    const params = new URLSearchParams({
      tier: selectedTier?.title || "",
      tierId: selectedTier?.id || "",
      quantity: quantities[selectedTier?.id || "01"].toString(),
      unitPrice: (selectedTier?.priceValue || 0).toString(),
      totalPrice: ((selectedTier?.priceValue || 0) * quantities[selectedTier?.id || "01"]).toString(),
      firstName: formData.firstName,
      email: formData.email,
      phone: formData.phone,
    })

    // Replace this URL with your actual payment/checkout site
    const redirectUrl = `https://your-payment-site.com/checkout?${params.toString()}`

    // Redirect to external payment site
    window.open(redirectUrl, "_blank")

    // Close modal and reset form
    setShowCheckout(false)
    setFormData({
      firstName: "",
      email: "",
      phone: "",
    })
  }

  const updateFormData = (field: keyof PurchaseForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const getTotalPrice = (tier: Tier | null) => {
    if (!tier) return 0
    return tier.priceValue * quantities[tier.id]
  }

  const getScaledFeatures = (features: string[], quantity: number) => {
    return features.map((feature) => {
      // Scale both "entradas" (plural) and "entrada" (singular) based on quantity
      if (feature.includes("entrada")) {
        const baseEntradas = Number.parseInt(feature.match(/\d+/)?.[0] || "0")
        const totalEntradas = baseEntradas * quantity
        // Use proper singular/plural form
        const entradaText = totalEntradas === 1 ? "entrada" : "entradas"
        return `${totalEntradas} ${entradaText}`
      }
      // Scale "Lámina impresa" based on quantity
      if (feature.includes("Lámina impresa")) {
        if (quantity > 1) {
          return `${quantity} Láminas impresas de una de las obras`
        }
        return feature
      }
      // Return other features unchanged
      return feature
    })
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {tiers.map((tier) => (
            <Card key={tier.id} className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">{tier.id}</span>
                    <span className="text-sm font-medium text-gray-900">{tier.price}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{tier.title}</h3>
                </div>

                {/* Icon/Illustration */}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <div className="w-32 h-32 flex items-center justify-center">
                    {tier.id === "01" && (
                      <div className="w-24 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-4 border-yellow-500">
                        <span className="text-yellow-900 font-bold text-lg">SM</span>
                      </div>
                    )}
                    {tier.id === "02" && (
                      <div className="relative">
                        <div className="w-20 h-14 bg-red-800 transform rotate-12"></div>
                        <div className="absolute top-2 left-2 w-16 h-10 bg-white border border-gray-300"></div>
                        <div className="absolute top-1 right-1 w-6 h-4 bg-orange-200 border border-orange-400 text-xs"></div>
                      </div>
                    )}
                    {tier.id === "03" && (
                      <div className="relative">
                        <div className="w-20 h-16 bg-gray-100 border-2 border-gray-400 rounded-sm"></div>
                        <div className="absolute top-2 left-2 w-16 h-12 bg-white border border-gray-300"></div>
                        <div className="absolute top-1 right-1 w-4 h-3 bg-orange-200 border border-orange-400"></div>
                        <div className="absolute bottom-2 right-2 w-8 h-2 bg-black rounded-full"></div>
                      </div>
                    )}
                    {tier.id === "04" && (
                      <div className="relative">
                        <div className="w-20 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 border-4 border-yellow-500 rounded-sm"></div>
                        <div className="absolute inset-2 bg-white border border-gray-300"></div>
                        <div className="absolute top-1 right-1 w-4 h-3 bg-orange-200 border border-orange-400"></div>
                        <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                      </div>
                    )}
                    {tier.id === "05" && (
                      <div className="relative">
                        <div className="w-20 h-16 bg-gray-600 rounded-t-full"></div>
                        <div className="absolute top-4 left-2 w-16 h-8 bg-gray-700 rounded-sm"></div>
                        <div className="absolute top-6 left-4 w-12 h-4 border-2 border-white"></div>
                        <div className="absolute top-1 right-2 w-6 h-4 bg-orange-200 border border-orange-400 text-xs"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
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

                {/* Button */}
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

      {/* Checkout Modal */}
      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Finalizar Compra - {selectedTier?.title}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Resumen del Pedido</h4>
              {/* Quantity Selector */}
              <div className="mb-4">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Cantidad</Label>
                <div className="flex items-center justify-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(selectedTier?.id || "01", -1)}
                    disabled={quantities[selectedTier?.id || "01"] <= 1}
                    className="h-8 w-8 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-semibold w-8 text-center">{quantities[selectedTier?.id || "01"]}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(selectedTier?.id || "01", 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>{selectedTier?.title}</span>
                  <span>
                    ${selectedTier?.priceValue} x {quantities[selectedTier?.id || "01"]}
                  </span>
                </div>
                <div className="flex justify-between items-center font-semibold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>${selectedTier ? getTotalPrice(selectedTier) : 0}</span>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p className="font-medium mb-1">Incluye:</p>
                <ul className="space-y-1">
                  {selectedTier &&
                    getScaledFeatures(selectedTier.features, quantities[selectedTier.id]).map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4" />
                <h4 className="font-semibold">Información Personal</h4>
              </div>
              <div>
                <Label htmlFor="firstName">Nombre *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6">
              <ExternalLink className="w-4 h-4 mr-2" />
              Continuar al Pago
            </Button>

            <Alert>
              <AlertDescription className="text-sm text-gray-600">
                Serás redirigido a nuestro sitio de pago seguro para completar la transacción.
              </AlertDescription>
            </Alert>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
