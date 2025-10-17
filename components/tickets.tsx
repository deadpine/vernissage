"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Ticket {
  day: string
  month: string
  link: string
}

const tickets: Ticket[] = [
  {
    day: "8",
    month: "NOV",
    link: "https://www.boletera.com.ar/vernissage/8nov",
  },
  {
    day: "9",
    month: "NOV",
    link: "https://www.boletera.com.ar/vernissage/9nov",
  },
  {
    day: "15",
    month: "NOV",
    link: "https://www.boletera.com.ar/vernissage/15nov",
  },
  {
    day: "22",
    month: "NOV",
    link: "https://www.boletera.com.ar/vernissage/22nov",
  },
]

export function Tickets() {
  return (

    <div id="tickets-section" className="py-24 bg-[#EEEBE8]">
      
      <h2 className="text-7xl font-heading text-gray-900 text-center pb-8">TICKETS</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:py-10 w-full max-w-7xl mx-auto px-4">
        <Image 
          src="/images/mecenas.png" 
          alt="Tickets" 
          width={100} 
          height={100} 
          className="w-80 h-80 object-contain"
        />
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {tickets.map((ticket, index) => (
            <div key={index} className="p-4 w-full h-80 gap-4 flex flex-col justify-between border border-[#B4ABA2]">
              <div className="flex flex-col items-start pt-2">
                <p className="text-8xl font-heading font-medium text-gray-900">
                  {ticket.day}
                </p>
                <p className="text-5xl font-heading font-medium text-gray-900">
                  {ticket.month} 
                </p>
                <p className="test-sm text-gray-500 pt-2">20:30 HS</p>
              </div>

              <Button
                variant="outline"
                className="w-full font-serif font-medium text-base py-6 bg-transparent border-[#989693] text-[#423324] hover:bg-gray-900 hover:text-white rounded-full"
                onClick={() => window.open(ticket.link, '_blank')}
              >
                COMPRAR
              </Button>
            </div>
          ))}
        </div>
      </div>

      <p className="max-w-md mx-auto text-center text-gray-800 font-serif text-lg pt-8">
        Todas las funciones incluyen banquete y bebidas.
      </p>
    </div>
  )
}
