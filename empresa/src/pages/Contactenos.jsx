import { useState } from "react";
import { Mail, Clock, MessageCircle } from "lucide-react";
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";

/* ================= ENV ================= */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC;

export function Contactenos() {
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  /* ===== Honeypot ===== */
  if (data.get("website")) return;

  /* ===== Rate limit ===== */
  const lastSubmit = localStorage.getItem("wolfcore_last_submit");
  if (lastSubmit && Date.now() - lastSubmit < 60000) {
    alert("Espera 1 minuto antes de enviar otro mensaje.");
    return;
  }

  setCargando(true);

  emailjs
    .send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: data.get("name"),
        company: data.get("company"),
        project_type: data.get("project"),
        budget: data.get("budget"),
        message: data.get("message"),
      },
      PUBLIC_KEY
    )
    .then(() => {
      setEnviado(true);
      setCargando(false);
      localStorage.setItem("wolfcore_last_submit", Date.now());
      form.reset();
    })
    .catch((error) => {
      console.error("Error al enviar:", error);
      setCargando(false);
      alert("Error al enviar el formulario.");
    });
};


  return (
    <>
      {/* ================= SEO contactenos ================= */}
      <Helmet>
        <title>Contáctanos | Wolf Core Systems – Ingeniería de Software</title>

        <meta
          name="description"
          content="Contáctanos en Wolf Core Systems y cuéntanos tu proyecto. Desarrollo web, software a la medida y soluciones digitales escalables."
        />

        <link
          rel="canonical"
          href="https://wolfcoresystems.com/contactenos"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contacto | Wolf Core Systems"
        />
        <meta
          property="og:description"
          content="Analizamos tu idea y diseñamos soluciones digitales de alto rendimiento."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wolfcoresystems.com/contactenos"
        />
        <meta
          property="og:image"
          content="https://wolfcoresystems.com/image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contacto Wolf Core Systems"
        />
        <meta
          name="twitter:description"
          content="Cuéntanos tu proyecto y recibe asesoría técnica."
        />
        <meta
          name="twitter:image"
          content="https://wolfcoresystems.com/image.png"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://wolfcoresystems.com/contactenos",
            "name": "Contacto | Wolf Core Systems",
            "publisher": {
              "@type": "Organization",
              "name": "Wolf Core Systems"
            }
          }
        `}
        </script>
      </Helmet>
      {/* ================= FIN SEO ================= */}

      <section className="bg-black text-white min-h-screen overflow-hidden">
        {/* ================= HERO ================= */}
        <div className="relative text-center px-6 py-24">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#00ffff_1px,_transparent_1px)] bg-[length:40px_40px] animate-pulse"></div>

          <h1 className="relative text-4xl md:text-6xl font-bold tracking-widest text-cyan-400">
            CONECTA CON EL NÚCLEO
          </h1>
          <p className="relative mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
            Estás a un paso de transformar tu infraestructura digital. Cuéntanos
            tu desafío y nuestro equipo de ingeniería trazará la ruta.
          </p>
        </div>

        {/* ================= CONTENIDO ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* ===== INFO ===== */}
          <div className="space-y-10">
            <h2 className="text-2xl font-semibold text-cyan-400">
              Canales Directos
            </h2>

            <div className="space-y-6 text-gray-400">
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <span>wolfcoresystemss@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MessageCircle className="text-cyan-400" />
                <a
                  href="https://wa.me/573112456846"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Habla con un arquitecto de software
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="text-cyan-400" />
                <span>
                  Lunes a Viernes – 09:00 a 18:00 (GMT-5)
                </span>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="https://www.facebook.com/people/Wolfcoresystems/61585407086812/" target="_blank" className="text-gray-500 hover:text-cyan-400">
                <FaFacebookSquare size={26} />
              </a>
              <a href="https://www.instagram.com/wolf.core.systems/" target="_blank" className="text-gray-500 hover:text-cyan-400">
                <FaInstagram size={26} />
              </a>
              <a href="https://wa.me/573112456846" target="_blank" className="text-gray-500 hover:text-cyan-400">
                <FaWhatsapp size={26} />
              </a>
            </div>
          </div>

          {/* ===== FORMULARIO ===== */}
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-8">
              Brief de Ingeniería
            </h2>

            {!enviado ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input type="text" name="website" className="hidden" />

                <input
                  name="name"
                  required
                  placeholder="Nombre completo"
                  className="w-full bg-black border border-cyan-500/40 px-4 py-3 focus:border-cyan-400 focus:shadow-[0_0_15px_#00ffff] outline-none transition"
                />

                <input
                  name="company"
                  required
                  placeholder="Empresa"
                  className="w-full bg-black border border-cyan-500/40 px-4 py-3 focus:border-cyan-400 focus:shadow-[0_0_15px_#00ffff] outline-none transition"
                />

                <select
                  name="project_type"
                  required
                  className="w-full bg-black border border-cyan-500/40 px-4 py-3 focus:border-cyan-400 focus:shadow-[0_0_15px_#00ffff] outline-none transition"
                >
                  <option value="">Tipo de proyecto</option>
                  <option>Página web</option>
                  <option>Landing page</option>
                  <option>Sistema a Medida</option>
                  <option>E-commerce</option>
                </select>

                <input
                  name="budget"
                  placeholder="Presupuesto estimado (opcional)"
                  className="w-full bg-black border border-cyan-500/40 px-4 py-3 focus:border-cyan-400 focus:shadow-[0_0_15px_#00ffff] outline-none"
                />

                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Describe el problema técnico o la visión de tu proyecto"
                  className="w-full bg-black border border-cyan-500/40 px-4 py-3 focus:border-cyan-400 focus:shadow-[0_0_15px_#00ffff] outline-none"
                ></textarea>

                <button
                  disabled={cargando}
                  className="w-full py-4 font-semibold tracking-widest text-black bg-cyan-400 hover:shadow-[0_0_25px_#00ffff] transition disabled:opacity-50"
                >
                  {cargando ? "ENVIANDO..." : "ENVIAR SOLICITUD DE BRIEFING"}
                </button>
              </form>
            ) : (
              <div className="border border-cyan-400 p-6 font-mono text-cyan-400 shadow-[0_0_20px_#00ffff]">
                &gt; Solicitud recibida. <br />
                &gt; Analizando datos... <br />
                &gt; Conexión establecida. Nos vemos pronto.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
