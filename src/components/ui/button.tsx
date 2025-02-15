import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ variant = 'default', children, className, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    ghost: 'text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className || ''}`

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}