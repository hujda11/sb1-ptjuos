import React from 'react'
import { Calendar, Users, HeartHandshake, BarChart, Clipboard, Camera } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-12 w-12 text-blue-600" />,
      title: 'Venue Booking Management',
      description: 'Streamline your venue bookings with our intuitive calendar system. Manage multiple venues, avoid double bookings, and keep track of all your events in one place.'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Client Relationship Management',
      description: 'Keep all your client information organized and accessible. Track preferences, communication history, and special requests to provide personalized service.'
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-blue-600" />,
      title: 'Vendor Coordination',
      description: 'Seamlessly coordinate with caterers, decorators, and other vendors. Share event details, timelines, and requirements to ensure flawless execution.'
    },
    {
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      title: 'Analytics and Reporting',
      description: 'Gain valuable insights into your business performance. Generate reports on bookings, revenue, and client satisfaction to make data-driven decisions.'
    },
    {
      icon: <Clipboard className="h-12 w-12 text-blue-600" />,
      title: 'Event Planning Tools',
      description: 'Access a suite of planning tools including customizable checklists, timeline creators, and budget trackers to keep every event on track and within budget.'
    },
    {
      icon: <Camera className="h-12 w-12 text-blue-600" />,
      title: 'Virtual Tours',
      description: 'Offer virtual tours of your venues to potential clients. Showcase your spaces with high-quality images and 360-degree views, making it easier for clients to choose the perfect venue.'
    }
  ]

  return (
    <div className="bg-gray-50">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-center">
            Our Services
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-gray-700 mb-12 text-center">
            Discover how Venue Vista can transform your wedding venue management experience with our comprehensive suite of services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-center">{service.title}</h3>
                  <p className="text-center text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services