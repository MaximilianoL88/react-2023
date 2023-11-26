import { encontrarProducto } from "./baseDatos.js"
import { useEffect, useState } from "react"
import ItemCounter from "../ItemCounter/Itemcounter"
import { useParams } from "react-router-dom"


const ItemDetailContainer=()=>{
    const[producto, setProductos]= useState({})
    const [loading, setLoading]= useState(true)
    const {pid} =useParams()
    useEffect(()=>{
       encontrarProducto(pid)
       .then(resultado=>setProductos(resultado))
       .catch(error=>console.log(error))
       .finally(()=>setLoading(false))
    }, [])

    return(
        <>
           {
            loading ?<h2 className="load">Cargando...🕔</h2>: 
            <div className="contenedor" >
                <div key={producto.id} className="card w-30 cardsRender">
                    <img src={producto.imagen} className="card-img-top" />
                            <div className="card-body">
                                <h5>Nombre: {producto.nombre}</h5>
                                <h5>Precio: $ {producto.precio}</h5>
                                <h5>Tipo: {producto.tipo}</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success comprar">
                                    Comprar
                            </button>
                            <div>
                                <ItemCounter/>
                            </div>
                            </div>
                        </div>
                    </div> 
            }
        </>
    )
}





export default ItemDetailContainer