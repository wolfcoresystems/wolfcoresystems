import mision from "../assets/mision.jpg"; // imagen del equipo o lobo digital
import { FaCrosshairs, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { BotonPortafolio } from "../components/BotonPortafolio";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export function QuienesSomos() {
  return (
    <>
      {/* ================= SEO Nosotros ================= */}
      <Helmet>
        <title>
          Nosotros | Wolf Core Systems – Desarrollo Web y Software a la Medida
        </title>

        <meta
          name="description"
          content="Conoce a Wolf Core Systems: un equipo especializado en desarrollo web y software a la medida. Creamos soluciones digitales robustas, escalables y orientadas a resultados."
        />

        <link
          rel="canonical"
          href="https://wolfcoresystems.com/QuienesSomos"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Nosotros | Wolf Core Systems"
        />
        <meta
          property="og:description"
          content="Somos Wolf Core Systems, expertos en desarrollo web y arquitectura de software moderna para negocios."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wolfcoresystems.com/QuienesSomos"
        />
        <meta
          property="og:image"
          content="https://wolfcoresystems.com/image.png"
        />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nosotros | Wolf Core Systems"
        />
        <meta
          name="twitter:description"
          content="Equipo experto en desarrollo web, aplicaciones y soluciones digitales a la medida."
        />
        <meta
          name="twitter:image"
          content="https://wolfcoresystems.com/image.png"
        />
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://wolfcoresystems.com/QuienesSomos",
          "url": "https://wolfcoresystems.com/QuienesSomos",
          "name": "Nosotros | Wolf Core Systems",
          "description": "Conoce la filosofía, valores y enfoque de ingeniería de Wolf Core Systems, empresa especializada en desarrollo web, software a la medida y soluciones digitales escalables.",
          "about": {
            "@type": "Organization",
            "name": "Wolf Core Systems",
            "alternateName": "Wolf Core",
            "url": "https://wolfcoresystems.com",
            "logo": "https://wolfcoresystems.com/logo.png",
            "description": "Wolf Core Systems es una empresa de ingeniería de software enfocada en crear soluciones digitales robustas, escalables y de alto rendimiento.",
            "foundingDate": "2024",
            "areaServed": {
              "@type": "Country",
              "name": "Colombia"
            },
            "knowsAbout": [
              "Desarrollo Web de Alto Rendimiento",
              "Software a la Medida",
              "Arquitectura de Software",
              "E-commerce",
              "Aplicaciones Web y Móviles"
            ],
            "sameAs": [
              "https://www.instagram.com/wolf.core.systems",
              "https://www.facebook.com/wolf.core.systems",
              "https://wa.me/573112456846"
            ]
          }
        }
        `}
        </script>
      </Helmet>
      {/* ================= FIN SEO ================= */}

      <section className="bg-black text-white">


        {/* ================= MANIFIESTO / HERO ================= */}
        <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

          {/* Neblina cian sutil */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cian/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cian/10 blur-3xl rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            {/* TEXTO */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-8">
                Liderando la
                <span className="block text-cian mt-2">Evolución Digital</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed font-inter">
                En Wolf Core Systems, entendemos que el código es el sistema nervioso
                de cualquier empresa moderna. Nacimos para transformar la complejidad
                técnica en soluciones robustas, escalables y estéticamente impecables.
              </p>
            </motion.div>

            {/* IMAGEN */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cian/20 blur-3xl rounded-2xl" />
              <img
                src={mision}
                alt="Wolf Core Systems Team"
                className="relative z-10 rounded-2xl shadow-[0_0_60px_rgba(0,255,255,0.4)]"
              />
            </motion.div>
          </motion.div>

        </div>


        {/* ================= DNA / PILARES ================= */}
        < div className="py-32 px-6 bg-black" >
          <div className="max-w-6xl mx-auto text-center mb-20">
            <h2 className="font-monserrat font-bold text-3xl md:text-4xl mb-4">
              Wolf Core <span className="text-cian">DNA</span>
            </h2>
            <p className="text-textosecundario max-w-2xl mx-auto font-inter">
              No seguimos tendencias. Construimos sistemas con principios sólidos.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* PILAR 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="text-center px-6"
            >
              <FaCrosshairs className="text-cian text-4xl mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-3">
                Precisión Quirúrgica
              </h3>
              <p className="text-textosecundario font-inter">
                Cada línea de código está optimizada para el máximo rendimiento,
                estabilidad y eficiencia.
              </p>
            </motion.div>

            {/* PILAR 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="text-center px-6"
            >
              <FaUsers className="text-cian text-4xl mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-3">
                Pensamiento de Manada
              </h3>
              <p className="text-textosecundario font-inter">
                Trabajamos contigo como un solo equipo. Tu éxito es nuestro éxito.
              </p>
            </motion.div>

            {/* PILAR 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="text-center px-6"
            >
              <FaProjectDiagram className="text-cian text-4xl mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-3">
                Arquitectura de Futuro
              </h3>
              <p className="text-textosecundario font-inter">
                Creamos sistemas escalables que crecen contigo y resisten el paso del tiempo.
              </p>
            </motion.div>


          </div>

          {/* ================= NUESTRA FILOSOFÍA ================= */}
          <div className="py-52 px-6 bg-black">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              {/* IMAGEN */}
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-cian/10 blur-3xl rounded-2xl" />
                <img
                  src={mision}
                  alt="Fundadores Wolf Core Systems"
                  className="relative z-10 rounded-2xl shadow-[0_0_50px_rgba(0,255,255,0.35)]"
                />
              </motion.div>

              {/* TEXTO */}
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Nuestra <span className="text-cian">Filosofía</span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed font-inter">
                  Creemos que la tecnología debe adaptarse al negocio, y no al revés.
                  Wolf Core Systems fue fundada bajo la premisa de que la excelencia
                  técnica no es negociable. Nos apasiona resolver problemas donde
                  otros ven muros.
                </p>
              </motion.div>

            </div>
          </div>

          {/* ================= CIFRAS DE IMPACTO ================= */}
          <div className="py-24 px-6 bg-[#05080F] border-t border-b border-cian/10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">


                <div>
                  <h3 className="text-5xl font-bold text-cian mb-3">+25</h3>
                  <p className="text-textosecundario font-inter">Proyectos Desplegados</p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-cian mb-3">+15</h3>
                  <p className="text-textosecundario font-inter">Tecnologías Dominadas</p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold text-cian mb-3">100%</h3>
                  <p className="text-textosecundario font-inter">Código Limpio y Escalable</p>
                </div>

              </div>
            </motion.div>
          </div>

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

        </div >
        <BotonPortafolio />
      </section >
    </>
  );
}
