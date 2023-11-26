import { useState } from "react"
import "./ItemCounter.css"

const ItemCounter = ({initial=1, stock=10, agregar } )=>{
    const [count, setCount] =useState(initial)

    const sumar=()=>{
        if(count < stock){
            setCount(count+1)
        }
    }

    const restar=()=>{
        if(count > initial)
        {
            setCount(count-1)
        }
    }

    const FuncAgregar=()=>{
        agregar(count)
    }
    return (
    <div className="text-center">        
        <div>
            <p>{count}</p>
        </div>
        <div>
            <button onClick={sumar} className="sumar"> + </button>
            <button onClick={restar} className="restar"> - </button>
            <button onClick={FuncAgregar} className="agregar"> Agregar </button>
        </div>
    </div>
    )
    
}

export default ItemCounter