import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import laptop from "../assets/laptop.png";
import anime from "../assets/anime.png";
import bar from "../assets/bar.png";

export function PortfolioSection() {
  const projects = [
    {
      id: "01",
      title: "E-commerce Global - Tech Store",
      achievement: "Optimización de carga en un 45% y aumento de conversiones.",
      tags: ["React", "Node.js", "AWS", "Stripe"],
      img: laptop,
      demo: "https://tuproyecto.com",
    },
    {
      id: "02",
      title: "Sistema Empresarial",
      achievement: "Automatización total de procesos internos y reporting.",
      tags: ["Node", "PostgreSQL", "Docker"],
      img: anime,
      demo: "https://landing-page-anime.vercel.app/",
    },
    {
      id: "03",
      title: "Dashboard Analítico",
      achievement: "Visualización de métricas en tiempo real para decisiones clave.",
      tags: ["Next.js", "Charts", "API"],
      img: bar,
      demo: "https://laoladrink.tupagina.online/",
    },
  ];

  return (
    <section className="bg-black py-32 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 mb-32 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Proyectos que definen el camino
        </h2>
        <p className="text-cian text-lg">
          Donde la innovación toma forma digital.
        </p>
      </motion.div>

      {/* PROYECTOS */}
      <div className="space-y-40">
        {projects.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className={`max-w-7xl mx-auto px-6 flex flex-col ${
                isReverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-20`}
            >
              {/* IMAGEN (PARALLAX) */}
              <motion.div
                className="w-full md:w-1/2 relative"
                initial={{ y: 40 }}
                whileInView={{ y: -20 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="absolute inset-0 blur-3xl bg-cian/20 rounded-full"></div>

                <img
                  src={project.img}
                  alt={project.title}
                  className="relative z-10 w-full rounded-2xl
                             shadow-[0_0_80px_rgba(6,182,212,0.45)]"
                />
              </motion.div>

              {/* TEXTO */}
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-cian text-sm font-semibold tracking-widest">
                  {project.id}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-lg mb-6 max-w-xl">
                  {project.achievement}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-sm
                                 rounded-full
                                 bg-[#0B1220]
                                 border border-cian/40
                                 text-cian"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BOTONES */}
                <div className="flex gap-6 flex-wrap">


                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white border-b border-white/40
                               hover:border-white
                               transition"
                  >
                    Ver Proyecto →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA FINAL */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-48 px-6"
      >
        <p className="text-xl text-gray-300 mb-8">
          Tu próximo gran sistema comienza aquí.
        </p>

        <Link
          to="/Portafolio"
          className="inline-block px-10 py-4
                     border border-cian
                     text-cian
                     rounded-xl
                     hover:bg-cian hover:text-black
                     transition font-semibold"
        >
          Ver Portafolio Completo
        </Link>
      </motion.div>
    </section>
  );
}
