import React from 'react'
import { motion } from 'framer-motion'


export  function CifrasdeImpacto() {
  return (
    <>
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
    
    </>

  )
}
