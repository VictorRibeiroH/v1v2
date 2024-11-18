"use client";

import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion"
import Calendly from "./calendly";

const checkItemVariants = {
    hidden: {opacity: 0, x: -50},
    visible: {opacity: 1, x: 0},
}

const Meeting = () => {
    return (
        <div className="
        overflow-clip 
       inset-0 
       -z-10 h-full w-full 
       bg-[#fafafa]
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
         bg-[size:14px_24px]
         ">
            
            <ShowcaseNavbar />

            <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto">
                <div className="md:w-2/5">
                    <h1 className="text-4xl font-semibold pt-10">Vamos Conversar</h1>
                    <p className="text-lg texy-gray-500 py-4">
                    Estamos ansiosos para conhecer você e discutir suas ideias. Reserve um horário para conversarmos!
                    </p>

                    {[
                {
                  title: "Desenvolvimento + Design",
                  description:
                    "Faça suas ideias se tornarem realidade com nossos serviços de desenvolvimento e design.",
                },

                {
                  title: "Consulta Gratuita",
                  description:
                    "Tenha a orientação de experts para aprimorar seu negócio e ampliar sua presença digital.",
                },
                {
                  title: "Suporte Técnico",
                  description:
                    "Obtenha suporte técnico para o seu site ou aplicativo.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-gray-700">
                      {item.title}
                    </h3>
                    <div className="text-gray-400">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
                </div>

                <div className="md:w-1/2">
                    <Calendly />
                </div>
            </div>
        </div>
    )
}

export default Meeting;