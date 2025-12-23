import { Link } from "react-router-dom";
import { FaRocket, FaCogs, FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { CifrasdeImpacto } from "../components/CifrasdeImpacto.jsx";
import { CintaTecnologias } from "../components/CintaTecnologias.jsx";
import { BotonAccion } from "../components/BotonAccion.jsx";
import { Helmet } from "react-helmet-async";

export function Servicios() {
  return (
    <>
      <Helmet>
        {/* ================= BASIC SEO ================= */}
        <title>
          servicios de Desarrollo Web y Software a la Medida | Wolf Core Systems
        </title>

        <meta
          name="description"
          content="En Wolf Core Systems ofrecemos desarrollo web profesional, software a la medida, e-commerce y aplicaciones escalables. Ingeniería digital de grado empresarial."
        />

        <meta
          name="keywords"
          content="desarrollo web profesional, software a la medida, e-commerce, aplicaciones web, sistemas empresariales, wolf core systems"
        />

        <link
          rel="canonical"
          href="https://www.wolfcoresystems.com/servicios"
        />

        {/* ================= OPEN GRAPH ================= */}
        <meta
          property="og:title"
          content="servicios de Ingeniería Digital | Wolf Core Systems"
        />
        <meta
          property="og:description"
          content="Diseñamos y desarrollamos el núcleo tecnológico de tu empresa: web de alto rendimiento, software personalizado y e-commerce escalable."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.wolfcoresystems.com/servicios"
        />
        <meta
          property="og:image"
          content="https://www.wolfcoresystems.com/image.png"
        />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ================= TWITTER / X ================= */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="servicios de Desarrollo Web y Software | Wolf Core Systems"
        />
        <meta
          name="twitter:description"
          content="Soluciones digitales empresariales: desarrollo web, software a la medida y e-commerce de alto rendimiento."
        />
        <meta
          name="twitter:image"
          content="https://www.wolfcoresystems.com/image.png"
        />

        {/* ================= SCHEMA SERVICES ================= */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "servicios de Desarrollo de Software",
          "provider": {
            "@type": "Organization",
            "name": "Wolf Core Systems",
            "url": "https://www.wolfcoresystems.com",
            "logo": "https://www.wolfcoresystems.com/logo.png"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Colombia"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "servicios Wolf Core Systems",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Desarrollo Web de Alto Rendimiento",
                  "description": "Sitios web rápidos, optimizados para SEO y conversión."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Software y Sistemas a la Medida",
                  "description": "CRMs, ERPs y automatización de procesos empresariales."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-commerce y Aplicaciones",
                  "description": "Tiendas online, apps móviles y PWA escalables."
                }
              }
            ]
          }
        }
        `}
        </script>
      </Helmet>



      <section className="bg-black text-white overflow-hidden">

        {/* ================= HERO CON PARALLAX ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex items-center justify-center px-6"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)]" />
          </div>

          <div className="relative z-10 max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arquitectura Digital de
              <span className="block text-cian mt-2">Grado Empresarial</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Diseñamos, desarrollamos y desplegamos el núcleo tecnológico
              que tu negocio necesita para escalar sin límites.
            </p>
          </div>
        </motion.div>

        {/* ================= NAVEGACIÓN RÁPIDA ================= */}
        <div className="sticky top-0 z-20 bg-black/80 backdrop-blur border-y border-cian/20">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8 text-sm">
            <a href="#web" className="text-gray-400 hover:text-cian transition">Desarrollo web</a>
            <a href="#sistemas" className="text-gray-400 hover:text-cian transition">Sistemas a Medida</a>
            <a href="#ecommerce" className="text-gray-400 hover:text-cian transition">E-commerce</a>
          </div>
        </div>

        {/* ================= servicios ================= */}

        <ServiceBlock
          id="web"
          icon={<FaRocket />}
          title="Desarrollo Web / Landing Pages"
          focus="Velocidad, SEO y conversión."
          target="Una opción ideal para profesionales, emprendedores y pequeñas empresas que buscan una presencia en línea atractiva y efectiva. Incluye un diseño moderno y adaptable a dispositivos móviles, botones de llamada a la acción claros, formularios de contacto, presentación de servicios o productos y SEO básico para mejorar la visibilidad y el engagement."
          price="$200 USD"
          items={[
            "certificado SSL incluido.",
            "Diseño UI/UX moderno.",
            "Optimización SEO básica.",
            "Adaptable a móviles.",
          ]}
          features={[
            "Landing pages y webs corporativas",
            "SEO técnico",
            "Panel autoadministrable",
            "Integración con herramientas de marketing",
            "Soporte técnico (30 días)",
            "capacitación para gestión de contenidos",
            "botones de llamada a la acción",
            "formularios de contacto",
            "hosting y dominio (por un año)",
            "Incluye imágenes y videos para mayor impacto"
          ]}
        />

        <ServiceBlock
          id="sistemas"
          reverse
          icon={<FaCogs />}
          title="Software y Sistemas a la Medida / Webs Corporativas"
          focus="Automatización y lógica de negocio."
          target="Una solución digital integral para empresas que buscan fortalecer su presencia online y optimizar sus procesos internos.
                Desarrollamos sitios web corporativos sólidos, claros y estratégicos, con secciones clave como Quiénes Somos, servicios, Portafolio y Contacto, pensadas para comunicar confianza y profesionalismo.

                La solución se complementa con software a la medida, diseñado según las necesidades específicas de tu negocio, permitiendo automatizar procesos, gestionar información y escalar operaciones de forma eficiente.

                Incluye diseño moderno y profesional, optimización SEO, gestión de contenidos, funcionalidades interactivas y una arquitectura tecnológica preparada para crecer junto a tu empresa, mejorando la credibilidad, la experiencia del cliente y los resultados del negocio."
          price="$1,500 USD"
          items={[
            "CRMs y ERPs personalizados.",
            "Automatización de procesos.",
            "APIs e integraciones.",
          ]}
          features={[
            "Análisis y consultoría inicial",
            "Arquitectura escalable",
            "Seguridad empresarial",
            "Soporte y evolución futura",
            "Panel autoadministrable avanzado",
            "Integración con sistemas existentes",
            "Capacitación para el equipo",
            "Documentación técnica completa",
            "multiples secciones informativas",
            "funcionalidades interactivas",
            "optimización SEO avanzada",
            "formularios de contacto y suscripción",
            "hosting y dominio (por un año)",
            "Incluye imágenes y videos profesionales"
          ]}
        />

        <ServiceBlock
          id="ecommerce"
          icon={<FaShoppingCart />}
          title="E-commerce"
          focus="Vender más en cualquier lugar."
          target="Ideal para negocios que desean vender productos en línea. Incluye una plataforma de e-commerce intuitiva, carrito de compras, integración con pagos seguros, gestión de inventario, y un panel de administración fácil de usar."
          price="$1,100 USD"
          items={[
            "Pasarelas de pago.",
            "Gestión de productos.",
            "Inventario inteligente.",
          ]}
          features={[
            "Checkout optimizado",
            "Gestión de productos",
            "Escalabilidad multi-tienda",
            "Panel autoadministrable de e-commerce",
            "Integración con pasarelas de pago",
            "Capacitación para gestión de tienda",
            "Tienda online completa",
            "Carrito de compras",
            "Catálogo de productos",
            "Roles de usuario (clientes y administradores)",
            "hosting y dominio (por un año)",
            "Otimización SEO para e-commerce",
          ]}
        />
        <CifrasdeImpacto />
        <CintaTecnologias />
        {/* ================= GARANTÍAS / TRUST SIGNALS ================= */}
        <section className="py-24 px-6 bg-black border-t border-cian/20">
          <div className="max-w-6xl mx-auto">

            {/* TÍTULO */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Garantías Wolf Core
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                No solo desarrollamos software. Construimos relaciones técnicas
                basadas en confianza, calidad y acompañamiento.
              </p>
            </div>

            {/* RECUADROS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* GARANTÍA 1 */}
              <div className="p-8 rounded-xl border border-cian/30 bg-cian/5
                      hover:bg-cian/10 transition">
                <h3 className="text-xl font-semibold text-cian mb-3">
                  Código Limpio
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Entregamos software bien estructurado, documentado y fácil de
                  mantener, pensado para crecer sin dolores técnicos.
                </p>
              </div>

              {/* GARANTÍA 2 */}
              <div className="p-8 rounded-xl border border-cian/30 bg-cian/5
                      hover:bg-cian/10 transition">
                <h3 className="text-xl font-semibold text-cian mb-3">
                  Seguridad Proactiva
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Protegemos tus datos con buenas prácticas, cifrado moderno y
                  arquitecturas seguras desde la base.
                </p>
              </div>

              {/* GARANTÍA 3 */}
              <div className="p-8 rounded-xl border border-cian/30 bg-cian/5
                      hover:bg-cian/10 transition">
                <h3 className="text-xl font-semibold text-cian mb-3">
                  Soporte de Manada
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Acompañamiento técnico post-lanzamiento para ajustes,
                  optimizaciones y evolución del sistema.
                </p>
              </div>

            </div>
          </div>
        </section>
        <BotonAccion />

      </section>
    </>
  );
}

/* ================= SERVICE BLOCK ================= */

function ServiceBlock({
  id,
  reverse,
  icon,
  title,
  focus,
  target,
  items,
  features,
  price,
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-32 px-6 ${reverse ? "bg-[#05080F]" : "bg-black"}`}
    >
      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center`}
      >
        {/* ICONO */}
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="flex justify-center"
        >
          <div className="w-40 h-40 flex items-center justify-center rounded-full
                          bg-cian/10 text-cian text-6xl
                          shadow-[0_0_60px_rgba(0,255,255,0.5)]">
            {icon}
          </div>
        </motion.div>

        {/* CONTENIDO */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h3>

          <p className="text-cian font-semibold mb-4">{focus}</p>

          {/* PARA QUIÉN */}
          <div className="mb-6 p-4 border border-cian/30 rounded-lg bg-cian/5">
            <p className="text-sm text-cian font-semibold mb-1">
              ¿Para quién es?
            </p>
            <p className="text-gray-300 text-sm">{target}</p>
          </div>

          {/* LISTA */}
          <ul className="space-y-3 mb-6">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-300">
                <FaCheckCircle className="text-cian mt-1" />
                {item}
              </li>
            ))}
          </ul>

          {/* CARACTERÍSTICAS DESPLEGABLE */}
          <button
            onClick={() => setOpen(!open)}
            className="text-cian font-semibold mb-4 hover:underline"
          >
            Características {open ? "−" : "+"}
          </button>

          {open && (
            <div className="mb-6 space-y-2 text-gray-400 text-sm">
              {features.map((f, i) => (
                <p key={i}>• {f}</p>
              ))}
            </div>
          )}

          {/* PRECIO */}
          <p className="text-gray-400 italic mb-6">
            Precios desde <span className="text-cian font-semibold">{price}</span>
          </p>

          {/* CTA */}
          <Link
            to="/contactenos"
            className="inline-block px-6 py-3 bg-cian text-black font-bold rounded-lg
                       hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]
                       transition"
          >
            Ponte en contacto →
          </Link>
        </div>
      </div>
    </motion.section>


  );
}
