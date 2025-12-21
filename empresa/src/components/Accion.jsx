import { Link } from "react-router-dom";

export function Accion() {
  return (
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
      <div className="relative z-10 max-w-4xl text-center">
        
        {/* TITULO */}
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl
                       text-white tracking-wider mb-8">
          ¿LISTO PARA REFORZAR TU
          <span className="text-cian block mt-2">
            NÚCLEO TECNOLÓGICO?
          </span>
        </h2>

        {/* SUBTITULO */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 font-inter">
          No construyas solo una web, construye una ventaja competitiva.
          El futuro de tu empresa se escribe hoy con código de alto rendimiento.
        </p>

        {/* TEXTO FINAL */}
        <p className="text-cian text-lg mb-14 font-inter">
          Únete a la manada de Wolf Core Systems.
        </p>

        {/* BOTÓN MASTER CTA */}
        <Link
          to="/Contactenos"
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
          INICIAR MI PROYECTO →
        </Link>
      </div>
    </section>
  );
}

