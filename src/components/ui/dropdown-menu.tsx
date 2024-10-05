import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface DropdownMenuProps {
  children: React.ReactNode
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DropdownMenuTrigger) {
          return React.cloneElement(child, { onClick: () => setIsOpen(!isOpen) })
        }
        return child
      })}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === DropdownMenuContent) {
              return child
            }
          })}
        </div>
      )}
    </div>
  )
}

export const DropdownMenuTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children }) => {
  return <>{children}</>
}

export const DropdownMenuContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="py-1">{children}</div>
}

interface DropdownMenuItemProps {
  children: React.ReactNode
  href: string
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children, href }) => {
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(href)
  }

  return (
    <button
      onClick={handleClick}
      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
    >
      {children}
    </button>
  )
}