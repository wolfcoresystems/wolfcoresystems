import React from 'react'
import { useForm } from 'react-hook-form'

export function Formulario2() {
    const { register, handleSubmit } = useForm()

    function showData(data) {
        alert("el email es: " + data.email + " y la edad es: " + data.age)
    }

    return (
        <>
            <h1>formulario2 con react hook form</h1>
            <br />
            <div className="h-screen flex justify-center items-center">
                <form onSubmit={handleSubmit(showData)} className=" w-[400px] h-[400px] bg-blue-300 flex flex-col justify-center items-center gap-4">
                    <label >Ingrese su email:</label>
                    <input type="email" id="email" {...register("email")} />  
                    <label >Ingrese su edad:</label>
                    <input type="text" id="age" {...register("age")} />
                    <br />
                    <button className="bg-green-500 border rounded-[2px]" type="submit">Enviar</button>
                </form>
            </div>

        </>

    )
}
