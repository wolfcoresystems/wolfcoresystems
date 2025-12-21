import React from 'react'
import logo from '../assets/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="w-full bg-fondo py-12">
            
            <div
                className="max-w-6xl mx-auto
               flex flex-col items-center
               gap-6 px-6 text-center"
            >
                {/* LOGO */}
                <img
                    src={logo}
                    alt="Wolf Core Systems"
                    className="h-14 md:h-16 w-auto
                 object-contain rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                />

                {/* DESCRIPCIÓN */}
                <p
                    className="max-w-2xl
                 text-textoprincipal
                 text-base md:text-lg
                 font-inter leading-relaxed"
                >
                    Creamos sitios web de alto rendimiento y ecosistemas digitales que impulsan tus ventas.
                </p>

                {/* COPYRIGHT */}
                <p
                    className="text-sm md:text-base
                 text-gray-400
                 font-inter"
                >
                    © 2024 Wolf Core Systems. Todos los derechos reservados.
                </p>

                {/* REDES SOCIALES */}
                <div className="flex gap-6 pt-2">
                    <a
                        href="https://www.instagram.com/wolf.core.systems/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-2xl md:text-3xl
                   text-cian
                   hover:text-cian/70
                   transition-colors"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61585407086812"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-2xl md:text-3xl
                   text-cian
                   hover:text-cian/70
                   transition-colors"
                    >
                        <FaFacebookSquare />
                    </a>

                                        <a
                        href="https://wa.me/573112456846?text=Hola,%20quiero%20hablar%20con%20un%20arquitecto%20de%20software"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-2xl md:text-3xl
                   text-cian
                   hover:text-cian/70
                   transition-colors"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </footer>

    )
}
