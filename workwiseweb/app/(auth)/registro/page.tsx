'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import WorkWiseLogo from '@/public/logo_work_wise.webp'

export default function RegisterPage() {
  const [userType, setUserType] = useState('trabajador')
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    fechaNacimiento: '',
    curp: '',
    direccion: '',
    cp: '',
    estado: '',
    ciudad: '',
    colonia: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Registration attempted with:', formData)
  }

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl mb-4">
        <Link href="/" className="text-green-600 hover:text-green-700 flex items-center text-sm">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Volver a Inicio
        </Link>
      </div>
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Image src={WorkWiseLogo} alt="WorkWise Logo" width={60} height={60} />
          </div>
          <CardTitle className="text-2xl text-center font-bold">Registro WorkWise</CardTitle>
          <CardDescription className="text-center">
            Ingresa tus datos para registrarte y comenzar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4 mb-6">
              <Label className="text-base font-semibold">Tipo de cuenta</Label>
              <RadioGroup
                defaultValue="trabajador"
                className="grid grid-cols-2 gap-4"
                onValueChange={setUserType}
              >
                <div className="flex items-center justify-center">
                  <RadioGroupItem
                    value="empresa"
                    id="empresa"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="empresa"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-3 h-6 w-6"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Empresa
                  </Label>
                </div>
                <div className="flex items-center justify-center">
                  <RadioGroupItem
                    value="trabajador"
                    id="trabajador"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="trabajador"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary w-full cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-3 h-6 w-6"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Trabajador
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input 
                  id="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellidos">Apellidos</Label>
                <Input 
                  id="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="correo">Correo</Label>
                <Input 
                  id="correo"
                  type="email"
                  value={formData.correo}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                <Input 
                  id="fechaNacimiento"
                  type="date"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="curp">CURP</Label>
                <Input 
                  id="curp"
                  value={formData.curp}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="direccion">Dirección</Label>
                <Input 
                  id="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cp">CP</Label>
                <Input 
                  id="cp"
                  value={formData.cp}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="estado">Estado</Label>
                <Input 
                  id="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ciudad">Ciudad</Label>
                <Input 
                  id="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="colonia">Colonia</Label>
                <Input 
                  id="colonia"
                  value={formData.colonia}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input 
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <Input 
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Registrarse
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-gray-600 text-center w-full">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/login" className="text-green-600 hover:text-green-700 font-semibold">
              Inicia Sesión
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}