import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Entrega rápida",
    description:
      "1-2 semanas de entrega para a maioria dos projetos. Entre em contato conosco.",
  },
  {
    icon: "/icons/design.svg",
    title: "Design & Desenvolvimento",
    description:
      "Criamos e desenvolvemos seu site com as tecnologias e tendências mais recentes.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Escalabilidade + Manutenção",
    description: "Soluções escaláveis com suporte contínuo.",
  },
  {
    icon: "/icons/team.svg",
    title: "Time de Experts",
    description: "Equipe profissional dedicada a atender você sempre.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Práticas seguras",
    description:
      "Desenvolvimento seguro para proteger suas informações.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Rastreamento de Análise",
    description: "Acompanhe os resultados com análises avançadas.",
  },

  {
    icon: "/icons/flexible.svg",
    title: "Sites Dinâmicos",
    description: "Nossas soluções são dinâmicas e gerenciáveis sem complicação.",
  },
  {
    icon: "/icons/support.svg",
    title: "Suporte 24/7",
    description:
      "Suporte técnico disponível 24 horas por dia. Entre em contato conosco.",
  },
  {
    icon: "/icons/money.svg",
    title: "Preços Acessíveis",
    description: "Tornamos nossos serviços acessíveis para você.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Nossas garantias para você.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
        Garantimos a mais alta qualidade de trabalho, com os prazos de entrega mais rápidos do mercado.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <Image
                src={feature.icon}
                width={10000}
                height={10000}
                alt="icon"
                className="w-8 h-8"
              />
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}