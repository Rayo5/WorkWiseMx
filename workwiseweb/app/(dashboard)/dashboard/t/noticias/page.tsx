'use client'

import NavBar from "@/components/ui/WorkWiseEmpresaNavbar"

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-background text-foreground">

      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
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