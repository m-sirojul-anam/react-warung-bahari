import { NavLink, useNavigate } from "react-router-dom";


const Header = () => {

    const nav = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("token");
        nav("/")
    }

    return(
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <NavLink to="/home" className="navbar-brand">WMB</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                        <NavLink to="/home" className="nav-link active">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        Our List Menu
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><NavLink to="tables" className="dropdown-item">List Table</NavLink></li>
                                        <li><NavLink to="menus" className="dropdown-item">List Food Menu</NavLink></li>
                                        <li><NavLink to="customers" className="dropdown-item">List Customer</NavLink></li>
                                    </ul>
                                </div>
                                
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 p-2"></span>
                                    <button className="btn btn-danger ms-3" onClick={logout}>Logout</button>
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;