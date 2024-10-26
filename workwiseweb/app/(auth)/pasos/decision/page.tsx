import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Building2, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import WorkWiseLogo from '@/public/logo_work_wise.webp' 


export default function DecisionPage() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md mx-auto">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6 text-sm sm:text-base">
          <ChevronLeft className="mr-1 h-4 w-4 sm:h-5 sm:w-5" />
          Volver a Inicio
        </Link>
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <Image src={WorkWiseLogo} alt="WorkWise Logo" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            <CardTitle className="text-xl sm:text-2xl text-center font-bold">Bienvenido a WorkWise</CardTitle>
            <CardDescription className="text-center text-sm sm:text-base">
              Selecciona el tipo de cuenta que deseas crear
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="" passHref className="block">
              <Button 
                className="w-full h-20 text-lg flex items-center justify-center space-x-3 bg-white text-green-700 border-2 border-green-600 hover:bg-green-50 hover:text-green-800 transition-all duration-200 shadow-md hover:shadow-lg"
                variant="outline"
              >
                <Building2 size={24} />
                <span>Empresa</span>
              </Button>
            </Link>
            <Link href="" passHref className="block">
              <Button 
                className="w-full h-20 text-lg flex items-center justify-center space-x-3 bg-white text-green-700 border-2 border-green-600 hover:bg-green-50 hover:text-green-800 transition-all duration-200 shadow-md hover:shadow-lg"
                variant="outline"
              >
                <User size={24} />
                <span>Individuo</span>
              </Button>
            </Link>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-xs sm:text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="text-green-600 hover:text-green-700 font-semibold">
                Iniciar Sesión
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}