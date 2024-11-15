"use client";

import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import BoxReveal from "@/components/ui/box-reveal";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";

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
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6"
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
              Sobre nós
            </ScrollLink>
          </div>
        </div>

        <div className="flex ittems-center gap-x-4">
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
            Agende uma chamada
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />
        </div>
        <h1>
          <CoverDemo />
        </h1>

        <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
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
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Agende uma chamada
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

      </main>
    </div>
  );
}
