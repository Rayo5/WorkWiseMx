'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Building2, Search, MessageSquare, Menu, X, User, Newspaper, Briefcase, BookmarkIcon, Sun, Moon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

const navItems = [
  { name: 'user', icon: User, label: 'Usuario' },
  { name: 'news', icon: Newspaper, label: 'Noticias' },
  { name: 'companies', icon: Briefcase, label: 'Empresas' },
  { name: 'messages', icon: MessageSquare, label: 'Mensajes' },
  { name: 'saved', icon: BookmarkIcon, label: 'Ofertas Guardadas' },
];

type NavContentProps = {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  isMobile?: boolean;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  theme: 'light' | 'dark';
};

function NavContent({ activeItem, setActiveItem, isMobile = false, setIsMenuOpen, theme }: NavContentProps) {
  return (
    <TooltipProvider>
      {navItems.map((item) => (
        <Tooltip key={item.name}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size={isMobile ? "default" : "icon"}
              className={cn(
                isMobile ? "w-full justify-start px-2 py-4" : "w-12 h-12 mb-4",
                activeItem === item.name
                  ? theme === 'light' 
                    ? "bg-[#f0fdf4] text-[#22c55e] hover:bg-[#f0fdf4] hover:text-[#22c55e]"
                    : "bg-[#2a2a2a] text-[#22c55e] hover:bg-[#2a2a2a] hover:text-[#22c55e]"
                  : theme === 'light'
                    ? "text-gray-600 hover:bg-[#f0fdf4] hover:text-[#22c55e]"
                    : "text-gray-300 hover:bg-[#2a2a2a] hover:text-[#22c55e]"
              )}
              onClick={() => {
                setActiveItem(item.name)
                if (isMobile) setIsMenuOpen?.(false)
              }}
            >
              <item.icon className={cn("h-5 w-5", isMobile && "mr-2")} />
              {isMobile && <span>{item.label}</span>}
              {!isMobile && <span className="sr-only">{item.label}</span>}
            </Button>
          </TooltipTrigger>
          {!isMobile && (
            <TooltipContent side="right" className={theme === 'light' ? "bg-white text-gray-800" : "bg-[#2a2a2a] text-gray-200"}>
              <p>{item.label}</p>
            </TooltipContent>
          )}
        </Tooltip>
      ))}
    </TooltipProvider>
  )
}

export default function WorkerPortal() {
  const [activeItem, setActiveItem] = useState<string>('user')
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={cn(
      "flex h-screen",
      theme === 'light' ? "bg-white text-gray-800" : "bg-[#1f1f1f] text-gray-200"
    )}>
      <nav className={cn(
        "hidden md:flex w-16 flex-col items-center py-4 shadow-sm",
        theme === 'light' ? "bg-white" : "bg-[#1f1f1f]"
      )}>
        <div className="mb-6">
          <Image src="/placeholder.svg" alt="Logo" width={40} height={40} />
        </div>
        <NavContent 
          activeItem={activeItem} 
          setActiveItem={setActiveItem}
          theme={theme}
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="mt-auto"
        >
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </nav>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-6 w-6 text-gray-600" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className={cn(
          "w-[250px] md:hidden p-0",
          theme === 'light' ? "bg-white" : "bg-[#1f1f1f]"
        )}>
          <nav className="flex flex-col h-full py-4">
            <div className="mb-6 px-4">
              <Image src="/placeholder.svg" alt="Logo" width={40} height={40} />
            </div>
            <ScrollArea className="flex-grow px-2">
              <NavContent 
                activeItem={activeItem} 
                setActiveItem={setActiveItem} 
                isMobile 
                setIsMenuOpen={setIsMenuOpen}
                theme={theme}
              />
            </ScrollArea>
            <Button
              variant="ghost"
              size="default"
              onClick={toggleTheme}
              className="mt-auto mx-2"
            >
              {theme === 'light' ? <Moon className="h-5 w-5 mr-2" /> : <Sun className="h-5 w-5 mr-2" />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        {activeItem === 'user' && <UserSection theme={theme} />}
        {activeItem === 'news' && <NewsSection theme={theme} />}
        {activeItem === 'companies' && <CompaniesSection theme={theme} />}
        {activeItem === 'messages' && <MessagesSection theme={theme} />}
        {activeItem === 'saved' && <SavedOffersSection theme={theme} />}
      </main>
    </div>
  )
}

