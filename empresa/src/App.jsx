import { HelmetProvider } from "react-helmet-async";
import { MyButton } from './components/MyButton.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Servicios } from './pages/Servicios.jsx'
import { QuienesSomos } from './pages/QuienesSomos.jsx'
import { Contactenos } from './pages/Contactenos.jsx'
import { Portafolio } from './pages/Portafolio.jsx'
import { Footer } from './components/Footer.jsx'
import { ScrollToTop } from "./components/ScrollToTop.jsx";
import './App.css'
import { Header } from './components/Header.jsx'



export function App() {


  return (
    <>
      <header>
        <Header />
      </header>

      <ScrollToTop />
      <main className='pt-28 min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Servicios' element={<Servicios />} />
          <Route path='/QuienesSomos' element={<QuienesSomos />} />
          <Route path='/Contactenos' element={<Contactenos />} />
          <Route path='/Portafolio' element={<Portafolio />} />
        </Routes>
      </main>








      <footer>
        <Footer />
      </footer>



    </>
  );
}


