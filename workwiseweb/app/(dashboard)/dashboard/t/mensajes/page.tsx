'use client'

import { useState } from 'react'
import NavBar from "@/components/ui/WorkWiseTrabajadorNavbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

// Sample data for company messages
const companyMessages = [
  {
    id: 1,
    name: "TechCorp",
    logo: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hola! Nos gustaría programar una entrevista contigo para el puesto de Desarrollador Frontend.",
    unread: 2,
  },
  {
    id: 2,
    name: "ServerSolutions",
    logo: "/placeholder.svg?height=40&width=40",
    lastMessage: "Gracias por tu aplicación. ¿Podrías proporcionarnos más detalles sobre tu experiencia en backend?",
    unread: 0,
  },
  {
    id: 3,
    name: "DataDynamics",
    logo: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hemos revisado tu perfil y creemos que serías una gran adición a nuestro equipo de ciencia de datos.",
    unread: 1,
  },
]

export default function Mensajes() {
  const [selectedCompany, setSelectedCompany] = useState(companyMessages[0])
  const [messageInput, setMessageInput] = useState("")

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Here you would typically send the message to your backend
      console.log(`Sending message to ${selectedCompany.name}: ${messageInput}`)
      setMessageInput("")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Removed h1 tag as per update 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> {/* Updated grid layout as per update 2 */}
          <Card className="lg:col-span-1"> {/* Updated card sizes as per update 2 */}
            <CardHeader>
              <CardTitle>Empresas</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-200px)]"> {/* Increased ScrollArea height as per update 3 */}
                {companyMessages.map((company) => (
                  <Button
                    key={company.id}
                    variant={selectedCompany.id === company.id ? "secondary" : "ghost"}
                    className="w-full justify-start mb-2"
                    onClick={() => setSelectedCompany(company)}
                  >
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={company.logo} alt={company.name} />
                      <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-left">
                      <div className="font-semibold">{company.name}</div>
                      <div className="text-sm text-muted-foreground truncate">{company.lastMessage}</div>
                    </div>
                    {company.unread > 0 && (
                      <div className="bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs">
                        {company.unread}
                      </div>
                    )}
                  </Button>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
          <Card className="lg:col-span-2"> {/* Updated card sizes as per update 2 */}
            <CardHeader>
              <CardTitle className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={selectedCompany.logo} alt={selectedCompany.name} />
                  <AvatarFallback>{selectedCompany.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                {selectedCompany.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[calc(100vh-350px)] mb-4">
                {/* Here you would map through the actual messages */}
                <div className="p-2 bg-secondary rounded-lg mb-2">
                  {selectedCompany.lastMessage}
                </div>
              </ScrollArea>
              <div className="flex gap-2">
                <Input
                  placeholder="Escribe un mensaje..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>Enviar</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}