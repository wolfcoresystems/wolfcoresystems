
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../assets/logo.png";

export function Header() {

    const [open, setOpen] = useState(false);


    return (
        <>
            <header className="  fixed top-0 left-0 w-full z-50 bg-fondo bg-opacity-90 backdrop-blur-md shadow-lg">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* LOGO + NOMBRE */}
                    <NavLink to="/">
                        <div className="flex items-center gap-3 ">

                            <img
                                src={logo}
                                alt="Wolf Core Systems"
                                className="h-20 w-20 rounded-[15px] object-cover"
                            />

                            <div>
                                <h1
                                    translate="no"
                                    className="text-3xl font-montserrat font-bold text-textoprincipal"
                                >
                                    Wolf Core
                                </h1>
                                <span
                                    translate="no"
                                    className="text-lg text-gray-500"
                                >
                                    Systems
                                </span>
                            </div>

                        </div>
                    </NavLink>
                    {/* MENÚ DESKTOP */}
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink to="/" className="text-xl text-textoprincipal hover:text-cian font-medium">
                            Inicio
                        </NavLink>
                        <NavLink to="/QuienesSomos" className="text-xl text-textoprincipal hover:text-cian font-medium">
                            Nosotros
                        </NavLink>
                        <NavLink to="/Servicios" className="text-xl text-textoprincipal hover:text-cian font-medium">
                            Servicios
                        </NavLink>
                        <NavLink to="/Portafolio" className="text-xl text-textoprincipal hover:text-cian font-medium">
                            Portafolio
                        </NavLink>
                        <NavLink to="/Contactenos" className="text-xl text-textoprincipal hover:text-cian font-medium">
                            Contáctenos
                        </NavLink>
                    </nav>

                    {/* BOTÓN HAMBURGUESA (MOBILE) */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-textoprincipal focus:outline-none"
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* MENÚ MOBILE */}
                {open && (
                    <div className="md:hidden bg-fondo shadow-lg px-6 py-4 space-y-4">
                        <NavLink
                            to="/"
                            onClick={() => setOpen(false)}
                            className="block text-textoprincipal font-medium"
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/QuienesSomos"
                            onClick={() => setOpen(false)}
                            className="block text-textoprincipal font-medium"
                        >
                            Quienes Somos
                        </NavLink>
                        <NavLink
                            to="/Servicios"
                            onClick={() => setOpen(false)}
                            className="block text-textoprincipal font-medium"
                        >
                            Servicios
                        </NavLink>
                        <NavLink
                            to="/Portafolio"
                            onClick={() => setOpen(false)}
                            className="block text-textoprincipal font-medium"
                        >
                            Portafolio
                        </NavLink>
                        <NavLink
                            to="/Contactenos"
                            onClick={() => setOpen(false)}
                            className="block text-textoprincipal font-medium"
                        >
                            Contáctenos
                        </NavLink>
                    </div>
                )}
            </header>


        </>
    )
}
