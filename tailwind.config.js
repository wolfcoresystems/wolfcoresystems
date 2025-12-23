/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    // importante bajar el proyecto y volverlo a subir para que tome los cambios en tailwind.config.js
    extend: {   
        colors: {
          fondo: "#0B0E14",
          cian: "#00E5FF",
          tarjetas: '#1A1F26', 
          textoprincipal: "#F8F9FA",
          textosecundario: "#A0AEC0",
          
        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          frases: ["Syncopate", 'sans-serif'],
          texto: ['Inter', 'sans-serif'],
          detalles: ['JetBrains Mono', 'monospace'],
        },
    },
  },
  plugins: [],
}

