import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row color-navbar p-3 align-items-center">
                    <div className="col text-center">
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <span className="text-center brand">C4LZ473</span>
                        </Link>
                    </div>
                    <div className="col">
                        <nav>
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <NavLink to={"/categoria/hombre"} className="nav-link active text-uppercase texto-navbar">Hombre</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/categoria/mujer"} className="nav-link text-uppercase texto-navbar">Mujer</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/categoria/botines"} className="nav-link text-uppercase texto-navbar">Botines</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/categoria/chicos"} className="nav-link text-uppercase texto-navbar">Chicos</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col text-center carrito-size">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar