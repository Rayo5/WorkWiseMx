'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Newspaper, Briefcase, MessageSquare, User, HelpCircle, ExternalLink, Bell, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const newsItems = [
    {
      title: "Intuit Mailchimp Launches New Global Campaign",
      description: "Helping marketers untangle their customer problem with innovative solutions.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "New Platform Experience with Built-In, Generative AI",
      description: "Reflecting on one year as Mailchimp's CEO and introducing Intuit Assist.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Mailchimp's New Exhibition Explores Email's Powers",
      description: "A playful and immersive exploration of email's transformational powers at the Design Museum in London.",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <div className="flex h-screen bg-[#ececee] text-[#090915] dark:bg-[#111113] dark:text-[#eaeaf6]">
      {/* Left Sidebar */}
      <nav className="w-16 bg-[#ececee] dark:bg-[#111113] flex flex-col items-center py-4 shadow-md">
        <div className="mb-8">
          <Image src={WorkWiseLogo} alt="Logo" width={40} height={40} />
        </div>
        <ul className="flex-1">
          <li className="mb-4">
            <Link href="/dashboard/t/news" className="p-2 rounded-lg bg-[#3d9948] dark:bg-[#66c271] text-[#ececee] dark:text-[#111113] inline-block">
              <Newspaper className="w-6 h-6" />
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/t/vacantes" className="p-2 rounded-lg hover:bg-[#3d9948]/20 dark:hover:bg-[#66c271]/20 inline-block">
              <Briefcase className="w-6 h-6" />
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/dashboard/t/mensajes" className="p-2 rounded-lg hover:bg-[#3d9948]/20 dark:hover:bg-[#66c271]/20 inline-block">
              <MessageSquare className="w-6 h-6" />
            </Link>
          </li>
        </ul>
        <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-[#3d9948]/20 dark:hover:bg-[#66c271]/20">
          {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <header className="bg-[#ececee] dark:bg-[#111113] p-4 flex justify-between items-center shadow-md">
          <h1 className="text-2xl font-bold">News</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ExternalLink className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
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
        <main className="flex-1 overflow-y-auto p-6 bg-[#ececee] dark:bg-[#111113]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="bg-[#ececee] dark:bg-[#111113] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
                  <p className="text-[#090915]/80 dark:text-[#eaeaf6]/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}