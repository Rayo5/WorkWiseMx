'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Plus, Save } from 'lucide-react'
import NavBar from "@/components/ui/WorkWiseTrabajadorNavbar"

export default function Component() {
  const [workExperiences, setWorkExperiences] = useState([{ id: 1 }])

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, { id: workExperiences.length + 1 }])
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <NavBar />
      </header>

      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-6">
          <Button className="bg-green-500 hover:bg-green-600">
            <Save className="mr-2 h-4 w-4" />
            Guardar Cambios
          </Button>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <TabsTrigger value="personal">Información Personal</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
            <TabsTrigger value="cv">Currículum</TabsTrigger>
            <TabsTrigger value="education">Educación y Experiencia</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
                <CardDescription>Actualiza tu información personal básica</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input id="nombre" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellidos">Apellidos</Label>
                    <Input id="apellidos" placeholder="Tus apellidos" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="correo">Correo</Label>
                    <Input id="correo" type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fecha">Fecha de nacimiento</Label>
                    <Input id="fecha" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="curp">CURP</Label>
                    <Input id="curp" placeholder="Tu CURP" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cp">CP</Label>
                    <Input id="cp" placeholder="Código Postal" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="estado">Estado</Label>
                    <Input id="estado" placeholder="Tu estado" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad</Label>
                    <Input id="ciudad" placeholder="Tu ciudad" />
                  </div>
                  <div className="col-span-full space-y-2">
                    <Label htmlFor="direccion">Dirección</Label>
                    <Input id="direccion" placeholder="Tu dirección completa" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Documentos</CardTitle>
                <CardDescription>Sube o actualiza tus documentos oficiales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Identificación oficial',
                    'Último certificado académico',
                    'Carta de recomendación',
                    'Portafolio de trabajos',
                    'Comprobante de domicilio',
                    'Certificaciones',
                    'Referencias de trabajos previos',
                    'Acta de nacimiento'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <span className="text-sm">{doc}</span>
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Subir
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cv">
            <Card>
              <CardHeader>
                <CardTitle>Currículum</CardTitle>
                <CardDescription>Describe tu perfil profesional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="descripcion">Descríbete a ti mismo...</Label>
                  <Textarea 
                    id="descripcion" 
                    placeholder="En menos de 30 palabras, describe tu persona en el mundo laboral..."
                    className="min-h-[100px]"
                  />
                  <p className="text-sm text-muted-foreground">
                    Este texto será la primera impresión que tendrán las empresas de ti.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Historial Académico</CardTitle>
                  <CardDescription>Ingresa tu información educativa</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Primaria', 'Secundaria', 'Preparatoria', 'Universidad'].map((nivel, index) => (
                      <div key={index} className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
                        <div className="flex-1 w-full">
                          <Label htmlFor={nivel.toLowerCase()} className="mb-2">{nivel}</Label>
                          <Input id={nivel.toLowerCase()} placeholder="Nombre de la institución" />
                        </div>
                        <Button variant="outline" size="sm" className="mt-2 sm:mt-0 whitespace-nowrap">
                          <Upload className="mr-2 h-4 w-4" />
                          Certificado
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Experiencia Laboral</CardTitle>
                  <CardDescription>Añade tu experiencia profesional</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {workExperiences.map((exp) => (
                    <div key={exp.id} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label>Puesto</Label>
                        <Input placeholder="Título del puesto" />
                      </div>
                      <div className="space-y-2">
                        <Label>Empresa</Label>
                        <Input placeholder="Nombre de la empresa" />
                      </div>
                      <div className="space-y-2">
                        <Label>Periodo</Label>
                        <Input placeholder="Periodo de trabajo" />
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" onClick={addWorkExperience}>
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar otra experiencia
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Idiomas</CardTitle>
                  <CardDescription>Agrega los idiomas que dominas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                    <div className="flex-1 w-full">
                      <Label htmlFor="idioma" className="mb-2">Idioma</Label>
                      <Input id="idioma" placeholder="Ej: Inglés, Francés, etc." />
                    </div>
                    <Button variant="outline" className="mt-2 sm:mt-0 whitespace-nowrap">
                      <Upload className="mr-2 h-4 w-4" />
                      Certificado
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}