"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

export function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: "¿Qué es Vernissage?",
      answer:
        "Vernissage es una producción original que combina una experiencia inmersiva de teatro de recorrido, arte, performance, música y gastronomía. Es un viaje sensorial donde el espectador también se convierte en protagonista.",
    },
    {
      question: "¿Dónde y cuándo se realiza?",
      answer:
        "La primera edición de Vernissage será en el mes de Noviembre en Punta del Este. Las fechas, horarios y ubicación serán comunicados a quienes adquieran sus tickets.",
    },
    {
      question: "¿Hasta cuándo se puede comprar el ticket?",
      answer:
        "Los tickets solo están disponibles en esta preventa. Con la compra de tu ticket nos ayudas a financiar la producción de la obra. No habrá venta de tickets en la entrada y los cupos son limitados por lo cual te recomendamos adquirir el tuyo lo antes posible! ",
    },
    {
      question: "¿Una vez que compre el ticket que pasa?",
      answer:
        "Vas a recibir un mail de confirmación y un mes antes del estreno te vamos a contactar para que puedas agendarte para alguna de las funciones previstas durante el mes de Noviembre.",
    },
    {
      question: "¿La experiencia es apta para todo público?",
      answer:
        "Está dirigida principalmente a un público adulto por el contenido conceptual y el diseño del espacio, pero no contiene material explícito.",
    },
    {
      question: "¿Se pueden tomar fotos o filmar durante la experiencia?",
      answer:
        "No. al igual que cuando vas al cine y/o teatro, los celulares deberán permanecer en silencio, evitar la interacción con el dispositivo móvil y se taparán las cámaras con un sticker. Lo que pase esa noche… solo lo sabrán quienes estén allí.",
    },
    {
      question: "¿Cómo puedo apoyar el proyecto?",
      answer:
        "Además de adquirir las entradas especiales “mecenas” y “admirador secreto”, podés sumarte como colaborador, aliado o patrocinador. Escribinos a hola@vernissageteatro.com para más info.",
    },
  ]

  return (
    <div className="py-40 px-8 bg-[#E9E5E2]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-6xl leading-[1] font-heading text-gray-900 text-center">
          PREGUNTAS FRECUENTES
        </h2>

        <Accordion type="single" collapsible className="mt-24 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <AccordionItem value={`item-${index}`} className="border-b border-[#D0CBC8] pb-4">
                <AccordionTrigger className="flex justify-between text-left font-serif text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 pr-12 text-gray-800 font-serif text-lg">{faq.answer}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
