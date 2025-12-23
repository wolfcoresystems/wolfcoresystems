import { FaRocket, FaCheckCircle, FaServer, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Pasosdetrabajo() {
  return (
    <section className="bg-black py-28 px-6 relative overflow-hidden">

      {/* HALO RADIAL */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,255,0.35) 0%, rgba(0,255,255,0.15) 25%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* ICONO CENTRAL */}
        <div className="flex justify-center mb-10">
          <div className="w-24 h-24 rounded-full flex items-center justify-center
                          bg-black border border-cian
                          shadow-[0_0_80px_rgba(0,255,255,0.9)]">
            <FaRocket className="text-cian text-4xl" />
          </div>
        </div>

        {/* TITULO */}
        <h2 className="font-bold text-4xl md:text-5xl text-white mb-4 tracking-wider">
          Despliegue y Control de Vuelo
        </h2>

        {/* SUBTITULO */}
        <p className="text-cian text-lg md:text-xl mb-12 mt-8 font-inter">
          El momento donde tu visión se vuelve realidad operativa.
        </p>

        {/* TEXTO PRINCIPAL */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-20 font-inter">
          No te dejamos solo en la meta. Realizamos el despliegue en servidores de alta
          disponibilidad, configuramos la seguridad SSL y monitoreamos el rendimiento
          en tiempo real durante las primeras 24 horas. Nos aseguramos de que el
          <span className="text-cian font-medium"> Core </span>
          de tu negocio funcione a la perfección desde el segundo uno.
        </p>

        {/* CHECKLIST */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-5xl mx-auto">

          {/* ITEM 1 */}
          <div className="flex gap-4">
            <FaCheckCircle className="text-cian text-2xl flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-1 font-inter">
                Optimización Final
              </h4>
              <p className="text-gray-400 text-sm font-inter">
                Compresión de activos y limpieza de código para una velocidad de carga relámpago.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex gap-4">
            <FaServer className="text-cian text-2xl flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-1 font-inter">
                Entorno de Producción
              </h4>
              <p className="text-gray-400 text-sm font-inter">
                Configuración de servidores (AWS, Google Cloud o VPS) y migración de base de datos.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex gap-4">
            <FaKey className="text-cian text-2xl flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-1 font-inter">
                Entrega de Llaves
              </h4>
              <p className="text-gray-400 text-sm font-inter">
                Capacitación a tu equipo y entrega de documentación técnica del sistema.
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-20">
          <Link
            to="/Contactenos"
            className="inline-block px-10 py-4
                       border border-cian
                       text-cian font-semibold rounded-xl
                       hover:bg-cian hover:text-black
                       transition font-inter"
          >
            Iniciar mi Despliegue →
          </Link>
        </div>
      </div>
    </section>
  );
}
