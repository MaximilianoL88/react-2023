import { useEffect, useState } from "react";
import { traerProductos } from "../ItemDetailContainer/baseDatos";
import { Link, useParams } from "react-router-dom";
import "./ItemListContainer.css"


function Saludar(props){
    const [productos, setProductos] =useState([])
    const [loading, setLoading]= useState(true)
    const {cid} =useParams()
    useEffect(()=>{
        if(cid){
            traerProductos()
            .then((respuesta)=>
        setProductos(respuesta.filter(producto=>producto.tipo === cid))
        )
            .catch((error)=>
        console.log(error)
        )
        .finally(()=>setLoading(false))
        }else{
            traerProductos()
                .then((respuesta)=>
            setProductos(respuesta)
            )
                .catch((error)=>
            console.log(error)
            )
            .finally(()=>setLoading(false));
        }
 }, [cid])
 console.log(productos)

    return(
        <>
        <div className="encabezados">
            <h1>{props.titulo}</h1>
            <h3>{props.subtitulo}</h3>
        </div>
        {
        loading ?<h2 className="load">Cargando...🕔</h2>:        
        <div className="contenedor" >
            {productos.map(producto=>  
                <div key={producto.id} className="card w-30 cardsRender">
                    <img src={producto.imagen} className="card-img-top" />
                    <div className="card-body">
                        <h5>Nombre: {producto.nombre}</h5>
                        <h5>Precio: $ {producto.precio}</h5>
                        <h5>Tipo: {producto.tipo}</h5>
                    </div>
                    <div className="card-footer">
                        <Link to={`/Detail/${producto.id}` } >
                    <button className="btn btn-success comprar">
                        Comprar
                    </button>
                        </Link>
                    </div>
                </div> )};
        </div>
        }
        
        </>
    )
}

export default Saludar