'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', email, password)
  }

  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center p-4">
      <Link href="/" className="absolute top-4 left-4 text-green-600 hover:text-green-700 flex items-center">
        <ChevronLeft className="mr-1" />
        Volver a Inicio
      </Link>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Image src="/placeholder.svg" alt="WorkWise Logo" width={60} height={60} />
          </div>
          <CardTitle className="text-2xl text-center font-bold">Iniciar Sesión en WorkWise</CardTitle>
          <CardDescription className="text-center">
            Ingresa tus credenciales para acceder a tu cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="tu@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">
              Iniciar Sesión
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
            ¿Olvidaste tu contraseña?
          </Link>
          <div className="text-sm text-gray-600">
            ¿No tienes una cuenta?{' '}
            <Link href="/register" className="text-green-600 hover:text-green-700 font-semibold">
              Regístrate
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}