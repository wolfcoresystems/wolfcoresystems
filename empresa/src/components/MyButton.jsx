


export function MyButton({ text, func }) {
    // las props que recibe este componenete son "text" y "func"
  return (
    <button onClick={func} className="bg-red-800 hover:bg-green-600">{text || "boton"}</button>

  )
}