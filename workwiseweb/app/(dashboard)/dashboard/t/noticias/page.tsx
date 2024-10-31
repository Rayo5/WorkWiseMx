'use client'

import NavBar from "@/components/ui/WorkWiseTrabajadorNavbar"
import NewsCard from "@/components/ui/NewsCards"

// Datos de ejemplo
const newsArticles = [
  {
    title: "Technology Advances in 2023",
    summary: "Discover the latest innovations in tech, including AI, 5G, and more.",
    category: "Technology",
    date: "October 15, 2023",
    image: "/remplazar_tienecopyright.jpg", // Ensure this image exists
    link: "/article/technology-advances" // Add the link for redirection
  },
]

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-background text-foreground">
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="flex flex-wrap justify-between"> {/* Ensure items wrap properly */}
            {newsArticles.map((article, i) => (
              <div key={i} className="p-2 w-full sm:w-1/2 md:w-1/4"> {/* Adjust for responsive widths */}
                <NewsCard
                  title={article.title}
                  imageUrl={article.image} // Fallback for missing images
                  summary={article.summary}
                  category={article.category}
                  date={article.date}
                  link={article.link} // Pass the link prop
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
