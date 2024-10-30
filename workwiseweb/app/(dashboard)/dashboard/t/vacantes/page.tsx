'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Newspaper, Briefcase, MessageSquare, User, HelpCircle, ExternalLink, Bell, Bookmark } from 'lucide-react'
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

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-background text-foreground">
      {/* Left Sidebar */}
      <nav className="md:w-16 flex md:flex-col items-center justify-between md:justify-start py-2 md:py-4 px-4 md:px-0 bg-gray-100 border-b md:border-b-0 md:border-r border-gray-200">
        <div className="md:mb-8">
          <Image src={WorkWiseLogo} alt="Logo" width={40} height={40} />
        </div>
        <ul className="flex md:flex-col items-center md:space-y-4 space-x-4 md:space-x-0 md:flex-1">
          <li>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/t/noticias">
                <Newspaper className="w-5 h-5" />
                <span className="sr-only">Noticias</span>
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/t/vacantes">
                <Briefcase className="w-5 h-5" />
                <span className="sr-only">Vacantes</span>
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/t/guardados">
                <Bookmark className="w-5 h-5" />
                <span className="sr-only">Guardados</span>
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="default" size="icon" asChild>
              <Link href="/dashboard/t/mensajes">
                <MessageSquare className="w-5 h-5" />
                <span className="sr-only">Mensajes</span>
              </Link>
            </Button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <header className="h-16 bg-gray-100 flex items-center px-4 justify-between border-b border-gray-200">
          <h1 className="text-xl md:text-2xl font-bold">Noticias</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <HelpCircle className="h-5 w-5" />
              <span className="sr-only">Help</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">External link</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
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
          </div>
        </header>

        {/* News Feed */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Placeholder content */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">
                <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
                <h2 className="text-lg font-semibold mb-2">News Article {i + 1}</h2>
                <p className="text-gray-600">This is a placeholder for a news article summary. It would contain a brief description of the article's content.</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}