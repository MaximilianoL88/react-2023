import { useState } from "react"

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
            <button onClick={sumar}> + </button>
            <button onClick={restar}> - </button>
            <button onClick={FuncAgregar}> Agregar </button>
        </div>
    </div>
    )
    
}

export default ItemCounter