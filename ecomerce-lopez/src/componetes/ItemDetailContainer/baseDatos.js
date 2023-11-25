const productos=[
    {id: "1" , nombre:"Papines" ,tipo: "producto" ,precio: 1000 , cantidad: 20 , imagen:"../img/papas14.jpeg" },
    {id: "2" , nombre:"Papas noissette" ,tipo: "Destacado" ,precio: 1100 , cantidad: 10 , imagen:"../img/papas16.jpeg" },
    {id: "3" , nombre:"Papas andinas" ,tipo: "producto" ,precio: 1500 , cantidad: 15 , imagen:"../img/papas15.jpeg" },
    {id: "4" , nombre:"Papas sudeste" ,tipo: "Destacado" ,precio: 1800 , cantidad: 25 , imagen:"../img/Papines.jpg" }
]

export const traerProductos=()=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productos)},  500)
    })
}

export function encontrarProducto(productId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod =>prod.id===productId))
        },100)
    })
}