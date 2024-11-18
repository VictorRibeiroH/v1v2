import Image from "next/image";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/Dmarks.png",
    title: "DMarks - Locação de Móveis",
    link: "https://dmarkslocacoes.com.br/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/Fini.png",
    title: "Fini - Erechim",
    link: "https://www.instagram.com/finierechim/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/Ronaldo.png",
    title: "Restaurante do Ronaldo",
    link: "https://www.instagram.com/restaurante_do_ronaldo/"
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/Vidacard.png",
    title: "VidaCard - Sant'Ana do Livramento",
    link: "https://vidacardlivramento.com.br/"
  }


];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}