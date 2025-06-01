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
        "Las presentaciones se realizan en diferentes espacios culturales de la ciudad. Las fechas y horarios específicos se anuncian en nuestra página web y redes sociales con anticipación.",
    },
    {
      question: "¿Hasta cuándo se puede comprar el ticket?",
      answer:
        "Los tickets están disponibles hasta agotar el cupo para cada función. Recomendamos comprar con anticipación ya que las entradas suelen agotarse rápidamente.",
    },
    {
      question: "¿Una vez que compre el ticket que pasa?",
      answer:
        "Una vez realizada la compra, recibirás un correo electrónico con la confirmación y los detalles de tu reserva. El día del evento deberás presentar tu confirmación digital o impresa.",
    },
    {
      question: "¿La experiencia es apta para todo público?",
      answer:
        "La experiencia está recomendada para mayores de 16 años. Algunas escenas pueden contener temáticas adultas y el recorrido requiere cierta movilidad física.",
    },
    {
      question: "¿Se pueden tomar fotos o filmar durante la experiencia?",
      answer:
        "Para preservar la inmersión y la privacidad de todos los participantes, no se permite tomar fotografías ni videos durante la experiencia. Habrá momentos específicos al final donde se podrán tomar recuerdos.",
    },
    {
      question: "¿Cómo puedo apoyar el proyecto?",
      answer:
        "Puedes apoyar el proyecto adquiriendo alguno de nuestros niveles de patrocinio que se muestran en esta página. Cada aporte nos ayuda a seguir creando experiencias artísticas innovadoras.",
    },
  ]

  return (
    <div className="py-16 px-8 bg-[#f5f3f0]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">PREGUNTAS FRECUENTES</h2>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <AccordionItem value={`item-${index}`} className="border-b border-gray-300 pb-6">
                <AccordionTrigger className="flex justify-between text-left font-serif text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-700 font-serif">{faq.answer}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
