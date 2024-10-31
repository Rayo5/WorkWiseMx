import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  date: string;
  link: string; // Add a link prop for the redirection
}

export default function NewsCard({ title, summary, imageUrl, category, date, link }: NewsCardProps) {
  return (
    <Link href={link} passHref> {/* Wrap the card in a Link component */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full cursor-pointer"> {/* Add cursor pointer */}
        {/* Imagen de la noticia */}
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill" // Use layout fill to cover the container
            objectFit="cover" // Ensures the image covers the area without distortion
            className="rounded-t-lg"
          />
        </div>

        {/* Contenido de la noticia */}
        <div className="p-5 flex flex-col h-full"> {/* Flex column to make sure content fits well */}
          <p className="text-xs text-primary font-semibold">{category} • {date}</p>
          <h2 className="text-lg font-semibold mt-2 mb-3">{title}</h2>
          <p className="text-sm text-gray-600 mb-4 flex-grow">{summary}</p> {/* Flex-grow allows summary to adjust */}
        </div>
      </div>
    </Link>
  );
}
