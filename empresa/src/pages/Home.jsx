import React from 'react'
import { Helmet } from "react-helmet-async"
import fondo from '../assets/fondo.jpg'
import { CintadeCode } from '../components/CintadeCode.jsx'
import { Tarjetas } from '../components/Tarjetas.jsx'
import { WolfCore } from '../components/WolfCore.jsx'
import { Frase } from '../components/Frase.jsx'
import { PortfolioSection } from '../components/PortafolioSection.jsx'
import { Mockups } from '../components/Mockups.jsx'
import { Pasosdetrabajo } from '../components/Pasosdetrabajo.jsx'
import { Accion } from '../components/Accion.jsx'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      {/* ================= SEO HOME ================= */}
      <Helmet>
        <title>
          Wolf Core Systems | Desarrollo Web, Landing Pages y Software a la Medida
        </title>

        <meta
          name="description"
          content="En Wolf Core Systems desarrollamos páginas web profesionales, landing pages, e-commerce y aplicaciones web a la medida. Soluciones modernas, rápidas y optimizadas para tu negocio."
        />

        <link rel="canonical" href="https://wolfcoresystems.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Wolf Core Systems | Desarrollo Web y Software a la Medida" />
        <meta property="og:description" content="Creamos sitios web de alto rendimiento y aplicaciones web modernas que impulsan tus ventas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wolfcoresystems.com/" />
        <meta property="og:image" content="https://wolfcoresystems.com/image.png" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wolf Core Systems | Desarrollo Web" />
        <meta name="twitter:description" content="Desarrollo web profesional y software a la medida para negocios." />
        <meta name="twitter:image" content="https://wolfcoresystems.com/image.png" />

        {/* JSON-LD Organization */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Wolf Core Systems",
      "alternateName": "Wolf Core",
      "url": "https://wolfcoresystems.com",
      "logo": "https://wolfcoresystems.com/image.png",
      "description": "Wolf Core Systems es una empresa de ingeniería de software especializada en desarrollo web de alto rendimiento, software a la medida, e-commerce y soluciones digitales escalables.",
      "foundingDate": "2024",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+57-311-245-6846",
        "contactType": "customer service",
        "areaServed": "CO",
        "availableLanguage": ["Spanish"]
      },
      "sameAs": [
        "https://www.instagram.com/wolf.core.systems",
        "https://www.facebook.com/wolf.core.systems",
        "https://wa.me/573112456846"
      ]
    }
    `}
        </script>
      </Helmet>
      {/* ================= FIN SEO ================= */}

      <div className="relative">
        <img
          src={fondo}
          alt="Fondo tecnológico de desarrollo web"
          className="w-full h-screen object-cover"
        />

        <div className="absolute inset-0 bg-fondo bg-opacity-70 flex items-center justify-center px-4">
          {/* CONTENEDOR DEL TEXTO */}
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-textoprincipal mb-6 font-montserrat">
              Dominamos el código
              <span className="block text-cian">
                Impulsamos tu éxito.
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-textosecundario mb-8 font-inter">
              Creamos sitios web de alto rendimiento y ecosistemas digitales que impulsan tus ventas.
            </p>

            <Link to="/contactenos">
              <button className="bg-cian text-fondo font-bold px-8 py-4 rounded-lg hover:bg-blue-600 transition duration-300 font-montserrat">
                Contáctenos
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CONTENIDO SEO REAL */}
      <CintadeCode />
      <Tarjetas />
      <WolfCore />
      <Frase />
      <PortfolioSection />
      <Pasosdetrabajo />
      <Accion />
    </>
  )
}
