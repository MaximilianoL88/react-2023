import { useState } from "react"
import "./Form.css"

const Form =()=>{
    const[data, setData]= useState({
        nombre:"",
        apellido:"",
        telefono:"",
        email:""
    })
    const hanldeOnSubmit= (event)=>{
        event.preventDefault()

    }
    const handleOnChange= (event)=>{
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    return(
        <div className="formu">
            <h2 className="titleform">Formulario</h2>
            <form class="row col-6">
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Ingrese nombre" value={data.nombre} onChange={handleOnChange} />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Ingrese apellido" value={data.apellido} onChange={handleOnChange} />
                </div>
                <div class="col-md-12">
                    <label for="inputCity" class="form-label">Telefono</label>
                    <input type="number" class="form-control" id="inputCity" placeholder="Teléfono" value={data.telefono} onChange={handleOnChange}/>
                </div>
                <div class="col-md-12">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="email" value={data.email} onChange={handleOnChange}/>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-success">Enviar</button>
                </div>
            </form>
                {/* <form>
                    <input type="text" name="nombre" placeholder="Ingrese nombre" value={data.nombre} onChange={handleOnChange} />
                    <input type="text" name="apellido" placeholder="Ingrese apellido" value={data.apellido} onChange={handleOnChange} />
                    <input type="number" name="telefono" placeholder="Teléfono" value={data.telefono} onChange={handleOnChange} />
                    <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleOnChange} />
                    <button>
                        Enviar
                    </button>
                </form> */}

        </div>
    )
}

export default Form


