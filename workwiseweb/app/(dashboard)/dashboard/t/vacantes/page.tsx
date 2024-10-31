'use client'

import { useState } from 'react'
import NavBar from "@/components/ui/WorkWiseTrabajadorNavbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bookmark, BriefcaseIcon } from 'lucide-react'

// Datos de ejemplo para las ofertas de trabajo
const ofertasTrabajo = [
  {
    id: 1,
    titulo: "Desarrollador Frontend",
    empresa: "TechCorp",
    descripcion: "Buscamos un Desarrollador Frontend hábil para unirse a nuestro equipo y ayudar a construir interfaces de usuario asombrosas.",
    fecha: "2023-10-31",
    salario: "$80,000 - $120,000",
  },
  {
    id: 2,
    titulo: "Diseñador UX",
    empresa: "DesignHub",
    descripcion: "Únete a nuestro equipo creativo como Diseñador UX y ayuda a dar forma al futuro de las experiencias digitales.",
    fecha: "2023-10-30",
    salario: null,
  },
  {
    id: 3,
    titulo: "Ingeniero Backend",
    empresa: "ServerSolutions",
    descripcion: "Estamos buscando un talentoso Ingeniero Backend para desarrollar y mantener nuestras aplicaciones del lado del servidor.",
    fecha: "2023-10-29",
    salario: "$90,000 - $140,000",
  },
]

export default function Vacantes() {
  const [trabajosGuardados, setTrabajosGuardados] = useState<number[]>([])

  const toggleGuardarTrabajo = (trabajoId: number) => {
    setTrabajosGuardados(prev => 
      prev.includes(trabajoId) ? prev.filter(id => id !== trabajoId) : [...prev, trabajoId]
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ofertasTrabajo.map(trabajo => (
            <Card key={trabajo.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BriefcaseIcon className="h-5 w-5" />
                  {trabajo.titulo}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="font-semibold text-primary">{trabajo.empresa}</p>
                <p className="text-sm text-muted-foreground mt-2">{trabajo.descripcion}</p>
                <p className="text-sm mt-4">Publicado el: {trabajo.fecha}</p>
                {trabajo.salario && <p className="text-sm font-semibold mt-2">Salario: {trabajo.salario}</p>}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => toggleGuardarTrabajo(trabajo.id)}>
                  <Bookmark className={`h-5 w-5 mr-2 ${trabajosGuardados.includes(trabajo.id) ? 'fill-current' : ''}`} />
                  {trabajosGuardados.includes(trabajo.id) ? 'Guardado' : 'Guardar'}
                </Button>
                <Button>Aplicar Ahora</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}