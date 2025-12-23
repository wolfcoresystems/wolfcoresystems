import { useState } from "react";
import { FaArrowRight, FaReact, FaNode, FaDatabase } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import bar from "../assets/bar.png"
import laptop from "../assets/laptop.png"
import anime from "../assets/anime.png"

/* ================= DATA ================= */

const categories = ["Todos", "Web Pro", "Sistemas", "E-commerce", "Mobile"];

const projects = [
  {
    id: 1,
    title: "La ola Drinks",
    category: "E-commerce",
    tags: ["Fintech"],
    image: bar,
    demo: "https://laoladrink.tupagina.online/",
    challenge: "Procesos manuales y lentos.",
    solution: "Arquitectura modular con APIs y dashboard en tiempo real.",
    result: "⏱ Reducción de tiempos en 40%",
    stack: [<FaNode />, <FaDatabase />, <FaReact />],
  },
  {
    id: 2,
    title: "Wolf Commerce",
    category: "E-commerce",
    tags: ["Retail"],
    image: laptop,
    demo: "https://laoladrink.tupagina.online/",
    challenge: "Baja conversión y tiempos de carga altos.",
    solution: "Optimización con SSR y UX orientado a ventas.",
    result: "📈 Ventas +25%",
    stack: [<FaReact />, <FaNode />],
  },
  {
    id: 3,
    title: "Landing page",
    category: "Web Pro",
    tags: ["Retail"],
    image: anime,
    demo: "https://landing-page-anime.vercel.app/",
    challenge: "Baja conversión y tiempos de carga altos.",
    solution: "Optimización con SSR y UX orientado a ventas.",
    result: "📈 Ventas +25%",
    stack: [<FaReact />, <FaNode />],
  },
  {
    id: 4,
    title: "Wolf Commerce",
    category: "E-commerce",
    tags: ["Retail"],
    image: logo,
    demo: "https://laoladrink.tupagina.online/",
    challenge: "Baja conversión y tiempos de carga altos.",
    solution: "Optimización con SSR y UX orientado a ventas.",
    result: "📈 Ventas +25%",
    stack: [<FaReact />, <FaNode />],
  },
];

/* ================= COMPONENT ================= */