function UserSection({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <Card className={cn(
      "w-full max-w-2xl mx-auto",
      theme === 'light' ? "bg-[#f0fdf4]" : "bg-[#2a2a2a]"
    )}>
      <CardHeader>
        <CardTitle>Perfil de Usuario</CardTitle>
        <CardDescription>Actualiza tu información personal</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Tu nombre" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" placeholder="tu@email.com" type="email" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-2">
        <Button variant="outline" className="w-full sm:w-auto">Cancelar</Button>
        <Button className="w-full sm:w-auto bg-[#22c55e] text-white hover:bg-[#22c55e]/90">Guardar cambios</Button>
      </CardFooter>
    </Card>
  )
}

function NewsSection({ theme }: { theme: 'light' | 'dark' }) {
  const news = [
    { title: "Nuevo curso disponible", description: "Aprende las últimas tecnologías web" },
    { title: "Actualización de la plataforma", description: "Nuevas características para mejorar tu experiencia" },
    { title: "Evento de networking", description: "Conéctate con profesionales de la industria" },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((item, index) => (
        <Card key={index} className={cn(
          theme === 'light' ? "bg-[#f0fdf4]" : "bg-[#2a2a2a]"
        )}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{item.description}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#22c55e] text-white hover:bg-[#22c55e]/90">Leer más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function CompaniesSection({ theme }: { theme: 'light' | 'dark' }) {
  const companies = [
    { name: "TechCorp", job: "Desarrollador Frontend", description: "Buscamos un desarrollador con experiencia en React" },
    { name: "DataSystems", job: "Analista de Datos", description: "Oportunidad para trabajar con big data y machine learning" },
    { name: "CreativeDesign", job: "Diseñador UX/UI", description: "Únete a nuestro equipo de diseño innovador" },
  ]

  return (
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="grid gap-6">
        {companies.map((company, index) => (
          <Card key={index} className={cn(
            theme === 'light' ? "bg-[#f0fdf4]" : "bg-[#2a2a2a]"
          )}>
            <CardHeader>
              <CardTitle>{company.name}</CardTitle>
              <CardDescription>{company.job}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{company.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between gap-2">
              <Button className="w-full sm:w-auto bg-[#22c55e] text-white hover:bg-[#22c55e]/90">Aplicar</Button>
              <Button variant="outline" className="w-full sm:w-auto">Guardar</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}

function MessagesSection({ theme }: { theme: 'light' | 'dark' }) {
  const messages = [
    { sender: "TechCorp", message: "Gracias por tu aplicación. Nos gustaría programar una entrevista." },
    { sender: "Soporte", message: "¿Cómo podemos ayudarte hoy?" },
    { sender: "DataSystems", message: "Hemos revisado tu perfil y creemos que serías una gran adición a nuestro equipo." },
  ]

  return (
    <Card className={cn(
      theme === 'light' ? "bg-[#f0fdf4]" : "bg-[#2a2a2a]"
    )}>
      <CardHeader>
        <CardTitle>Mensajes</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-20rem)]">
          {messages.map((msg, index) => (
            <div key={index} className={cn(
              "mb-4 p-3 rounded-lg",
              theme === 'light' ? "bg-white" : "bg-[#1f1f1f]"
            )}>
              <p className="font-semibold">{msg.sender}</p>
              <p>{msg.message}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex w-full gap-2">
          <Input placeholder="Escribe un mensaje..." className="flex-grow" />
          <Button className="bg-[#22c55e] text-white hover:bg-[#22c55e]/90">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  )
}

function SavedOffersSection({ theme }: { theme: 'light' | 'dark' }) {
  const savedOffers = [
    { company: "TechCorp", job: "Desarrollador Frontend", description: "Posición para desarrollador React con 3+ años de experiencia" },
    { company: "DataSystems", job: "Analista de Datos Senior", description: "Buscamos un analista con experiencia en Python y SQL" },
  ]

  return (
    <div className="grid gap-6">
      {savedOffers.map((offer, index) => (
        <Card key={index} className={cn(
          theme === 'light' ? "bg-[#f0fdf4]" : "bg-[#2a2a2a]"
        )}>
          <CardHeader>
            
            <CardTitle>{offer.company}</CardTitle>
            <CardDescription>{offer.job}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{offer.description}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#22c55e] text-white hover:bg-[#22c55e]/90">Ver detalles</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}