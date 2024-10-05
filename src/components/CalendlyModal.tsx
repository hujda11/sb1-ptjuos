import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-full max-w-4xl h-3/4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <div 
          className="calendly-inline-widget w-full h-full"
          data-url="https://calendly.com/hujer-david2/30min"
        ></div>
      </div>
    </div>
  )
}

export default CalendlyModal