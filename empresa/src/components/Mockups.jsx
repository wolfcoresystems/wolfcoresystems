import laptop from "../assets/laptop.jpg";


export function Mockups() {
  return (
    <div className="flex justify-center items-center py-20 bg-gray-100">
      <div className="relative w-[800px] max-w-full">
        
        {/* Imagen del mockup */}
        <img
          src={laptop}
          alt="Mockup"
          className="w-full"
        />

        {/* Pantalla del laptop */}
        <div className="absolute top-[14%] left-[22%] 
                        w-[56%] h-[52%] overflow-hidden rounded-md">
          <iframe
            src="https://portafolio.tupagina.online/"
            className="w-full h-full border-none"
          />
        </div>

        {/* Pantalla del celular */}
        {/* <div className="absolute top-[28%] left-[10%]
                        w-[14%] h-[38%] overflow-hidden rounded-xl">
          <iframe
            src="https://tusitio.com"
            className="w-full h-full border-none"
          />
        </div> */}

      </div>
    </div>
  );
}
