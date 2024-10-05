import React from 'react'
import { Card, CardContent } from './ui/card'
import { Users, DollarSign, MapPin } from 'lucide-react'

const venues = [
  {
    name: 'Sunset Beach Resort',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    capacity: 200,
    price: 500,
    description: 'A beautiful beachfront venue with stunning sunset views.',
    location: 'Malibu, CA'
  },
  {
    name: 'Elegant Gardens',
    image: 'https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    capacity: 150,
    price: 400,
    description: 'A lush garden setting perfect for outdoor ceremonies and receptions.',
    location: 'Napa Valley, CA'
  },
  {
    name: 'City View Loft',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    capacity: 100,
    price: 350,
    description: 'A modern loft space with panoramic city views.',
    location: 'New York, NY'
  }
]

const FeaturedVenues = () => {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tighter text-indigo-900 text-center mb-12">
          Featured Venues
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <Card key={index} className="overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <img src={venue.image} alt={venue.name} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-900">{venue.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="text-sm">{venue.location}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-emerald-600" />
                    <span>Capacity: {venue.capacity}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-emerald-600" />
                    <span>${venue.price}/hour</span>
                  </div>
                </div>
                <p className="text-gray-700">{venue.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedVenues