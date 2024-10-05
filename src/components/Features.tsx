import React from 'react'
import { Calendar, Users, HeartHandshake, BarChart } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const Features = () => {
  const features = [
    {
      icon: <Calendar className="h-12 w-12 text-emerald-600" />,
      title: 'Smart Scheduling',
      description: 'Effortlessly manage bookings and avoid conflicts with our intelligent calendar system.',
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-600" />,
      title: 'Client Management',
      description: 'Keep track of client preferences and communications all in one place.',
    },
    {
      icon: <HeartHandshake className="h-12 w-12 text-emerald-600" />,
      title: 'Vendor Coordination',
      description: 'Seamlessly coordinate with caterers, decorators, and other vendors for flawless event execution.',
    },
    {
      icon: <BarChart className="h-12 w-12 text-emerald-600" />,
      title: 'Analytics & Insights',
      description: 'Gain valuable insights into your business performance with detailed reports and analytics.',
    },
  ]

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">
          Powerful Features for Seamless Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-indigo-900">{feature.title}</h3>
                <p className="text-center text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features