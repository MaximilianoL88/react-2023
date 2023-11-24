import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

function NavBar(){
    let contador =10
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid menu">
            <a className="navbar-brand" href="#">
            <img src="img/logo papas.png" alt="Logo" className="logo" />
            Papas para todos
            </a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/" >Inicio</Link>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
            </a>
            <ul className="dropdown-menu">
                <li className="prod">
                <Link className="dropdown-item filtro" to="/categoria/producto">Papas</Link>
                </li>
                <li>
                <Link className="dropdown-item filtro" to="/categoria/productoDestacado">Papas premium</Link>
                </li>
            </ul>
        </li>
        </ul>
        <div>
            <CartWidget/>
            <label>{contador}</label>
        </div>
    </div>
</nav>
    )
}

export default NavBar