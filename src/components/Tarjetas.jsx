import desarrolloWeb from "../assets/desarrolloweb.jpeg";
import desarrolloamedida from "../assets/desarrolloamedida.jpeg";
import ecommerce from "../assets/ecommerce.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Tarjetas() {
    const services = [
        {
            title: "Desarrollo Web de Alto Rendimiento",
            desc: "No solo hacemos páginas; creamos herramientas de venta. Sitios web ultrarrápidos, optimizados para Google (SEO) y diseñados para convertir visitantes en clientes.",
            img: desarrolloWeb,
            link: "/Servicios"
        },
        {
            title: "Software y Sistemas a la Medida",
            desc: "Automatizamos la lógica de tu negocio. Desarrollamos software personalizado que resuelve problemas específicos, desde CRMs hasta plataformas de gestión interna escalables.",
            img: desarrolloamedida,
            link: "/Servicios"
        },
        {
            title: "E-commerce y Ecosistemas Móviles",
            desc: "Lleva tu tienda al siguiente nivel con pasarelas de pago seguras, gestión de inventarios en tiempo real y aplicaciones móviles que fidelizan a tus usuarios.",
            img: ecommerce,
            link: "/Servicios"
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
                    Nuestros Servicios
                </h2>
                <p className="text-lg text-textosecundario">
                    Soluciones tecnológicas diseñadas para escalar tu negocio.
                </p>
            </motion.div>

            {/* TARJETAS */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.15 }}
                        whileHover={{ y: -10 }}
                        className="group bg-[#0F172A] rounded-2xl p-8 text-center
                                   border border-cian/30
                                   hover:border-cian
                                   transition-all duration-300"
                    >
                        {/* IMAGEN (PARALLAX) */}
                        <motion.div
                            initial={{ y: 20 }}
                            whileInView={{ y: -10 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                            className="w-32 h-32 mx-auto mb-6 rounded-full
                                       overflow-hidden
                                       border-2 border-cian
                                       shadow-[0_0_40px_rgba(6,182,212,0.6)]
                                       group-hover:shadow-[0_0_60px_rgba(6,182,212,0.9)]"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </motion.div>

                        {/* TEXTO */}
                        <h3 className="text-2xl font-bold text-textoprincipal mb-3">
                            {service.title}
                        </h3>

                        <p className="text-gray-400 mb-6">
                            {service.desc}
                        </p>

                        {/* CTA */}
                        <Link
                            to={service.link}
                            className="inline-block px-6 py-3 rounded-lg
                                       bg-cian text-fondo font-semibold
                                       hover:bg-cian/80
                                       transition"
                        >
                            Saber más
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
