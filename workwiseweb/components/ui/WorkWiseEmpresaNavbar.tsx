'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Building2, Search, MessageSquare, Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import React from 'react'; // Import React

// Define the types for nav items
const navItems = [
  { name: 'company', icon: Building2, label: 'Empresa' },
  { name: 'search', icon: Search, label: 'Buscar' },
  { name: 'messages', icon: MessageSquare, label: 'Mensajes' },
];

// Define the prop types for NavContent
type NavContentProps = {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  isMobile?: boolean;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavContent({ activeItem, setActiveItem, isMobile = false, setIsMenuOpen }: NavContentProps) {
  return (
    <TooltipProvider>
      {navItems.map((item) => (
        <Tooltip key={item.name}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size={isMobile ? "default" : "icon"}
              className={cn(
                isMobile ? "w-full justify-start px-2 py-6" : "w-12 h-12 mb-4",
                activeItem === item.name
                  ? "bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              )}
              onClick={() => {
                setActiveItem(item.name)
                if (isMobile) setIsMenuOpen?.(false) // Optional chaining in case setIsMenuOpen is not provided
              }}
            >
              <item.icon className={cn("h-5 w-5", isMobile && "mr-2")} />
              {isMobile && <span>{item.label}</span>}
              {!isMobile && <span className="sr-only">{item.label}</span>}
            </Button>
          </TooltipTrigger>
          {!isMobile && (
            <TooltipContent side="right" className="bg-white text-gray-800 shadow-lg">
              <p>{item.label}</p>
            </TooltipContent>
          )}
        </Tooltip>
      ))}
    </TooltipProvider>
  )
}

export default function WorkWiseEmpresaNavbar() {
  const [activeItem, setActiveItem] = useState<string>('company')
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <div className="flex h-screen bg-gray-50">
      <nav className="bg-white w-16 flex flex-col items-center py-4 shadow-sm">
        <div className="mb-6">
          <Image src="/placeholder.svg" alt="Logo" width={40} height={40} />
        </div>
        <NavContent 
          activeItem={activeItem} 
          setActiveItem={setActiveItem} 
        />
      </nav>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="sm:hidden fixed top-4 left-4">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] sm:hidden p-0">
          <nav className="flex flex-col py-4">
            <div className="mb-6 px-4">
              <Image src="/placeholder.svg" alt="Logo" width={40} height={40} />
            </div>
            <NavContent 
              activeItem={activeItem} 
              setActiveItem={setActiveItem} 
              isMobile 
              setIsMenuOpen={setIsMenuOpen} 
            />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
