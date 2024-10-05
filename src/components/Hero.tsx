import React, { useState } from 'react'
import { Button } from './ui/button'
import RegistrationForm from './RegistrationForm'
import CalendlyModal from './CalendlyModal'
import { ArrowRight } from 'lucide-react'

const Hero: React.FC = () => {
  const [showForm, setShowForm] = useState(false)
  const [showCalendly, setShowCalendly] = useState(false)

  return (
    <section className="w-full py-24 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-600">
              Elevate Your Wedding Venue Management
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Streamline bookings, coordinate events, and create unforgettable experiences with VenueVista's all-in-one management system.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700 transition duration-300 ease-in-out transform hover:scale-105" onClick={() => setShowForm(true)}>
                Try it for free
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-indigo-900 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setShowCalendly(true)}
              >
                Book a demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-600 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Elegant Wedding Venue" 
                className="relative z-10 rounded-lg shadow-2xl transform -rotate-3 transition duration-300 ease-in-out hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
      {showForm && <RegistrationForm onClose={() => setShowForm(false)} />}
      <CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
    </section>
  )
}

export default Hero