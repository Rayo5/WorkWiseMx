'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Newspaper, Briefcase, MessageSquare, User, HelpCircle, Bell, Bookmark } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import WorkWiseLogo from '@/public/logo_work_wise.webp'

export default function NavBar() {
  return (
    <header className="bg-[#fcfcfc] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={WorkWiseLogo} alt="WorkWise Logo" width={40} height={40} className="mr-3" />
          </div>

          {/* Desktop Navigation Icons */}
          <nav className="hidden sm:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/t/noticias">
                <Newspaper className="w-5 h-5" />
                <span className="sr-only">Noticias</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/t/vacantes">
                <Briefcase className="w-5 h-5" />
                <span className="sr-only">Vacantes</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/t/guardados">
                <Bookmark className="w-5 h-5" />
                <span className="sr-only">Guardados</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/t/mensajes">
                <MessageSquare className="w-5 h-5" />
                <span className="sr-only">Mensajes</span>
              </Link>
            </Button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notificaciones</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Nueva oferta de trabajo disponible
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Mensaje nuevo de Empresa XYZ
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Tu aplicación ha sido revisada
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
              <Link href="/ayuda">
                <HelpCircle className="h-5 w-5" />
                <span className="sr-only">Ayuda</span>
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Menú de usuario</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/t/perfil">Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/logout">Cerrar sesión</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="sm:hidden bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="flex justify-between">
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/dashboard/t/noticias" className="flex flex-col items-center">
                <Newspaper className="w-5 h-5" />
                <span className="text-xs mt-1">Noticias</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/dashboard/t/vacantes" className="flex flex-col items-center">
                <Briefcase className="w-5 h-5" />
                <span className="text-xs mt-1">Vacantes</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/dashboard/t/guardados" className="flex flex-col items-center">
                <Bookmark className="w-5 h-5" />
                <span className="text-xs mt-1">Guardados</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/dashboard/t/mensajes" className="flex flex-col items-center">
                <MessageSquare className="w-5 h-5" />
                <span className="text-xs mt-1">Mensajes</span>
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}