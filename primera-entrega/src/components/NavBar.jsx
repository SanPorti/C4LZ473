import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row color-navbar p-3">
                    <div className="col">
                        <h3 className="brand">C4LZ473</h3>
                    </div>
                    <div className="col">
                        <nav>
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active text-uppercase texto-navbar" href="#">Hombres</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase texto-navbar" href="#">Mujeres</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase texto-navbar" href="#">Niños</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col text-end">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar