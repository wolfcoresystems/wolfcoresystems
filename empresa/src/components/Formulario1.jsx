import { useState } from "react"

export function Formulario1() {
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        // event.preventDefault(); //evita que se recargue la pagina al enviar el formulario
        alert( "el nombre es: " + nombre + " y la contraseña es: " + password);
    }


    return (
        <>
            <h1 >Formulario1: con Usestate</h1>
            <br />
            <div className="h-screen flex justify-center items-center">
                <form onSubmit={handleSubmit} className=" w-[400px] h-[400px] bg-gray-500 flex flex-col justify-center items-center gap-4">
                    <label >Ingrese su usuario:</label>
                    {/* event.target.value es el evento que se genera al escribir en un input */}
                    <input  type="text" id="nombre" value={nombre} onChange={(event)=>{setNombre(event.target.value)}} />

                    <label >Ingrese su contraseña:</label>
                    <input type="password" id="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} />
                    <br />
                    <button className="bg-blue-500 border rounded-[2px]" type="submit">Enviar</button>

                </form>

            </div>

        </>
    )
}