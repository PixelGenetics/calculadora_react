import { useState,useEffect } from "react"

const Keyboard = () => {

    const [numero,setNumero] = useState(null);
    const [igual,setIgual] = useState(0)
    useEffect(() => {
        if (numero !== null){
            console.log("numero: ",numero)
        }
    },[numero])


    const tecla = (valor) => {
        setNumero(numero === null ? valor : numero + valor)
    }

    const resultado = () => {

    }

    return(
        <>
            <div className="w-full h-full flex justify-center">
                <div className="border-2 border-pink-500 grid grid-cols-4 gap-2 w-52 ">
                    <button onClick={() => tecla('1')}>1</button>
                    <button onClick={() => tecla('2')}>2</button>
                    <button >3</button>
                    <button >4</button>
                    <button >5</button>
                    <button >6</button>
                    <button >7</button>
                    <button >8</button>
                    <button >9</button>
                    <button >0</button>
                    <button >*</button>
                    <button >=</button>
                </div>
            </div>
        </>
    )
}

export default Keyboard