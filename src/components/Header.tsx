import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Landmark, Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Landmark className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-lg font-semibold">Venue Vista</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" onClick={toggleMenu}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header