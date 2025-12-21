import React from 'react';
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";


export function CintaTecnologias() {
  return (
    <>
    
            {/* ================= LA CUEVA / STACK ================= */}
            <div className="py-32 px-6 bg-black">
              <div className="max-w-6xl mx-auto text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nuestra <span className="text-cian">Cueva Tecnológica</span>
                </h2>
                <p className="text-textosecundario font-inter">
                  Herramientas probadas en combate real.
                </p>
              </div>
    
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
    
                {/* BACKEND */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Backend</h3>
                  <div className="flex flex-wrap justify-center gap-8">
    
                    <div className="flex flex-col items-center gap-2 group">
                      <FaNode className="text-4xl text-textosecundario group-hover:text-cian transition" />
                      <span className="text-sm group-hover:text-cian transition">Node.js</span>
                    </div>
    
                    <div className="flex flex-col items-center gap-2 group">
                      <FaPython className="text-4xl text-textosecundario group-hover:text-cian transition" />
                      <span className="text-sm group-hover:text-cian transition">Python</span>
                    </div>
    
                    <div className="flex flex-col items-center gap-2 group">
                      <SiPhp className="text-4xl text-textosecundario group-hover:text-cian transition" />
                      <span className="text-sm group-hover:text-cian transition">PHP</span>
                    </div>
    
                  </div>
    
                </div>
    
                {/* FRONTEND */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Frontend</h3>
                  <div className="flex flex-wrap justify-center gap-8">
    
                    <div className="flex flex-col items-center gap-2 group">
                      <FaReact className="text-4xl text-textosecundario group-hover:text-cian transition" />
                      <span className="text-sm group-hover:text-cian transition">React</span>
                    </div>
    
                    <div className="flex flex-col items-center gap-2 group">
                      <IoLogoJavascript className="text-4xl text-textosecundario group-hover:text-cian transition" />
                      <span className="text-sm group-hover:text-cian transition">JavaScript</span>
                    </div>
    
                    <div className="flex flex-col items-center gap-2 group">
                      <IoLogoVue className="text-4xl text-textosecundario group-hover:text-cian transition" />
                      <span className="text-sm group-hover:text-cian transition">Vue.js</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group">
                      <SiNextdotjs className="text-4xl text-textosecundario group-hover:text-cian transition" />
                      <span className="text-sm group-hover:text-cian transition">Next.js</span>
                    </div>
    
                  </div>
    
                </div>
    
                {/* MOBILE */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Mobile</h3>
                  <div className="flex flex-wrap justify-center gap-8">
    
                    <div className="flex flex-col items-center gap-2 group">
                      <FaFlutter className="text-4xl text-textosecundario group-hover:text-cian transition" />
                      <span className="text-sm group-hover:text-cian transition">Flutter</span>
                    </div>
    
                    <div className="flex flex-col items-center gap-2 group">
                      <TbBrandReactNative className="text-4xl text-textosecundario group-hover:text-cian transition" />
                      <span className="text-sm group-hover:text-cian transition">React Native</span>
                    </div>
    
    
                  </div>
    
                </div>
                
    
              </div>
            </div>
    
    
    </>
  )
}
