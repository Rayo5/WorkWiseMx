'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronRight, Users, BarChart, Shield } from 'lucide-react'
import WorkWiseLogo from '@/public/logo_work_wise.webp'
import FotoTrabajoEnEqipoPaginaPrincipal from '@/public/remplazar_tienecopyright.jpg'

export default function EnterprisePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Image src={WorkWiseLogo} alt="WorkWise Logo" width={40} height={40} />
                <span className="ml-2 text-xl font-bold text-green-600">WorkWise</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#caracteristicas" className="border-transparent text-gray-500 hover:border-green-500 hover:text-green-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Características
              </Link>
              <Link href="#sobre-nosotros" className="border-transparent text-gray-500 hover:border-green-500 hover:text-green-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Sobre Nosotros
              </Link>
              <Link href="#contacto" className="border-transparent text-gray-500 hover:border-green-500 hover:text-green-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contacto
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-2">
              <Link href="/login" className="bg-white hover:bg-gray-100 text-green-600 font-bold py-2 px-4 rounded border border-green-600">
                Iniciar Sesión
              </Link>
              <Link href="/registro" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Registrarse
              </Link>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link href="#caracteristicas" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-green-500 hover:text-green-600">
                Características
              </Link>
              <Link href="#sobre-nosotros" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-green-500 hover:text-green-600">
                Sobre Nosotros
              </Link>
              <Link href="#contacto" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-green-500 hover:text-green-600">
                Contacto
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 space-y-1">
                <Link href="/login" className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                  Iniciar Sesión
                </Link>
                <Link href="/registro" className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-green-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Potencia tu</span>
                <span className="block text-green-600">Fuerza Laboral</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                WorkWise conecta empresas con profesionales calificados, optimizando tu proceso de contratación y mejorando la gestión de la fuerza laboral.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                    Comenzar
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Saber más
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-1 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <Image
                  className="w-full rounded-lg"
                  src={FotoTrabajoEnEqipoPaginaPrincipal}
                  alt="Ilustración Empresarial"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="caracteristicas" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Características</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Todo lo que necesitas para gestionar tu fuerza laboral
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Emparejamiento de Talento</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Nuestro sistema impulsado por IA empareja tus requisitos de trabajo con los candidatos más adecuados.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <BarChart className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Panel de Análisis</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Obtén información sobre tu fuerza laboral con nuestras herramientas de análisis completas.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Plataforma Segura</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Tus datos están protegidos con medidas de seguridad de nivel empresarial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="sobre-nosotros" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Sobre Nosotros</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Revolucionando la Gestión de la Fuerza Laboral
            </p>
            <div className="mt-6 space-y-6">
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              &quot;Somos una plataforma que busca brindar personal realmente capacitado y adecuado a las necesidades de las PYMEs&quot;
              </p>
              <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                WorkWise fue fundada con la misión de cerrar la brecha entre las empresas y los profesionales calificados. Nuestra plataforma aprovecha la tecnología de vanguardia para optimizar el proceso de contratación y mejorar la gestión de la fuerza laboral.
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/sobre-nosotros" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              Conoce más sobre nosotros
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              {/*<Image src={WorkWiseLogo} alt="Logo de WorkWise" width={40} height={40} /> */}
              <p className="text-gray-300 text-base">
                Haciendo que el trabajo funcione mejor para todos.
              </p>
              <div className="flex space-x-6">
                {/* Add social media icons here */}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Soluciones
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Contratación
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Gestión de Fuerza Laboral
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Análisis
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12  md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Soporte
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Precios
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Documentación
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Guías
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Empresa
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Sobre Nosotros
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Empleo
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Privacidad
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Términos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2023 WorkWise, Inc. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}