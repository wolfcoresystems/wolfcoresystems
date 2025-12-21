import web from "../assets/web.jpg";
import core from "../assets/corejpg.jpg";
import crecimiento from "../assets/crecimiento.png";
import { motion } from "framer-motion";

export function WolfCore() {
    const cards = [
        {
            title: "Instinto Estratégico",
            desc: "No empezamos a programar sin entender tu modelo de negocio. Como una manada, trabajamos en sintonía con tus objetivos para asegurar que cada línea de código tenga un propósito: hacer crecer tu empresa.",
            img: web,
        },
        {
            title: "Ingeniería Core",
            desc: "Construimos sistemas robustos desde la raíz. Nuestro enfoque en el 'Core' garantiza aplicaciones escalables, seguras y ultrarrápidas que no se rompen cuando tu tráfico aumenta. Es tecnología diseñada para durar.",
            img: core,
        },
        {
            title: "Dominio Digital",
            desc: "Convertimos la complejidad técnica en interfaces simples y potentes. Nos enfocamos en la experiencia del usuario (UX) para garantizar que tus clientes tengan una navegación fluida que termine en ventas.",
            img: crecimiento,
        },
    ];

    return (
        
        <section className="bg-fondo py-28 px-6 overflow-hidden">
            
            {/* TITULO */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                
                className="max-w-6xl mx-auto text-center mb-16 text-montserrat"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-textoprincipal mb-4">
                    ¿Por qué <span className="text-cian">Wolf Core</span>{" "}
                    <span className="text-textosecundario">Systems</span>?
                </h2>
                <p className="text-lg text-textosecundario">
                    No solo creamos software, creamos el futuro de tu empresa.
                </p>
            </motion.div>

            {/* TARJETAS */}
            <div className="max-w-6xl mx-auto space-y-12">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.15 }}
                        whileHover={{ y: -8 }}
                        className="group relative bg-[#0B1220]
                                   border border-cian/30
                                   rounded-2xl
                                   p-8
                                   flex flex-col md:flex-row
                                   items-center
                                   gap-8
                                   hover:border-cian
                                   transition-all duration-300"
                    >
                        {/* TEXTO */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-textoprincipal mb-3">
                                {card.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {card.desc}
                            </p>
                        </div>

                        {/* IMAGEN / PARALLAX */}
                        <motion.div
                            initial={{ y: 20 }}
                            whileInView={{ y: -10 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            whileHover={{ scale: 1.08 }}
                            className="w-24 h-24 md:w-28 md:h-28
                                       flex items-center justify-center
                                       rounded-xl
                                       border border-cian
                                       shadow-[0_0_30px_rgba(6,182,212,0.6)]
                                       group-hover:shadow-[0_0_50px_rgba(6,182,212,0.9)]"
                        >
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
