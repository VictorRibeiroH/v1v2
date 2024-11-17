"use client";

import { CoverDemo } from "@/components/demos/cover-demo";
import { WordPullUpDemo } from "@/components/demos/wordl-pull-up-demo";
import BoxReveal from "@/components/ui/box-reveal";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import NumberTicker from "@/components/ui/number-ticker";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design + Desenvolvimento",
    description:
      "Leve o seu negócio para o próximo nível com nossos serviços de web design e desenvolvimento",
  },
  {
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Coloque seu site no topo dos resultados dos mecanismos de busca com nossos serviços de SEO",
  },
  {
    icon: "/images/s_5.png",
    title: "Criação de Conteúdo",
    description:
      "Aumente a presença online da sua marca com nossos serviços de marketing de mídia social",
  },
  {
    icon: "/images/s_3.png",
    title: "Social Media",
    description:
      "Interaja com seus clientes e aumente as vendas com nossos serviços de Email Marketing",
  },
  {
    icon: "/images/s_4.png",
    title: "Email Marketing",
    description:
      "Com nossos serviços de criação de conteúdo, ajudamos as empresas a gerar resultados",
  },
  {
    icon: "/images/s_2.png",
    title: "Tráfego pago",
    description:
      "Não desperdice dinheiro com publicidade ineficaz. Nossos serviços de PPC (pay-per-click) ajudam você a atingir seu público-alvo",
  },
];

export default function Home() {
  return (
    <div
      className="
  overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]
   "
    >
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
   justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/logo.png"}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/showcase"} className="hover:text-blue-500">
              Portfolio
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Serviços
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Processo
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-500"
            >
              Sobre
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          {/* <a href="tel:41988957399" className="hidden 2xl:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              41988957399
            </button>
          </a> */}

          <Link
            href={"/meeting"}
            className="
           py-3 
          px-6
          text-lg 
          hover:bg-[#abcbff]
          rounded-[6px]
          border-2
          border-black
          text-white
          bg-[#121212]
          transition
          duration-200
          hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Fale conosco
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          {/* <AnimatedShinyTextDemo /> */}
        <h1>
          <CoverDemo />
        </h1>

        <p className="md:text-center 
        text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
          Agende uma reunião com nossa equipe e receba um orçamento em minutos
        </p>

        <div
          className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
        >
          <Link
            href="/meeting"
            className="py-3 
           py-3 
          px-6
          text-lg 
          hover:bg-[#abcbff]
          rounded-[6px]
          border-2
          border-black
          text-white
          bg-[#121212]
          transition
          duration-200
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
              Fale conosco
          </Link>
          <Link
            href={"/showcase"}
            className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Portfolio
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500"/>
                Desenvolvimento
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500"/>
                Design
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500"/>
                Marketing
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500"/>
                Social Media
              </p>
            </BoxReveal>
        </div>

        <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
               Marcas de todo o país confiam em nossa agilidade
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    + <NumberTicker value={100} /> 
                    <p className="text-gray-500 text-sm md:text-md">
                      Clientes satisfeitos
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    + <NumberTicker value={50} /> 
                    <p className="text-gray-500 text-sm md:text-md">
                      Projetos finalizados
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w/45">
              <InfiniteMovingLogos 
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/logo/logo.png",
                    name: "Logo",
                  },
                ]}
              />
            </section>
        </div>
        </div>

      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <h1> 
            <WordPullUpDemo />   
          </h1>

          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
          Todos os nossos serviços são projetados para ajudar o seu negócio a se destacar  
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </div>
  );
}
