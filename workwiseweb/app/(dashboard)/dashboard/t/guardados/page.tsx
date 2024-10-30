'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Newspaper, Briefcase, MessageSquare, User, HelpCircle, Bell, Bookmark, Search, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import WorkWiseLogo from '@/public/logo_work_wise.webp'

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and search (hidden on mobile) */}
            <div className="flex items-center">
              <Image src={WorkWiseLogo} alt="WorkWise Logo" width={40} height={40} className="mr-3" />

            </div>

            {/* Navigation Icons */}
            <nav className="hidden sm:flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/noticias">
                  <Newspaper className="w-5 h-5" />
                  <span className="sr-only">Noticias</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/vacantes">
                  <Briefcase className="w-5 h-5" />
                  <span className="sr-only">Vacantes</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/guardados">
                  <Bookmark className="w-5 h-5" />
                  <span className="sr-only">Guardados</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/mensajes">
                  <MessageSquare className="w-5 h-5" />
                  <span className="sr-only">Mensajes</span>
                </Link>
              </Button>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                <HelpCircle className="h-5 w-5" />
                <span className="sr-only">Help</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
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
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search (visible only on small screens) */}
      <div className="sm:hidden bg-white p-4 border-b border-gray-200">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            className="w-full pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Mobile Navigation (visible only on small screens) */}
      <nav className="sm:hidden bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-3">
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/dashboard/noticias" className="flex flex-col items-center">
                <Newspaper className="w-5 h-5" />
                <span className="text-xs mt-1">Noticias</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/dashboard/vacantes" className="flex flex-col items-center">
                <Briefcase className="w-5 h-5" />
                <span className="text-xs mt-1">Vacantes</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/dashboard/guardados" className="flex flex-col items-center">
                <Bookmark className="w-5 h-5" />
                <span className="text-xs mt-1">Guardados</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link href="/dashboard/mensajes" className="flex flex-col items-center">
                <MessageSquare className="w-5 h-5" />
                <span className="text-xs mt-1">Mensajes</span>
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
        {/* Placeholder for dashboard content */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Card {i + 1}</h2>
              <p className="text-gray-600">This is a placeholder for dashboard content. It would contain relevant information or statistics.</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}