export function Portafolio() {
  const [active, setActive] = useState("Todos");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter(p => p.category === active);

  return (
    <>
      {/* ================= SEO portafolio ================= */}
      <Helmet>
        {/* TITLE */}
        <title>
          portafolio de Proyectos | Wolf Core Systems – Ingeniería de Software
        </title>

        {/* DESCRIPTION */}
        <meta
          name="description"
          content="Explora el portafolio de Wolf Core Systems: proyectos reales de desarrollo web, software a la medida, e-commerce y aplicaciones escalables creadas con ingeniería de alto nivel."
        />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.wolfcoresystems.com/portafolio"
        />

        {/* ================= OPEN GRAPH ================= */}
        <meta
          property="og:title"
          content="portafolio Wolf Core Systems | Proyectos de Ingeniería Digital"
        />
        <meta
          property="og:description"
          content="Casos reales donde la ingeniería de software y el diseño de vanguardia se fusionan para crear resultados medibles."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.wolfcoresystems.com/portafolio"
        />
        <meta
          property="og:image"
          content="https://www.wolfcoresystems.com/image.png"
        />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ================= TWITTER ================= */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="portafolio Wolf Core Systems | Proyectos Reales"
        />
        <meta
          name="twitter:description"
          content="Descubre proyectos de desarrollo web, software empresarial y e-commerce creados por Wolf Core Systems."
        />
        <meta
          name="twitter:image"
          content="https://www.wolfcoresystems.com/image.png"
        />

        {/* ================= JSON-LD PORTFOLIO ================= */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://www.wolfcoresystems.com/portafolio",
      "name": "portafolio de Proyectos | Wolf Core Systems",
      "description": "Colección de proyectos desarrollados por Wolf Core Systems en desarrollo web, software a la medida, e-commerce y aplicaciones escalables.",
      "url": "https://www.wolfcoresystems.com/portafolio",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Wolf Core Systems",
        "url": "https://www.wolfcoresystems.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Wolf Core Systems",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.wolfcoresystems.com/image.png"
        }
      }
    }
    `}
        </script>
      </Helmet>
      {/* ================= FIN SEO portafolio ================= */}




      <section className="bg-black text-white min-h-screen px-6 py-24 relative overflow-hidden">

        {/* FONDO GRID */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* HERO */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestra <span className="text-cian">Huella Digital</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Proyectos donde la ingeniería core y el diseño de vanguardia
            se fusionan para crear resultados excepcionales.
          </p>

          <p className="mt-6 text-sm text-cian">
            +15 Soluciones desplegadas · 0 Fallos críticos · 100% Satisfacción
          </p>
        </div>

        {/* FILTROS */}
        <div className="relative z-10 flex justify-center gap-4 flex-wrap mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full border text-sm transition
              ${active === cat
                  ? "border-cian text-cian"
                  : "border-gray-700 text-gray-400 hover:border-cian hover:text-cian"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map(project => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="group cursor-pointer border border-cian/10 rounded-xl overflow-hidden
                       hover:border-cian/40 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 relative">
                <div className="flex gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-cian">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>

                <FaArrowRight
                  className="absolute bottom-6 right-6 opacity-0
                           group-hover:opacity-100 text-cian transition"
                />
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center px-6 ">
            <div className="bg-[#05080F] max-w-3xl w-full rounded-xl p-10 relative">

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-cian"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold mb-6">
                {selected.title}
              </h2>

              <p className="mb-4 text-gray-300">
                <strong className="text-cian">El reto:</strong> {selected.challenge}
              </p>

              <p className="mb-4 text-gray-300">
                <strong className="text-cian">La solución Wolf Core:</strong> {selected.solution}
              </p>


              <p className="mb-8 text-gray-300">
                <strong className="text-cian">Resultado:</strong> {selected.result}
              </p>

              <div className="flex gap-6 text-3xl text-gray-500">
                {selected.stack.map((icon, i) => (
                  <span key={i} className="hover:text-cian transition">
                    {icon}
                  </span>

                ))}
                {/* BOTÓN VER PROYECTO */}
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center mt-10
               px-4 py-2
               bg-cian text-black
               font-bold
               rounded-xl
               shadow-[0_0_30px_rgba(0,255,255,0.6)]
               hover:shadow-[0_0_50px_rgba(0,255,255,0.9)]
               hover:scale-105
               transition-all duration-300"
                  >
                    Ver proyecto 🚀
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        <section className="relative min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">

          {/* BORDE SUPERIOR CON ENERGÍA */}
          <div className="absolute top-0 left-0 w-full h-[2px]
                      bg-gradient-to-r from-transparent via-cian to-transparent" />

          {/* NEBLINA CIAN (ESQUINAS) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cian/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cian/10 blur-3xl rounded-full" />
          </div>

          {/* CONTENIDO */}
          <div className="relative z-10 max-w-4xl text-center ">

            {/* TITULO */}
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl
                       text-white tracking-wider mb-8">
              ¿Tienes un desafio
              <span className="text-cian block mt-2">
                Tecnico para nosotros ?
              </span>
            </h2>


            {/* BOTÓN MASTER CTA */}
            <Link
              to="/portafolio"
              className="inline-flex items-center justify-center
                     px-12 py-5
                     bg-[#00FFFF] text-black
                     font-bold text-lg
                     rounded-xl
                     shadow-[0_0_40px_rgba(0,255,255,0.6)]
                     hover:shadow-[0_0_70px_rgba(0,255,255,0.9)]
                     hover:scale-105
                     transition-all duration-300"
            >
              Empezar a construir →
            </Link>
          </div>
        </section>

      </section>
    </>
  );
}
